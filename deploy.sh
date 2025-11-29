#!/bin/bash

# Deployment script for EC2
# This script helps set up and deploy the application on EC2

set -e

echo "🚀 Starting deployment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "⚠️  .env.production not found. Creating from template..."
    if [ -f env.production.template ]; then
        cp env.production.template .env.production
        echo "✅ Created .env.production from template"
        echo "⚠️  Please edit .env.production with your actual values before continuing!"
        read -p "Press enter to continue after editing .env.production..."
    else
        echo "❌ env.production.template not found. Please create .env.production manually."
        exit 1
    fi
fi

# Build and start containers
echo "📦 Building and starting containers..."
docker-compose down
docker-compose up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Check container status
echo "📊 Container status:"
docker-compose ps

# Show logs
echo "📋 Recent logs:"
docker-compose logs --tail=50

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Useful commands:"
echo "  - View logs: docker-compose logs -f"
echo "  - Stop services: docker-compose down"
echo "  - Restart services: docker-compose restart"
echo ""
echo "🌐 Your application should be available at:"
echo "  - Frontend: http://$(curl -s ifconfig.me || echo 'your-ec2-ip')"
echo "  - Backend API: http://$(curl -s ifconfig.me || echo 'your-ec2-ip'):3000"

