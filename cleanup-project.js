// Script de nettoyage du projet
// Supprime les fichiers inutiles identifiés

const fs = require('fs');
const path = require('path');

const filesToRemove = [
  // Documentation MongoDB redondante
  'INSTALL_MONGODB_NOW.md',
  'INSTALLER_MONGODB_ETAPE_PAR_ETAPE.md',
  'INSTALL_MONGODB_WINDOWS.md',
  'QUICK_INSTALL_MONGODB.md',
  'SETUP_MONGODB_LOCAL.md',
  'setup-local-mongodb.md',
  'START_MONGODB.md',
  'MONGODB_CONNECTION_GUIDE.md',
  'CHECK_CLUSTER_STATUS.md',
  
  // Documentation Compass obsolète
  'APRES_COMPASS.md',
  'CREATE_ADMIN_IN_COMPASS.md',
  'FIX_COMPASS_CONNECTION.md',
  'FINAL_SOLUTION_COMPASS.md',
  'RESET_FOR_COMPASS.md',
  'TEST_WITH_COMPASS.md',
  'SUCCESS_CONNECTION.md',
  'VERIFIER_NETWORK_ACCESS.md',
  'FIX_NETWORK_ACCESS.md',
  
  // Documentation EC2 redondante
  'DEPLOY_EC2.md',
  'EC2_DEPLOYMENT_STEPS.md',
  'EC2_DEPLOYMENT_CHECKLIST.md',
  'FRESH_EC2_SETUP.md',
  'import-via-aws-console.md',
  
  // Documentation CMS redondante
  'CMS_COMPLETION_REPORT.md',
  'CMS_DYNAMIC_FEATURES.md',
  'CMS_IMMOBILIER_DATA_SOURCE.md',
  'CMS_PAGES_PROGRESS.md',
  'CMS_SETUP_GUIDE.md',
  'CMS_SYSTEM_COMPLETE.md',
  
  // Documentation Netlify (si pas utilisé)
  'NETLIFY_DEPLOY.md',
  'NETLIFY_DEPLOY_STEPS.md',
  'NETLIFY_ENV_QUICK_REFERENCE.md',
  'NETLIFY_ENV_VARIABLES.md',
  
  // Autre documentation obsolète
  'ADMIN_SETUP.md',
  'CREATE_NEW_USER.md',
  'DATABASE_SETUP.md',
  'DIAGNOSTIC_SARA.md',
  'DASHBOARD_PROFESSIONAL_UPGRADE.md',
  'SARA_DASHBOARD_INTEGRATION.md',
  'SARA_SETUP_GUIDE.md',
  'PROJECT_ANALYSIS.md',
  'FINAL_CHECK.md',
  'SOLUTION_FINALE.md',
  'QUICK_START.md',
  'PUSH_TO_DEMO.md',
  'GITHUB_PUSH_GUIDE.md',
  'MIGRATE_CMS_DATA.md',
  'META_DESCRIPTIONS_IMMOBILIER.md',
  'SEO_META_DESCRIPTIONS_LIST.md',
  'STOCK_API_SETUP.md',
  'RAPIDAPI_SETUP.md',
  'AZALEE_COLORS.md',
  'FILES_TO_REMOVE.md',
  
  // Scripts de test/debug
  'test-mongodb-connection.js',
  'test-local-mongodb.js',
  'test-auth-fix.js',
  'test-complete-fix.js',
  'test-direct-connection.js',
  'test-mongodb-deep.js',
  'test-mongodb-diagnostic.js',
  'verify-local-config.js',
  'switch-to-local-mongodb.js',
  'update-connection-string.js',
  
  // Scripts PowerShell MongoDB (si déjà installé)
  'install-mongodb.ps1',
  'install-mongodb-choco.ps1',
  'install-mongodb-manual.ps1',
  'install-mongodb-winget.ps1',
  'quick-install-mongodb.ps1',
  'start-mongodb.ps1',
  'check-mongodb-status.ps1',
  
  // Scripts admin/user redondants
  'add-user.js',
  'create-admin-user.js',
  'create-admin-via-compass.js',
  
  // Fichiers temporaires
  'admin-user-json.txt',
  'compass-connection-string.txt',
  'compass-connection-string-correct.txt',
  
  // Scripts shell redondants
  'export-local-db.sh',
  'import-to-ec2.sh',
  'quick-import.sh',
  'deploy.sh',
  'push-to-demo.sh',
];

let removedCount = 0;
let notFoundCount = 0;
let errors = [];

console.log('🧹 Début du nettoyage du projet...\n');

filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Supprimé: ${file}`);
      removedCount++;
    } catch (error) {
      console.error(`❌ Erreur lors de la suppression de ${file}:`, error.message);
      errors.push({ file, error: error.message });
    }
  } else {
    console.log(`⚠️  Non trouvé: ${file}`);
    notFoundCount++;
  }
});

console.log('\n📊 Résumé du nettoyage:');
console.log(`   ✅ Fichiers supprimés: ${removedCount}`);
console.log(`   ⚠️  Fichiers non trouvés: ${notFoundCount}`);
console.log(`   ❌ Erreurs: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n❌ Erreurs rencontrées:');
  errors.forEach(({ file, error }) => {
    console.log(`   - ${file}: ${error}`);
  });
}

console.log('\n✨ Nettoyage terminé!');



