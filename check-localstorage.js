// Utility script to check localStorage content
// Run this in the browser console to see all saved CMS pages

function checkLocalStorageCMS() {
  console.log('=== CMS LocalStorage Inspector ===');
  
  // Get all localStorage keys
  const keys = Object.keys(localStorage);
  console.log('All localStorage keys:', keys);
  
  // Look for CMS-related keys
  const cmsKeys = keys.filter(key => 
    key.includes('homepageContent') || 
    key.includes('cms') || 
    key.includes('page') ||
    key.includes('content')
  );
  
  console.log('\n=== CMS-Related Keys ===');
  cmsKeys.forEach(key => {
    console.log(`\n--- ${key} ---`);
    try {
      const data = JSON.parse(localStorage.getItem(key));
      console.log('Data type:', typeof data);
      console.log('Data preview:', JSON.stringify(data, null, 2).substring(0, 500) + '...');
      
      // If it's an object, show its keys
      if (typeof data === 'object' && data !== null) {
        console.log('Object keys:', Object.keys(data));
      }
    } catch (error) {
      console.log('Raw data:', localStorage.getItem(key));
    }
  });
  
  // Check for the main homepage content
  const homepageContent = localStorage.getItem('homepageContent');
  if (homepageContent) {
    console.log('\n=== Homepage Content ===');
    try {
      const parsed = JSON.parse(homepageContent);
      console.log('Sections available:', Object.keys(parsed));
      console.log('Section order:', parsed.sectionOrder);
    } catch (error) {
      console.log('Error parsing homepage content:', error);
    }
  }
  
  return {
    allKeys: keys,
    cmsKeys: cmsKeys,
    homepageContent: homepageContent ? JSON.parse(homepageContent) : null
  };
}

// Export for use
if (typeof window !== 'undefined') {
  window.checkLocalStorageCMS = checkLocalStorageCMS;
  console.log('Run checkLocalStorageCMS() in the browser console to inspect CMS data');
} else {
  console.log('This script should be run in a browser environment');
}




