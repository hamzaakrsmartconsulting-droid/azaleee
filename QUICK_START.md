# 🚀 Quick Start Guide - EC2 Deployment

## Prerequisites Checklist

- [ ] AWS EC2 instance running (Ubuntu 20.04+ recommended)
- [ ] SSH access to EC2 instance
- [ ] Docker and Docker Compose installed on EC2

## Quick Deployment Steps

### 1. On Your Local Machine

```bash
# Make sure all files are committed
git add .
git commit -m "Add Docker deployment configuration"
git push
```

### 2. On Your EC2 Instance

```bash
# Connect to EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Clone or upload your project
git clone your-repo-url
cd your-project-name

# OR if you already have the project
cd ~/your-project-name
git pull
```

### 3. Install Docker (if not already installed)

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 4. Configure Environment

```bash
# Copy the template
cp env.production.template .env.production

# Edit with your values
nano .env.production
```

**Important variables to update:**
- `JWT_SECRET`: Generate a strong random string
- `NEXT_PUBLIC_APP_URL`: Your EC2 public IP (e.g., `http://54.123.45.67`)
- `STOCK_API_KEY`: Your RapidAPI key (if needed)

### 5. Deploy

```bash
# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh

# OR manually:
docker-compose up -d --build
```

### 6. Verify

```bash
# Check containers are running
docker ps

# Check logs
docker-compose logs -f

# Test in browser
# Open: http://your-ec2-ip
```

## Container Architecture

Your application runs in 3 containers:

1. **mongo** (MongoDB)
   - Port: 27017 (internal only)
   - Database: `azalee_db`
   - Data persisted in Docker volume

2. **backend** (Next.js API)
   - Port: 3000 (internal)
   - Handles API routes
   - Connects to MongoDB

3. **frontend** (Next.js Frontend)
   - Port: 80 (public)
   - Serves the application
   - Connects to backend for API calls

## Common Commands

```bash
# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Update and redeploy
git pull
docker-compose up -d --build

# Access MongoDB shell
docker exec -it azalee-mongo mongosh azalee_db
```

## Troubleshooting

### Port 80 already in use
```bash
# Check what's using port 80
sudo lsof -i :80

# Stop nginx if running
sudo systemctl stop nginx
```

### Containers won't start
```bash
# Check logs
docker-compose logs

# Check Docker status
sudo systemctl status docker
```

### MongoDB connection issues
```bash
# Check MongoDB logs
docker-compose logs mongo

# Test MongoDB
docker exec -it azalee-mongo mongosh azalee_db
```

## Security Checklist

- [ ] Changed default JWT_SECRET
- [ ] Configured EC2 Security Group (ports 22, 80, 443)
- [ ] Set up firewall (UFW) on EC2
- [ ] Using HTTPS (Let's Encrypt recommended)
- [ ] Regular MongoDB backups configured

## Next Steps

1. Set up domain name (optional)
2. Configure SSL with Let's Encrypt
3. Set up automatic backups
4. Configure monitoring
5. Set up auto-restart on reboot

See `DEPLOY_EC2.md` for detailed instructions.

