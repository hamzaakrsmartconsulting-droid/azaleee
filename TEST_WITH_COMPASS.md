# 🧪 Tester avec MongoDB Compass

## 📥 Étape 1: Télécharger MongoDB Compass

1. Allez sur: https://www.mongodb.com/try/download/compass
2. Téléchargez la version pour Windows
3. Installez Compass (suivez l'assistant d'installation)

## 🔗 Étape 2: Connection String

Utilisez cette connection string exacte dans Compass:

```
mongodb+srv://azalee2020:hamza2020@cluster0.9xrt1pn.mongodb.net/azalee_db?retryWrites=true&w=majority
```

## 🔌 Étape 3: Se Connecter avec Compass

1. Ouvrez MongoDB Compass
2. Dans le champ "New Connection", collez la connection string ci-dessus
3. Cliquez sur le bouton **"Connect"** (ou appuyez sur Entrée)

## ✅ Résultats Possibles

### Si Compass se Connecte avec Succès ✅

**Cela signifie:**
- ✅ MongoDB Atlas fonctionne correctement
- ✅ Network Access est OK
- ✅ L'utilisateur `azalee2020` fonctionne
- ✅ Le problème est dans Node.js ou la configuration

**Solutions:**
1. Redémarrez complètement le serveur dev:
   ```bash
   # Arrêtez le serveur (Ctrl+C)
   npm run dev
   ```

2. Vérifiez que `.env.local` est bien chargé:
   - Le fichier doit être à la racine du projet
   - Next.js charge automatiquement `.env.local`

3. Vérifiez les logs du serveur dev pour voir les erreurs exactes

4. Si ça ne fonctionne toujours pas, le problème peut être:
   - Firewall Windows bloquant Node.js spécifiquement
   - Cache Node.js
   - Problème avec mongoose

### Si Compass NE se Connecte PAS ❌

**Cela signifie:**
- ❌ Le problème est dans MongoDB Atlas
- ❌ Network Access, utilisateur, ou permissions

**Vérifications:**
1. **Network Access:**
   - Allez sur: https://cloud.mongodb.com → Security → Network Access
   - Vérifiez que `0.0.0.0/0` est "Active"

2. **Database Access:**
   - Allez sur: Security → Database Access
   - Vérifiez que `azalee2020` existe et est "Active"
   - Vérifiez les permissions (doit avoir `readWrite` ou `atlasAdmin`)

3. **Erreur dans Compass:**
   - Notez le message d'erreur exact
   - "Authentication failed" → problème username/password
   - "Connection timeout" → problème Network Access
   - "Server selection timeout" → problème DNS ou Network Access

## 📸 Capture d'Écran Utile

Si Compass affiche une erreur, prenez une capture d'écran du message d'erreur pour que je puisse vous aider davantage.

## 🔄 Après le Test

**Si Compass fonctionne:**
- Le problème est résolu côté MongoDB
- On peut se concentrer sur Node.js

**Si Compass ne fonctionne pas:**
- On doit corriger MongoDB Atlas d'abord
- Ensuite on testera Node.js

## 💡 Astuce

Compass est un excellent outil pour:
- Voir vos données
- Tester des requêtes
- Vérifier que tout fonctionne
- Déboguer les problèmes de connexion

Une fois que Compass fonctionne, votre application Node.js devrait aussi fonctionner!


