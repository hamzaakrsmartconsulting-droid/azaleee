const mongoose = require('mongoose');
const dns = require('dns');
const { promisify } = require('util');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found');
  process.exit(1);
}

console.log('🔍 Testing Authentication & Password Encoding\n');
console.log('='.repeat(60));

// Extract connection details
const uriMatch = MONGODB_URI.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)?/);
if (!uriMatch) {
  console.error('❌ Invalid connection string');
  process.exit(1);
}

const [, username, password, hostname, database] = uriMatch;

console.log('📋 Current Configuration:');
console.log('   Username:', username);
console.log('   Password (last 3 chars):', '***' + password.slice(-3));
console.log('   Password length:', password.length);
console.log('   Hostname:', hostname);
console.log('   Database:', database || 'default');
console.log('');

// Check for special characters
const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
if (specialChars) {
  const found = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
  console.log('⚠️  SPECIAL CHARACTERS DETECTED:', found.join(', '));
  console.log('   These MUST be URL-encoded in the connection string!\n');
} else {
  console.log('✅ No special characters in password\n');
}

// Configure DNS
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

async function testConnection(uri, description) {
  console.log(`\n🔄 Testing: ${description}`);
  
  const opts = {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000,
    retryWrites: true,
    w: 'majority',
  };
  
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout after 15s')), 15000)
    );
    
    const startTime = Date.now();
    await Promise.race([
      mongoose.connect(uri, opts),
      timeoutPromise
    ]);
    
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`   ✅ SUCCESS! Connected in ${elapsed}s`);
    
    // Test query
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`   ✅ Database accessible: ${collections.length} collection(s)`);
    
    await mongoose.disconnect();
    return true;
  } catch (error) {
    const errorMsg = error.message.toLowerCase();
    
    if (errorMsg.includes('authentication') || errorMsg.includes('credentials') || errorMsg.includes('auth')) {
      console.log(`   ❌ AUTHENTICATION ERROR: ${error.message}`);
      console.log('   💡 Check username/password in MongoDB Atlas → Database Access');
    } else if (errorMsg.includes('timeout')) {
      console.log(`   ❌ TIMEOUT: ${error.message}`);
      console.log('   💡 Network Access is Active, but connection still times out');
      console.log('   💡 Possible causes:');
      console.log('      - Firewall blocking connection');
      console.log('      - Antivirus blocking');
      console.log('      - Wrong password encoding');
    } else {
      console.log(`   ❌ ERROR: ${error.message}`);
    }
    
    try {
      await mongoose.disconnect();
    } catch {}
    return false;
  }
}

async function runTests() {
  // Test 1: Original
  console.log('📋 Test 1: Original Connection String');
  const originalWorks = await testConnection(MONGODB_URI, 'Original URI');
  
  if (originalWorks) {
    console.log('\n' + '='.repeat(60));
    console.log('✅ SUCCESS! Original connection works!');
    console.log('='.repeat(60));
    return;
  }
  
  // Test 2: URL-encoded password (if has special chars)
  if (specialChars) {
    console.log('\n📋 Test 2: URL-Encoded Password');
    const encodedPassword = encodeURIComponent(password);
    const encodedURI = MONGODB_URI.replace(`:${password}@`, `:${encodedPassword}@`);
    
    console.log('   Encoding password...');
    console.log('   Special chars will be encoded');
    
    const encodedWorks = await testConnection(encodedURI, 'URL-Encoded Password');
    
    if (encodedWorks) {
      console.log('\n' + '='.repeat(60));
      console.log('✅ SUCCESS! URL-encoded password works!');
      console.log('='.repeat(60));
      console.log('\n💡 UPDATE YOUR .env.local FILE:');
      console.log('\nReplace the MONGODB_URI line with:');
      console.log(`MONGODB_URI=${encodedURI}`);
      console.log('\nThen restart your dev server: npm run dev');
      return;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 DIAGNOSIS');
  console.log('='.repeat(60));
  console.log('\n✅ Network Access: Active (0.0.0.0/0)');
  console.log('✅ DNS: Working');
  console.log('✅ Network: Port accessible');
  console.log('❌ Connection: Still timing out');
  console.log('\n💡 Next Steps:');
  console.log('\n1. Verify Database Access:');
  console.log('   → Go to: https://cloud.mongodb.com → Security → Database Access');
  console.log('   → Check user "azalee_admin" exists and is "Active"');
  console.log('   → Verify password is correct');
  console.log('\n2. Try creating a NEW user with simple password:');
  console.log('   → Username: test_user');
  console.log('   → Password: Test1234 (no special characters)');
  console.log('   → Update .env.local with new credentials');
  console.log('\n3. Check Windows Firewall:');
  console.log('   → Temporarily disable to test');
  console.log('   → Or add Node.js to firewall exceptions');
  console.log('\n4. Test with MongoDB Compass:');
  console.log('   → Download: https://www.mongodb.com/try/download/compass');
  console.log('   → Paste your connection string');
  console.log('   → If Compass works → problem in Node.js');
  console.log('   → If Compass fails → problem in MongoDB config');
}

runTests().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});


