# 🗑️ Files to Remove - Cleanup List

This document lists all unnecessary files that should be removed from the project.

## 📋 Summary
- **Total files to remove**: 17 files
- **Categories**: Test scripts, old files, accidental files, one-time scripts

---

## 🧪 **1. Test/Debug Scripts** (6 files)
These are development-only scripts that shouldn't be in production:

1. `browser-console-script.js` - Browser console utility for debugging
2. `check-file-structure.js` - File structure validation script
3. `check-localstorage.js` - LocalStorage inspection utility
4. `test-cms-apis.js` - CMS API testing script
5. `test-complete-system.js` - Complete system testing script
6. `test-pages.js` - Page testing script

**Reason**: These are development/debugging tools. If needed, they should be in a separate `scripts/` or `tools/` directory, not in the root.

---

## 📜 **2. Old/Broken Files** (6 files)
These are outdated or broken versions of files:

1. `src/app/cms/dashboard/page_old.jsx` - Old dashboard version
2. `src/app/cms/fiscalite/page_old_json.jsx` - Old JSON-based fiscalité page
3. `src/app/cms/homepage/page_old_json.jsx` - Old JSON-based homepage
4. `src/app/cms/immobilier/cms/page_broken.jsx` - Broken file (should not exist)
5. `src/app/cms/immobilier/cms/page_old_structure.jsx` - Old structure version
6. `src/app/cms/placements/cms/page_old_generic.jsx` - Old generic version

**Reason**: These are backup/old versions. If the current versions work, these can be safely removed. If you need backups, use version control (Git) instead.

---

## 🔧 **3. One-time Fix Scripts** (1 file)
Scripts used for one-time fixes:

1. `fix-patrimoine-image.js` - One-time database fix for patrimoine image path

**Reason**: This was a one-time fix. If the fix has been applied, this script is no longer needed.

---

## ❌ **4. Accidental Files** (4 files)
These appear to be command output artifacts:

1. `er.name` - Contains git log output (accidental file creation)
2. `tall bcryptjs jsonwebtoken` - Command output artifact
3. `tatus` - Git status output (accidental file creation)
4. `tatus --porcelain` - Git status output (accidental file creation)

**Reason**: These are clearly accidental files created from command output. They serve no purpose.

---

## 📄 **5. PDF File** (1 file)
Documentation file that should be organized:

1. `Vos mentions légales.pdf` - Legal mentions document

**Reason**: Should be moved to `docs/` or `public/documents/` directory, or removed if not needed in the repository.

---

## 🖼️ **6. Documentation Images** (Optional)
Consider organizing these:

- `image/` folder - Contains documentation screenshots
  - `AZALEE_COLORS/` - Color scheme documentation images
  - `CHATBOT_DATABASE_INTEGRATION/` - Integration documentation
  - `CMS_DYNAMIC_FEATURES/` - CMS feature documentation
  - `CMS_TESTING_GUIDE/` - Testing guide images
  - `META_DESCRIPTIONS_IMMOBILIER/` - Meta descriptions documentation

**Reason**: These are documentation images. Consider:
- Moving to `docs/images/` if keeping
- Removing if documentation is up-to-date elsewhere
- Keeping if actively used in documentation

---

## 🚀 **Quick Removal Commands**

### Windows PowerShell:
```powershell
# Test scripts
Remove-Item browser-console-script.js, check-file-structure.js, check-localstorage.js, test-cms-apis.js, test-complete-system.js, test-pages.js

# Old files
Remove-Item "src\app\cms\dashboard\page_old.jsx"
Remove-Item "src\app\cms\fiscalite\page_old_json.jsx"
Remove-Item "src\app\cms\homepage\page_old_json.jsx"
Remove-Item "src\app\cms\immobilier\cms\page_broken.jsx"
Remove-Item "src\app\cms\immobilier\cms\page_old_structure.jsx"
Remove-Item "src\app\cms\placements\cms\page_old_generic.jsx"

# One-time scripts
Remove-Item fix-patrimoine-image.js

# Accidental files
Remove-Item er.name, "tall bcryptjs jsonwebtoken", tatus, "tatus --porcelain"
```

### Linux/Mac:
```bash
# Test scripts
rm browser-console-script.js check-file-structure.js check-localstorage.js test-cms-apis.js test-complete-system.js test-pages.js

# Old files
rm src/app/cms/dashboard/page_old.jsx
rm src/app/cms/fiscalite/page_old_json.jsx
rm src/app/cms/homepage/page_old_json.jsx
rm src/app/cms/immobilier/cms/page_broken.jsx
rm src/app/cms/immobilier/cms/page_old_structure.jsx
rm src/app/cms/placements/cms/page_old_generic.jsx

# One-time scripts
rm fix-patrimoine-image.js

# Accidental files
rm er.name "tall bcryptjs jsonwebtoken" tatus "tatus --porcelain"
```

---

## ⚠️ **Before Removing**

1. **Backup**: Make sure you have a Git commit or backup
2. **Verify**: Check that current versions of files work correctly
3. **Test**: Run the application to ensure nothing breaks
4. **Documentation**: Update any documentation that references these files

---

## ✅ **After Cleanup**

- Project will be cleaner and easier to navigate
- Reduced repository size
- Less confusion about which files are current
- Better organization

---

**Total files to remove**: 17 files
**Estimated space saved**: ~50-100 KB (excluding images)


