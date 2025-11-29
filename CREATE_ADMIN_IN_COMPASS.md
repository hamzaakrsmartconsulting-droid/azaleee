# 👤 Créer l'Utilisateur Admin dans MongoDB Compass

## 🎯 Méthode Simple: Via Compass

Puisque Compass fonctionne avec MongoDB Atlas, créons l'utilisateur directement dans Compass.

### Étape 1: Ouvrir la Collection `users`

1. Dans MongoDB Compass, vous êtes déjà connecté à `cluster0.9xrt1pn.mongodb.net`
2. Dans le panneau de gauche, développez `azalee_db`
3. Cliquez sur la collection `users`

### Étape 2: Ajouter un Document

1. Cliquez sur le bouton **"ADD DATA"** (en haut à droite)
2. Sélectionnez **"Insert Document"**
3. Choisissez le format **JSON**

### Étape 3: Coller ce Document

Collez exactement ce JSON (le mot de passe est déjà hashé avec bcrypt):

```json
{
  "email": "admin@azalee.com",
  "password": "$2b$10$5j0G4UwizAxElzTDbOtxT.OY0a2muya9TwX6lqeah9FUQ8AG10lda",
  "name": "Administrator",
  "role": "admin"
}
```

**Note:** Ce hash correspond au mot de passe `admin123`

**Explication:**
- `email`: L'email de connexion
- `password`: Hash bcrypt de "admin123" (déjà calculé)
- `name`: Nom de l'administrateur
- `role`: Rôle admin

### Étape 4: Insérer

1. Cliquez sur **"Insert"**
2. Vous devriez voir le document apparaître dans la collection

## ✅ Vérification

Après insertion, vous devriez voir:
- 1 document dans la collection `users`
- Le document avec `email: "admin@azalee.com"`

## 🚀 Tester le Login

1. Redémarrez votre serveur dev (si nécessaire)
2. Allez sur: `http://localhost:4028/admin/login`
3. Connectez-vous avec:
   - **Email:** `admin@azalee.com`
   - **Password:** `admin123`

## 🔍 Alternative: Générer le Hash Correct

Si vous voulez générer un nouveau hash pour un autre mot de passe, exécutez:

```bash
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('admin123',10).then(h=>console.log(h))"
```

Cela affichera un hash que vous pouvez utiliser dans Compass.

## 📋 Résumé

1. ✅ Connection string MongoDB Atlas configurée
2. ✅ Compass connecté à MongoDB Atlas
3. ⏳ Créer l'utilisateur admin dans Compass (étapes ci-dessus)
4. ⏳ Tester le login

Une fois l'utilisateur créé dans Compass, votre application devrait fonctionner!

