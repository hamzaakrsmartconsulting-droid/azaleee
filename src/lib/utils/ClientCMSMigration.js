// Client-side CMS Migration Utility
// This utility runs in the browser to migrate localStorage to database

export class ClientCMSMigration {
  // Migrate all localStorage CMS content to database via API
  static async migrateFromLocalStorage() {
    const migrationResults = [];
    
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
          
          // Save to database via API
          const response = await fetch('/api/pages/content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              pagePath: pagePath,
              pageType: 'cms',
              content: content,
              metadata: {
                migratedFrom: 'localStorage',
                migratedAt: new Date().toISOString(),
                originalKey: key
              }
            })
          });

          if (response.ok) {
            migrationResults.push({
              key,
              pagePath,
              status: 'success',
              message: 'Migrated successfully'
            });
          } else {
            const errorData = await response.json();
            migrationResults.push({
              key,
              pagePath,
              status: 'error',
              message: errorData.message || 'API error'
            });
          }
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

  // Get migration status from API
  static async getMigrationStatus() {
    try {
      const response = await fetch('/api/cms/migrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'status' })
      });

      if (response.ok) {
        const result = await response.json();
        return result.status;
      } else {
        throw new Error('Failed to get migration status');
      }
    } catch (error) {
      return {
        error: error.message,
        migrationComplete: false
      };
    }
  }
}

