# 📦 Migrate CMS Data from Local to EC2

This guide will help you export your local MongoDB CMS data and import it to your EC2 instance.

## Step 1: Export Data from Local Machine

### On your LOCAL machine (Windows):

1. **Open PowerShell or Command Prompt** in your project directory

2. **Export the data:**
   ```powershell
   # Make sure MongoDB is running locally
   # Export all collections
   mongodump --db=azalee_db --out=./mongodb-export
   ```

   Or export individual collections:
   ```powershell
   mongoexport --db=azalee_db --collection=pagecontents --out=./mongodb-export/pagecontents.json --pretty
   mongoexport --db=azalee_db --collection=users --out=./mongodb-export/users.json --pretty
   mongoexport --db=azalee_db --collection=chatbotsessions --out=./mongodb-export/chatbotsessions.json --pretty
   ```

3. **Verify the export:**
   ```powershell
   dir mongodb-export
   ```

## Step 2: Upload to EC2

### Option A: Using SCP (from your local machine)

```bash
# Upload the export folder to EC2
scp -r mongodb-export ubuntu@YOUR_EC2_IP:~/demo/
```

### Option B: Using Git (if files are small)

1. Add to git (temporarily):
   ```bash
   git add mongodb-export
   git commit -m "Add MongoDB export"
   git push demo prod
   ```

2. On EC2, pull:
   ```bash
   cd ~/demo
   git pull
   ```

## Step 3: Import to EC2 MongoDB

### On your EC2 instance:

1. **SSH into your EC2 instance**

2. **Navigate to project directory:**
   ```bash
   cd ~/demo
   ```

3. **Import using Docker (recommended):**
   ```bash
   # Import pagecontents
   sudo docker exec -i azalee-mongo mongoimport \
     --db=azalee_db \
     --collection=pagecontents \
     --file=/dev/stdin \
     --jsonArray \
     --drop < mongodb-export/pagecontents.json

   # Import users
   sudo docker exec -i azalee-mongo mongoimport \
     --db=azalee_db \
     --collection=users \
     --file=/dev/stdin \
     --jsonArray \
     --drop < mongodb-export/users.json

   # Import chatbotsessions
   sudo docker exec -i azalee-mongo mongoimport \
     --db=azalee_db \
     --collection=chatbotsessions \
     --file=/dev/stdin \
     --jsonArray \
     --drop < mongodb-export/chatbotsessions.json
   ```

4. **Or copy files into container and import:**
   ```bash
   # Copy files to container
   sudo docker cp mongodb-export/pagecontents.json azalee-mongo:/tmp/
   sudo docker cp mongodb-export/users.json azalee-mongo:/tmp/
   sudo docker cp mongodb-export/chatbotsessions.json azalee-mongo:/tmp/

   # Import from inside container
   sudo docker exec azalee-mongo mongoimport \
     --db=azalee_db \
     --collection=pagecontents \
     --file=/tmp/pagecontents.json \
     --jsonArray \
     --drop

   sudo docker exec azalee-mongo mongoimport \
     --db=azalee_db \
     --collection=users \
     --file=/tmp/users.json \
     --jsonArray \
     --drop

   sudo docker exec azalee-mongo mongoimport \
     --db=azalee_db \
     --collection=chatbotsessions \
     --file=/tmp/chatbotsessions.json \
     --jsonArray \
     --drop
   ```

## Step 4: Verify Import

```bash
# Connect to MongoDB
sudo docker exec -it azalee-mongo mongosh azalee_db

# Check collections
show collections

# Count documents
db.pagecontents.countDocuments()
db.users.countDocuments()
db.chatbotsessions.countDocuments()

# View sample data
db.pagecontents.findOne()
```

## Alternative: Direct MongoDB Connection

If you have MongoDB Compass or another tool:

1. **Get EC2 public IP and MongoDB port (27017)**
2. **Connect using:**
   ```
   mongodb://YOUR_EC2_IP:27017/azalee_db
   ```
3. **Import directly using Compass or mongoimport**

## Troubleshooting

- **If mongoexport/mongoimport not found:** Install MongoDB Database Tools
- **If connection refused:** Check security group allows port 27017
- **If permission denied:** Use `sudo` for docker commands
- **If data not showing:** Restart containers: `sudo docker-compose restart`

