const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

console.log('🔧 Création de l\'utilisateur admin pour MongoDB Compass\n');
console.log('='.repeat(60));

// User Schema (simplified)
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

async function createAdmin() {
  try {
    console.log('🔄 Connexion à MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 10000,
    });
    console.log('✅ Connecté à MongoDB Atlas\n');

    // Check if admin exists
    const adminExists = await User.findOne({ email: 'admin@azalee.com' });
    
    if (adminExists) {
      console.log('ℹ️  Utilisateur admin existe déjà');
      console.log('   Email:', adminExists.email);
      console.log('   Name:', adminExists.name);
      console.log('   Role:', adminExists.role);
      console.log('\n✅ Vous pouvez vous connecter avec:');
      console.log('   Email: admin@azalee.com');
      console.log('   Password: admin123');
    } else {
      console.log('📝 Création de l\'utilisateur admin...');
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      const admin = new User({
        email: 'admin@azalee.com',
        password: hashedPassword,
        name: 'Administrator',
        role: 'admin'
      });
      
      await admin.save();
      console.log('✅ Utilisateur admin créé avec succès!');
      console.log('\n📋 Identifiants de connexion:');
      console.log('   Email: admin@azalee.com');
      console.log('   Password: admin123');
      console.log('   Role: admin');
    }

    // Show collection info
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`\n📊 Collections dans azalee_db: ${collections.length}`);
    collections.forEach(col => {
      console.log(`   - ${col.name}`);
    });

    await mongoose.disconnect();
    console.log('\n✅ Terminé! Vous pouvez maintenant vous connecter via /admin/login');
    
  } catch (error) {
    console.error('\n❌ Erreur:', error.message);
    
    if (error.message.includes('timeout') || error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 Problème de connexion MongoDB:');
      console.error('   1. Vérifiez que MongoDB Atlas Network Access est configuré (0.0.0.0/0)');
      console.error('   2. Vérifiez que l\'utilisateur azalee2020 existe dans Database Access');
      console.error('   3. Testez la connexion avec MongoDB Compass d\'abord');
    }
    
    process.exit(1);
  }
}

createAdmin();


