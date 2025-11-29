# 🔧 Créer un Nouvel Utilisateur MongoDB Atlas

## 📋 Étapes pour Créer le Nouvel Utilisateur

### 1. Dans MongoDB Atlas

1. Allez sur: https://cloud.mongodb.com
2. Cliquez sur **"SECURITY"** → **"Database Access"**
3. Cliquez sur le bouton vert **"+ ADD NEW DATABASE USER"** (en haut à droite)

### 2. Configuration de l'Utilisateur

Dans le formulaire qui s'ouvre:

1. **Authentication Method:**
   - Sélectionnez **"Password"**

2. **Username:**
   - Entrez: `azalee_admin`
   - (ou un autre nom si vous préférez)

3. **Password:**
   - Cliquez sur **"Autogenerate Secure Password"** OU
   - Entrez manuellement: `hamza2020`

4. **Database User Privileges:**
   - Sélectionnez **"Atlas admin"** (recommandé pour développement)
   - OU **"Read and write to any database"**

5. Cliquez sur **"Add User"**

### 3. Important: Sauvegarder le Mot de Passe

- Si vous avez utilisé "Autogenerate", MongoDB vous montrera le mot de passe
- **COPIEZ-LE IMMÉDIATEMENT** (vous ne pourrez plus le voir après)
- Si vous avez entré `hamza2020` manuellement, c'est bon

### 4. Mettre à Jour .env.local

Après avoir créé l'utilisateur, mettez à jour votre fichier `.env.local`:

```env
MONGODB_URI=mongodb+srv://azalee_admin:hamza2020@cluster0.9xrt1pn.mongodb.net/azalee_db?retryWrites=true&w=majority
```

**Remplacez:**
- `azalee_admin` par le username que vous avez créé
- `hamza2020` par le mot de passe que vous avez utilisé

### 5. Tester la Connexion

Après avoir mis à jour `.env.local`:

```bash
node test-auth-fix.js
```

Vous devriez voir:
```
✅ SUCCESS! Connected in X.XXs
```

## ⚠️ Si l'Utilisateur Existe Déjà

Si `azalee_admin` existe déjà:

1. Dans la liste des utilisateurs, trouvez `azalee_admin`
2. Cliquez sur les **3 points** (⋯) ou le bouton **"EDIT"**
3. Cliquez sur **"DELETE"** pour supprimer l'ancien utilisateur
4. Créez le nouvel utilisateur (étapes ci-dessus)

## 🔍 Vérification

Après création, vérifiez que:
- ✅ L'utilisateur apparaît dans la liste
- ✅ Le statut est **"Active"**
- ✅ Les permissions sont correctes


