// Reset admin password script
// Run with: node reset-admin-password.js

require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';

// Define User schema inline (CommonJS)
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    enum: ['admin', 'editor', 'viewer'],
    default: 'admin'
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  }
}, {
  timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function resetAdminPassword() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    console.log('   URI:', MONGODB_URI);
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const adminEmail = 'admin@azalee.com';
    const newPassword = 'admin123';

    // Find admin user
    let admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      console.log('📝 Admin user not found. Creating new admin user...');
      // Create new admin user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      
      admin = new User({
        email: adminEmail,
        password: hashedPassword,
        name: 'Administrator',
        role: 'admin'
      });
      await admin.save();
      console.log('✅ Admin user created successfully!');
    } else {
      console.log('📝 Admin user found. Resetting password...');
      // Reset password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      
      admin.password = hashedPassword;
      await admin.save();
      console.log('✅ Admin password reset successfully!');
    }

    console.log('\n📋 Admin credentials:');
    console.log('   Email:', adminEmail);
    console.log('   Password:', newPassword);
    console.log('\n✅ Done!');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.message.includes('ECONNREFUSED') || error.message.includes('connect')) {
      console.error('\n💡 Make sure MongoDB is running locally!');
    }
    process.exit(1);
  }
}

resetAdminPassword();


