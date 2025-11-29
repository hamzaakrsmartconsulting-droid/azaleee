const fs = require('fs');
const path = require('path');

console.log('🔧 MongoDB Connection String Updater\n');
console.log('='.repeat(60));

const envPath = path.join(__dirname, '.env.local');
// MongoDB Atlas connection for Compass
const username = 'azalee2020';
const password = 'hamza2020';
const hostname = 'cluster0.9xrt1pn.mongodb.net';
const database = 'azalee_db';

const newConnectionString = `mongodb+srv://${username}:${password}@${hostname}/${database}?retryWrites=true&w=majority`;

console.log('📋 New Connection String:');
console.log(`MONGODB_URI=${newConnectionString.replace(/:[^:@]+@/, ':****@')}`);
console.log('');

// Check if .env.local exists
if (fs.existsSync(envPath)) {
  console.log('✅ .env.local file found');
  
  // Read existing file
  let content = fs.readFileSync(envPath, 'utf8');
  
  // Check if MONGODB_URI exists
  if (content.includes('MONGODB_URI=')) {
    console.log('📝 Updating existing MONGODB_URI...');
    
    // Replace existing MONGODB_URI
    content = content.replace(/MONGODB_URI=.*/g, `MONGODB_URI=${newConnectionString}`);
  } else {
    console.log('📝 Adding MONGODB_URI...');
    
    // Add MONGODB_URI at the end
    content += `\nMONGODB_URI=${newConnectionString}\n`;
  }
  
  // Write back
  fs.writeFileSync(envPath, content, 'utf8');
  console.log('✅ .env.local updated successfully!');
} else {
  console.log('📝 Creating new .env.local file...');
  
  // Create new file
  const content = `# MongoDB Configuration
MONGODB_URI=${newConnectionString}

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here_change_in_production
`;
  
  fs.writeFileSync(envPath, content, 'utf8');
  console.log('✅ .env.local created successfully!');
}

console.log('\n💡 Next steps:');
console.log('1. User should already be created in MongoDB Atlas:');
console.log('   - Username: azalee2020');
console.log('   - Password: hamza2020');
console.log('   - Permissions: Atlas admin (or Read and write to any database)');
console.log('   - Click "Add User"');
console.log('\n2. Wait 1-2 minutes for the user to be created');
console.log('\n3. Test the connection:');
console.log('   node test-auth-fix.js');
console.log('\n✅ Connection string is ready in .env.local!');

