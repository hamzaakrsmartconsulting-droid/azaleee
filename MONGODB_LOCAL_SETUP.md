# 🗄️ Configuration MongoDB Local

## ✅ Configuration terminée

Votre application est maintenant configurée pour utiliser **MongoDB local** au lieu de MongoDB Atlas.

## 📋 Configuration actuelle

- **Connection string** : `mongodb://localhost:27017/azalee_db`
- **Base de données** : `azalee_db` (sera créée automatiquement)
- **Port** : `27017` (port par défaut MongoDB)

## 🚀 Prérequis

### 1. Installer MongoDB

Si MongoDB n'est pas installé :

1. **Télécharger MongoDB Community Server** :
   - Allez sur : https://www.mongodb.com/try/download/community
   - Sélectionnez :
     - Version : `7.0` (ou la dernière version)
     - Platform : `Windows`
     - Package : `MSI`
   - Cliquez sur **Download**

2. **Installer MongoDB** :
   - Exécutez le fichier `.msi` téléchargé
   - Choisissez **Complete** installation
   - Cochez **Install MongoDB as a Service**
   - Cochez **Install MongoDB Compass** (recommandé)
   - Cliquez sur **Install**

### 2. Vérifier que MongoDB est en cours d'exécution

1. **Vérifier le service** :
   - Appuyez sur `Windows + R`
   - Tapez : `services.msc` et appuyez sur Entrée
   - Cherchez **"MongoDB Server"** ou **"MongoDB"**
   - Le statut doit être **"Running"** (En cours d'exécution)

2. **Démarrer MongoDB si nécessaire** :
   - Clic droit sur **"MongoDB Server"** → **"Start"**
   - OU en PowerShell (Admin) : `net start MongoDB`

### 3. Tester avec MongoDB Compass

1. **Ouvrir MongoDB Compass** :
   - Si installé, ouvrez MongoDB Compass depuis le menu Démarrer
   - OU téléchargez : https://www.mongodb.com/try/download/compass

2. **Se connecter** :
   - Connection string : `mongodb://localhost:27017`
   - Cliquez sur **"Connect"**
   - ✅ Vous devriez voir votre base de données `azalee_db`

## 🧪 Tester l'application

1. **Démarrer le serveur** :
   ```bash
   npm run dev
   ```

2. **Vérifier les logs** :
   Vous devriez voir :
   ```
   🔄 Connecting to local MongoDB...
      URI: mongodb://localhost:27017/azalee_db
   ✅ MongoDB connected successfully
   ```

3. **Tester la connexion** :
   - Allez sur : `http://localhost:4028/admin/login`
   - Connectez-vous avec : `admin@azalee.com` / `admin123`
   - L'utilisateur admin sera créé automatiquement lors de la première connexion

## 🔧 Dépannage

### Erreur : `ECONNREFUSED ::1:27017` ou `connect ECONNREFUSED 127.0.0.1:27017`

**Solution** : MongoDB n'est pas en cours d'exécution

1. Vérifiez le service :
   ```powershell
   # PowerShell (Admin)
   Get-Service MongoDB
   ```

2. Démarrez le service :
   ```powershell
   # PowerShell (Admin)
   net start MongoDB
   ```

3. Vérifiez que MongoDB écoute sur le port 27017 :
   ```powershell
   netstat -an | findstr 27017
   ```

### Erreur : `MongoDB is not installed`

**Solution** : Installez MongoDB (voir section "Installer MongoDB" ci-dessus)

### MongoDB Compass ne se connecte pas

1. Vérifiez que le service MongoDB est en cours d'exécution
2. Vérifiez le port : `mongodb://localhost:27017`
3. Vérifiez le pare-feu Windows (MongoDB doit être autorisé)

## 📝 Fichiers modifiés

- ✅ `src/lib/mongodb.js` - Configuré pour MongoDB local
- ✅ `.env.local` - Connection string mise à jour
- ✅ `env.example` - Exemple mis à jour

## 💡 Avantages de MongoDB local

- ✅ Pas besoin d'internet (sauf pour installer)
- ✅ Pas de problèmes DNS
- ✅ Gratuit et illimité
- ✅ Données stockées localement
- ✅ Plus rapide (pas de latence réseau)

## 🔄 Revenir à MongoDB Atlas (si nécessaire)

Si vous voulez revenir à MongoDB Atlas plus tard :

1. Modifiez `.env.local` :
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/azalee_db
   ```

2. Redémarrez le serveur

---

**Configuration terminée !** 🎉

Votre application est maintenant prête à utiliser MongoDB local.

