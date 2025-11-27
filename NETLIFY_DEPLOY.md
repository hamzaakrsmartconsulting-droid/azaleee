# 🚀 Guide de Déploiement sur Netlify

Ce guide vous explique comment déployer l'application Azalée Patrimoine sur Netlify.

## 📋 Prérequis

- Un compte Netlify (gratuit sur [netlify.com](https://www.netlify.com))
- Votre code sur GitHub, GitLab ou Bitbucket
- Node.js 18+ installé localement (pour tester le build)

## 🔧 Configuration

### 1. Préparer le Projet

Le fichier `netlify.toml` est déjà configuré avec :
- ✅ Plugin Netlify Next.js
- ✅ Headers de sécurité
- ✅ Cache pour les assets statiques
- ✅ Configuration Node.js 18

### 2. Variables d'Environnement

Sur Netlify, vous devez configurer les variables d'environnement suivantes :

#### Variables Requises (selon vos besoins)

**Pour le Front-end uniquement :**
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://votre-site.netlify.app
```

**Si vous utilisez l'API Stock :**
```env
STOCK_API_PROVIDER=RAPIDAPI_YH_FINANCE
STOCK_API_KEY=votre_cle_api
STOCK_API_BASE_URL=https://votre-api-provider.com
CAC40_SYMBOL=^FCHI
NASDAQ_SYMBOL=^NDX
DOW_JONES_SYMBOL=^DJI
EUR_USD_SYMBOL=EURUSD=X
```

**Si vous utilisez la base de données MySQL (nécessite un service externe) :**
```env
DB_HOST=votre_host_mysql
DB_USER=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe
DB_NAME=votre_base_de_donnees
DB_PORT=3306
```

**Pour l'authentification CMS :**
```env
JWT_SECRET=votre_secret_jwt_securise
SESSION_SECRET=votre_secret_session_securise
```

⚠️ **Note importante** : Netlify ne supporte pas MySQL directement. Si vous avez besoin d'une base de données, vous devrez utiliser :
- Un service externe (PlanetScale, Railway, Supabase, etc.)
- Ou désactiver les fonctionnalités nécessitant MySQL pour le déploiement front-end uniquement

### 3. Déploiement

#### Option A : Déploiement via l'Interface Netlify (Recommandé)

1. **Connecter votre Repository**
   - Allez sur [app.netlify.com](https://app.netlify.com)
   - Cliquez sur "Add new site" → "Import an existing project"
   - Connectez votre compte GitHub/GitLab/Bitbucket
   - Sélectionnez votre repository

2. **Configurer le Build**
   - **Build command** : `npm run build`
   - **Publish directory** : `.next` (sera géré automatiquement par le plugin)
   - Netlify détectera automatiquement le fichier `netlify.toml`

3. **Ajouter les Variables d'Environnement**
   - Allez dans "Site settings" → "Environment variables"
   - Ajoutez toutes les variables nécessaires (voir section 2)

4. **Déployer**
   - Cliquez sur "Deploy site"
   - Netlify va automatiquement :
     - Installer les dépendances (`npm install`)
     - Exécuter le build (`npm run build`)
     - Déployer l'application

#### Option B : Déploiement via Netlify CLI

1. **Installer Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Se connecter**
   ```bash
   netlify login
   ```

3. **Initialiser le site**
   ```bash
   netlify init
   ```
   - Suivez les instructions pour connecter votre site

4. **Déployer**
   ```bash
   netlify deploy --prod
   ```

   Pour un déploiement de test (preview) :
   ```bash
   netlify deploy
   ```

## 🔍 Vérification Post-Déploiement

1. **Vérifier le Build**
   - Allez dans "Deploys" sur votre dashboard Netlify
   - Vérifiez que le build s'est terminé avec succès (statut "Published")

2. **Tester l'Application**
   - Visitez votre URL Netlify (ex: `https://votre-site.netlify.app`)
   - Testez les principales pages
   - Vérifiez que les images se chargent correctement

3. **Vérifier les Logs**
   - En cas d'erreur, consultez les logs dans "Deploys" → "Deploy log"

## 🐛 Résolution de Problèmes

### Erreur : "Module not found"
- Vérifiez que toutes les dépendances sont dans `package.json`
- Exécutez `npm install` localement pour vérifier

### Erreur : "Build failed"
- Vérifiez les logs de build sur Netlify
- Testez le build localement : `npm run build`
- Vérifiez que toutes les variables d'environnement sont configurées

### Erreur : "Database connection failed"
- Si vous utilisez MySQL, assurez-vous d'utiliser un service externe
- Vérifiez que les variables d'environnement DB_* sont correctement configurées
- Vérifiez que votre base de données accepte les connexions externes

### Images ne se chargent pas
- Vérifiez que les images sont dans le dossier `public/images/`
- Vérifiez les chemins dans votre code (doivent commencer par `/images/`)

## 📝 Notes Importantes

1. **Base de Données** : Netlify ne supporte pas MySQL. Pour les fonctionnalités nécessitant une base de données :
   - Utilisez un service externe (PlanetScale, Railway, Supabase)
   - Ou désactivez ces fonctionnalités pour un déploiement front-end uniquement

2. **API Routes** : Les routes API Next.js fonctionnent sur Netlify via les fonctions serverless

3. **Variables d'Environnement** : Les variables commençant par `NEXT_PUBLIC_` sont exposées au client. Ne mettez pas de secrets dans ces variables.

4. **Build Time** : Le build peut prendre 3-5 minutes selon la taille de votre application

## 🔗 Ressources

- [Documentation Netlify Next.js](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Netlify Plugin Next.js](https://github.com/netlify/netlify-plugin-nextjs)
- [Variables d'Environnement Netlify](https://docs.netlify.com/environment-variables/overview/)

