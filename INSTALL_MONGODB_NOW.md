# ⚡ Installer MongoDB Maintenant

## 🔴 Problème Actuel

Compass affiche: `ECONNREFUSED 127.0.0.1:27017`

Cela signifie que **MongoDB n'est pas installé** ou **n'est pas démarré** sur votre machine.

## ✅ Solution: Installer MongoDB

### Étape 1: Télécharger (2 minutes)

1. Allez sur: **https://www.mongodb.com/try/download/community**
2. Laissez les paramètres par défaut:
   - **Version:** MongoDB Community Server
   - **Platform:** Windows
   - **Package:** MSI
3. Cliquez sur **"Download"** (fichier ~200MB)

### Étape 2: Installer (5 minutes)

1. **Double-cliquez** sur le fichier `.msi` téléchargé
2. Cliquez sur **"Next"** plusieurs fois
3. **IMPORTANT:** Cochez ✅ **"Install MongoDB as a Service"**
4. Cochez ✅ **"Run service as Network Service user"**
5. **Optionnel:** Cochez **"Install MongoDB Compass"** (vous l'avez déjà)
6. Cliquez sur **"Install"**
7. Attendez 2-3 minutes
8. Cliquez sur **"Finish"**

### Étape 3: Vérifier (30 secondes)

1. Appuyez sur `Windows + R`
2. Tapez: `services.msc`
3. Appuyez sur Entrée
4. Cherchez **"MongoDB"** dans la liste
5. Vérifiez que le **Statut** est **"Running"** ✅

**Si "Stopped":**
- Clic droit sur "MongoDB" → **"Start"**

**Si le service n'existe pas:**
- L'installation a échoué → Réinstallez MongoDB

## 🔌 Après Installation: Tester avec Compass

1. Ouvrez **MongoDB Compass**
2. Dans le champ "New Connection", entrez:
   ```
   mongodb://localhost:27017
   ```
3. Cliquez sur **"Connect"**

**Vous devriez voir:**
- ✅ Connexion réussie
- ✅ Liste des bases de données (admin, config, local, etc.)

## 👤 Créer l'Utilisateur Admin

Une fois connecté dans Compass:

1. Si `azalee_db` n'existe pas, créez-la:
   - Cliquez sur **"CREATE DATABASE"**
   - Database Name: `azalee_db`
   - Collection Name: `users`
   - Cliquez sur **"Create Database"**

2. Ouvrez la collection `users`
3. Cliquez sur **"ADD DATA"** → **"Insert Document"** → **JSON**
4. Collez ce JSON:

```json
{
  "email": "admin@azalee.com",
  "password": "$2b$10$5j0G4UwizAxElzTDbOtxT.OY0a2muya9TwX6lqeah9FUQ8AG10lda",
  "name": "Administrator",
  "role": "admin"
}
```

5. Cliquez sur **"Insert"**

## 🚀 Tester l'Application

1. Redémarrez le serveur dev:
   ```bash
   npm run dev
   ```

2. Testez le login:
   - `http://localhost:4028/admin/login`
   - Email: `admin@azalee.com`
   - Password: `admin123`

## 📋 Checklist

- [ ] MongoDB téléchargé
- [ ] MongoDB installé (avec service)
- [ ] Service MongoDB "Running" dans services.msc
- [ ] Compass connecté à `mongodb://localhost:27017`
- [ ] Base de données `azalee_db` créée
- [ ] Collection `users` créée
- [ ] Utilisateur admin inséré
- [ ] Serveur dev redémarré
- [ ] Login testé

## 💡 Alternative: Démarrer MongoDB Manuellement

Si MongoDB est installé mais pas démarré:

1. Ouvrez **PowerShell en tant qu'Administrateur**
2. Exécutez:
   ```powershell
   net start MongoDB
   ```

## 🎯 Une Fois Installé

Tout devrait fonctionner automatiquement:
- ✅ Compass se connectera
- ✅ Votre application Node.js se connectera
- ✅ Pas de problèmes DNS
- ✅ Pas de Network Access à configurer

**Téléchargez et installez MongoDB maintenant!**


