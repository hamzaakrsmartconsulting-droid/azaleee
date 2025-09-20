// CMS Database Migration Utility
// This utility helps migrate from localStorage to MySQL database

import { PageContent } from '../models/PageContent';

export class CMSMigration {
  // Migrate all localStorage CMS content to database
  static async migrateFromLocalStorage() {
    const migrationResults = [];
    
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      throw new Error('localStorage is only available in browser environment');
    }
    
    // List of all CMS localStorage keys
    const cmsKeys = [
      'homepageContent',
      'outilsPageContent',
      'immobilierPageContent',
      'placementsPageContent',
      'retraitePageContent',
      'patrimoinePageContent',
      'fiscalitePageContent',
      'sciPageContent',
      'immobilierNeufPageContent',
      'scellierPageContent',
      'robienPageContent',
      'vefaPageContent',
      'faireConstruirePageContent',
      'plusValueImmobilierePageContent',
      'creditImmobilierPtzPageContent',
      'investissementLocatifPageContent',
      'immeubles-de-rapportPageContent',
      'investissement-immobilier-main-page-content',
      'lmnpPageContent',
      'livretPageContent',
      'contratCapitalisationPageContent',
      'compteTitresPageContent',
      'assuranceVieLuxembourgPageContent',
      'assuranceViePageContent',
      'reductionsImpotDeficitFoncierPageContent',
      'tranchesBaremesPlafondsPageContent',
      'loisFiscalesPageContent',
      'retraitePrevoyanceProtectionPageContent',
      'retraiteAutrePageContent',
      'retraiteRachatTrimestresPageContent',
      'retraitePlanRetraitePageContent',
      'retraiteSimulationPageContent',
      'donationOnereusePageContent',
      'donationGratuitePageContent',
      'successionHeritagePageContent',
      'conseilsPageContent',
      'bilanPageContent',
      'transmissionPageContent',
      'protectionFamillePageContent'
    ];

    for (const key of cmsKeys) {
      try {
        const localStorageData = localStorage.getItem(key);
        if (localStorageData) {
          const content = JSON.parse(localStorageData);
          const pagePath = this.getPagePathFromKey(key);
          
          const metadata = {
            migratedFrom: 'localStorage',
            migratedAt: new Date().toISOString(),
            originalKey: key
          };

          await PageContent.createOrUpdate(pagePath, content, 'cms', metadata);
          
          migrationResults.push({
            key,
            pagePath,
            status: 'success',
            message: 'Migrated successfully'
          });
        } else {
          migrationResults.push({
            key,
            pagePath: this.getPagePathFromKey(key),
            status: 'skipped',
            message: 'No data in localStorage'
          });
        }
      } catch (error) {
        migrationResults.push({
          key,
          pagePath: this.getPagePathFromKey(key),
          status: 'error',
          message: error.message
        });
      }
    }

    return migrationResults;
  }

  // Convert localStorage key to page path
  static getPagePathFromKey(key) {
    const pathMap = {
      'homepageContent': '/',
      'outilsPageContent': '/outils',
      'immobilierPageContent': '/immobilier',
      'placementsPageContent': '/placements',
      'retraitePageContent': '/retraite',
      'patrimoinePageContent': '/patrimoine',
      'fiscalitePageContent': '/fiscalite',
      'sciPageContent': '/immobilier/sci',
      'immobilierNeufPageContent': '/immobilier/immobilier-neuf',
      'scellierPageContent': '/immobilier/scellier',
      'robienPageContent': '/immobilier/robien',
      'vefaPageContent': '/immobilier/vefa',
      'faireConstruirePageContent': '/immobilier/faire-construire',
      'plusValueImmobilierePageContent': '/immobilier/plus-value-immobiliere',
      'creditImmobilierPtzPageContent': '/immobilier/credit-immobilier-ptz',
      'investissementLocatifPageContent': '/immobilier/investissement-locatif',
      'immeubles-de-rapportPageContent': '/immobilier/immeubles-de-rapport',
      'investissement-immobilier-main-page-content': '/immobilier/investissement-immobilier',
      'lmnpPageContent': '/immobilier/lmnp',
      'livretPageContent': '/placements/livret',
      'contratCapitalisationPageContent': '/placements/contrat-capitalisation',
      'compteTitresPageContent': '/placements/compte-titres',
      'assuranceVieLuxembourgPageContent': '/placements/assurance-vie-luxembourg',
      'assuranceViePageContent': '/placements/assurance-vie',
      'reductionsImpotDeficitFoncierPageContent': '/fiscalite/reductions-impot-deficit-foncier',
      'tranchesBaremesPlafondsPageContent': '/fiscalite/tranches-baremes-plafonds',
      'loisFiscalesPageContent': '/fiscalite/lois-fiscales',
      'retraitePrevoyanceProtectionPageContent': '/retraite/prevoyance-protection',
      'retraiteAutrePageContent': '/retraite/autre',
      'retraiteRachatTrimestresPageContent': '/retraite/rachat-trimestres',
      'retraitePlanRetraitePageContent': '/retraite/plan-retraite',
      'retraiteSimulationPageContent': '/retraite/simulation',
      'donationOnereusePageContent': '/patrimoine/donation-onereuse',
      'donationGratuitePageContent': '/patrimoine/donation-gratuite',
      'successionHeritagePageContent': '/patrimoine/succession-heritage',
      'conseilsPageContent': '/patrimoine/conseils',
      'bilanPageContent': '/patrimoine/bilan',
      'transmissionPageContent': '/patrimoine/transmission',
      'protectionFamillePageContent': '/patrimoine/protection-famille'
    };

    return pathMap[key] || `/${key.replace('PageContent', '').toLowerCase()}`;
  }

  // Clear all CMS data from localStorage after successful migration
  static clearLocalStorageCMS() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      throw new Error('localStorage is only available in browser environment');
    }

    const cmsKeys = Object.keys(localStorage).filter(key => 
      key.includes('PageContent') || key.includes('homepageContent')
    );
    
    cmsKeys.forEach(key => {
      localStorage.removeItem(key);
    });

    return {
      clearedKeys: cmsKeys.length,
      message: `Cleared ${cmsKeys.length} CMS keys from localStorage`
    };
  }

  // Get migration status
  static async getMigrationStatus() {
    try {
      const allPages = await PageContent.getAllByType('cms');
      const migratedPages = allPages.filter(page => 
        page.metadata && page.metadata.migratedFrom === 'localStorage'
      );

      return {
        totalPages: allPages.length,
        migratedPages: migratedPages.length,
        migrationComplete: migratedPages.length > 0,
        pages: allPages.map(page => ({
          path: page.page_path,
          migrated: page.metadata?.migratedFrom === 'localStorage',
          lastModified: page.updated_at
        }))
      };
    } catch (error) {
      return {
        error: error.message,
        migrationComplete: false
      };
    }
  }
}
