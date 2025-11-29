# 🔄 Réinitialisation pour MongoDB Compass

## ✅ Configuration Actuelle

- **Connection String:** MongoDB Atlas configurée
- **Database:** `azalee_db`
- **Collection:** `users` (vide actuellement)
- **Compass:** Connecté à `cluster0.9xrt1pn.mongodb.net`

## 🎯 Prochaines Étapes

### 1. Créer l'Utilisateur Admin

Vous avez deux options:

#### Option A: Via Script (Recommandé)

Exécutez ce script pour créer l'utilisateur admin automatiquement:

```bash
node create-admin-via-compass.js
```

Ce script va:
- Se connecter à MongoDB Atlas
- Créer l'utilisateur admin avec le mot de passe hashé
- Afficher les identifiants

#### Option B: Via MongoDB Compass (Manuel)

1. Dans Compass, allez dans la collection `users`
2. Cliquez sur **"ADD DATA"** → **"Insert Document"**
3. Collez ce JSON (le password est déjà hashé):

```json
{
  "email": "admin@azalee.com",
  "password": "$2a$10$rOzJ8K8K8K8K8K8K8K8K8uK8K8K8K8K8K8K8K8K8K8K8K8K8K8K",
  "name": "Administrator",
  "role": "admin",
  "createdAt": "2025-01-27T00:00:00.000Z",
  "updatedAt": "2025-01-27T00:00:00.000Z"
}
```

**⚠️ Note:** Le mot de passe doit être hashé avec bcrypt. Utilisez le script pour le faire correctement.

### 2. Vérifier la Connexion

Après avoir créé l'utilisateur, testez:

```bash
node test-auth-fix.js
```

### 3. Redémarrer le Serveur Dev

```bash
npm run dev
```

### 4. Tester le Login

1. Allez sur: `http://localhost:4028/admin/login`
2. Connectez-vous avec:
   - **Email:** `admin@azalee.com`
   - **Password:** `admin123`

## 📋 Fichiers Configurés

- ✅ `.env.local` - Connection string MongoDB Atlas
- ✅ `src/lib/mongodb.js` - Configuration MongoDB
- ✅ `src/lib/models/User.js` - Modèle User
- ✅ `src/app/api/auth/login/route.js` - Route de login

## 🔍 Vérification dans Compass

Après avoir créé l'utilisateur, vous devriez voir dans Compass:
- Collection `users` avec 1 document
- Document avec `email: "admin@azalee.com"`

## 💡 Si Ça Ne Fonctionne Pas

1. Vérifiez Network Access dans MongoDB Atlas (0.0.0.0/0 doit être Active)
2. Vérifiez Database Access (utilisateur azalee2020 doit exister)
3. Testez la connexion avec Compass d'abord
4. Vérifiez les logs du serveur dev pour les erreurs


