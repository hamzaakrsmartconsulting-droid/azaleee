# 📊 Project Analysis - Azalée Demo

## 🏗️ **TECHNOLOGY STACK**

### **Frontend**
- **Framework**: Next.js 14.2.0 (App Router)
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.6
- **Icons**: 
  - @heroicons/react 2.2.0
  - react-icons 4.10.1
- **Charts/Visualization**:
  - Recharts 2.15.2
  - Chart.js 4.5.1
  - react-chartjs-2 5.3.1
- **Drag & Drop**: 
  - @hello-pangea/dnd 18.0.1
  - react-beautiful-dnd 13.1.1
- **Maps**: mapbox-gl 3.16.0
- **Typography**: @tailwindcss/typography 0.5.16

### **Backend**
- **Runtime**: Node.js (Next.js API Routes)
- **Database**: MySQL (mysql2 3.14.3)
- **Authentication**: 
  - jsonwebtoken 9.0.2
  - bcryptjs 3.0.2
- **API**: RESTful API via Next.js API routes

### **Development Tools**
- **Linting**: ESLint (eslint-config-next)
- **Formatting**: Prettier 3.5.3
- **Build Tool**: Next.js built-in
- **Package Manager**: npm

### **Deployment**
- **Platform**: Netlify
- **Plugin**: @netlify/plugin-nextjs 5.11.1
- **Configuration**: netlify.toml

### **Other Dependencies**
- **Performance**: critters 0.0.25
- **Component Tagging**: @dhiwise/component-tagger 1.0.10
- **Figma Integration**: figma-developer-mcp 0.5.0

---

## 📁 **PROJECT STRUCTURE**

```
azalee demo/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # Backend API routes
│   │   │   ├── auth/           # Authentication endpoints
│   │   │   ├── cms/            # CMS content management APIs
│   │   │   ├── pages/          # Page content APIs
│   │   │   ├── sara/           # SARA chatbot APIs
│   │   │   └── database/       # Database utilities
│   │   ├── cms/                # CMS admin interface
│   │   │   ├── dashboard/      # CMS dashboard
│   │   │   ├── fiscalite/     # Fiscalité CMS pages
│   │   │   ├── immobilier/    # Immobilier CMS pages
│   │   │   ├── patrimoine/    # Patrimoine CMS pages
│   │   │   ├── placements/    # Placements CMS pages
│   │   │   └── retraite/      # Retraite CMS pages
│   │   ├── fiscalite/         # Public fiscalité pages
│   │   ├── immobilier/        # Public immobilier pages
│   │   ├── patrimoine/        # Public patrimoine pages
│   │   ├── placements/        # Public placements pages
│   │   └── retraite/          # Public retraite pages
│   ├── components/             # React components
│   │   ├── chatbot/           # Chatbot components
│   │   ├── cms/               # CMS components
│   │   ├── common/            # Common/shared components
│   │   ├── fiscalite/         # Fiscalité-specific components
│   │   └── ui/                # UI components
│   ├── lib/                   # Utility libraries
│   │   ├── database.js        # Main database connection
│   │   ├── cmsDatabase.js     # CMS-specific database
│   │   ├── cmsTemplates.js    # CMS templates
│   │   ├── stockApiConfig.js  # Stock API configuration
│   │   └── models/            # Data models
│   └── styles/                # Global styles
├── public/                     # Static assets
│   └── images/                # Image files
├── database/                   # SQL scripts
├── image/                      # Documentation images
└── [config files]             # Configuration files
```

---

## 🗄️ **DATABASE ARCHITECTURE**

### **Main Database** (`azalee_patrimoine`)
- **Tables**:
  - `page_content` - Stores page content (JSON)
  - `user_sessions` - User session management
  - `interactions_chatbot` - Chatbot interactions

### **CMS Database** (`azalee_cms`)
- **Tables**:
  - `cms_users` - CMS user accounts
  - `cms_content` - CMS content storage
  - `cms_sessions` - CMS session management

### **SARA Chatbot Database**
- **Tables**: Managed via `database/sara_chatbot_tables.sql`

---

## 🎯 **KEY FEATURES**

1. **Content Management System (CMS)**
   - Dynamic content editing
   - Page management
   - Section-based content structure
   - Real-time updates

