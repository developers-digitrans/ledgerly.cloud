#!/bin/bash

# Update system
yum update -y

# Install Docker
yum install -y docker
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create app directory
mkdir -p /app
cd /app

# Clone the repository (you'll need to replace with your actual repo URL)
git clone https://github.com/yourusername/get-ledger-website.git .

# Create .env file
cat > .env << EOL
VITE_SUPABASE_URL=${VITE_SUPABASE_URL}
VITE_SUPABASE_ANON_KEY=${VITE_SUPABASE_ANON_KEY}
VITE_STRIPE_PUBLIC_KEY=${VITE_STRIPE_PUBLIC_KEY}
VITE_STRIPE_BASIC_PRICE_ID=${VITE_STRIPE_BASIC_PRICE_ID}
VITE_STRIPE_PRO_PRICE_ID=${VITE_STRIPE_PRO_PRICE_ID}
VITE_STRIPE_PRO_PLUS_PRICE_ID=${VITE_STRIPE_PRO_PLUS_PRICE_ID}
VITE_STRIPE_ENTERPRISE_PRICE_ID=${VITE_STRIPE_ENTERPRISE_PRICE_ID}
EOL

# Start the application
docker-compose up -d
