# 🔧 Diagnostic SARA Chatbot - Aucune donnée dans le CMS

## Étapes de diagnostic

### 1. Vérifier la connexion à la base de données

Ouvrez votre navigateur et allez à :
```
http://localhost:3000/api/test-db
```

**Résultat attendu :**
```json
{
  "success": true,
  "message": "Connexion à la base de données réussie!",
  "tables": ["sara_sessions", "sara_user_profiles", "sara_messages", ...]
}
```

**Si erreur :** Vérifiez votre fichier `.env.local` :
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=azalee_cms
DB_PORT=3306
```

### 2. Créer les tables SARA

Si les tables n'existent pas, allez à :
```
http://localhost:3000/api/setup-sara-tables
```
(Méthode POST - utilisez Postman ou curl)

### 3. Insérer des données de test

Pour tester avec des données, allez à :
```
http://localhost:3000/api/insert-test-data
```
(Méthode POST - utilisez Postman ou curl)

### 4. Vérifier le CMS

Après avoir inséré des données de test, allez à :
```
http://localhost:3000/cms/chatbot
```

Vous devriez voir :
- **Sessions Tab** : Une session de test
- **Leads Tab** : Des rendez-vous, rappels et PDF de test
- **Analytics Tab** : Des statistiques

### 5. Tester le chatbot réel

1. Allez sur votre site principal
2. Cliquez sur le bouton chat (en bas à droite)
3. Complétez une conversation complète
4. Retournez au CMS pour voir les nouvelles données

## Problèmes courants

### Problème 1 : Erreur de connexion à la base de données
**Solution :**
- Vérifiez que MySQL est démarré
- Vérifiez les identifiants dans `.env.local`
- Vérifiez que la base `azalee_cms` existe

### Problème 2 : Tables n'existent pas
**Solution :**
- Exécutez le script de création des tables
- Vérifiez les permissions MySQL

### Problème 3 : Données ne s'affichent pas dans le CMS
**Solution :**
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que les API endpoints fonctionnent
- Testez avec des données de test d'abord

### Problème 4 : Chatbot ne sauvegarde pas
**Solution :**
- Vérifiez la console du navigateur
- Vérifiez que les API SARA fonctionnent
- Vérifiez la connexion à la base de données

## Commandes de test

```bash
# Test de connexion
curl http://localhost:3000/api/test-db

# Créer les tables (POST)
curl -X POST http://localhost:3000/api/setup-sara-tables

# Insérer des données de test (POST)
curl -X POST http://localhost:3000/api/insert-test-data
```

## Vérification finale

Une fois tout configuré, vous devriez voir dans le CMS :
- ✅ Sessions avec statut "completed"
- ✅ Profils utilisateur complets
- ✅ Messages de conversation
- ✅ Leads qualifiés (RDV, rappels, PDF)
- ✅ Statistiques et analytics

Si vous ne voyez toujours rien, vérifiez :
1. La console du navigateur (F12)
2. Les logs du serveur Next.js
3. La connexion à la base de données
4. Les permissions MySQL
