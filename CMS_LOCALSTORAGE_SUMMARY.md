# CMS Pages Saved in LocalStorage

Based on the codebase analysis, here are ALL the CMS pages that save data to localStorage:

## 🏠 **Main Pages**
- `homepageContent` - Main homepage CMS content
- `outilsPageContent` - Tools page content
- `immobilierPageContent` - Real estate main page
- `placementsPageContent` - Investments main page
- `retraitePageContent` - Retirement main page
- `patrimoinePageContent` - Wealth management main page
- `fiscalitePageContent` - Tax main page

## 🏢 **Real Estate Pages (Immobilier)**
- `sciPageContent` - SCI (Société Civile Immobilière)
- `immobilierNeufPageContent` - New real estate
- `scellierPageContent` - Scellier law
- `robienPageContent` - Robien law
- `vefaPageContent` - VEFA (Vente en l'État Futur d'Achèvement)
- `faireConstruirePageContent` - Building construction
- `plusValueImmobilierePageContent` - Real estate capital gains
- `creditImmobilierPtzPageContent` - Real estate credit PTZ
- `investissementLocatifPageContent` - Rental investment
- `immeubles-de-rapportPageContent` - Income properties
- `investissement-immobilier-main-page-content` - Real estate investment main page
- `lmnpPageContent` - LMNP (Loueur en Meublé Non Professionnel)

## 💰 **Investment Pages (Placements)**
- `livretPageContent` - Savings accounts
- `contratCapitalisationPageContent` - Capitalization contracts
- `compteTitresPageContent` - Securities accounts
- `assuranceVieLuxembourgPageContent` - Luxembourg life insurance
- `assuranceViePageContent` - Life insurance

## 🏛️ **Tax Pages (Fiscalité)**
- `reductionsImpotDeficitFoncierPageContent` - Tax reductions for rental deficit
- `tranchesBaremesPlafondsPageContent` - Tax brackets and ceilings
- `loisFiscalesPageContent` - Tax laws

## 👴 **Retirement Pages (Retraite)**
- `retraitePrevoyanceProtectionPageContent` - Retirement insurance and protection
- `retraiteAutrePageContent` - Other retirement topics
- `retraiteRachatTrimestresPageContent` - Retirement quarters buyback
- `retraitePlanRetraitePageContent` - Retirement planning
- `retraiteSimulationPageContent` - Retirement simulation

## 🏛️ **Wealth Management Pages (Patrimoine)**
- `donationOnereusePageContent` - Onerous donations
- `donationGratuitePageContent` - Free donations
- `successionHeritagePageContent` - Inheritance and succession
- `conseilsPageContent` - Wealth management advice
- `bilanPageContent` - Wealth assessment
- `transmissionPageContent` - Wealth transmission
- `protectionFamillePageContent` - Family protection

## 📊 **Total Count**
**40+ CMS pages** are configured to save data to localStorage!

## 🔍 **How to Check localStorage Data**

To see what's actually saved in your browser's localStorage, open the browser console and run:

```javascript
// Check all localStorage keys
Object.keys(localStorage).filter(key => key.includes('PageContent'))

// Check specific page content
JSON.parse(localStorage.getItem('homepageContent'))

// Check all CMS content at once
Object.keys(localStorage).filter(key => key.includes('PageContent')).forEach(key => {
  console.log(`\n=== ${key} ===`);
  try {
    const data = JSON.parse(localStorage.getItem(key));
    console.log('Keys:', Object.keys(data));
  } catch (e) {
    console.log('Raw data:', localStorage.getItem(key));
  }
});
```

## 💾 **Storage Pattern**
Each CMS page follows this pattern:
1. **Key**: `[pageName]PageContent`
2. **Data**: JSON object with all page content
3. **Fallback**: If database fails, saves to localStorage
4. **Event**: Dispatches `contentUpdated` event when saved

## 🚀 **Usage**
When you make changes in any CMS page and click "Sauvegarder" (Save), the data is automatically saved to localStorage with the corresponding key name.




