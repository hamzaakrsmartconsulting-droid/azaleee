#!/usr/bin/env node

/**
 * Script de test pour vérifier le bon fonctionnement de toutes les APIs CMS
 * Usage: node test-cms-apis.js
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

// Fonction pour tester une API GET
async function testGetAPI(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/api/pages/${pageName}`);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`✅ GET /api/pages/${pageName} - OK`);
      return { success: true, data };
    } else {
      console.log(`❌ GET /api/pages/${pageName} - Error: ${response.status}`);
      return { success: false, error: response.status };
    }
  } catch (error) {
    console.log(`❌ GET /api/pages/${pageName} - Network Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Fonction pour tester une API POST (sauvegarde)
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
      console.log(`✅ POST /api/cms/content/${pageName} - OK`);
      return { success: true, data };
    } else {
      console.log(`❌ POST /api/cms/content/${pageName} - Error: ${response.status}`);
      return { success: false, error: response.status };
    }
  } catch (error) {
    console.log(`❌ POST /api/cms/content/${pageName} - Network Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Fonction pour tester une API reload
async function testReloadAPI(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/api/pages/${pageName}/reload`);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`✅ GET /api/pages/${pageName}/reload - OK`);
      return { success: true, data };
    } else {
      console.log(`❌ GET /api/pages/${pageName}/reload - Error: ${response.status}`);
      return { success: false, error: response.status };
    }
  } catch (error) {
    console.log(`❌ GET /api/pages/${pageName}/reload - Network Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Fonction principale de test
async function runTests() {
  console.log('🧪 Début des tests des APIs CMS...\n');
  
  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    details: {}
  };
  
  for (const pageName of PAGES_TO_TEST) {
    console.log(`\n📄 Test de la page: ${pageName}`);
    console.log('─'.repeat(50));
    
    results.details[pageName] = {
      get: null,
      post: null,
      reload: null
    };
    
    // Test GET
    results.details[pageName].get = await testGetAPI(pageName);
    results.total++;
    if (results.details[pageName].get.success) {
      results.passed++;
    } else {
      results.failed++;
    }
    
    // Test POST
    results.details[pageName].post = await testPostAPI(pageName);
    results.total++;
    if (results.details[pageName].post.success) {
      results.passed++;
    } else {
      results.failed++;
    }
    
    // Test Reload
    results.details[pageName].reload = await testReloadAPI(pageName);
    results.total++;
    if (results.details[pageName].reload.success) {
      results.passed++;
    } else {
      results.failed++;
    }
  }
  
  // Résumé des résultats
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DES TESTS');
  console.log('='.repeat(60));
  console.log(`Total des tests: ${results.total}`);
  console.log(`✅ Tests réussis: ${results.passed}`);
  console.log(`❌ Tests échoués: ${results.failed}`);
  console.log(`📈 Taux de réussite: ${((results.passed / results.total) * 100).toFixed(1)}%`);
  
  // Détails des échecs
  if (results.failed > 0) {
    console.log('\n❌ DÉTAILS DES ÉCHECS:');
    console.log('─'.repeat(40));
    
    for (const [pageName, tests] of Object.entries(results.details)) {
      const failures = [];
      if (!tests.get.success) failures.push('GET');
      if (!tests.post.success) failures.push('POST');
      if (!tests.reload.success) failures.push('RELOAD');
      
      if (failures.length > 0) {
        console.log(`${pageName}: ${failures.join(', ')}`);
      }
    }
  }
  
  console.log('\n🎯 Tests terminés !');
  
  return results;
}

// Exécution du script
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { runTests, testGetAPI, testPostAPI, testReloadAPI };
