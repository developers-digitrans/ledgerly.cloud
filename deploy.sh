#!/bin/bash

# Exit on error
set -e

# Configuration
DOMAIN="get-ledger.org"
REGION="us-east-1"
INSTANCE_TYPE="t2.micro"
KEY_NAME="ledger-website-key"
SECURITY_GROUP_NAME="ledger-website-sg"

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment...${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI is not installed. Please install it first."
    exit 1

# Create Key Pair if it doesn't exist
if ! aws ec2 describe-key-pairs --key-names "$KEY_NAME" &> /dev/null; then
    echo -e "${GREEN}Creating new key pair...${NC}"
    aws ec2 create-key-pair --key-name "$KEY_NAME" --query 'KeyMaterial' --output text > "${KEY_NAME}.pem"
    chmod 400 "${KEY_NAME}.pem"
fi

# Create Security Group if it doesn't exist
SG_ID=$(aws ec2 describe-security-groups --group-names "$SECURITY_GROUP_NAME" --query 'SecurityGroups[0].GroupId' --output text 2>/dev/null || echo "")

if [ -z "$SG_ID" ]; then
    echo -e "${GREEN}Creating security group...${NC}"
    SG_ID=$(aws ec2 create-security-group \
        --group-name "$SECURITY_GROUP_NAME" \
        --description "Security group for Ledger website" \
        --query 'GroupId' --output text)

    # Add inbound rules
    aws ec2 authorize-security-group-ingress \
        --group-id "$SG_ID" \
        --protocol tcp \
        --port 80 \
        --cidr 0.0.0.0/0

    aws ec2 authorize-security-group-ingress \
        --group-id "$SG_ID" \
        --protocol tcp \
        --port 443 \
        --cidr 0.0.0.0/0

    aws ec2 authorize-security-group-ingress \
        --group-id "$SG_ID" \
        --protocol tcp \
        --port 22 \
        --cidr 0.0.0.0/0
fi

# Launch EC2 instance
echo -e "${GREEN}Launching EC2 instance...${NC}"
INSTANCE_ID=$(aws ec2 run-instances \
    --image-id ami-0c7217cdde317cfec \
    --instance-type "$INSTANCE_TYPE" \
    --key-name "$KEY_NAME" \
    --security-group-ids "$SG_ID" \
    --user-data file://user-data.sh \
    --query 'Instances[0].InstanceId' \
    --output text)

# Wait for instance to be running
echo -e "${GREEN}Waiting for instance to be running...${NC}"
aws ec2 wait instance-running --instance-ids "$INSTANCE_ID"

# Get instance public IP
PUBLIC_IP=$(aws ec2 describe-instances \
    --instance-ids "$INSTANCE_ID" \
    --query 'Reservations[0].Instances[0].PublicIpAddress' \
    --output text)

# Create Route53 record
echo -e "${GREEN}Creating Route53 record...${NC}"
HOSTED_ZONE_ID=$(aws route53 list-hosted-zones-by-name \
    --dns-name "$DOMAIN" \
    --query 'HostedZones[0].Id' \
    --output text)

aws route53 change-resource-record-sets \
    --hosted-zone-id "$HOSTED_ZONE_ID" \
    --change-batch '{
        "Changes": [{
            "Action": "UPSERT",
            "ResourceRecordSet": {
                "Name": "'"$DOMAIN"'",
                "Type": "A",
                "TTL": 300,
                "ResourceRecords": [{
                    "Value": "'"$PUBLIC_IP"'"
                }]
            }
        }]
    }'

echo -e "${GREEN}Deployment completed!${NC}"
echo -e "Website will be available at: http://$DOMAIN"
echo -e "Instance IP: $PUBLIC_IP"
