const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found');
  process.exit(1);
}

console.log('🔍 Testing Direct Connection (Bypassing SRV)\n');
console.log('='.repeat(60));

// Extract connection details
const uriMatch = MONGODB_URI.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)?/);
if (!uriMatch) {
  console.error('❌ Invalid connection string');
  process.exit(1);
}

const [, username, password, hostname, database] = uriMatch;

// Try with URL-encoded password
const encodedPassword = encodeURIComponent(password);
const encodedURI = MONGODB_URI.replace(`:${password}@`, `:${encodedPassword}@`);

console.log('📋 Testing with URL-encoded password...');
console.log('   Original password ends with:', password.slice(-3));
console.log('   Encoded password ends with:', encodedPassword.slice(-6));
console.log('');

// Test connection with encoded password
const opts = {
  serverSelectionTimeoutMS: 15000,
  connectTimeoutMS: 15000,
  socketTimeoutMS: 15000,
  retryWrites: true,
  w: 'majority',
};

async function test() {
  try {
    console.log('🔄 Connecting...');
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), 20000)
    );
    
    await Promise.race([
      mongoose.connect(encodedURI, opts),
      timeoutPromise
    ]);
    
    console.log('✅ Connection successful!');
    console.log('✅ Database:', mongoose.connection.db.databaseName);
    
    // Test a query
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`✅ Found ${collections.length} collection(s)`);
    
    await mongoose.disconnect();
    console.log('\n✅ SUCCESS! Your connection string with encoded password works!');
    console.log('\n💡 Update your .env.local file:');
    console.log(`MONGODB_URI=${encodedURI}`);
    
  } catch (error) {
    console.error('\n❌ Connection failed:', error.message);
    
    if (error.message.includes('authentication')) {
      console.error('\n💡 Authentication error - check username/password in MongoDB Atlas');
      console.error('   1. Go to: https://cloud.mongodb.com → Database Access');
      console.error('   2. Verify username: azalee_admin');
      console.error('   3. Verify password matches your .env.local');
    } else if (error.message.includes('timeout')) {
      console.error('\n💡 Still timing out - possible issues:');
      console.error('   1. MongoDB Atlas Network Access - verify 0.0.0.0/0 is added');
      console.error('   2. Cluster might be paused - check cluster status');
      console.error('   3. Firewall might be blocking (but network test passed)');
    }
    
    process.exit(1);
  }
}

test();


