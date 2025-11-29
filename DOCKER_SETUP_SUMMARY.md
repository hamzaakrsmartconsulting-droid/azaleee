# 📦 Docker Setup Summary

This document summarizes the Docker configuration created for EC2 deployment.

## Files Created

### Core Docker Files
- **`Dockerfile`** - Multi-stage build for Next.js application
- **`docker-compose.yml`** - Orchestrates 3 containers: frontend, backend, mongo
- **`.dockerignore`** - Excludes unnecessary files from Docker build context

### Configuration Files
- **`env.production.template`** - Template for production environment variables
- **`src/lib/mongodb.js`** - MongoDB connection utility (created if missing)

### Documentation
- **`DEPLOY_EC2.md`** - Comprehensive deployment guide
- **`QUICK_START.md`** - Quick reference for deployment
- **`DOCKER_SETUP_SUMMARY.md`** - This file

### Scripts
- **`deploy.sh`** - Automated deployment script

## Container Architecture

### 1. MongoDB Container (`azalee-mongo`)
- **Image**: `mongo:7.0`
- **Port**: 27017 (internal only)
- **Database**: `azalee_db`
- **Volume**: `mongo_data` (persistent storage)
- **Health Check**: Enabled

### 2. Backend Container (`azalee-backend`)
- **Image**: Built from `Dockerfile`
- **Port**: 3000 (internal)
- **Purpose**: Next.js API routes
- **Dependencies**: Waits for MongoDB to be healthy

### 3. Frontend Container (`azalee-frontend`)
- **Image**: Built from `Dockerfile`
- **Port**: 80 (public, mapped from container's 3000)
- **Purpose**: Next.js frontend application
- **Dependencies**: Waits for MongoDB and backend

## Network Configuration

All containers are connected via a bridge network (`azalee-network`), allowing them to communicate using service names:
- Frontend → Backend: `http://backend:3000`
- Frontend/Backend → MongoDB: `mongodb://mongo:27017/azalee_db`

## Environment Variables

Key environment variables (set in `.env.production`):

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NEXT_PUBLIC_APP_URL` - Public URL of your application
- `NEXT_PUBLIC_API_URL` - API endpoint URL
- `STOCK_API_PROVIDER` - Stock API provider
- `STOCK_API_KEY` - Stock API key

## Dependencies Added

- **mongoose** - Added to `package.json` for MongoDB connectivity

## Next.js Configuration

- Updated `next.config.mjs` to enable `output: 'standalone'` for optimized Docker builds

## Deployment Process

1. **Prepare EC2 Instance**
   - Install Docker and Docker Compose
   - Configure Security Groups

2. **Upload Project**
   - Clone repository or upload files

3. **Configure Environment**
   - Copy `env.production.template` to `.env.production`
   - Update with your values

4. **Deploy**
   - Run `./deploy.sh` or `docker-compose up -d --build`

5. **Verify**
   - Check containers: `docker ps`
   - View logs: `docker-compose logs -f`
   - Access app: `http://your-ec2-ip`

## Important Notes

1. **MongoDB Data Persistence**: Data is stored in Docker volume `mongo_data`, which persists even if containers are removed.

2. **Port Mapping**: 
   - Frontend is accessible on port 80 (standard HTTP)
   - Backend is on port 3000 (internal only)
   - MongoDB is on port 27017 (internal only)

3. **Health Checks**: MongoDB has a health check to ensure it's ready before other services start.

4. **Auto-restart**: All containers are configured with `restart: unless-stopped` to automatically restart on failure or server reboot.

## Security Considerations

- Change default `JWT_SECRET` in production
- Configure EC2 Security Groups properly
- Use HTTPS in production (Let's Encrypt recommended)
- Set up firewall rules (UFW)
- Regular MongoDB backups

## Troubleshooting

See `DEPLOY_EC2.md` for detailed troubleshooting steps.

Common issues:
- Port conflicts: Check if port 80 is already in use
- MongoDB connection: Verify MongoDB container is healthy
- Build failures: Check Docker logs and ensure all dependencies are in `package.json`

## Next Steps

1. Review and customize `.env.production`
2. Test deployment locally (if Docker is installed)
3. Deploy to EC2 following `QUICK_START.md`
4. Set up SSL certificate
5. Configure backups and monitoring

