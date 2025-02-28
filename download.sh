#!/bin/bash

# Create a temporary directory
TEMP_DIR="website-download"
mkdir -p "$TEMP_DIR"

# Create necessary directories
mkdir -p "$TEMP_DIR/src/components/layout"
mkdir -p "$TEMP_DIR/src/components/modals"
mkdir -p "$TEMP_DIR/src/components/sections"
mkdir -p "$TEMP_DIR/src/components/ui"
mkdir -p "$TEMP_DIR/src/lib"
mkdir -p "$TEMP_DIR/src/pages/blog"
mkdir -p "$TEMP_DIR/src/api"
mkdir -p "$TEMP_DIR/public"
mkdir -p "$TEMP_DIR/supabase/migrations"

# Copy configuration files
cp package.json package-lock.json "$TEMP_DIR"/
cp vite.config.ts tsconfig.json tsconfig.node.json "$TEMP_DIR"/
cp postcss.config.js tailwind.config.js "$TEMP_DIR"/
cp index.html .env.example "$TEMP_DIR"/
cp components.json tempo.config.json "$TEMP_DIR"/
cp nginx.conf Dockerfile docker-compose.yml "$TEMP_DIR"/
cp deploy.sh "$TEMP_DIR"/

# Copy source files
cp -r src/* "$TEMP_DIR/src/"
cp -r public/* "$TEMP_DIR/public/"
cp -r supabase/* "$TEMP_DIR/supabase/"

# Create zip file
zip -r website.zip "$TEMP_DIR"

# Clean up
rm -rf "$TEMP_DIR"

echo "Website files have been packaged into website.zip"