2. **SARA Chatbot**
   - Conversational interface
   - Session management
   - Appointment scheduling
   - Lead management

3. **Multi-domain Content**
   - Fiscalité (Tax)
   - Immobilier (Real Estate)
   - Patrimoine (Heritage)
   - Placements (Investments)
   - Retraite (Retirement)

4. **Authentication & Authorization**
   - JWT-based authentication
   - Role-based access (admin, editor, viewer)
   - Session management

5. **Stock Market Integration**
   - Multiple API providers support
   - Real-time stock data
   - Financial charts

---

## 🗑️ **UNNECESSARY FILES TO REMOVE**

### **1. Test/Debug Scripts** (Development only)
- `browser-console-script.js` - Browser console utility
- `check-file-structure.js` - File structure checker
- `check-localstorage.js` - LocalStorage inspector
- `test-cms-apis.js` - CMS API testing script
- `test-complete-system.js` - System testing script
- `test-pages.js` - Page testing script

### **2. Old/Broken Files**
- `src/app/cms/dashboard/page_old.jsx` - Old dashboard version
- `src/app/cms/fiscalite/page_old_json.jsx` - Old JSON version
- `src/app/cms/homepage/page_old_json.jsx` - Old JSON version
- `src/app/cms/immobilier/cms/page_broken.jsx` - Broken file
- `src/app/cms/immobilier/cms/page_old_structure.jsx` - Old structure
- `src/app/cms/placements/cms/page_old_generic.jsx` - Old generic version

### **3. One-time Fix Scripts**
- `fix-patrimoine-image.js` - One-time database fix script

### **4. Accidental Files** (Command output artifacts)
- `er.name` - Git log output
- `tall bcryptjs jsonwebtoken` - Command output
- `tatus` - Git status output
- `tatus --porcelain` - Git status output

### **5. Documentation Images** (Consider moving to docs/)
- `image/` folder - Contains documentation screenshots
  - Consider moving to `docs/images/` or removing if not needed

### **6. PDF Files** (Should be in docs/)
- `Vos mentions légales.pdf` - Should be in `docs/` or `public/`

---

## 📝 **RECOMMENDATIONS**

### **1. Code Organization**
- ✅ Good separation of concerns (CMS, public pages, API routes)
- ⚠️ Some duplicate database connection files (`database.js` vs `cmsDatabase.js`)
- ⚠️ Multiple old/broken files should be removed

### **2. Database**
- ⚠️ Two separate database connections (consider consolidation)
- ✅ Good use of connection pooling
- ✅ Proper error handling

### **3. Security**
- ✅ JWT authentication implemented
- ✅ Password hashing with bcrypt
- ✅ Environment variables for sensitive data
- ⚠️ Ensure all API routes have proper authentication

### **4. Performance**
- ✅ Image optimization configured
- ✅ Code splitting configured
- ✅ Compression enabled
- ✅ Cache headers configured

### **5. Documentation**
- ✅ Multiple documentation files present
- ⚠️ Some documentation images could be better organized
- ⚠️ Consider consolidating documentation

---

## 🚀 **DEPLOYMENT CONFIGURATION**

### **Netlify Configuration**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18
- Security headers configured
- Cache headers for static assets

### **Environment Variables Required**
- Database credentials (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
- JWT secrets (JWT_SECRET, SESSION_SECRET)
- Stock API configuration
- MySQL CMS credentials (MYSQL_HOST, MYSQL_USER, etc.)

---

## 📊 **PROJECT STATISTICS**

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (JSX)
- **Database**: MySQL
- **API Routes**: 100+ endpoints
- **CMS Pages**: 50+ pages
- **Public Pages**: 50+ pages
- **Components**: 20+ reusable components
- **Dependencies**: 25+ npm packages

---

## ✅ **CLEANUP CHECKLIST**

- [ ] Remove test scripts (6 files)
- [ ] Remove old/broken files (6 files)
- [ ] Remove one-time fix scripts (1 file)
- [ ] Remove accidental files (4 files)
- [ ] Organize documentation images
- [ ] Move PDF to appropriate location
- [ ] Review and consolidate database connections
- [ ] Update .gitignore if needed

---

**Generated**: $(date)
**Project**: Azalée Demo
**Version**: 0.1.0


