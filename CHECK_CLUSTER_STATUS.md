# 🔍 Vérification du Statut du Cluster MongoDB Atlas

## ⚠️ PROBLÈME COMMUN: Cluster en Pause

MongoDB Atlas met automatiquement les clusters gratuits en **pause** après 1 semaine d'inactivité.

## ✅ Comment Vérifier et Réactiver

### Étape 1: Vérifier le Statut

1. Allez sur: https://cloud.mongodb.com
2. Connectez-vous
3. Cliquez sur **"Database"** dans le menu de gauche
4. Regardez votre cluster `cluster0`

**Statuts possibles:**
- ✅ **"Running"** (vert) = ACTIF → Le cluster fonctionne
- ⏸️ **"Paused"** (gris) = EN PAUSE → Le cluster est arrêté
- ⏳ **"Pausing"** = En cours de pause
- 🔄 **"Resuming"** = En cours de réactivation

### Étape 2: Réactiver le Cluster (si en pause)

1. Si le cluster est **"Paused"**, cliquez sur les **3 points** (⋯) à côté du nom du cluster
2. Cliquez sur **"Resume"** ou **"Resume Cluster"**
3. ⏰ **ATTENDEZ 2-5 MINUTES** pour que le cluster redémarre
4. Le statut passera de "Resuming" à "Running"

### Étape 3: Vérifier Network Access (ENCORE)

Même si vous l'avez déjà fait, **vérifiez à nouveau:**

1. Cliquez sur **"Network Access"** dans le menu de gauche
2. Vérifiez que vous voyez **`0.0.0.0/0`** dans la liste
3. Le statut doit être **"Active"** (pas "Pending" ou "Failed")

**Si `0.0.0.0/0` n'est pas là:**
1. Cliquez sur **"Add IP Address"**
2. Cliquez sur **"Allow Access from Anywhere"**
3. Cliquez sur **"Confirm"**
4. Attendez 3-5 minutes

**Si `0.0.0.0/0` est là mais "Pending":**
- Attendez encore quelques minutes
- Ou supprimez-le et recréez-le

## 🔍 Autres Vérifications

### Vérifier Database Access

1. Cliquez sur **"Database Access"**
2. Vérifiez que `azalee_admin` existe
3. Vérifiez que le statut est **"Active"**

### Vérifier la Connection String

1. Cliquez sur **"Database"** → **"Connect"** sur votre cluster
2. Choisissez **"Connect your application"**
3. Copiez la connection string
4. Comparez avec celle dans votre `.env.local`

**Format correct:**
```
mongodb+srv://azalee_admin:VOTRE_MOT_DE_PASSE@cluster0.9xrt1pn.mongodb.net/azalee_db?retryWrites=true&w=majority
```

## 🎯 Checklist Complète

- [ ] Cluster est **"Running"** (pas "Paused")
- [ ] Network Access contient **`0.0.0.0/0`** avec statut **"Active"**
- [ ] Database Access: utilisateur `azalee_admin` existe et est **"Active"**
- [ ] Connection string dans `.env.local` est correcte
- [ ] Attendu 3-5 minutes après toute modification

## 💡 Si Rien Ne Fonctionne

1. **Créez un nouvel utilisateur** avec un mot de passe simple (sans caractères spéciaux)
2. **Supprimez et recréez** l'entrée Network Access `0.0.0.0/0`
3. **Vérifiez que le cluster n'est pas en pause**
4. **Testez avec MongoDB Compass** pour isoler le problème


