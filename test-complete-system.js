#!/usr/bin/env node

/**
 * Script de test complet pour vérifier le bon fonctionnement du système CMS
 * Usage: node test-complete-system.js
 */

const BASE_URL = 'http://localhost:4028';

// Liste de toutes les pages fiscalité à tester
const PAGES_TO_TEST = [
  'fiscalite-placements',
  'pfu',
  'loi-cosse',
  'loi-denormandie',
  'loi-girardin',
  'loi-malraux',
  'loi-pinel',
  'monument-historique',
  'reductions-impot-deficit-foncier',
  'tmi-prelevements-sociaux',
  'tranches-baremes-plafonds'
];

// Fonction pour vérifier si le serveur est démarré
async function checkServer() {
  try {
    const response = await fetch(`${BASE_URL}/api/pages/homepage`);
    if (response.ok) {
      console.log('✅ Serveur démarré et accessible');
      return true;
    } else {
      console.log('❌ Serveur accessible mais erreur API');
      return false;
    }
  } catch (error) {
    console.log('❌ Serveur non accessible - Veuillez démarrer le serveur avec: npm run dev');
    return false;
  }
}

// Fonction pour tester une API GET
async function testGetAPI(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/api/pages/${pageName}`);
    const data = await response.json();
    
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: response.status };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Fonction pour tester une API POST
async function testPostAPI(pageName) {
  try {
    const testContent = {
      hero: {
        title: `Test ${pageName}`,
        subtitle: "Contenu de test",
        button: "Test Button"
      }
    };
    
    const response = await fetch(`${BASE_URL}/api/cms/content/${pageName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: testContent }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: response.status };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Fonction pour tester une page officielle
