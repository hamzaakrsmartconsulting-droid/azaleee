// Quick test script to check MongoDB connection
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

console.log('🔄 Testing MongoDB connection...');
console.log('Connection string:', MONGODB_URI.replace(/:[^:@]+@/, ':****@')); // Hide password

const opts = {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,
};

mongoose.connect(MONGODB_URI, opts)
  .then(() => {
    console.log('✅ MongoDB connected successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Connection failed:', error.message);
    console.error('Error code:', error.code);
    console.error('Error syscall:', error.syscall);
    
    if (error.code === 'ETIMEOUT' || error.syscall === 'queryTxt') {
      console.error('\n💡 DNS Resolution Issue Detected!');
      console.error('\nSolutions:');
      console.error('1. Go to MongoDB Atlas > Network Access > Add IP Address > Allow from anywhere (0.0.0.0/0)');
      console.error('2. Change your DNS to Google DNS (8.8.8.8)');
      console.error('3. Flush DNS: ipconfig /flushdns');
      console.error('4. Check firewall/antivirus');
    }
    
    process.exit(1);
  });


