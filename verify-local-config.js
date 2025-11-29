const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Vérification de la Configuration MongoDB\n');
console.log('='.repeat(60));

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

console.log('📋 Connection String actuelle:');
console.log(MONGODB_URI.replace(/:[^:@]+@/, ':****@'));
console.log('');

if (MONGODB_URI.startsWith('mongodb://localhost') || MONGODB_URI.startsWith('mongodb://127.0.0.1')) {
  console.log('✅ Configuration: MongoDB LOCAL');
  console.log('   Pas besoin de DNS ou Network Access');
  console.log('\n💡 Prochaines étapes:');
  console.log('   1. Vérifiez que MongoDB est installé localement');
  console.log('   2. Vérifiez que le service MongoDB est "Running"');
  console.log('   3. Connectez-vous avec Compass: mongodb://localhost:27017');
  console.log('   4. Redémarrez le serveur dev: npm run dev');
} else if (MONGODB_URI.startsWith('mongodb+srv://')) {
  console.log('⚠️  Configuration: MongoDB ATLAS');
  console.log('   Vous avez encore la connection string Atlas');
  console.log('\n💡 Pour basculer vers MongoDB local:');
  console.log('   node switch-to-local-mongodb.js');
} else {
  console.log('❓ Configuration inconnue');
  console.log('   Connection string:', MONGODB_URI.substring(0, 50) + '...');
}


