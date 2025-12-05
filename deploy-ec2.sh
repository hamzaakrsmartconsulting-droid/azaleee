#!/bin/bash
# Deployment script for EC2 - Azalee Patrimoine
# This script deploys the application from GitHub to EC2

set -e

echo "🚀 Starting EC2 deployment for Azalee Patrimoine..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
REPO_URL="https://github.com/hamzaakrsmartconsulting-droid/azaleee.git"
BRANCH="prod"
APP_DIR="$HOME/azalee-app"

# Check if running as root
if [ "$EUID" -eq 0 ]; then 
   echo -e "${RED}❌ Please do not run as root${NC}"
   exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}⚠️  Docker not found. Installing Docker...${NC}"
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    echo -e "${GREEN}✅ Docker installed${NC}"
    echo -e "${YELLOW}⚠️  You may need to reconnect for docker group to take effect${NC}"
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}⚠️  Docker Compose not found. Installing Docker Compose...${NC}"
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    echo -e "${GREEN}✅ Docker Compose installed${NC}"
fi

# Get EC2 public IP
EC2_IP=$(curl -s ifconfig.me || curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
echo -e "${GREEN}🌐 EC2 Public IP: $EC2_IP${NC}"

# Clone or update repository
echo -e "${YELLOW}📥 Cloning/updating repository...${NC}"
if [ -d "$APP_DIR" ]; then
    echo -e "${YELLOW}📂 Directory exists, pulling latest changes...${NC}"
    cd $APP_DIR
    git fetch origin
    git checkout $BRANCH
    git pull origin $BRANCH
else
    echo -e "${YELLOW}📂 Cloning repository...${NC}"
    git clone -b $BRANCH $REPO_URL $APP_DIR
    cd $APP_DIR
fi

# Create .env.production if it doesn't exist
if [ ! -f .env.production ]; then
    echo -e "${YELLOW}⚙️  Creating .env.production from template...${NC}"
    if [ -f env.production.template ]; then
        cp env.production.template .env.production
        
        # Generate a random JWT secret
        JWT_SECRET=$(openssl rand -base64 32 2>/dev/null || head -c 32 /dev/urandom | base64)
        
        # Update .env.production with EC2 IP
        sed -i "s|NEXT_PUBLIC_APP_URL=.*|NEXT_PUBLIC_APP_URL=http://$EC2_IP|g" .env.production
        sed -i "s|NEXT_PUBLIC_API_URL=.*|NEXT_PUBLIC_API_URL=http://$EC2_IP/api|g" .env.production
        sed -i "s|JWT_SECRET=.*|JWT_SECRET=$JWT_SECRET|g" .env.production
        
        echo -e "${GREEN}✅ .env.production created${NC}"
        echo -e "${YELLOW}⚠️  Please review and update .env.production if needed:${NC}"
        echo -e "   ${YELLOW}nano .env.production${NC}"
    else
        echo -e "${RED}❌ env.production.template not found${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ .env.production already exists${NC}"
fi

# Stop existing containers
echo -e "${YELLOW}🛑 Stopping existing containers...${NC}"
docker-compose down 2>/dev/null || true

# Build and start containers
echo -e "${YELLOW}🔨 Building and starting containers...${NC}"
docker-compose up -d --build

# Wait for services to be ready
echo -e "${YELLOW}⏳ Waiting for services to start...${NC}"
sleep 10

# Check container status
echo -e "${YELLOW}📊 Checking container status...${NC}"
docker-compose ps

# Show logs
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo -e "${GREEN}📋 Application Information:${NC}"
echo -e "   ${GREEN}URL:${NC} http://$EC2_IP"
echo -e "   ${GREEN}Admin:${NC} http://$EC2_IP/admin"
echo ""
echo -e "${YELLOW}📝 Useful commands:${NC}"
echo -e "   ${YELLOW}View logs:${NC} docker-compose logs -f"
echo -e "   ${YELLOW}Stop:${NC} docker-compose down"
echo -e "   ${YELLOW}Restart:${NC} docker-compose restart"
echo -e "   ${YELLOW}Update:${NC} cd $APP_DIR && git pull && docker-compose up -d --build"
echo ""



