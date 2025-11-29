#!/bin/bash

# Quick import script for EC2
# Usage: ./quick-import.sh

echo "🚀 Quick MongoDB Import Script"
echo "================================"

# Check if export directory exists
if [ ! -d "./mongodb-export" ]; then
  echo "❌ Error: mongodb-export directory not found!"
  echo "Please upload your exported data first."
  exit 1
fi

# Check if MongoDB container is running
if ! sudo docker ps | grep -q azalee-mongo; then
  echo "❌ Error: MongoDB container is not running!"
  echo "Start it with: sudo docker-compose up -d"
  exit 1
fi

echo "📦 Importing collections..."

# Function to import collection
import_collection() {
  local collection=$1
  local file="./mongodb-export/${collection}.json"
  
  if [ ! -f "$file" ]; then
    echo "⚠️  File $file not found, skipping $collection..."
    return
  fi
  
  echo "📄 Importing $collection..."
  
  # Copy file to container
  sudo docker cp "$file" azalee-mongo:/tmp/${collection}.json
  
  # Import
  sudo docker exec azalee-mongo mongoimport \
    --db=azalee_db \
    --collection=$collection \
    --file=/tmp/${collection}.json \
    --jsonArray \
    --drop
  
  if [ $? -eq 0 ]; then
    echo "✅ $collection imported successfully"
  else
    echo "❌ Failed to import $collection"
  fi
  
  # Cleanup
  sudo docker exec azalee-mongo rm /tmp/${collection}.json
}

# Import all collections
import_collection "pagecontents"
import_collection "users"
import_collection "chatbotsessions"

echo ""
echo "✅ Import complete!"
echo ""
echo "📊 Verifying import..."
sudo docker exec azalee-mongo mongosh azalee_db --quiet --eval "
  print('PageContents: ' + db.pagecontents.countDocuments());
  print('Users: ' + db.users.countDocuments());
  print('ChatbotSessions: ' + db.chatbotsessions.countDocuments());
"

