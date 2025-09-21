# 🤖 SARA Chatbot - Azalée Patrimoine

## 📋 Vue d'ensemble

SARA est un chatbot conversationnel intelligent conçu pour Azalée Patrimoine, spécialisé dans la conversion de prospects qualifiés en rendez-vous. Le système implémente un script conversationnel complet avec sauvegarde en base de données MySQL et interface CMS pour le suivi.

## 🎯 Objectifs

- **Conversion élevée** : Transformer les visiteurs en prospects qualifiés
- **Qualification automatique** : Collecter des informations détaillées sur les utilisateurs
- **Suivi complet** : Interface CMS pour analyser toutes les interactions
- **Sauvegarde sécurisée** : Toutes les données sont stockées en base MySQL

## 🏗️ Architecture

### Frontend
- **SARA Chatbot** (`src/components/chatbot/SaraChatbot.jsx`) : Interface utilisateur principale
- **ChatbotWrapper** (`src/components/chatbot/ChatbotWrapper.jsx`) : Wrapper avec logique d'affichage
- **CMS Interface** (`src/app/cms/chatbot/page.jsx`) : Interface d'administration

### Backend API
- **Sessions** (`src/app/api/sara/sessions/route.js`) : Gestion des sessions
- **Messages** (`src/app/api/sara/messages/route.js`) : Sauvegarde des messages
- **Profiles** (`src/app/api/sara/profile/route.js`) : Gestion des profils utilisateurs
- **Appointments** (`src/app/api/sara/appointments/route.js`) : Gestion des rendez-vous
- **CMS APIs** : Endpoints pour l'interface d'administration

### Base de données
- **sara_sessions** : Sessions utilisateur
- **sara_user_profiles** : Profils collectés
- **sara_messages** : Messages de conversation
- **sara_appointments** : Rendez-vous demandés
- **sara_callbacks** : Demandes de rappel
- **sara_pdf_requests** : Demandes de documents PDF

## 🚀 Installation

### 1. Configuration de la base de données

```bash
# Créer la base de données et les tables
mysql -u root -p < database/setup_sara_chatbot.sql
```

### 2. Variables d'environnement

Créer un fichier `.env.local` :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=azalee_patrimoine
DB_PORT=3306
```

### 3. Démarrage de l'application

```bash
npm run dev
```

## 📱 Utilisation

### Pour les utilisateurs
1. Cliquer sur le bouton chat en bas à droite
2. Suivre la conversation guidée avec SARA
3. Répondre aux questions pour être qualifié
4. Choisir l'action finale (RDV, rappel, PDF)

### Pour les administrateurs
1. Accéder à `/cms/chatbot`
2. Consulter les sessions, leads et analytics
3. Suivre les conversions et performances

## 🎭 Script Conversationnel

### Étapes du parcours utilisateur

1. **Accueil** : Présentation et choix d'orientation
2. **Intention** : Identification du besoin (placements, fiscalité, etc.)
3. **Thématique** : Questions spécifiques selon l'intention
4. **Profil** : Collecte des informations personnelles
5. **Engagement** : Proposition d'actions (RDV, PDF, rappel)
6. **Finalisation** : Confirmation et sauvegarde

### Thématiques supportées

- 💰 **Placements financiers** : Optimisation des investissements
- 🏠 **Immobilier** : Investissement locatif et défiscalisation
- 📊 **Fiscalité** : Réduction d'impôts et optimisation
- 🏖️ **Retraite** : Préparation et épargne retraite
- 👨‍👩‍👧‍👦 **Transmission** : Héritage et donation
- 🔄 **Diversification** : Sécurisation du patrimoine
- ⚖️ **Situations spécifiques** : Divorce, succession, expatriation

## 📊 Interface CMS

### Onglet Sessions
- Liste de toutes les sessions
- Statut (active, complétée, abandonnée)
- Étape actuelle
- Détails complets de chaque conversation

### Onglet Leads Qualifiés
- **Rendez-vous** : Demandes de RDV avec coordonnées
- **Rappels** : Demandes de rappel téléphonique
- **PDF** : Demandes de documents personnalisés

### Onglet Analytics
- Statistiques générales (sessions, conversions)
- Top intentions des utilisateurs
- Durée moyenne des conversations
- Taux de conversion par type d'action

## 🔧 Personnalisation

### Modifier le script conversationnel

Éditer le fichier `src/components/chatbot/SaraChatbot.jsx` :

```javascript
const SARA_SCRIPT = {
  welcome: {
    message: "Votre message d'accueil",
    options: [
      { text: "Option 1", value: "option1" },
      { text: "Option 2", value: "option2" }
    ]
  },
  // ... autres étapes
};
```

### Ajouter de nouvelles thématiques

```javascript
const THEMATIQUES = {
  nouvelle_thematique: {
    explication: "Explication de la thématique",
    question: "Question spécifique à poser"
  }
};
```

## 🛠️ Maintenance

### Sauvegarde des données
```sql
-- Sauvegarde complète
mysqldump -u root -p azalee_patrimoine > backup_sara_chatbot.sql

-- Restauration
mysql -u root -p azalee_patrimoine < backup_sara_chatbot.sql
```

### Nettoyage des anciennes sessions
```sql
-- Supprimer les sessions abandonnées de plus de 30 jours
DELETE FROM sara_sessions 
WHERE status = 'abandoned' 
AND created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);
```

## 📈 Métriques de performance

### KPIs à surveiller
- **Taux de conversion** : Sessions complétées / Sessions totales
- **Taux d'engagement** : Messages par session
- **Qualité des leads** : Pourcentage de coordonnées complètes
- **Temps de réponse** : Durée moyenne des conversations

### Optimisations possibles
- A/B testing des messages d'accueil
- Personnalisation selon la source de trafic
- Intégration avec CRM externe
- Notifications automatiques pour les nouveaux leads

## 🔒 Sécurité

- Toutes les données sont chiffrées en transit (HTTPS)
- Validation des entrées utilisateur
- Protection contre les injections SQL
- Gestion des sessions sécurisée
- Conformité RGPD pour la collecte de données

## 🆘 Support

### Problèmes courants

1. **Chatbot ne s'affiche pas**
   - Vérifier que le composant est importé dans `layout.jsx`
   - Contrôler les erreurs dans la console du navigateur

2. **Erreurs de base de données**
   - Vérifier la connexion MySQL
   - Contrôler les variables d'environnement
   - S'assurer que les tables existent

3. **Données non sauvegardées**
   - Vérifier les logs des API endpoints
   - Contrôler la configuration de la base de données

### Logs et debugging

```bash
# Logs de l'application
npm run dev

# Logs de la base de données
tail -f /var/log/mysql/error.log
```

## 📞 Contact

Pour toute question ou support technique, contacter l'équipe de développement Azalée Patrimoine.

---

**Version** : 1.0.0  
**Dernière mise à jour** : Décembre 2024  
**Statut** : Production Ready ✅
