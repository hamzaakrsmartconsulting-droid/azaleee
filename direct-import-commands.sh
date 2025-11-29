#!/bin/bash
# Direct import commands - copy and paste into EC2 Instance Connect terminal

echo "🚀 Importing MongoDB CMS Data"
echo "=============================="

# Navigate to project
cd ~/demo

# Pull latest changes (includes export files)
git pull

# Copy files to MongoDB container
echo "📦 Copying files to container..."
sudo docker cp mongodb-export/pagecontents.json azalee-mongo:/tmp/pagecontents.json
sudo docker cp mongodb-export/users.json azalee-mongo:/tmp/users.json
sudo docker cp mongodb-export/chatbotsessions.json azalee-mongo:/tmp/chatbotsessions.json

# Import PageContents
echo "📄 Importing pagecontents..."
sudo docker exec azalee-mongo mongoimport \
  --db=azalee_db \
  --collection=pagecontents \
  --file=/tmp/pagecontents.json \
  --jsonArray \
  --drop

# Import Users
echo "📄 Importing users..."
sudo docker exec azalee-mongo mongoimport \
  --db=azalee_db \
  --collection=users \
  --file=/tmp/users.json \
  --jsonArray \
  --drop

# Import ChatbotSessions
echo "📄 Importing chatbotsessions..."
sudo docker exec azalee-mongo mongoimport \
  --db=azalee_db \
  --collection=chatbotsessions \
  --file=/tmp/chatbotsessions.json \
  --jsonArray \
  --drop

# Verify
echo ""
echo "✅ Import complete!"
echo "📊 Verifying..."
sudo docker exec azalee-mongo mongosh azalee_db --quiet --eval "
  print('PageContents: ' + db.pagecontents.countDocuments());
  print('Users: ' + db.users.countDocuments());
  print('ChatbotSessions: ' + db.chatbotsessions.countDocuments());
"

echo ""
echo "🎉 Done! Refresh your admin dashboard to see the data."

