#!/bin/bash
# Quick update script for EC2 - Frontend changes only
# Run this script on your EC2 instance to update frontend changes

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Updating frontend on EC2...${NC}"

# Configuration
APP_DIR="${APP_DIR:-$HOME/azalee-app}"
BRANCH="${BRANCH:-prod}"

# Navigate to app directory
if [ ! -d "$APP_DIR" ]; then
    echo -e "${YELLOW}⚠️  App directory not found. Looking for common locations...${NC}"
    if [ -d "$HOME/demo" ]; then
        APP_DIR="$HOME/demo"
    elif [ -d "/opt/azalee-app" ]; then
        APP_DIR="/opt/azalee-app"
    else
        echo -e "${YELLOW}❌ App directory not found. Please set APP_DIR environment variable${NC}"
        exit 1
    fi
fi

cd $APP_DIR
echo -e "${GREEN}📂 Working directory: $APP_DIR${NC}"

# Pull latest changes from GitHub
echo -e "${YELLOW}📥 Pulling latest changes from GitHub...${NC}"
git fetch origin
git checkout $BRANCH
git pull origin $BRANCH

# Rebuild and restart frontend/backend containers (keep MongoDB running)
echo -e "${YELLOW}🔨 Rebuilding frontend and backend containers...${NC}"
docker-compose up -d --build frontend backend

# Wait a moment for containers to start
sleep 5

# Check status
echo -e "${GREEN}✅ Update complete!${NC}"
echo ""
echo -e "${GREEN}📊 Container status:${NC}"
docker-compose ps

echo ""
echo -e "${YELLOW}📝 View logs:${NC} docker-compose logs -f frontend"

