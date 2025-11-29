# 🔧 Corriger la Connection String dans Compass

## ❌ Problème Détecté

Compass affiche l'erreur: **"Password contains unescaped characters"**

Et la connection string semble mélangée avec `mongodb://localhost:27017` au début.

## ✅ Solution

### 1. Nettoyer le Champ URI dans Compass

1. Dans Compass, **effacez complètement** le champ URI
2. Collez cette connection string **propre** (sans rien d'autre):

```
mongodb+srv://azalee2020:hamza2020@cluster0.9xrt1pn.mongodb.net/azalee_db?retryWrites=true&w=majority
```

### 2. Vérifications

- ✅ Commence par `mongodb+srv://` (pas `mongodb://localhost`)
- ✅ Pas de `mongodb://localhost:27017` au début
- ✅ Username: `azalee2020`
- ✅ Password: `hamza2020`
- ✅ Hostname: `cluster0.9xrt1pn.mongodb.net` (notez le `1` dans `9xrt1pn`, pas `l`)
- ✅ Database: `azalee_db`

### 3. Si l'Erreur Persiste

Si Compass affiche toujours "Password contains unescaped characters":

**Option A: Encoder le mot de passe en URL**
- Le mot de passe `hamza2020` ne devrait pas avoir besoin d'encodage
- Mais essayez quand même: `hamza2020` → reste `hamza2020` (pas de changement nécessaire)

**Option B: Utiliser le Formulaire au lieu de l'URI**
1. Dans Compass, cliquez sur "Fill in connection fields individually"
2. Remplissez:
   - **Hostname:** `cluster0.9xrt1pn.mongodb.net`
   - **Authentication:** Username/Password
   - **Username:** `azalee2020`
   - **Password:** `hamza2020`
   - **Authentication Database:** `admin` (ou laissez vide)
   - **Replica Set Name:** (laissez vide)
   - **SSL/TLS:** Cochez "Use SSL/TLS"
   - **Read Preference:** Primary

### 4. Cliquer sur "Connect"

Après avoir nettoyé la connection string, cliquez sur **"Save & Connect"** (ou juste "Connect").

## 🎯 Résultat Attendu

Si tout est correct:
- ✅ Compass devrait se connecter
- ✅ Vous verrez la base de données `azalee_db`
- ✅ Vous pourrez voir les collections

Si ça ne fonctionne toujours pas:
- Notez le message d'erreur exact
- Vérifiez Network Access dans MongoDB Atlas
- Vérifiez que l'utilisateur `azalee2020` est "Active"


