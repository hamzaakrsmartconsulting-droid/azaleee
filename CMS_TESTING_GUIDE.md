# CMS Database Migration Testing Guide

## 🧪 **Complete Testing Checklist**

### **1. Test Database Connection**
```bash
# Run this to verify database is working
node -e "
const mysql = require('mysql2/promise');
async function test() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root', 
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'azalee_patrimoine'
    });
    console.log('✅ Database connection successful');
    await conn.end();
  } catch (err) {
    console.log('❌ Database error:', err.message);
  }
}
test();
"
```

### **2. Test CMS Pages Loading from Database**

**Step 1: Visit CMS Pages**
- Go to `http://localhost:4028/cms/`
- Go to `http://localhost:4028/cms/outils`
- Go to `http://localhost:4028/cms/immobilier`

**Step 2: Check Browser Network Tab**
- Open Developer Tools (F12)
- Go to Network tab
- Look for API calls to `/api/pages/content`
- Verify they return data from database

### **3. Test Content Updates**

**Step 1: Edit Content**
- Go to `http://localhost:4028/cms/`
- Change the hero title
- Click "Sauvegarder" (Save)
- Verify you see "Saved to Database!" message

**Step 2: Verify Database Storage**
```sql
-- Check if content was saved
SELECT page_path, content, updated_at 
FROM page_content 
WHERE page_path = '/' 
ORDER BY updated_at DESC 
LIMIT 1;
```

**Step 3: Test Real-Time Updates**
- Open the same CMS page in another browser/incognito window
- Refresh the page
- Verify the new content appears immediately

### **4. Test Migration Page**

**Visit Migration Interface**
- Go to `http://localhost:4028/cms/migration`
- Check migration status
- Run migration if needed
- Clear localStorage after migration

### **5. Test Frontend Pages**

**Step 1: Visit Public Pages**
- Go to `http://localhost:4028/`
- Go to `http://localhost:4028/outils`
- Go to `http://localhost:4028/immobilier`

**Step 2: Verify Content Loading**
- Check browser Network tab
- Look for API calls to `/api/pages/content`
- Verify content displays correctly

### **6. Test Multiple Users**

**Step 1: Open Multiple Browser Windows**
- Open 2-3 different browser windows
- Visit the same CMS page in each

**Step 2: Make Changes**
- Edit content in one window
- Save changes
- Refresh other windows
- Verify all windows show updated content

### **7. Test localStorage Removal**

**Step 1: Check localStorage**
```javascript
// Run in browser console
Object.keys(localStorage).filter(key => key.includes('PageContent'))
// Should return empty array []
```

**Step 2: Verify No localStorage Fallback**
- Disable network in browser
- Try to load CMS page
- Should show default content, not localStorage content

### **8. Test Database Queries**

**Check Database Content**
```sql
-- See all CMS pages in database
SELECT page_path, page_type, status, updated_at 
FROM page_content 
WHERE page_type = 'cms' 
ORDER BY updated_at DESC;

-- Check specific page content
SELECT content 
FROM page_content 
WHERE page_path = '/outils' 
AND page_type = 'cms';
```

### **9. Test Error Handling**

**Step 1: Test Database Down**
- Stop MySQL service
- Try to load CMS page
- Should show default content gracefully

**Step 2: Test Invalid Data**
- Try to save invalid JSON
- Should show error message
- Should not crash the application

### **10. Performance Testing**

**Step 1: Check Load Times**
- Open browser DevTools
- Go to Network tab
- Load CMS pages
- Verify API calls are fast (< 500ms)

**Step 2: Test Concurrent Users**
- Open multiple browser windows
- Make simultaneous edits
- Verify no conflicts or data loss

## 🎯 **Success Criteria**

✅ **All tests pass**
✅ **Content loads from database**
✅ **Updates appear in real-time**
✅ **No localStorage dependencies**
✅ **Multiple users see same content**
✅ **Error handling works**
✅ **Performance is good**

## 🚀 **Quick Test Commands**

```bash
# Test database connection
npm run dev

# Check if migration worked
curl http://localhost:4028/api/cms/migrate -X POST -H "Content-Type: application/json" -d '{"action":"status"}'

# Test page content API
curl "http://localhost:4028/api/pages/content?path=/&type=cms"
```

## 📋 **Testing Checklist**

- [ ] Database connection works
- [ ] CMS pages load from database
- [ ] Content updates save to database
- [ ] Changes appear in real-time
- [ ] Multiple users see same content
- [ ] No localStorage dependencies
- [ ] Error handling works
- [ ] Performance is acceptable
- [ ] Migration page works
- [ ] Frontend pages load correctly

**Run through this checklist to ensure your CMS migration is working perfectly!** 🎉