async function testPage(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/fiscalite/${pageName}`);
    
    if (response.ok) {
      const html = await response.text();
      
      const checks = {
        hasTitle: html.includes('<title>'),
        hasHeader: html.includes('Header'),
        hasFooter: html.includes('Footer'),
        hasContent: html.length > 1000,
        hasCMSIndicators: html.includes('Content:') || html.includes('Loading from Database'),
        hasDebugButtons: html.includes('Reload') || html.includes('Debug Info')
      };
      
      const passedChecks = Object.values(checks).filter(Boolean).length;
      const totalChecks = Object.keys(checks).length;
      
      return { 
        success: true, 
        checks,
        score: passedChecks / totalChecks 
      };
    } else {
      return { success: false, error: response.status };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Fonction pour tester une page CMS
async function testCMSPage(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/cms/fiscalite/${pageName}`);
    
    if (response.ok) {
      const html = await response.text();
      
      const checks = {
        hasTitle: html.includes('<title>'),
        hasCMSLayout: html.includes('CMS -') || html.includes('Gérez le contenu'),
        hasSections: html.includes('Section') || html.includes('Modifier'),
        hasSaveButton: html.includes('Sauvegarder') || html.includes('Modifier'),
        hasNavigation: html.includes('Voir la page') || html.includes('Retour'),
        hasContent: html.length > 1000
      };
      
      const passedChecks = Object.values(checks).filter(Boolean).length;
      const totalChecks = Object.keys(checks).length;
      
      return { 
        success: true, 
        checks,
        score: passedChecks / totalChecks 
      };
    } else {
      return { success: false, error: response.status };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Fonction principale de test
async function runCompleteTest() {
  console.log('🧪 DÉBUT DES TESTS COMPLETS DU SYSTÈME CMS');
  console.log('='.repeat(60));
  
  // Vérifier le serveur
  const serverRunning = await checkServer();
  if (!serverRunning) {
    console.log('\n❌ Impossible de continuer les tests - serveur non accessible');
    return;
  }
  
  console.log('\n📊 TESTS DES APIs');
  console.log('─'.repeat(40));
  
  const apiResults = {
    total: 0,
    passed: 0,
    failed: 0,
    details: {}
  };
  
  for (const pageName of PAGES_TO_TEST) {
    console.log(`\n📄 Test des APIs pour: ${pageName}`);
    
    apiResults.details[pageName] = {
      get: null,
      post: null
    };
    
    // Test GET
    apiResults.details[pageName].get = await testGetAPI(pageName);
    apiResults.total++;
    if (apiResults.details[pageName].get.success) {
      apiResults.passed++;
      console.log(`  ✅ GET API - OK`);
    } else {
      apiResults.failed++;
      console.log(`  ❌ GET API - Error: ${apiResults.details[pageName].get.error}`);
    }
    
    // Test POST
    apiResults.details[pageName].post = await testPostAPI(pageName);
    apiResults.total++;
    if (apiResults.details[pageName].post.success) {
      apiResults.passed++;
      console.log(`  ✅ POST API - OK`);
    } else {
      apiResults.failed++;
      console.log(`  ❌ POST API - Error: ${apiResults.details[pageName].post.error}`);
    }
  }
  
  console.log('\n📊 TESTS DES PAGES');
  console.log('─'.repeat(40));
  
  const pageResults = {
    total: 0,
    passed: 0,
    failed: 0,
    details: {}
  };
  
  for (const pageName of PAGES_TO_TEST) {
    console.log(`\n📄 Test des pages pour: ${pageName}`);
    
    pageResults.details[pageName] = {
      official: null,
      cms: null
    };
    
    // Test page officielle
    pageResults.details[pageName].official = await testPage(pageName);
    pageResults.total++;
    if (pageResults.details[pageName].official.success) {
      pageResults.passed++;
      console.log(`  ✅ Page officielle - OK (Score: ${(pageResults.details[pageName].official.score * 100).toFixed(1)}%)`);
    } else {
      pageResults.failed++;
      console.log(`  ❌ Page officielle - Error: ${pageResults.details[pageName].official.error}`);
    }
    
    // Test page CMS
    pageResults.details[pageName].cms = await testCMSPage(pageName);
    pageResults.total++;
    if (pageResults.details[pageName].cms.success) {
      pageResults.passed++;
      console.log(`  ✅ Page CMS - OK (Score: ${(pageResults.details[pageName].cms.score * 100).toFixed(1)}%)`);
    } else {
      pageResults.failed++;
      console.log(`  ❌ Page CMS - Error: ${pageResults.details[pageName].cms.error}`);
    }
  }
  
  // Résumé final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ FINAL DES TESTS');
  console.log('='.repeat(60));
  
  const totalTests = apiResults.total + pageResults.total;
  const totalPassed = apiResults.passed + pageResults.passed;
  const totalFailed = apiResults.failed + pageResults.failed;
  
  console.log(`📈 APIs: ${apiResults.passed}/${apiResults.total} réussis (${((apiResults.passed / apiResults.total) * 100).toFixed(1)}%)`);
  console.log(`📈 Pages: ${pageResults.passed}/${pageResults.total} réussis (${((pageResults.passed / pageResults.total) * 100).toFixed(1)}%)`);
  console.log(`📈 Total: ${totalPassed}/${totalTests} réussis (${((totalPassed / totalTests) * 100).toFixed(1)}%)`);
  
  if (totalFailed > 0) {
    console.log('\n❌ DÉTAILS DES ÉCHECS:');
    console.log('─'.repeat(40));
    
    for (const [pageName, tests] of Object.entries(apiResults.details)) {
      const failures = [];
      if (!tests.get.success) failures.push('GET API');
      if (!tests.post.success) failures.push('POST API');
      
      if (failures.length > 0) {
        console.log(`${pageName} APIs: ${failures.join(', ')}`);
      }
    }
    
    for (const [pageName, tests] of Object.entries(pageResults.details)) {
      const failures = [];
      if (!tests.official.success) failures.push('Official Page');
      if (!tests.cms.success) failures.push('CMS Page');
      
      if (failures.length > 0) {
        console.log(`${pageName} Pages: ${failures.join(', ')}`);
      }
    }
  }
  
  console.log('\n🎯 Tests terminés !');
  
  return {
    apiResults,
    pageResults,
    totalTests,
    totalPassed,
    totalFailed
  };
}

// Exécution du script
if (require.main === module) {
  runCompleteTest().catch(console.error);
}

module.exports = { runCompleteTest };
