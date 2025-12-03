#!/bin/bash
# Reset admin password on EC2
# Run this on your EC2 instance

echo "🔄 Resetting admin password on EC2..."

cd ~/demo

# Pull latest code
git pull

# Copy script to container
sudo docker cp reset-admin-password.js azalee-backend:/tmp/reset-admin-password.js

# Run the script inside the container
sudo docker exec azalee-backend node /tmp/reset-admin-password.js

echo ""
echo "✅ Password reset complete!"
echo "📋 Use these credentials to login:"
echo "   Email: admin@azalee.com"
echo "   Password: admin123"


