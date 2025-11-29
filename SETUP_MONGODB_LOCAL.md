# 🗄️ Configuration MongoDB Local avec Compass

## ✅ Configuration Terminée

- ✅ Connection string: `mongodb://localhost:27017/azalee_db`
- ✅ Code simplifié pour MongoDB local (pas de DNS, pas de Network Access)
- ✅ Prêt pour Compass

## 📥 Étape 1: Installer MongoDB (si pas déjà installé)

### Télécharger et Installer

1. Allez sur: **https://www.mongodb.com/try/download/community**
2. Sélectionnez:
   - **Version:** MongoDB Community Server
   - **Platform:** Windows
   - **Package:** MSI
3. Cliquez sur **"Download"**

### Installer

1. Exécutez le fichier `.msi` téléchargé
2. Cliquez sur **"Next"** plusieurs fois
3. **IMPORTANT:** Cochez ✅ **"Install MongoDB as a Service"**
4. Cochez ✅ **"Run service as Network Service user"**
5. **Optionnel:** Cochez **"Install MongoDB Compass"** (vous l'avez déjà)
6. Cliquez sur **"Install"**
7. Attendez la fin (2-3 minutes)
8. Cliquez sur **"Finish"**

## 🔍 Étape 2: Vérifier que MongoDB est Démarré

1. Appuyez sur `Windows + R`
2. Tapez: `services.msc`
3. Appuyez sur Entrée
4. Cherchez **"MongoDB"** dans la liste
5. Vérifiez que le **Statut** est **"Running"** ✅

**Si le statut est "Stopped":**
- Clic droit sur "MongoDB" → **"Start"**

**Si le service n'existe pas:**
- MongoDB n'est pas installé → Installez-le (étape 1)

## 🔌 Étape 3: Se Connecter avec Compass

1. Ouvrez **MongoDB Compass**
2. Dans le champ "New Connection", entrez:
   ```
   mongodb://localhost:27017
   ```
3. Cliquez sur **"Connect"**

Vous devriez voir:
- La base de données `azalee_db`
- La collection `users` (peut être vide)

## 👤 Étape 4: Créer l'Utilisateur Admin dans Compass

1. Dans Compass, ouvrez la collection `users` dans `azalee_db`
2. Cliquez sur **"ADD DATA"** → **"Insert Document"**
3. Choisissez **JSON**
4. **Copiez et collez ce JSON:**

```json
{
  "email": "admin@azalee.com",
  "password": "$2b$10$5j0G4UwizAxElzTDbOtxT.OY0a2muya9TwX6lqeah9FUQ8AG10lda",
  "name": "Administrator",
  "role": "admin"
}
```

5. Cliquez sur **"Insert"**

## 🚀 Étape 5: Tester l'Application

1. Redémarrez votre serveur dev:
   ```bash
   npm run dev
   ```

2. Testez le login:
   - Allez sur: `http://localhost:4028/admin/login`
   - Email: `admin@azalee.com`
   - Password: `admin123`

## ✅ Avantages de MongoDB Local

- ✅ Pas de problèmes DNS
- ✅ Pas besoin de Network Access
- ✅ Plus rapide (pas de latence réseau)
- ✅ Fonctionne hors ligne
- ✅ Gratuit et illimité
- ✅ Simple avec Compass

## 🧪 Test de Connexion

Pour tester si MongoDB fonctionne:

```bash
node test-local-mongodb.js
```

Vous devriez voir: `✅ Connexion réussie à MongoDB local!`

## 📋 Checklist

- [ ] MongoDB installé
- [ ] Service MongoDB "Running" dans services.msc
- [ ] Compass connecté à `mongodb://localhost:27017`
- [ ] Utilisateur admin créé dans la collection `users`
- [ ] Serveur dev redémarré
- [ ] Login testé avec succès

## 💡 Si MongoDB N'est Pas Installé

Téléchargez et installez depuis: **https://www.mongodb.com/try/download/community**

Une fois installé, tout devrait fonctionner automatiquement!


