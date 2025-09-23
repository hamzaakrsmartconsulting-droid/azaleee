// Browser Console Script to Check CMS LocalStorage Data
// Copy and paste this into your browser's console (F12 -> Console)

function checkAllCMSPages() {
  console.log('🔍 === CMS LocalStorage Inspector ===');
  
  // Get all localStorage keys
  const allKeys = Object.keys(localStorage);
  console.log(`📊 Total localStorage keys: ${allKeys.length}`);
  
  // Filter CMS-related keys
  const cmsKeys = allKeys.filter(key => 
    key.includes('PageContent') || 
    key.includes('homepageContent') ||
    key.includes('cms')
  );
  
  console.log(`📝 CMS-related keys found: ${cmsKeys.length}`);
  
  if (cmsKeys.length === 0) {
    console.log('❌ No CMS pages found in localStorage');
    console.log('💡 Make sure you have visited and saved content in CMS pages');
    return;
  }
  
  console.log('\n📋 === CMS Pages in LocalStorage ===');
  
  cmsKeys.forEach((key, index) => {
    console.log(`\n${index + 1}. 🔑 ${key}`);
    
    try {
      const data = localStorage.getItem(key);
      const parsed = JSON.parse(data);
      
      console.log(`   📊 Data type: ${typeof parsed}`);
      console.log(`   📏 Size: ${data.length} characters`);
      
      if (typeof parsed === 'object' && parsed !== null) {
        const keys = Object.keys(parsed);
        console.log(`   🗂️  Sections: ${keys.length}`);
        console.log(`   📝 Sections: ${keys.join(', ')}`);
        
        // Show some sample content
        if (parsed.hero) {
          console.log(`   🏠 Hero title: ${parsed.hero.title || parsed.heroTitle || 'N/A'}`);
        }
        if (parsed.intro) {
          console.log(`   📖 Intro: ${parsed.intro.title || parsed.introTitle || 'N/A'}`);
        }
      }
      
    } catch (error) {
      console.log(`   ❌ Error parsing: ${error.message}`);
      console.log(`   📄 Raw data preview: ${localStorage.getItem(key).substring(0, 100)}...`);
    }
  });
  
  console.log('\n✅ === Summary ===');
  console.log(`📊 Total CMS pages: ${cmsKeys.length}`);
  console.log(`💾 Total storage used: ${cmsKeys.reduce((total, key) => total + localStorage.getItem(key).length, 0)} characters`);
  
  return {
    totalKeys: allKeys.length,
    cmsKeys: cmsKeys,
    cmsData: cmsKeys.map(key => ({
      key: key,
      data: JSON.parse(localStorage.getItem(key))
    }))
  };
}

// Additional utility functions
function getSpecificPage(key) {
  console.log(`🔍 Getting data for: ${key}`);
  try {
    const data = JSON.parse(localStorage.getItem(key));
    console.log('📊 Full data:', data);
    return data;
  } catch (error) {
    console.log('❌ Error:', error.message);
    return null;
  }
}

function clearCMSPage(key) {
  if (confirm(`Are you sure you want to clear ${key}?`)) {
    localStorage.removeItem(key);
    console.log(`✅ Cleared ${key}`);
  }
}

function clearAllCMS() {
  if (confirm('Are you sure you want to clear ALL CMS data from localStorage?')) {
    const cmsKeys = Object.keys(localStorage).filter(key => 
      key.includes('PageContent') || key.includes('homepageContent')
    );
    cmsKeys.forEach(key => localStorage.removeItem(key));
    console.log(`✅ Cleared ${cmsKeys.length} CMS pages`);
  }
}

// Auto-run the inspection
console.log('🚀 Running CMS LocalStorage inspection...');
const result = checkAllCMSPages();

// Export functions for manual use
window.checkAllCMSPages = checkAllCMSPages;
window.getSpecificPage = getSpecificPage;
window.clearCMSPage = clearCMSPage;
window.clearAllCMS = clearAllCMS;

console.log('\n🛠️  Available functions:');
console.log('- checkAllCMSPages() - Run full inspection');
console.log('- getSpecificPage("key") - Get specific page data');
console.log('- clearCMSPage("key") - Clear specific page');
console.log('- clearAllCMS() - Clear all CMS data');












