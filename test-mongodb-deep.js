const mongoose = require('mongoose');
const dns = require('dns');
const { promisify } = require('util');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found');
  process.exit(1);
}

console.log('🔍 Deep MongoDB Diagnostic\n');
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
console.log('   Password:', password.length > 0 ? '***' + password.slice(-2) : 'empty');
console.log('   Hostname:', hostname);
console.log('   Database:', database || 'default');
console.log('');

// Check for special characters in password
const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
if (hasSpecialChars) {
  console.log('⚠️  Password contains special characters');
  console.log('   Special chars found:', password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g));
  console.log('   These may need URL encoding\n');
}

// Configure DNS
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const resolveSrv = promisify(dns.resolveSrv);
const resolve4 = promisify(dns.resolve4);

async function testConnection(uri, description) {
  console.log(`\n🔄 Testing: ${description}`);
  console.log('   URI:', uri.replace(/:[^:@]+@/, ':****@'));
  
  const opts = {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000,
    retryWrites: true,
    w: 'majority',
  };
  
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), 15000)
    );
    
    await Promise.race([
      mongoose.connect(uri, opts),
      timeoutPromise
    ]);
    
    console.log('   ✅ Connection successful!');
    await mongoose.disconnect();
    return true;
  } catch (error) {
    console.log('   ❌ Failed:', error.message);
    if (error.message.includes('authentication')) {
      console.log('   💡 Authentication error - check username/password');
    } else if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
      console.log('   💡 Timeout - likely Network Access or firewall issue');
    }
    try {
      await mongoose.disconnect();
    } catch {}
    return false;
  }
}

async function runTests() {
  // Test 1: DNS Resolution
  console.log('\n📋 Test 1: DNS SRV Resolution');
  try {
    const srvRecord = `_mongodb._tcp.${hostname}`;
    const dnsResult = await Promise.race([
      resolveSrv(srvRecord),
      new Promise((_, reject) => setTimeout(() => reject(new Error('DNS timeout')), 10000))
    ]);
    console.log('✅ DNS OK - Found', dnsResult.length, 'server(s)');
    
    // Try to resolve IPs
    console.log('\n📋 Test 2: Resolving Server IPs');
    for (const srv of dnsResult.slice(0, 1)) { // Test first server only
      try {
        const ips = await Promise.race([
          resolve4(srv.name),
          new Promise((_, reject) => setTimeout(() => reject(new Error('IP resolution timeout')), 5000))
        ]);
        console.log(`✅ ${srv.name} → ${ips[0]}`);
        console.log('   💡 If you can ping this IP, network is OK');
      } catch (err) {
        console.log(`⚠️  Could not resolve IP for ${srv.name}`);
      }
    }
  } catch (error) {
    console.log('❌ DNS failed:', error.message);
    return;
  }
  
  // Test 3: Original connection string
  console.log('\n📋 Test 3: Original Connection String');
  const originalWorks = await testConnection(MONGODB_URI, 'Original URI');
  
  if (originalWorks) {
    console.log('\n✅ SUCCESS! Original connection string works!');
    return;
  }
  
  // Test 4: URL-encoded password
  if (hasSpecialChars) {
    console.log('\n📋 Test 4: URL-Encoded Password');
    const encodedPassword = encodeURIComponent(password);
    const encodedURI = MONGODB_URI.replace(`:${password}@`, `:${encodedPassword}@`);
    const encodedWorks = await testConnection(encodedURI, 'URL-Encoded Password');
    
    if (encodedWorks) {
      console.log('\n✅ SUCCESS! URL-encoded password works!');
      console.log('\n💡 Update your .env.local with:');
      console.log(`MONGODB_URI=${encodedURI.replace(/:[^:@]+@/, ':****@')}`);
      return;
    }
  }
  
  // Test 5: Without database name
  console.log('\n📋 Test 5: Without Database Name');
  const uriWithoutDB = MONGODB_URI.replace(/\/[^?]+(\?|$)/, '$1');
  await testConnection(uriWithoutDB, 'Without Database');
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log('\n❌ All connection attempts failed');
  console.log('\n💡 Possible causes:');
  console.log('   1. MongoDB Atlas Network Access not configured correctly');
  console.log('      → Check: https://cloud.mongodb.com → Network Access');
  console.log('      → Make sure 0.0.0.0/0 is added (or your current IP)');
  console.log('   2. Firewall/Antivirus blocking connection');
  console.log('      → Temporarily disable to test');
  console.log('   3. Cluster might be paused');
  console.log('      → Check: https://cloud.mongodb.com → Database → Cluster status');
  console.log('   4. Wrong username/password');
  console.log('      → Check: https://cloud.mongodb.com → Database Access');
  console.log('   5. Network/VPN issues');
  console.log('      → Try different network or disable VPN');
  console.log('\n💡 Next steps:');
  console.log('   1. Verify Network Access in MongoDB Atlas');
  console.log('   2. Check cluster is running (not paused)');
  console.log('   3. Verify username/password in Database Access');
  console.log('   4. Try MongoDB Compass to test connection');
  console.log('   5. Check Windows Firewall settings');
}

runTests().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});


