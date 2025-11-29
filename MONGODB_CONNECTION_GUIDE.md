# 🔌 Guide de Connexion MongoDB - Local ou Cloud

Votre application supporte maintenant **deux modes de connexion MongoDB** :

## 📋 Options disponibles

### Option 1 : MongoDB Local (localhost)
- ✅ Pas besoin d'internet (après installation)
- ✅ Gratuit et illimité
- ✅ Plus rapide (pas de latence réseau)
- ✅ Données stockées localement
- ❌ Nécessite l'installation de MongoDB sur votre machine

### Option 2 : MongoDB Atlas (Cloud)
- ✅ Pas besoin d'installer MongoDB
- ✅ Accessible depuis n'importe où
- ✅ Sauvegarde automatique
- ✅ Scalable
- ❌ Nécessite une connexion internet
- ❌ Peut avoir des problèmes DNS

## 🔧 Configuration

### Pour utiliser MongoDB Local

1. **Installer MongoDB** (si pas déjà fait) :
   - Téléchargez : https://www.mongodb.com/try/download/community
   - Installez avec l'option "Install MongoDB as a Service"

2. **Démarrer MongoDB** :
   - Windows + R → `services.msc` → Trouvez "MongoDB Server" → Start
   - OU PowerShell (Admin) : `net start MongoDB`

3. **Configurer `.env.local`** :
   ```env
   MONGODB_URI=mongodb://localhost:27017/azalee_db
   ```

### Pour utiliser MongoDB Atlas (Cloud)

1. **Créer un compte MongoDB Atlas** :
   - Allez sur : https://www.mongodb.com/cloud/atlas
   - Créez un compte gratuit

2. **Créer un cluster** :
   - Créez un cluster gratuit (M0)
   - Attendez qu'il soit prêt (quelques minutes)

3. **Configurer l'accès réseau** :
   - Allez dans **Network Access**
   - Ajoutez votre IP ou `0.0.0.0/0` (Allow from anywhere)

4. **Créer un utilisateur de base de données** :
   - Allez dans **Database Access**
   - Créez un utilisateur avec mot de passe
   - Donnez les permissions `readWrite` sur la base de données

5. **Obtenir la connection string** :
   - Allez dans **Database** → **Connect**
   - Choisissez **"Connect your application"**
   - Copiez la connection string
   - Remplacez `<password>` par votre mot de passe réel

6. **Configurer `.env.local`** :
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/azalee_db?retryWrites=true&w=majority
   ```

## 🔄 Basculer entre Local et Cloud

Pour changer de mode, modifiez simplement `MONGODB_URI` dans `.env.local` :

### Basculer vers Local :
```env
MONGODB_URI=mongodb://localhost:27017/azalee_db
```

### Basculer vers Cloud :
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/azalee_db?retryWrites=true&w=majority
```

**Important** : Redémarrez le serveur après modification :
```bash
# Arrêtez le serveur (Ctrl + C)
npm run dev
```

## 🧪 Tester la connexion

### MongoDB Local

1. **Vérifier que MongoDB est en cours d'exécution** :
   ```powershell
   Get-Service MongoDB
   ```

2. **Tester avec MongoDB Compass** :
   - Ouvrez MongoDB Compass
   - Connection string : `mongodb://localhost:27017`
   - Cliquez sur "Connect"

3. **Tester l'application** :
   ```bash
   npm run dev
   ```
   Vous devriez voir : `🔄 Connecting to local MongoDB...`

### MongoDB Atlas

1. **Tester avec MongoDB Compass** :
   - Ouvrez MongoDB Compass
   - Collez votre connection string Atlas
   - Cliquez sur "Connect"

2. **Tester l'application** :
   ```bash
   npm run dev
   ```
   Vous devriez voir : `☁️  Connecting to MongoDB Atlas (Cloud)...`

## 📊 Comparaison

| Fonctionnalité | Local | Cloud (Atlas) |
|----------------|-------|---------------|
| Installation requise | ✅ Oui | ❌ Non |
| Internet requis | ❌ Non | ✅ Oui |
| Coût | Gratuit | Gratuit (tier M0) |
| Vitesse | ⚡ Rapide | 🌐 Dépend de la connexion |
| Sauvegarde | Manuel | ✅ Automatique |
| Accès distant | ❌ Non | ✅ Oui |
| Scalabilité | Limitée | ✅ Illimitée |

## 💡 Recommandations

- **Développement** : Utilisez **MongoDB Local** (plus rapide, pas de dépendance internet)
- **Production** : Utilisez **MongoDB Atlas** (sauvegarde automatique, accessible partout)
- **Test** : Vous pouvez basculer facilement entre les deux

## 🔍 Dépannage

### Problèmes avec MongoDB Local

- **ECONNREFUSED** : MongoDB n'est pas en cours d'exécution
  - Solution : Démarrez le service MongoDB

### Problèmes avec MongoDB Atlas

- **queryTxt ETIMEOUT** : Problème DNS
  - Solution : Configurez Google DNS (8.8.8.8, 8.8.4.4) dans Windows

- **Authentication failed** : Mauvais identifiants
  - Solution : Vérifiez username/password dans la connection string

## ✅ Configuration actuelle

Vérifiez votre configuration actuelle dans `.env.local` :
- Si `MONGODB_URI` commence par `mongodb://` → **Local**
- Si `MONGODB_URI` commence par `mongodb+srv://` → **Cloud (Atlas)**

---

**Vous pouvez maintenant choisir facilement entre Local et Cloud !** 🎉

