const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found');
  process.exit(1);
}

console.log('🔍 Test de Connexion MongoDB Local\n');
console.log('='.repeat(60));
console.log('📋 Connection String:', MONGODB_URI.replace(/:[^:@]+@/, ':****@'));
console.log('');

if (!MONGODB_URI.startsWith('mongodb://localhost') && !MONGODB_URI.startsWith('mongodb://127.0.0.1')) {
  console.error('❌ Ce n\'est pas une connection string MongoDB local!');
  console.error('   Utilisez: mongodb://localhost:27017/azalee_db');
  process.exit(1);
}

console.log('🔄 Tentative de connexion à MongoDB local...');

const opts = {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 5000,
  socketTimeoutMS: 5000,
};

async function test() {
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout - MongoDB n\'est peut-être pas démarré')), 10000)
    );
    
    await Promise.race([
      mongoose.connect(MONGODB_URI, opts),
      timeoutPromise
    ]);
    
    console.log('✅ Connexion réussie à MongoDB local!');
    console.log('✅ Database:', mongoose.connection.db.databaseName);
    
    // Test query
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`✅ Collections trouvées: ${collections.length}`);
    
    await mongoose.disconnect();
    console.log('\n✅ MongoDB local fonctionne correctement!');
    console.log('\n💡 Redémarrez votre serveur dev: npm run dev');
    
  } catch (error) {
    console.error('\n❌ Erreur de connexion:', error.message);
    
    if (error.message.includes('timeout') || error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 MongoDB n\'est probablement pas démarré!');
      console.error('\n📋 Solutions:');
      console.error('1. Vérifiez que MongoDB est installé:');
      console.error('   - Téléchargez: https://www.mongodb.com/try/download/community');
      console.error('   - Installez MongoDB Community Server');
      console.error('\n2. Vérifiez que le service MongoDB est démarré:');
      console.error('   - Windows + R → services.msc');
      console.error('   - Cherchez "MongoDB"');
      console.error('   - Statut doit être "Running"');
      console.error('\n3. OU démarrez MongoDB manuellement:');
      console.error('   - Ouvrez PowerShell en Admin');
      console.error('   - net start MongoDB');
    }
    
    process.exit(1);
  }
}

test();


