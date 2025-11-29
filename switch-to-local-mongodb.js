const fs = require('fs');
const path = require('path');

console.log('🔧 Switching to Local MongoDB\n');
console.log('='.repeat(60));

const envPath = path.join(__dirname, '.env.local');

// Local MongoDB connection string
const localConnectionString = 'mongodb://localhost:27017/azalee_db';

console.log('📋 New Connection String (Local MongoDB):');
console.log(`MONGODB_URI=${localConnectionString}`);
console.log('');

// Check if .env.local exists
if (fs.existsSync(envPath)) {
  console.log('✅ .env.local file found');
  
  // Read existing file
  let content = fs.readFileSync(envPath, 'utf8');
  
  // Check if MONGODB_URI exists
  if (content.includes('MONGODB_URI=')) {
    console.log('📝 Updating MONGODB_URI to local MongoDB...');
    
    // Replace existing MONGODB_URI
    content = content.replace(/MONGODB_URI=.*/g, `MONGODB_URI=${localConnectionString}`);
  } else {
    console.log('📝 Adding MONGODB_URI...');
    
    // Add MONGODB_URI at the end
    content += `\nMONGODB_URI=${localConnectionString}\n`;
  }
  
  // Write back
  fs.writeFileSync(envPath, content, 'utf8');
  console.log('✅ .env.local updated successfully!');
} else {
  console.log('📝 Creating new .env.local file...');
  
  // Create new file
  const content = `# MongoDB Configuration (Local)
MONGODB_URI=${localConnectionString}

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here_change_in_production
`;
  
  fs.writeFileSync(envPath, content, 'utf8');
  console.log('✅ .env.local created successfully!');
}

console.log('\n💡 Next steps:');
console.log('1. Make sure MongoDB is running locally:');
console.log('   - Check Windows Services (services.msc)');
console.log('   - MongoDB service should be "Running"');
console.log('\n2. Connect with MongoDB Compass:');
console.log('   - Open Compass');
console.log('   - Connection string: mongodb://localhost:27017');
console.log('   - Click "Connect"');
console.log('\n3. Restart your dev server:');
console.log('   npm run dev');
console.log('\n4. Test login at: http://localhost:4028/admin/login');
console.log('\n✅ Configuration complete!');


