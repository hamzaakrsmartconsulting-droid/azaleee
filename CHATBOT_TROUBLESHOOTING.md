# 🔧 Sarah Chatbot Troubleshooting Guide

## 🚨 **Common Issues and Solutions**

### **1. Chatbot Not Appearing**

**Symptoms:**
- Chatbot doesn't show up on the website
- No Sarah chatbot visible

**Solutions:**
```bash
# 1. Check if the server is running
npm run dev

# 2. Check browser console for errors
# Open Developer Tools (F12) and look for errors

# 3. Verify the component is imported
# Check src/app/layout.jsx includes ChatbotWrapper
```

**Code Check:**
```jsx
// In src/app/layout.jsx, make sure you have:
import ChatbotWrapper from '@/components/chatbot/ChatbotWrapper';

// And in the JSX:
<ChatbotWrapper />
```

### **2. Database Connection Issues**

**Symptoms:**
- Chatbot appears but doesn't save data
- Console shows database errors
- API calls failing

**Solutions:**
```bash
# 1. Test database connection
curl http://localhost:4028/api/chatbot/test

# 2. Check XAMPP is running
# Start MySQL in XAMPP Control Panel

# 3. Verify database exists
mysql -u root -p
SHOW DATABASES;
USE azalee_patrimoine;
SHOW TABLES;
```

**Environment Variables:**
```env
# Create .env.local file with:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=azalee_patrimoine
DB_PORT=3306
```

### **3. Missing Database Tables**

**Symptoms:**
- "Table doesn't exist" errors
- Chatbot can't save conversations

**Solutions:**
```bash
# 1. Run the initialization script
mysql -u root -p azalee_patrimoine < database/init_chatbot_tables.sql

# 2. Or manually in phpMyAdmin:
# Copy and paste the content of database/init_chatbot_tables.sql
```

### **4. API Endpoint Errors**

**Symptoms:**
- Network errors in browser console
- 404 or 500 errors

**Solutions:**
```bash
# 1. Test API endpoints
curl http://localhost:4028/api/chatbot/test
curl http://localhost:4028/api/chatbot/data

# 2. Check file structure
# Ensure all API files exist in src/app/api/chatbot/
```

### **5. Chatbot Not Responding**

**Symptoms:**
- Chatbot appears but doesn't respond to clicks
- No conversation flow

**Solutions:**
```jsx
// 1. Check if isClient is true
console.log('isClient:', isClient);

// 2. Check if conversationScript is loaded
console.log('conversationScript:', conversationScript);

// 3. Verify event handlers are working
// Add console.log to handleOptionClick function
```

## 🔍 **Debugging Steps**

### **Step 1: Check Browser Console**
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for errors (red text)
4. Check for warnings (yellow text)

### **Step 2: Test Database Connection**
```bash
# Test endpoint
curl http://localhost:4028/api/chatbot/test

# Expected response:
{
  "success": true,
  "database": {
    "connected": true,
    "tables": ["interactions_chatbot", "appointments", "callbacks", "user_sessions"],
    "interactions_chatbot_columns": 13,
    "test_insert": true
  }
}
```

### **Step 3: Check Network Tab**
1. Open Developer Tools (F12)
2. Go to Network tab
3. Interact with chatbot
4. Look for failed API calls (red entries)

### **Step 4: Verify File Structure**
```
src/
├── components/
│   └── chatbot/
│       ├── SarahChatbot.jsx
│       └── ChatbotWrapper.jsx
├── app/
│   └── api/
│       └── chatbot/
│           ├── data/
│           │   └── route.js
│           ├── batch-save/
│           │   └── route.js
│           └── test/
│               └── route.js
└── lib/
    ├── database.js
    └── models/
        ├── ChatbotInteraction.js
        ├── Appointment.js
        └── Callback.js
```

## 🛠️ **Quick Fixes**

### **Fix 1: Restart Everything**
```bash
# 1. Stop the server (Ctrl+C)
# 2. Restart XAMPP MySQL
# 3. Start server again
npm run dev
```

### **Fix 2: Clear Browser Cache**
1. Open Developer Tools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"

### **Fix 3: Check Database Tables**
```sql
-- Run in phpMyAdmin
USE azalee_patrimoine;
SHOW TABLES;

-- Should show:
-- interactions_chatbot
-- appointments
-- callbacks
-- user_sessions
-- page_content
```

### **Fix 4: Test API Manually**
```bash
# Test chatbot data endpoint
curl -X POST http://localhost:4028/api/chatbot/data \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test_123",
    "conversationHistory": [{"id": 1, "text": "Test", "isUser": false}],
    "userProfile": {},
    "selectedIntentions": [],
    "currentStep": "welcome"
  }'
```

## 📊 **Monitoring**

### **Check Chatbot Status**
```bash
# Test all endpoints
curl http://localhost:4028/api/chatbot/test
curl http://localhost:4028/api/chatbot/data
curl http://localhost:4028/api/chatbot/stats
```

### **View Database Data**
```sql
-- Check conversations
SELECT * FROM interactions_chatbot ORDER BY date_interaction DESC LIMIT 5;

-- Check appointments
SELECT * FROM appointments ORDER BY created_at DESC LIMIT 5;

-- Check callbacks
SELECT * FROM callbacks ORDER BY created_at DESC LIMIT 5;
```

## 🚨 **Emergency Fixes**

### **If Nothing Works:**
1. **Backup your data** (if any)
2. **Delete and recreate database:**
   ```sql
   DROP DATABASE azalee_patrimoine;
   CREATE DATABASE azalee_patrimoine;
   ```
3. **Run initialization script:**
   ```bash
   mysql -u root -p azalee_patrimoine < database/init_chatbot_tables.sql
   ```
4. **Restart server:**
   ```bash
   npm run dev
   ```

### **If Still Broken:**
1. Check XAMPP logs
2. Check Node.js logs
3. Verify all files exist
4. Check file permissions
5. Try different browser

---

**Need Help?** Check the console logs and database status first!




