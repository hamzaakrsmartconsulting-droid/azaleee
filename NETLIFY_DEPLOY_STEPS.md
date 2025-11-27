# 🚀 Guide de Déploiement Netlify - Étapes Détaillées

## 📋 Prérequis

- ✅ Code poussé sur GitHub (déjà fait : `hamzaakrsmartconsulting-droid/azaleee`)
- ✅ Compte Netlify créé
- ✅ Fichier `netlify.toml` présent (déjà configuré)

---

## 🎯 Déploiement via l'Interface Netlify (Recommandé)

### Étape 1 : Connecter le Repository

1. Allez sur [app.netlify.com](https://app.netlify.com)
2. Connectez-vous ou créez un compte
3. Cliquez sur **"Add new site"** → **"Import an existing project"**
4. Choisissez **"Deploy with GitHub"**
5. Autorisez Netlify à accéder à votre compte GitHub
6. Sélectionnez le repository : **`hamzaakrsmartconsulting-droid/azaleee`**
7. Sélectionnez la branche : **`prod`** (ou `main` si vous avez poussé sur main)

### Étape 2 : Configurer le Build

Netlify devrait détecter automatiquement la configuration grâce à `netlify.toml`, mais vérifiez :

- **Build command** : `npm run build`
- **Publish directory** : `.next` (géré automatiquement par le plugin)
- **Base directory** : (laisser vide)

### Étape 3 : Ajouter les Variables d'Environnement

**AVANT de cliquer sur "Deploy site"**, ajoutez les variables :

1. Cliquez sur **"Show advanced"** ou allez dans **"Site settings"** → **"Environment variables"**
2. Ajoutez les variables suivantes :

#### Variables Minimum Requises :

```
NODE_ENV = production
NEXT_PUBLIC_APP_URL = https://votre-site.netlify.app
```

**Note** : Remplacez `votre-site.netlify.app` par l'URL que Netlify vous donnera après le premier déploiement.

#### Variables Optionnelles (selon vos besoins) :

Si vous utilisez l'API Stock :
```
STOCK_API_PROVIDER = RAPIDAPI_YH_FINANCE
STOCK_API_KEY = votre_cle_api
STOCK_API_BASE_URL = https://votre-api-provider.com
```

Si vous utilisez MySQL (service externe) :
```
DB_HOST = votre_host_mysql
DB_USER = votre_utilisateur
DB_PASSWORD = votre_mot_de_passe
DB_NAME = votre_base_de_donnees
DB_PORT = 3306
```

Si vous utilisez le CMS :
```
JWT_SECRET = votre_secret_jwt_securise
SESSION_SECRET = votre_secret_session_securise
```

Si vous utilisez Mapbox :
```
NEXT_PUBLIC_MAPBOX_TOKEN = votre_token_mapbox
```

### Étape 4 : Déployer

1. Cliquez sur **"Deploy site"**
2. Attendez la fin du build (3-5 minutes)
3. Surveillez les logs pour détecter d'éventuelles erreurs

### Étape 5 : Vérifier le Déploiement

1. Une fois terminé, votre site sera accessible sur une URL comme : `https://random-name-12345.netlify.app`
2. Vous pouvez personnaliser le nom dans **"Site settings"** → **"Change site name"**
3. Testez votre site pour vérifier que tout fonctionne

---

## 🔧 Configuration Post-Déploiement

### Mettre à jour NEXT_PUBLIC_APP_URL

Après le premier déploiement :

1. Allez dans **"Site settings"** → **"Environment variables"**
2. Trouvez `NEXT_PUBLIC_APP_URL`
3. Modifiez la valeur pour utiliser votre URL Netlify réelle
4. **Redéployez** le site (ou attendez le prochain déploiement automatique)

### Personnaliser le Nom du Site

1. Allez dans **"Site settings"** → **"Change site name"**
2. Entrez un nom personnalisé (ex: `azalee-patrimoine`)
3. Votre URL deviendra : `https://azalee-patrimoine.netlify.app`

---

## 🔄 Déploiements Automatiques

Par défaut, Netlify déploie automatiquement à chaque push sur la branche connectée.

Pour changer la branche :
1. **Site settings** → **Build & deploy** → **Continuous Deployment**
2. Modifiez la branche de production

---

## 🐛 Résolution de Problèmes

### Erreur : "Build failed"

1. Consultez les **logs de build** dans l'onglet **"Deploys"**
2. Vérifiez que toutes les variables d'environnement sont configurées
3. Testez le build localement : `npm run build`

### Erreur : "Module not found"

- Vérifiez que toutes les dépendances sont dans `package.json`
- Le build Netlify installe automatiquement les dépendances

### Erreur : "Database connection failed"

- Si vous utilisez MySQL, assurez-vous d'utiliser un service externe
- Vérifiez que les variables `DB_*` sont correctement configurées
- Vérifiez que votre base de données accepte les connexions externes

### Images ne se chargent pas

- Vérifiez que les images sont dans `public/images/`
- Vérifiez les chemins dans votre code (doivent commencer par `/images/`)

---

## 📚 Ressources

- [Documentation Netlify](https://docs.netlify.com/)
- [Netlify Next.js Plugin](https://github.com/netlify/netlify-plugin-nextjs)
- [Variables d'Environnement Netlify](./NETLIFY_ENV_VARIABLES.md)

---

## ✅ Checklist de Déploiement

- [ ] Code poussé sur GitHub
- [ ] Repository connecté à Netlify
- [ ] Variables d'environnement configurées
- [ ] Build réussi
- [ ] Site accessible
- [ ] `NEXT_PUBLIC_APP_URL` mis à jour avec l'URL réelle
- [ ] Nom du site personnalisé (optionnel)

---

**Besoin d'aide ?** Consultez les logs de build sur Netlify ou le guide détaillé [NETLIFY_DEPLOY.md](./NETLIFY_DEPLOY.md)

