# 🗄️ Configuration MongoDB Local

## 📥 Étape 1: Installer MongoDB Localement

### Option A: MongoDB Community Server (Recommandé)

1. Téléchargez MongoDB Community Server:
   - Windows: https://www.mongodb.com/try/download/community
   - Sélectionnez Windows et la dernière version
   - Téléchargez le fichier `.msi`

2. Installez MongoDB:
   - Exécutez le fichier `.msi`
   - Choisissez "Complete" installation
   - Cochez "Install MongoDB as a Service"
   - Cochez "Install MongoDB Compass" (optionnel, vous l'avez déjà)
   - Cliquez sur "Install"

3. Vérifiez l'installation:
   - MongoDB devrait démarrer automatiquement comme service Windows
   - Vérifiez dans "Services" (Windows + R → `services.msc`)
   - Cherchez "MongoDB" - il doit être "Running"

### Option B: MongoDB via Docker (Alternative)

Si vous avez Docker installé:

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## 🔧 Étape 2: Configurer la Connection String

Mettez à jour votre `.env.local`:

```env
# MongoDB Local (au lieu de Atlas)
MONGODB_URI=mongodb://localhost:27017/azalee_db

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

## 🔌 Étape 3: Se Connecter avec Compass

1. Ouvrez MongoDB Compass
2. Dans le champ "New Connection", entrez:
   ```
   mongodb://localhost:27017
   ```
3. Cliquez sur "Connect"

## ✅ Étape 4: Tester l'Application

1. Redémarrez votre serveur dev:
   ```bash
   npm run dev
   ```

2. Essayez de vous connecter via `/admin/login`

## 🎯 Avantages de MongoDB Local

- ✅ Pas besoin de Network Access
- ✅ Pas de problèmes DNS
- ✅ Plus rapide (pas de latence réseau)
- ✅ Gratuit et illimité
- ✅ Fonctionne hors ligne

## ⚠️ Note

MongoDB local stocke les données sur votre machine. Assurez-vous de:
- Sauvegarder régulièrement
- Ne pas supprimer les fichiers de données MongoDB


