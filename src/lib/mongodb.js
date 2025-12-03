import mongoose from 'mongoose';

// MongoDB Local Connection
// Default to localhost if not specified in .env.local
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // Check if already connected using mongoose.connection
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true, // Enable buffering to allow queries before connection is ready
      serverSelectionTimeoutMS: 5000, // 5 seconds for local
      socketTimeoutMS: 45000,
      connectTimeoutMS: 5000, // 5 seconds for local
    };

    console.log('🔄 Connecting to local MongoDB...');
    console.log('   URI:', MONGODB_URI);
    
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then(() => {
        console.log('✅ MongoDB connected successfully');
        return mongoose.connection;
      })
      .catch((error) => {
        console.error('❌ MongoDB connection error:', error.message);
        
        // Provide helpful error messages for local MongoDB
        if (error.message.includes('ECONNREFUSED') || error.message.includes('connect')) {
          console.error('\n🔍 MongoDB Local Connection Failed!');
          console.error('This usually means:');
          console.error('  - MongoDB is not installed on your machine');
          console.error('  - MongoDB service is not running');
          console.error('  - MongoDB is running on a different port');
          console.error('\n💡 Quick fixes:');
          console.error('  1. Install MongoDB: https://www.mongodb.com/try/download/community');
          console.error('  2. Check MongoDB service: Windows + R → services.msc → Find "MongoDB" → Should be "Running"');
          console.error('  3. Start MongoDB service: net start MongoDB (in PowerShell as Admin)');
          console.error('  4. Verify connection with Compass: mongodb://localhost:27017');
        }
        
        cached.promise = null;
        throw error;
      });
  }

  try {
    await cached.promise;
    // Connection is ready after promise resolves
    return mongoose.connection;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default connectDB;
