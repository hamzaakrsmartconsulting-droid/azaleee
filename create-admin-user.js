const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found');
  process.exit(1);
}

// User Schema (simplified for script)
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor', 'viewer'],
    default: 'admin'
  },
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function createAdminUser() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    console.log('✅ Connected to MongoDB\n');

    // Check if admin exists
    const adminExists = await User.findOne({ email: 'admin@azalee.com' });
    
    if (adminExists) {
      console.log('ℹ️  Admin user already exists');
      console.log('   Email:', adminExists.email);
      console.log('   Name:', adminExists.name);
      console.log('   Role:', adminExists.role);
      console.log('\n💡 If login fails, the password might be wrong.');
      console.log('   Try resetting the password or creating a new admin user.');
    } else {
      console.log('📝 Creating admin user...');
      
      // Import bcrypt
      const bcrypt = require('bcryptjs');
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      const admin = new User({
        email: 'admin@azalee.com',
        password: hashedPassword,
        name: 'Administrator',
        role: 'admin'
      });
      
      await admin.save();
      console.log('✅ Admin user created successfully!');
      console.log('   Email: admin@azalee.com');
      console.log('   Password: admin123');
      console.log('   Role: admin');
    }

    await mongoose.disconnect();
    console.log('\n✅ Done!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdminUser();


