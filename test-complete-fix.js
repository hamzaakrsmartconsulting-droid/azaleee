const mongoose = require('mongoose');
const dns = require('dns');
const { promisify } = require('util');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

console.log('🔍 Complete MongoDB Connection Test\n');
console.log('='.repeat(60));

// Extract connection details
const uriMatch = MONGODB_URI.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)?/);
if (!uriMatch) {
  console.error('❌ Invalid connection string format');
  process.exit(1);
}

const [, username, password, hostname, database] = uriMatch;

console.log('📋 Connection Details:');
console.log('   Username:', username);
console.log('   Password length:', password.length);
console.log('   Password ends with:', password.slice(-3));
console.log('   Hostname:', hostname);
console.log('   Database:', database || 'default');
console.log('');

// Check for special characters
const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
if (hasSpecialChars) {
  console.log('⚠️  Password contains special characters');
  const specialChars = password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g);
  console.log('   Found:', specialChars.join(', '));
  console.log('   These need URL encoding!\n');
}

// Configure DNS
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const resolveSrv = promisify(dns.resolveSrv);

async function testConnection(uri, description, timeout = 20000) {
  console.log(`\n🔄 Test: ${description}`);
  
  const opts = {
    serverSelectionTimeoutMS: Math.min(timeout, 15000),
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000,
    retryWrites: true,
    w: 'majority',
  };
  
  try {
    const startTime = Date.now();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), timeout)
    );
    
    await Promise.race([
      mongoose.connect(uri, opts),
      timeoutPromise
    ]);
    
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`   ✅ SUCCESS! Connected in ${elapsed}s`);
    
    // Test a query
    try {
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log(`   ✅ Database accessible: ${collections.length} collection(s) found`);
    } catch (err) {
      console.log(`   ⚠️  Connected but query failed: ${err.message}`);
    }
    
    await mongoose.disconnect();
    return true;
  } catch (error) {
    console.log(`   ❌ FAILED: ${error.message}`);
    
    if (error.message.includes('authentication') || error.message.includes('credentials')) {
      console.log('   💡 Authentication error - check username/password in MongoDB Atlas');
    } else if (error.message.includes('timeout')) {
      console.log('   💡 Timeout - likely Network Access or firewall issue');
    }
    
    try {
      await mongoose.disconnect();
    } catch {}
    return false;
  }
}

async function runTests() {
  // Test 1: DNS
  console.log('📋 Test 1: DNS Resolution');
  try {
    const srvRecord = `_mongodb._tcp.${hostname}`;
    const dnsResult = await Promise.race([
      resolveSrv(srvRecord),
      new Promise((_, reject) => setTimeout(() => reject(new Error('DNS timeout')), 10000))
    ]);
    console.log(`✅ DNS OK - Found ${dnsResult.length} server(s)`);
  } catch (error) {
    console.log(`❌ DNS failed: ${error.message}`);
    return;
  }
  
  // Test 2: Original connection string
  const originalWorks = await testConnection(MONGODB_URI, 'Original Connection String');
  
  if (originalWorks) {
    console.log('\n' + '='.repeat(60));
    console.log('✅ SUCCESS! Your original connection string works!');
    console.log('='.repeat(60));
    return;
  }
  
  // Test 3: URL-encoded password (if has special chars)
  if (hasSpecialChars) {
    const encodedPassword = encodeURIComponent(password);
    const encodedURI = MONGODB_URI.replace(`:${password}@`, `:${encodedPassword}@`);
    const encodedWorks = await testConnection(encodedURI, 'URL-Encoded Password');
    
    if (encodedWorks) {
      console.log('\n' + '='.repeat(60));
      console.log('✅ SUCCESS! URL-encoded password works!');
      console.log('='.repeat(60));
      console.log('\n💡 UPDATE YOUR .env.local FILE:');
      console.log(`MONGODB_URI=${encodedURI}`);
      console.log('\nThen restart your dev server.');
      return;
    }
  }
  
  // Test 4: Without database name
  const uriWithoutDB = MONGODB_URI.replace(/\/[^?]+(\?|$)/, '$1');
  await testConnection(uriWithoutDB, 'Without Database Name');
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log('\n❌ All connection attempts failed');
  console.log('\n🔍 Since DNS works but connection fails, possible causes:');
  console.log('\n1. 🔴 MongoDB Atlas Network Access:');
  console.log('   → Go to: https://cloud.mongodb.com → Security → Network Access');
  console.log('   → Verify 0.0.0.0/0 exists with status "Active"');
  console.log('   → If not, DELETE it and RECREATE it');
  console.log('   → Wait 5 minutes after changes');
  console.log('\n2. 🔴 Cluster might be paused (but your screenshot showed it active)');
  console.log('   → Verify cluster status is "Running"');
  console.log('\n3. 🔴 Authentication issue:');
  console.log('   → Go to: https://cloud.mongodb.com → Security → Database Access');
  console.log('   → Verify user "azalee_admin" exists and is "Active"');
  console.log('   → Verify password is correct');
  console.log('   → Try creating a NEW user with simple password (no special chars)');
  console.log('\n4. 🔴 Firewall/Antivirus:');
  console.log('   → Temporarily disable to test');
  console.log('   → Check Windows Firewall rules for Node.js');
  console.log('\n5. 🔴 Try MongoDB Compass:');
  console.log('   → Download: https://www.mongodb.com/try/download/compass');
  console.log('   → Paste your connection string');
  console.log('   → If Compass works → problem in Node.js code');
  console.log('   → If Compass fails → problem in MongoDB Atlas config');
  console.log('\n💡 Most likely: Network Access needs to be DELETED and RECREATED');
}

runTests().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});


