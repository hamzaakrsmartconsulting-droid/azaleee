# 🔐 Variables d'Environnement Netlify - Référence Rapide

## ✅ Minimum Requis (Front-end uniquement)

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://votre-site.netlify.app
```

---

## 📋 Liste Complète

### Essentielles
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://votre-site.netlify.app`

### Base de Données (si utilisée - service externe requis)
- `DB_HOST=votre_host` ou `MYSQL_HOST=votre_host`
- `DB_USER=votre_user` ou `MYSQL_USER=votre_user`
- `DB_PASSWORD=votre_password` ou `MYSQL_PASSWORD=votre_password`
- `DB_NAME=votre_db` ou `MYSQL_DATABASE=azalee_cms`
- `DB_PORT=3306` ou `MYSQL_PORT=3306`

### API Stock (optionnel)
- `STOCK_API_PROVIDER=RAPIDAPI_YH_FINANCE`
- `STOCK_API_KEY=votre_cle`
- `STOCK_API_BASE_URL=https://votre-api.com`
- `CAC40_SYMBOL=^FCHI` (optionnel)
- `NASDAQ_SYMBOL=^NDX` (optionnel)
- `DOW_JONES_SYMBOL=^DJI` (optionnel)
- `EUR_USD_SYMBOL=EURUSD=X` (optionnel)

### Authentification (si CMS)
- `JWT_SECRET=votre_secret_jwt`
- `SESSION_SECRET=votre_secret_session`
- `NEXTAUTH_URL=https://votre-site.netlify.app` (si NextAuth)
- `NEXTAUTH_SECRET=votre_secret` (si NextAuth)

### Mapbox (si cartes)
- `NEXT_PUBLIC_MAPBOX_TOKEN=votre_token`

---

## 📝 Comment Ajouter sur Netlify

1. **Site settings** → **Environment variables**
2. Cliquez **Add a variable**
3. Ajoutez **Key** et **Value**
4. Cliquez **Save**
5. **Redéployez** le site

---

## ⚠️ Important

- Les variables `NEXT_PUBLIC_*` sont **visibles côté client** - ne mettez jamais de secrets dedans
- Netlify ne supporte **pas MySQL** - utilisez un service externe (PlanetScale, Railway, etc.)
- Après modification, **redéployez** le site

---

Voir [NETLIFY_ENV_VARIABLES.md](./NETLIFY_ENV_VARIABLES.md) pour plus de détails.

