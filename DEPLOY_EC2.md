# 🚀 Deploy to EC2 with Docker

This guide will help you deploy your application to AWS EC2 using Docker Compose with 3 containers: Frontend, Backend, and MongoDB.

## Prerequisites

- AWS EC2 instance (Ubuntu 20.04 or later recommended)
- SSH access to your EC2 instance
- Domain name (optional, for production)

## Step 1: Prepare Your EC2 Instance

### 1.1 Connect to Your EC2 Instance

```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### 1.2 Update System Packages

```bash
sudo apt update
sudo apt upgrade -y
```

### 1.3 Install Docker

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to docker group (to run docker without sudo)
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installations
docker --version
docker-compose --version
```

## Step 2: Configure Security Groups

In AWS Console, configure your EC2 Security Group to allow:
- **Port 22** (SSH) - from your IP
- **Port 80** (HTTP) - from anywhere (0.0.0.0/0)
- **Port 443** (HTTPS) - from anywhere (0.0.0.0/0) - if using SSL
- **Port 3000** (Optional) - for backend API access

## Step 3: Upload Your Project

### Option A: Using Git (Recommended)

```bash
# On your EC2 instance
cd ~
git clone your-repository-url
cd your-project-name
```

### Option B: Using SCP

```bash
# From your local machine
scp -i your-key.pem -r ./project-folder ubuntu@your-ec2-ip:~/
```

## Step 4: Configure Environment Variables

```bash
# On your EC2 instance
cd ~/your-project-name
cp .env.production.example .env.production

# Edit the environment file
nano .env.production
```

Update the following variables:
- `MONGODB_URI`: Keep as `mongodb://mongo:27017/azalee_db` (Docker internal)
- `JWT_SECRET`: Generate a strong secret key
- `NEXT_PUBLIC_APP_URL`: Your EC2 public IP or domain (e.g., `http://54.123.45.67`)
- `STOCK_API_KEY`: Your RapidAPI key if needed

## Step 5: Build and Start Containers

```bash
# Build and start all containers
docker-compose up -d --build

# Check container status
docker-compose ps

# View logs
docker-compose logs -f
```

## Step 6: Verify Deployment

1. **Check if containers are running:**
   ```bash
   docker ps
   ```

2. **Test MongoDB connection:**
   ```bash
   docker exec -it azalee-mongo mongosh azalee_db
   ```

3. **Access your application:**
   - Open browser: `http://your-ec2-ip`
   - You should see your application running

## Step 7: Set Up Nginx (Optional but Recommended)

For production, it's recommended to use Nginx as a reverse proxy:

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/azalee
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com your-ec2-ip;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/azalee /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 8: Set Up SSL with Let's Encrypt (Optional)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Certbot will automatically configure Nginx and set up auto-renewal
```

## Useful Commands

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f mongo
```

### Restart Services
```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart frontend
```

### Stop Services
```bash
docker-compose down
```

### Update Application
```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up -d --build
```

### Backup MongoDB
```bash
# Create backup
docker exec azalee-mongo mongodump --out /data/backup --db azalee_db

# Copy backup from container
docker cp azalee-mongo:/data/backup ./backup-$(date +%Y%m%d)
```

### Restore MongoDB
```bash
# Copy backup to container
docker cp ./backup-20240101 azalee-mongo:/data/backup

# Restore
docker exec azalee-mongo mongorestore --db azalee_db /data/backup/azalee_db
```

## Troubleshooting

### Containers won't start
```bash
# Check logs
docker-compose logs

# Check if ports are available
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :3000
```

### MongoDB connection issues
```bash
# Check MongoDB logs
docker-compose logs mongo

# Test MongoDB connection
docker exec -it azalee-mongo mongosh azalee_db
```

### Application not accessible
- Check Security Group rules in AWS Console
- Verify containers are running: `docker ps`
- Check application logs: `docker-compose logs frontend`

### Out of memory
```bash
# Check memory usage
free -h
docker stats
```

## Production Checklist

- [ ] Changed default JWT_SECRET
- [ ] Updated NEXT_PUBLIC_APP_URL with your domain/IP
- [ ] Configured Security Groups properly
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Configured automatic backups for MongoDB
- [ ] Set up monitoring and logging
- [ ] Configured firewall (UFW)
- [ ] Set up automatic container restart on reboot

## Auto-start on Reboot

To ensure containers start automatically on server reboot:

```bash
# Create systemd service
sudo nano /etc/systemd/system/azalee.service
```

Add:
```ini
[Unit]
Description=Azalee Application
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/ubuntu/your-project-name
ExecStart=/usr/local/bin/docker-compose up -d
ExecStop=/usr/local/bin/docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
```

Enable the service:
```bash
sudo systemctl enable azalee.service
sudo systemctl start azalee.service
```

## Support

For issues or questions, check:
- Docker logs: `docker-compose logs`
- Container status: `docker ps`
- MongoDB status: `docker exec azalee-mongo mongosh --eval "db.adminCommand('ping')"`

