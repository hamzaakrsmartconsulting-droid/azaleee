# 📥 Installer MongoDB - Guide Étape par Étape

## 🎯 MongoDB n'est pas installé sur votre machine

Puisque vous ne trouvez pas "MongoDB" dans services.msc, MongoDB n'est pas installé. Voici comment l'installer:

## 📥 Étape 1: Télécharger MongoDB

1. Allez sur: **https://www.mongodb.com/try/download/community**
2. Sur la page de téléchargement:
   - **Version:** Laissez la version par défaut (la plus récente)
   - **Platform:** Windows (devrait être détecté automatiquement)
   - **Package:** MSI (devrait être sélectionné par défaut)
3. Cliquez sur le gros bouton vert **"Download"**
4. Le fichier `.msi` va se télécharger (environ 200-300 MB)
5. Attendez la fin du téléchargement

## 🔧 Étape 2: Installer MongoDB

1. **Trouvez le fichier téléchargé** (généralement dans "Téléchargements")
   - Le nom sera quelque chose comme: `mongodb-windows-x86_64-7.x.x-signed.msi`

2. **Double-cliquez** sur le fichier `.msi`

3. **Assistant d'installation s'ouvre:**
   - Cliquez sur **"Next"** (Suivant)

4. **Acceptez la licence:**
   - Cochez **"I accept the terms in the License Agreement"**
   - Cliquez sur **"Next"**

5. **Choisissez le type d'installation:**
   - Sélectionnez **"Complete"** (Complet)
   - Cliquez sur **"Next"**

6. **Configuration du service (IMPORTANT!):**
   - ✅ Cochez **"Install MongoDB as a Service"** (Installer MongoDB comme service)
   - ✅ Cochez **"Run service as Network Service user"** (Exécuter le service en tant qu'utilisateur Network Service)
   - ✅ Cochez **"Service Name: MongoDB"** (laissez par défaut)
   - Cliquez sur **"Next"**

7. **Installation de MongoDB Compass (optionnel):**
   - Vous pouvez cocher **"Install MongoDB Compass"** (vous l'avez déjà, mais ça ne fait pas de mal)
   - Cliquez sur **"Next"**

8. **Résumé:**
   - Vérifiez les options
   - Cliquez sur **"Install"**

9. **Attendez l'installation:**
   - Cela prend 2-5 minutes
   - Une barre de progression s'affiche

10. **Fin de l'installation:**
    - Cliquez sur **"Finish"**

## ✅ Étape 3: Vérifier l'Installation

1. Appuyez sur `Windows + R`
2. Tapez: `services.msc`
3. Appuyez sur Entrée
4. **Cherchez "MongoDB"** dans la liste (faites défiler si nécessaire)
5. Vous devriez voir:
   - **Nom:** MongoDB
   - **Statut:** Running (En cours d'exécution) ✅

**Si vous voyez "MongoDB" avec statut "Running":**
- ✅ MongoDB est installé et fonctionne!
- Passez à l'étape 4

**Si vous voyez "MongoDB" avec statut "Stopped":**
- Clic droit sur "MongoDB" → **"Start"** (Démarrer)
- Attendez que le statut devienne "Running"

**Si vous ne voyez toujours pas "MongoDB":**
- L'installation a peut-être échoué
- Réessayez l'installation
- OU vérifiez les logs d'installation

## 🔌 Étape 4: Tester avec Compass

1. Ouvrez **MongoDB Compass**
2. Dans le champ "New Connection", entrez:
   ```
   mongodb://localhost:27017
   ```
3. Cliquez sur **"Connect"** ou **"Save & Connect"**

**Vous devriez voir:**
- ✅ Connexion réussie
- ✅ Liste des bases de données (admin, config, local, etc.)

**Si vous voyez encore l'erreur ECONNREFUSED:**
- Attendez 30 secondes après l'installation
- Redémarrez Compass
- Réessayez

## 📊 Étape 5: Créer la Base de Données

1. Dans Compass, cliquez sur **"CREATE DATABASE"** (en haut à gauche)
2. Remplissez:
   - **Database Name:** `azalee_db`
   - **Collection Name:** `users`
3. Cliquez sur **"Create Database"**

## 👤 Étape 6: Créer l'Utilisateur Admin

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

## 🚀 Étape 7: Tester l'Application

1. Redémarrez votre serveur dev:
   ```bash
   npm run dev
   ```

2. Testez le login:
   - Allez sur: `http://localhost:4028/admin/login`
   - Email: `admin@azalee.com`
   - Password: `admin123`

## ❓ Si l'Installation Échoue

1. **Vérifiez les permissions:**
   - Exécutez le fichier `.msi` en tant qu'Administrateur
   - Clic droit → "Exécuter en tant qu'administrateur"

2. **Vérifiez l'espace disque:**
   - MongoDB nécessite environ 1 GB d'espace libre

3. **Désinstallez les anciennes versions:**
   - Paramètres → Applications → Cherchez "MongoDB" → Désinstallez
   - Réinstallez ensuite

4. **Vérifiez les antivirus:**
   - Certains antivirus bloquent l'installation
   - Désactivez temporairement pour installer

## 📞 Support

Si l'installation ne fonctionne toujours pas:
- Consultez: https://www.mongodb.com/docs/manual/installation/
- Ou contactez le support MongoDB

## ✅ Une Fois Installé

Après installation réussie:
- ✅ MongoDB apparaîtra dans services.msc
- ✅ Compass pourra se connecter
- ✅ Votre application fonctionnera

**Commencez par télécharger MongoDB depuis le lien ci-dessus!**


