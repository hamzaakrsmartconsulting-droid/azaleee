# Import MongoDB Data via AWS Console

Since SSH is not working, use AWS EC2 Instance Connect (browser-based terminal).

## Step 1: Access EC2 Instance Connect

1. Go to AWS Console → EC2 → Instances
2. Select your instance (51.44.8.80)
3. Click **"Connect"** button
4. Choose **"EC2 Instance Connect"** tab
5. Click **"Connect"** (opens browser terminal)

## Step 2: Pull the Export Files

```bash
cd ~/demo
git pull
```

## Step 3: Import the Data

```bash
# Make script executable
chmod +x quick-import.sh

# Run import
./quick-import.sh
```

Or manually:

```bash
# Copy files to container
sudo docker cp mongodb-export/pagecontents.json azalee-mongo:/tmp/
sudo docker cp mongodb-export/users.json azalee-mongo:/tmp/
sudo docker cp mongodb-export/chatbotsessions.json azalee-mongo:/tmp/

# Import each collection
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

## Step 4: Verify

```bash
sudo docker exec -it azalee-mongo mongosh azalee_db --eval "db.pagecontents.countDocuments()"
```

