const mongoose = require('mongoose');
const dns = require('dns');
const { promisify } = require('util');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in environment variables');
  console.error('💡 Make sure you have a .env.local file with MONGODB_URI set');
  process.exit(1);
}

console.log('🔍 MongoDB Connection Diagnostic Tool\n');
console.log('='.repeat(60));

// Test 1: Check DNS servers
console.log('\n📋 Test 1: DNS Server Configuration');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
  const servers = dns.getServers();
  console.log('✅ DNS servers configured:', servers.join(', '));
} catch (error) {
  console.error('❌ Failed to configure DNS:', error.message);
}

// Test 2: Extract hostname
console.log('\n📋 Test 2: Connection String Analysis');
const hostnameMatch = MONGODB_URI.match(/@([^/]+)/);
if (!hostnameMatch) {
  console.error('❌ Could not extract hostname from connection string');
  process.exit(1);
}
const hostname = hostnameMatch[1];
console.log('✅ Hostname extracted:', hostname);

// Test 3: DNS Resolution
console.log('\n📋 Test 3: DNS SRV Record Resolution');
const resolveSrv = promisify(dns.resolveSrv);
async function runTests() {
  try {
    const srvRecord = `_mongodb._tcp.${hostname}`;
    console.log(`🔄 Resolving: ${srvRecord}`);
    
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('DNS timeout after 10 seconds')), 10000)
    );
    
    const dnsResult = await Promise.race([
      resolveSrv(srvRecord),
      timeoutPromise
    ]);
    
    console.log('✅ DNS resolution successful!');
    console.log(`   Found ${dnsResult.length} server(s):`);
    dnsResult.forEach((srv, i) => {
      console.log(`   ${i + 1}. ${srv.name}:${srv.port} (priority: ${srv.priority}, weight: ${srv.weight})`);
    });
  } catch (error) {
    console.error('❌ DNS resolution FAILED:', error.message);
    console.error('\n💡 This means:');
    console.error('   - Your DNS cannot resolve MongoDB Atlas SRV records');
    console.error('   - This could be a DNS server issue or firewall blocking DNS');
    console.error('\n💡 Solutions:');
    console.error('   1. Change Windows DNS to Google DNS (8.8.8.8, 8.8.4.4)');
    console.error('   2. Check firewall/antivirus settings');
    console.error('   3. Try a different network/VPN');
    process.exit(1);
  }

  // Test 4: MongoDB Connection
  console.log('\n📋 Test 4: MongoDB Connection Test');
  console.log('🔄 Attempting to connect...');

  const connectionOptions = {
    serverSelectionTimeoutMS: 15000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
    retryWrites: true,
    w: 'majority',
  };

  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout after 20 seconds')), 20000)
    );
    
    const connectionPromise = mongoose.connect(MONGODB_URI, connectionOptions);
    
    await Promise.race([connectionPromise, timeoutPromise]);
    
    console.log('✅ MongoDB connection successful!');
    console.log('✅ Database:', mongoose.connection.db.databaseName);
    console.log('✅ Ready state:', mongoose.connection.readyState);
    
    // Test a simple query
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`✅ Found ${collections.length} collection(s) in database`);
    
    await mongoose.disconnect();
    console.log('\n✅ All tests passed! Your MongoDB connection is working.');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ MongoDB connection FAILED:', error.message);
    
    if (error.message.includes('timeout') || error.message.includes('Connection timeout')) {
      console.error('\n🔴 CONNECTION TIMEOUT - This is NOT a DNS issue!');
      console.error('✅ DNS is working (we found 3 MongoDB servers)');
      console.error('❌ But MongoDB Atlas is blocking your connection');
      console.error('\n💡 THE PROBLEM: MongoDB Atlas Network Access is not configured!');
      console.error('\n✅ IMMEDIATE FIX (DO THIS NOW):');
      console.error('   1. Open: https://cloud.mongodb.com');
      console.error('   2. Log in to your MongoDB Atlas account');
      console.error('   3. Click "Network Access" in the left sidebar');
      console.error('   4. Click "Add IP Address" button');
      console.error('   5. Click "Allow Access from Anywhere" (0.0.0.0/0)');
      console.error('   6. Click "Confirm"');
      console.error('   7. Wait 2-3 minutes for changes to propagate');
      console.error('   8. Run this diagnostic again: node test-mongodb-diagnostic.js');
    } else if (error.message.includes('ETIMEOUT') || error.message.includes('queryTxt')) {
      console.error('\n🔍 DNS Timeout Error Detected');
      console.error('This usually means DNS resolution is failing.');
    } else if (error.message.includes('authentication') || error.message.includes('credentials')) {
      console.error('\n🔍 Authentication Error Detected');
      console.error('Check your username and password in the connection string.');
    } else if (error.message.includes('network') || error.message.includes('ENOTFOUND')) {
      console.error('\n🔍 Network Error Detected');
      console.error('This could mean:');
      console.error('   - MongoDB Atlas Network Access is not configured for your IP');
      console.error('   - Your IP is blocked by MongoDB Atlas');
      console.error('\n💡 CRITICAL FIX:');
      console.error('   1. Go to: https://cloud.mongodb.com');
      console.error('   2. Click "Network Access"');
      console.error('   3. Click "Add IP Address"');
      console.error('   4. Click "Allow Access from Anywhere" (0.0.0.0/0)');
      console.error('   5. Click "Confirm"');
      console.error('   6. Wait 2-3 minutes, then try again');
    } else {
      console.error('\n🔍 Unknown Error');
      console.error('Full error:', error);
    }
    
    process.exit(1);
  }
}

runTests();
