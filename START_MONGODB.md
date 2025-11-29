# 🚀 Démarrer MongoDB - Guide Rapide

## ❌ Erreur actuelle
```
ECONNREFUSED 127.0.0.1:27017
```

Cela signifie que **MongoDB n'est pas en cours d'exécution**.

## ✅ Solutions

### Solution 1 : Vérifier et démarrer le service MongoDB

1. **Ouvrir les services Windows** :
   - Appuyez sur `Windows + R`
   - Tapez : `services.msc`
   - Appuyez sur **Entrée**

2. **Chercher MongoDB** :
   - Dans la liste, cherchez **"MongoDB Server"** ou **"MongoDB"**
   - Regardez la colonne **"Status"**

3. **Si le statut est "Stopped"** :
   - Clic droit sur **"MongoDB Server"**
   - Cliquez sur **"Start"**
   - Attendez que le statut devienne **"Running"**

### Solution 2 : Démarrer via PowerShell (Administrateur)

1. **Ouvrir PowerShell en tant qu'administrateur** :
   - Clic droit sur le menu Démarrer
   - **"Terminal (Admin)"** ou **"Windows PowerShell (Admin)"**

2. **Démarrer MongoDB** :
   ```powershell
   net start MongoDB
   ```

3. **Vérifier** :
   ```powershell
   Get-Service MongoDB
   ```
   Le statut doit être **"Running"**

### Solution 3 : MongoDB n'est pas installé

Si vous ne trouvez pas le service MongoDB, il n'est probablement pas installé.

#### Installer MongoDB :

1. **Télécharger MongoDB** :
   - Allez sur : https://www.mongodb.com/try/download/community
   - Sélectionnez :
     - **Version** : `7.0` (ou la dernière)
     - **Platform** : `Windows`
     - **Package** : `MSI`
   - Cliquez sur **Download**

2. **Installer MongoDB** :
   - Exécutez le fichier `.msi` téléchargé
   - Cliquez sur **Next**
   - Acceptez les termes
   - Choisissez **Complete** installation
   - ✅ **IMPORTANT** : Cochez **"Install MongoDB as a Service"**
   - ✅ Cochez **"Install MongoDB Compass"** (recommandé)
   - Cliquez sur **Install**
   - Attendez la fin de l'installation

3. **Vérifier l'installation** :
   - Ouvrez `services.msc` (Windows + R → services.msc)
   - Cherchez **"MongoDB Server"**
   - Le statut doit être **"Running"**

## 🧪 Tester la connexion

### Avec MongoDB Compass :

1. **Ouvrir MongoDB Compass** :
   - Si installé, ouvrez-le depuis le menu Démarrer
   - OU téléchargez : https://www.mongodb.com/try/download/compass

2. **Se connecter** :
   - Connection string : `mongodb://localhost:27017`
   - Cliquez sur **"Connect"**
   - ✅ Vous devriez voir vos bases de données

### Avec votre application :

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

3. **Tester** :
   - Allez sur : `http://localhost:4028/admin/login`
   - Connectez-vous avec : `admin@azalee.com` / `admin123`

## 🔧 Dépannage

### Le service ne démarre pas

1. **Vérifier les logs** :
   - Les logs MongoDB sont généralement dans : `C:\Program Files\MongoDB\Server\7.0\log\mongod.log`
   - Vérifiez s'il y a des erreurs

2. **Vérifier les permissions** :
   - Le service MongoDB doit avoir les permissions d'administrateur
   - Essayez de redémarrer en tant qu'administrateur

3. **Réinstaller MongoDB** :
   - Désinstallez MongoDB
   - Réinstallez avec l'option "Install MongoDB as a Service"

### Le port 27017 est déjà utilisé

1. **Vérifier quel processus utilise le port** :
   ```powershell
   netstat -ano | findstr :27017
   ```

2. **Arrêter le processus** ou changer le port MongoDB

## ✅ Checklist

- [ ] MongoDB est installé
- [ ] Service MongoDB est en cours d'exécution (services.msc)
- [ ] Port 27017 est accessible
- [ ] MongoDB Compass peut se connecter
- [ ] Application Node.js peut se connecter

## 💡 Commandes utiles

```powershell
# Vérifier le service
Get-Service MongoDB

# Démarrer MongoDB
net start MongoDB

# Arrêter MongoDB
net stop MongoDB

# Vérifier le port
netstat -an | findstr 27017

# Tester la connexion
Test-NetConnection -ComputerName localhost -Port 27017
```

---

**Une fois MongoDB démarré, votre application devrait fonctionner !** 🎉

