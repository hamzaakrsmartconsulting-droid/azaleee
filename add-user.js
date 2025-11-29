// Script to add a new user to MongoDB
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Import User model (we need to define it here since this is a standalone script)
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
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

// Hash password before saving
UserSchema.pre('save', async function() {
  if (!this.isModified('password')) {
    return;
  }
  
  if (this.password && /^\$2[ayb]\$/.test(this.password)) {
    return;
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);

// Connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';

async function addUser() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // User data
    const email = 'hamza@test.com';
    const password = '123123123';
    const name = 'Hamza';
    const role = 'admin';

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      console.log(`⚠️  User ${email} already exists!`);
      console.log('   Updating password...');
      
      existingUser.password = password; // Will be hashed by pre-save hook
      existingUser.name = name;
      existingUser.role = role;
      await existingUser.save();
      
      console.log(`✅ User ${email} updated successfully!`);
      console.log(`   Email: ${email}`);
      console.log(`   Name: ${name}`);
      console.log(`   Role: ${role}`);
      console.log(`   Password: ${password}`);
    } else {
      // Create new user
      const user = new User({
        email: email.toLowerCase(),
        password: password, // Will be hashed by pre-save hook
        name: name,
        role: role
      });

      await user.save();
      
      console.log(`✅ User ${email} created successfully!`);
      console.log(`   Email: ${email}`);
      console.log(`   Name: ${name}`);
      console.log(`   Role: ${role}`);
      console.log(`   Password: ${password}`);
    }

    console.log('\n📋 All users in database:');
    const allUsers = await User.find({}).select('-password');
    allUsers.forEach((user, index) => {
      console.log(`   ${index + 1}. ${user.email} (${user.role}) - ${user.name}`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
    process.exit(0);

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.code === 11000) {
      console.error('   User with this email already exists');
    } else if (error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 MongoDB is not running!');
      console.error('   Start MongoDB: net start MongoDB (PowerShell as Admin)');
      console.error('   Or check: services.msc → MongoDB Server → Start');
    }
    
    await mongoose.disconnect();
    process.exit(1);
  }
}

addUser();

