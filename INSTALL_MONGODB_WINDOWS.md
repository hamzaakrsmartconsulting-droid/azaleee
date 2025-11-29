# 📥 Installation MongoDB sur Windows

## 🎯 Méthode Rapide (Recommandée)

### Étape 1: Télécharger MongoDB

1. Allez sur: https://www.mongodb.com/try/download/community
2. **Version:** MongoDB Community Server
3. **Platform:** Windows
4. **Package:** MSI
5. Cliquez sur **"Download"**

### Étape 2: Installer MongoDB

1. Exécutez le fichier `.msi` téléchargé
2. Cliquez sur **"Next"**
3. Acceptez la licence → **"Next"**
4. Choisissez **"Complete"** installation → **"Next"**
5. **IMPORTANT:** Cochez **"Install MongoDB as a Service"** ✅
6. **IMPORTANT:** Cochez **"Run service as Network Service user"** ✅
7. **Optionnel:** Cochez **"Install MongoDB Compass"** (vous l'avez déjà)
8. Cliquez sur **"Install"**
9. Attendez la fin de l'installation
10. Cliquez sur **"Finish"**

### Étape 3: Vérifier l'Installation

1. Appuyez sur `Windows + R`
2. Tapez: `services.msc`
3. Appuyez sur Entrée
4. Cherchez **"MongoDB"** dans la liste
5. Vérifiez que le **Statut** est **"Running"** (En cours d'exécution)

**Si le statut est "Stopped":**
- Clic droit sur "MongoDB" → **"Start"**

## 🧪 Test de Connexion

Après l'installation, testez:

```bash
node test-local-mongodb.js
```

Vous devriez voir:
```
✅ Connexion réussie à MongoDB local!
```

## 🔌 Connexion avec Compass

1. Ouvrez **MongoDB Compass**
2. Dans le champ "New Connection", entrez:
   ```
   mongodb://localhost:27017
   ```
3. Cliquez sur **"Connect"**

Vous devriez voir la base de données par défaut.

## 🚀 Redémarrer le Serveur Dev

Après avoir installé MongoDB:

```bash
npm run dev
```

Puis testez le login: `http://localhost:4028/admin/login`

## ❌ Si MongoDB Ne Démarre Pas

### Solution 1: Démarrer Manuellement

1. Ouvrez **PowerShell en tant qu'Administrateur**
2. Exécutez:
   ```powershell
   net start MongoDB
   ```

### Solution 2: Vérifier les Ports

Si le port 27017 est utilisé:

1. Ouvrez **PowerShell en tant qu'Administrateur**
2. Vérifiez:
   ```powershell
   netstat -ano | findstr :27017
   ```

### Solution 3: Réinstaller MongoDB

Si rien ne fonctionne:
1. Désinstallez MongoDB depuis "Paramètres" → "Applications"
2. Réinstallez en suivant les étapes ci-dessus

## 📊 Vérification Rapide

Pour vérifier que MongoDB fonctionne:

```bash
# Test de connexion
node test-local-mongodb.js

# OU avec Compass
# Connection string: mongodb://localhost:27017
```

## ✅ Une Fois Installé

Votre application utilisera automatiquement MongoDB local:
- Connection string: `mongodb://localhost:27017/azalee_db`
- Pas besoin de DNS
- Pas besoin de Network Access
- Plus rapide et plus simple!


