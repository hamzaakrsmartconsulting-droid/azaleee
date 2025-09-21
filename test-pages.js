#!/usr/bin/env node

/**
 * Script de test pour vérifier le bon fonctionnement des pages officielles
 * Usage: node test-pages.js
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

// Fonction pour tester une page officielle
async function testPage(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/fiscalite/${pageName}`);
    
    if (response.ok) {
      const html = await response.text();
      
      // Vérifications basiques
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
      
      console.log(`✅ Page /fiscalite/${pageName} - OK (${passedChecks}/${totalChecks} checks passed)`);
      
      return { 
        success: true, 
        checks,
        score: passedChecks / totalChecks 
      };
    } else {
      console.log(`❌ Page /fiscalite/${pageName} - Error: ${response.status}`);
      return { success: false, error: response.status };
    }
  } catch (error) {
    console.log(`❌ Page /fiscalite/${pageName} - Network Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Fonction pour tester une page CMS
async function testCMSPage(pageName) {
  try {
    const response = await fetch(`${BASE_URL}/cms/fiscalite/${pageName}`);
    
    if (response.ok) {
      const html = await response.text();
      
      // Vérifications basiques
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
      
      console.log(`✅ CMS Page /cms/fiscalite/${pageName} - OK (${passedChecks}/${totalChecks} checks passed)`);
      
      return { 
        success: true, 
        checks,
        score: passedChecks / totalChecks 
      };
    } else {
      console.log(`❌ CMS Page /cms/fiscalite/${pageName} - Error: ${response.status}`);
      return { success: false, error: response.status };
    }
  } catch (error) {
    console.log(`❌ CMS Page /cms/fiscalite/${pageName} - Network Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Fonction principale de test
async function runTests() {
  console.log('🧪 Début des tests des pages...\n');
  
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
      official: null,
      cms: null
    };
    
    // Test page officielle
    results.details[pageName].official = await testPage(pageName);
    results.total++;
    if (results.details[pageName].official.success) {
      results.passed++;
    } else {
      results.failed++;
    }
    
    // Test page CMS
    results.details[pageName].cms = await testCMSPage(pageName);
    results.total++;
    if (results.details[pageName].cms.success) {
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
      if (!tests.official.success) failures.push('Official');
      if (!tests.cms.success) failures.push('CMS');
      
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

module.exports = { runTests, testPage, testCMSPage };
