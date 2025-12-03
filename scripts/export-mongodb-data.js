// Export MongoDB data to JSON files
// Run with: node export-mongodb-data.js

require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/azalee_db';

// Output directory
const OUTPUT_DIR = './mongodb-export';
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Define schemas inline (CommonJS)
const PageContentSchema = new mongoose.Schema({
  path: {
    type: String,
    required: [true, 'Page path is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  title: {
    type: String,
    required: [true, 'Page title is required']
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  published: {
    type: Boolean,
    default: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  modifiedBy: {
    type: String,
    default: 'admin'
  }
}, {
  timestamps: true
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

const ChatbotSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  messages: [{
    role: String,
    content: String,
    timestamp: Date
  }],
  step: String,
  profile: mongoose.Schema.Types.Mixed,
  intention: String,
  thematique: String,
  actionFinale: String,
  rendezVous: mongoose.Schema.Types.Mixed,
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const PageContent = mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);
const User = mongoose.models.User || mongoose.model('User', UserSchema);
const ChatbotSession = mongoose.models.ChatbotSession || mongoose.model('ChatbotSession', ChatbotSessionSchema);

async function exportData() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    console.log('   URI:', MONGODB_URI);
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Export PageContents
    console.log('📄 Exporting pagecontents...');
    const pageContents = await PageContent.find({}).lean();
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'pagecontents.json'),
      JSON.stringify(pageContents, null, 2)
    );
    console.log(`✅ Exported ${pageContents.length} pagecontents`);

    // Export Users
    console.log('\n📄 Exporting users...');
    const users = await User.find({}).lean();
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'users.json'),
      JSON.stringify(users, null, 2)
    );
    console.log(`✅ Exported ${users.length} users`);

    // Export ChatbotSessions
    console.log('\n📄 Exporting chatbotsessions...');
    const sessions = await ChatbotSession.find({}).lean();
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'chatbotsessions.json'),
      JSON.stringify(sessions, null, 2)
    );
    console.log(`✅ Exported ${sessions.length} chatbotsessions`);

    console.log('\n✅ Export complete!');
    console.log(`📦 Files saved in: ${OUTPUT_DIR}\n`);
    
    // List files with sizes
    const files = fs.readdirSync(OUTPUT_DIR);
    files.forEach(file => {
      const filePath = path.join(OUTPUT_DIR, file);
      const stats = fs.statSync(filePath);
      console.log(`   📄 ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Export error:', error.message);
    if (error.message.includes('ECONNREFUSED') || error.message.includes('connect')) {
      console.error('\n💡 Make sure MongoDB is running locally!');
      console.error('   Start MongoDB service or check your MONGODB_URI in .env.local');
    }
    process.exit(1);
  }
}

exportData();
