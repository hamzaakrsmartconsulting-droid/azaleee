#!/bin/bash
# Complete setup script for fresh EC2 Ubuntu instance
# Run this script on your EC2 instance

set -e

echo "🚀 Starting EC2 setup for Azalee application..."

# Update system
echo "📦 Updating system packages..."
sudo apt update
sudo apt upgrade -y

# Install required packages
echo "📦 Installing required packages..."
sudo apt install -y curl git

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
echo "🐳 Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installations
echo "✅ Verifying installations..."
docker --version
docker-compose --version

# Get EC2 public IP
EC2_IP=$(curl -s ifconfig.me)
echo "🌐 Your EC2 public IP: $EC2_IP"

# Clone repository
echo "📥 Cloning repository..."
cd ~
if [ -d "demo" ]; then
    echo "⚠️  demo directory already exists, pulling latest..."
    cd demo
    git pull
else
    git clone https://github.com/hamzalazigheb/demo.git
    cd demo
fi

# Create .env.production from template
echo "⚙️  Setting up environment variables..."
if [ ! -f .env.production ]; then
    cp env.production.template .env.production
    
    # Generate a random JWT secret
    JWT_SECRET=$(openssl rand -base64 32)
    
    # Update .env.production with EC2 IP
    sed -i "s|NEXT_PUBLIC_APP_URL=.*|NEXT_PUBLIC_APP_URL=http://$EC2_IP|g" .env.production
    sed -i "s|NEXT_PUBLIC_API_URL=.*|NEXT_PUBLIC_API_URL=http://$EC2_IP/api|g" .env.production
    sed -i "s|JWT_SECRET=.*|JWT_SECRET=$JWT_SECRET|g" .env.production
    
    echo "✅ .env.production created with default values"
    echo "⚠️  Please review and update .env.production if needed:"
    echo "   nano .env.production"
else
    echo "✅ .env.production already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review environment variables: nano .env.production"
echo "2. Deploy application: docker-compose up -d --build"
echo "3. Check logs: docker-compose logs -f"
echo "4. Access app: http://$EC2_IP"
echo ""
echo "💡 Note: You may need to reconnect to apply docker group changes:"
echo "   exit"
echo "   ssh -i your-key.pem ubuntu@$EC2_IP"




