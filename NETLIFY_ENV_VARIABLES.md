# 🔐 Variables d'Environnement pour Netlify

Ce document liste toutes les variables d'environnement nécessaires pour déployer l'application Azalée Patrimoine sur Netlify.

## 📋 Comment ajouter les variables sur Netlify

1. Allez sur [app.netlify.com](https://app.netlify.com)
2. Sélectionnez votre site
3. Allez dans **Site settings** → **Environment variables**
4. Cliquez sur **Add a variable**
5. Ajoutez chaque variable avec sa valeur

---

## ✅ Variables Requises (Minimum)

Ces variables sont **essentielles** pour que l'application fonctionne :

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://votre-site.netlify.app
```

**Note** : Remplacez `votre-site.netlify.app` par l'URL réelle de votre site Netlify.

---

## 🗄️ Variables pour la Base de Données MySQL

⚠️ **Important** : Netlify ne supporte pas MySQL directement. Vous devez utiliser un service externe (PlanetScale, Railway, Supabase, etc.).

Si vous utilisez une base de données externe :

```env
# Configuration MySQL (service externe requis)
DB_HOST=votre_host_mysql
DB_USER=votre_utilisateur
DB_PASSWORD=votre_mot_de_passe
DB_NAME=votre_base_de_donnees
DB_PORT=3306

# Ou pour le CMS
MYSQL_HOST=votre_host_mysql
MYSQL_PORT=3306
MYSQL_USER=votre_utilisateur
MYSQL_PASSWORD=votre_mot_de_passe
MYSQL_DATABASE=azalee_cms
```

**Services recommandés** :
- [PlanetScale](https://planetscale.com/) - MySQL serverless
- [Railway](https://railway.app/) - MySQL avec déploiement facile
- [Supabase](https://supabase.com/) - PostgreSQL (nécessite migration)
- [Aiven](https://aiven.io/) - MySQL géré

---

## 📊 Variables pour l'API Stock (Optionnel)

Si vous utilisez les fonctionnalités de données boursières :

```env
# Provider API Stock
STOCK_API_PROVIDER=RAPIDAPI_YH_FINANCE
# Ou: YAHOO_FINANCE, ALPHA_VANTAGE, FINNHUB, IEX_CLOUD, POLYGON

# Configuration API
STOCK_API_BASE_URL=https://votre-api-provider.com
STOCK_API_KEY=votre_cle_api_rapidapi

# Symboles boursiers (optionnel - valeurs par défaut disponibles)
CAC40_SYMBOL=^FCHI
NASDAQ_SYMBOL=^NDX
DOW_JONES_SYMBOL=^DJI
EUR_USD_SYMBOL=EURUSD=X
```

**Pour obtenir une clé API** :
- [RapidAPI](https://rapidapi.com/) - Recherchez "Yahoo Finance" ou "Stock API"
- [Alpha Vantage](https://www.alphavantage.co/support/#api-key) - Gratuit
- [Finnhub](https://finnhub.io/register) - Gratuit

---

## 🔐 Variables pour l'Authentification (CMS)

Si vous utilisez le CMS avec authentification :

```env
# JWT Secret pour l'authentification CMS
JWT_SECRET=votre_secret_jwt_tres_securise_ici
SESSION_SECRET=votre_secret_session_tres_securise_ici

# NextAuth (si utilisé)
NEXTAUTH_URL=https://votre-site.netlify.app
NEXTAUTH_SECRET=votre-nextauth-secret
```

**⚠️ Sécurité** : Utilisez des secrets forts et uniques. Générez-les avec :
```bash
# Pour JWT_SECRET et SESSION_SECRET
openssl rand -base64 32

# Ou utilisez un générateur en ligne
```

---

## 🗺️ Variables pour Mapbox (Optionnel)

Si vous utilisez les cartes interactives :

```env
NEXT_PUBLIC_MAPBOX_TOKEN=votre_token_mapbox
```

**Pour obtenir un token Mapbox** :
1. Créez un compte sur [mapbox.com](https://account.mapbox.com/)
2. Allez dans **Account** → **Access tokens**
3. Créez un nouveau token (gratuit jusqu'à 50 000 requêtes/mois)

---

## 📝 Liste Complète des Variables

### Variables Essentielles
- ✅ `NODE_ENV=production`
- ✅ `NEXT_PUBLIC_APP_URL=https://votre-site.netlify.app`

### Variables Base de Données (si utilisée)
- `DB_HOST` ou `MYSQL_HOST`
- `DB_USER` ou `MYSQL_USER`
- `DB_PASSWORD` ou `MYSQL_PASSWORD`
- `DB_NAME` ou `MYSQL_DATABASE`
- `DB_PORT` ou `MYSQL_PORT`

### Variables API Stock (si utilisée)
- `STOCK_API_PROVIDER`
- `STOCK_API_BASE_URL`
- `STOCK_API_KEY`
- `CAC40_SYMBOL` (optionnel)
- `NASDAQ_SYMBOL` (optionnel)
- `DOW_JONES_SYMBOL` (optionnel)
- `EUR_USD_SYMBOL` (optionnel)

### Variables Authentification (si CMS utilisé)
- `JWT_SECRET`
- `SESSION_SECRET`
- `NEXTAUTH_URL` (si NextAuth utilisé)
- `NEXTAUTH_SECRET` (si NextAuth utilisé)

### Variables Mapbox (si cartes utilisées)
- `NEXT_PUBLIC_MAPBOX_TOKEN`

---

## 🔒 Bonnes Pratiques de Sécurité

1. **Ne jamais commiter les secrets** : Les variables d'environnement ne doivent jamais être dans le code source
2. **Utiliser des secrets forts** : Minimum 32 caractères aléatoires pour les secrets
3. **Variables `NEXT_PUBLIC_*`** : Ces variables sont exposées au client. Ne mettez jamais de secrets dedans
4. **Rotation régulière** : Changez les secrets régulièrement, surtout en cas de compromission
5. **Accès limité** : Limitez l'accès aux variables d'environnement sur Netlify

---

## 🧪 Test des Variables

Après avoir configuré les variables, testez votre déploiement :

1. **Déployez sur Netlify**
2. **Vérifiez les logs de build** pour détecter les erreurs
3. **Testez l'application** sur l'URL Netlify
4. **Vérifiez la console du navigateur** pour les erreurs liées aux variables `NEXT_PUBLIC_*`

---

## 📚 Ressources

- [Documentation Netlify - Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Next.js - Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Guide de déploiement Netlify](./NETLIFY_DEPLOY.md)

---

## ⚠️ Notes Importantes

1. **Base de données** : Si votre application nécessite MySQL, vous DEVEZ utiliser un service externe. Netlify ne supporte pas MySQL nativement.

2. **Variables `NEXT_PUBLIC_*`** : Ces variables sont compilées dans le bundle JavaScript et sont visibles côté client. Ne mettez jamais de secrets dedans.

3. **Variables sensibles** : Les variables comme `JWT_SECRET`, `DB_PASSWORD`, etc. doivent être gardées secrètes et ne jamais être partagées publiquement.

4. **Redéploiement** : Après avoir ajouté ou modifié des variables d'environnement, vous devez redéployer votre site pour que les changements prennent effet.

