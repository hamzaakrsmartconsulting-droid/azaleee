#!/usr/bin/env node

/**
 * Script de vérification de la structure des fichiers CMS
 * Usage: node check-file-structure.js
 */

const fs = require('fs');
const path = require('path');

// Liste de toutes les pages fiscalité à vérifier
const PAGES_TO_CHECK = [
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

// Fonction pour vérifier si un fichier existe
function checkFileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Fonction pour vérifier le contenu d'un fichier
function checkFileContent(filePath, requiredPatterns) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const results = {};
    
    for (const [patternName, pattern] of Object.entries(requiredPatterns)) {
      results[patternName] = pattern.test(content);
    }
    
    return results;
  } catch (error) {
    return null;
  }
}

// Fonction pour vérifier la structure d'une page
function checkPageStructure(pageName) {
  const basePath = 'src/app';
  
  const files = {
    officialPage: `${basePath}/fiscalite/${pageName}/page.jsx`,
    cmsPage: `${basePath}/cms/fiscalite/${pageName}/page.jsx`,
    apiGet: `${basePath}/api/pages/${pageName}/route.js`,
    apiPost: `${basePath}/api/cms/content/${pageName}/route.js`,
    apiReload: `${basePath}/api/pages/${pageName}/reload/route.js`
  };
  
  const results = {
    pageName,
    files: {},
    issues: []
  };
  
  // Vérifier l'existence des fichiers
  for (const [fileType, filePath] of Object.entries(files)) {
    results.files[fileType] = {
      exists: checkFileExists(filePath),
      path: filePath
    };
    
    if (!results.files[fileType].exists) {
      results.issues.push(`Fichier manquant: ${filePath}`);
    }
  }
  
  // Vérifier le contenu des fichiers existants
  if (results.files.officialPage.exists) {
    const pageContent = checkFileContent(files.officialPage, {
      hasLoadContentFromCMS: /loadContentFromCMS/,
      hasPolling: /setInterval/,
      hasDebugIndicators: /Loading from Database/,
      hasDefaultContent: /defaultContent/,
      hasContentSource: /contentSource/
    });
    
    results.files.officialPage.content = pageContent;
    
    if (pageContent) {
      if (!pageContent.hasLoadContentFromCMS) {
        results.issues.push(`Page officielle ${pageName}: Fonction loadContentFromCMS manquante`);
      }
      if (!pageContent.hasPolling) {
        results.issues.push(`Page officielle ${pageName}: Système de polling manquant`);
      }
      if (!pageContent.hasDebugIndicators) {
        results.issues.push(`Page officielle ${pageName}: Indicateurs de debug manquants`);
      }
    }
  }
  
  if (results.files.cmsPage.exists) {
    const cmsContent = checkFileContent(files.cmsPage, {
      hasCMSLayout: /CMS -/,
      hasSections: /sections/,
      hasEditMode: /editingSection/,
      hasSaveFunction: /handleSave/,
      hasNavigation: /router\.push/
    });
    
    results.files.cmsPage.content = cmsContent;
    
    if (cmsContent) {
      if (!cmsContent.hasCMSLayout) {
        results.issues.push(`Page CMS ${pageName}: Layout CMS manquant`);
      }
      if (!cmsContent.hasSections) {
        results.issues.push(`Page CMS ${pageName}: Système de sections manquant`);
      }
    }
  }
  
  if (results.files.apiGet.exists) {
    const apiContent = checkFileContent(files.apiGet, {
      hasExecuteQuery: /executeQuery/,
      hasPagePath: new RegExp(`'${pageName}'`),
      hasJSONResponse: /Response\.json/
    });
    
    results.files.apiGet.content = apiContent;
    
    if (apiContent) {
      if (!apiContent.hasExecuteQuery) {
        results.issues.push(`API GET ${pageName}: Import executeQuery manquant`);
      }
      if (!apiContent.hasPagePath) {
        results.issues.push(`API GET ${pageName}: Page path incorrect`);
      }
    }
  }
  
  if (results.files.apiPost.exists) {
    const apiContent = checkFileContent(files.apiPost, {
      hasExecuteQuery: /executeQuery/,
      hasPagePath: new RegExp(`'${pageName}'`),
      hasJSONResponse: /Response\.json/,
      hasPostMethod: /POST/
    });
    
    results.files.apiPost.content = apiContent;
    
    if (apiContent) {
      if (!apiContent.hasExecuteQuery) {
        results.issues.push(`API POST ${pageName}: Import executeQuery manquant`);
      }
      if (!apiContent.hasPagePath) {
        results.issues.push(`API POST ${pageName}: Page path incorrect`);
      }
    }
  }
  
  return results;
}

// Fonction principale de vérification
function runStructureCheck() {
  console.log('🔍 VÉRIFICATION DE LA STRUCTURE DES FICHIERS CMS');
  console.log('='.repeat(60));
  
  const results = [];
  let totalIssues = 0;
  
  for (const pageName of PAGES_TO_CHECK) {
    console.log(`\n📄 Vérification de: ${pageName}`);
    console.log('─'.repeat(40));
    
    const pageResults = checkPageStructure(pageName);
    results.push(pageResults);
    
    // Afficher les résultats
    for (const [fileType, fileInfo] of Object.entries(pageResults.files)) {
      const status = fileInfo.exists ? '✅' : '❌';
      console.log(`  ${status} ${fileType}: ${fileInfo.path}`);
      
      if (fileInfo.content) {
        const contentChecks = Object.entries(fileInfo.content)
          .map(([check, passed]) => `${check}: ${passed ? '✅' : '❌'}`)
          .join(', ');
        console.log(`    Contenu: ${contentChecks}`);
      }
    }
    
    if (pageResults.issues.length > 0) {
      console.log(`  ⚠️  Problèmes détectés:`);
      pageResults.issues.forEach(issue => {
        console.log(`    - ${issue}`);
        totalIssues++;
      });
    } else {
      console.log(`  ✅ Aucun problème détecté`);
    }
  }
  
  // Résumé final
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ DE LA VÉRIFICATION');
  console.log('='.repeat(60));
  
  const totalFiles = PAGES_TO_CHECK.length * 5; // 5 fichiers par page
  const existingFiles = results.reduce((sum, result) => {
    return sum + Object.values(result.files).filter(file => file.exists).length;
  }, 0);
  
  console.log(`📁 Fichiers attendus: ${totalFiles}`);
  console.log(`📁 Fichiers existants: ${existingFiles}`);
  console.log(`📁 Fichiers manquants: ${totalFiles - existingFiles}`);
  console.log(`⚠️  Problèmes détectés: ${totalIssues}`);
  
  if (totalIssues > 0) {
    console.log('\n❌ PROBLÈMES À CORRIGER:');
    console.log('─'.repeat(40));
    
    results.forEach(result => {
      if (result.issues.length > 0) {
        console.log(`\n${result.pageName}:`);
        result.issues.forEach(issue => {
          console.log(`  - ${issue}`);
        });
      }
    });
  } else {
    console.log('\n✅ Tous les fichiers sont correctement configurés !');
  }
  
  return results;
}

// Exécution du script
if (require.main === module) {
  runStructureCheck();
}

module.exports = { runStructureCheck, checkPageStructure };
