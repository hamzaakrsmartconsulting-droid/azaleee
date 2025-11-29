# ⚡ Installation Rapide MongoDB - 3 Étapes

## 🎯 Le Problème

MongoDB n'est pas installé sur votre machine. L'erreur `ECONNREFUSED` signifie que rien n'écoute sur le port 27017.

## ✅ Solution en 3 Étapes

### Étape 1: Télécharger (2 minutes)

1. Allez sur: **https://www.mongodb.com/try/download/community**
2. Laissez les paramètres par défaut:
   - Version: MongoDB Community Server
   - Platform: Windows
   - Package: MSI
3. Cliquez sur **"Download"** (le fichier fait ~200MB)

### Étape 2: Installer (5 minutes)

1. Double-cliquez sur le fichier `.msi` téléchargé
2. Cliquez sur **"Next"** plusieurs fois
3. **IMPORTANT:** Cochez ✅ **"Install MongoDB as a Service"**
4. Cliquez sur **"Install"**
5. Attendez la fin (2-3 minutes)
6. Cliquez sur **"Finish"**

### Étape 3: Vérifier (30 secondes)

1. Appuyez sur `Windows + R`
2. Tapez: `services.msc`
3. Cherchez **"MongoDB"**
4. Le statut doit être **"Running"** ✅

**Si "Stopped":**
- Clic droit → **"Start"**

## 🧪 Test Immédiat

Après installation, testez:

```bash
node test-local-mongodb.js
```

Vous devriez voir: `✅ Connexion réussie à MongoDB local!`

## 🔌 Avec Compass

1. Ouvrez **MongoDB Compass**
2. Connection string: `mongodb://localhost:27017`
3. Cliquez sur **"Connect"**

## 🚀 Ensuite

Redémarrez votre serveur dev et testez le login!

---

## ❓ Alternative: Utiliser MongoDB Atlas (si installation échoue)

Si vous préférez ne pas installer MongoDB localement, on peut revenir à MongoDB Atlas mais avec une meilleure configuration. Dites-moi si vous préférez cette option.


