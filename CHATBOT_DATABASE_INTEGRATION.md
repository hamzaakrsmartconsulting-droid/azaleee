# Chatbot Database Integration - Documentation

## 🎯 **Vue d'ensemble**

Ce système permet de sauvegarder automatiquement les données des conversations du chatbot dans la base de données et de gérer les rendez-vous, rappels et bilans PDF via le CMS.

## 🗄️ **Structure de la Base de Données**

### **Tables Principales**

#### 1. **interactions_chatbot** (Table existante étendue)
```sql
ALTER TABLE interactions_chatbot 
ADD COLUMN actions_required JSON AFTER current_step,
ADD COLUMN appointment_requested BOOLEAN DEFAULT FALSE AFTER actions_required,
ADD COLUMN callback_requested BOOLEAN DEFAULT FALSE AFTER appointment_requested,
ADD COLUMN pdf_requested BOOLEAN DEFAULT FALSE AFTER callback_requested;
```

#### 2. **appointments** (Nouvelle table)
- Gestion des rendez-vous créés via le chatbot
- Lien avec les sessions de conversation
- Statuts : en_attente, confirme, annule, termine

#### 3. **callbacks** (Nouvelle table)
- Gestion des rappels programmés
- Priorités : basse, moyenne, haute
- Statuts : en_attente, traite, annule

#### 4. **pdf_reports** (Nouvelle table)
- Suivi des bilans PDF générés
- Métadonnées des rapports

## 🔄 **Flux de Données**

### **1. Conversation Chatbot → Base de Données**

```javascript
// Quand une conversation se termine
const actionsData = {
  appointment: {
    clientName: "Jean Dupont",
    clientEmail: "jean@email.com",
    clientPhone: "06 12 34 56 78",
    appointmentDate: "2024-01-15T14:00:00",
    appointmentType: "consultation_fiscale",
    notes: "Client intéressé par l'optimisation fiscale",
    priority: "moyenne"
  },
  callback: {
    clientName: "Jean Dupont",
    clientPhone: "06 12 34 56 78",
    reason: "Rappel pour documents",
    priority: "haute",
    scheduledDate: "2024-01-14T16:00:00",
    notes: "Demander les justificatifs"
  },
  pdfReport: {
    reportType: "bilan_patrimonial",
    metadata: { /* données du rapport */ }
  }
};

// Appel API pour finaliser la conversation
await fetch('/api/chatbot/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    session_id: 'session_123',
    isCompleted: true,
    actionsRequired: actionsData
  })
});
```

### **2. Création Automatique des Actions**

Le système crée automatiquement :
- **Rendez-vous** dans la table `appointments`
- **Rappels** dans la table `callbacks`
- **Rapports PDF** dans la table `pdf_reports`

### **3. Affichage dans le CMS**

Le CMS récupère toutes les données via `/api/chatbot/data` et affiche :
- Conversations en cours et terminées
- Rendez-vous programmés
- Rappels en attente
- Profils utilisateurs collectés

## 🛠️ **API Endpoints**

### **GET /api/chatbot/data**
- Récupère toutes les données pour le CMS
- Inclut conversations, rendez-vous, rappels, utilisateurs
- Statistiques en temps réel

### **POST /api/chatbot/data**
- Sauvegarde une conversation
- Finalise une conversation et crée les actions
- Paramètre `isCompleted: true` pour terminer

### **GET /api/chatbot/appointments**
- Liste tous les rendez-vous
- Filtrage par statut possible

### **POST /api/chatbot/appointments**
- Crée un nouveau rendez-vous
- Depuis le CMS ou le chatbot

### **PUT /api/chatbot/appointments**
- Met à jour un rendez-vous existant
- Changement de statut, informations client

### **GET /api/chatbot/callbacks**
- Liste tous les rappels
- Filtrage par statut et priorité

### **POST /api/chatbot/callbacks**
- Crée un nouveau rappel
- Depuis le CMS ou le chatbot

## 📱 **Interface CMS**

### **Onglets Disponibles**
1. **Vue d'ensemble** : Statistiques et actions rapides
2. **Rendez-vous** : Gestion complète des consultations
3. **Rappels** : Suivi des rappels et priorités
4. **Conversations** : Historique des interactions
5. **Utilisateurs** : Profils collectés

### **Fonctionnalités**
- ✅ Création manuelle de rendez-vous/rappels
- ✅ Modification des statuts en temps réel
- ✅ Génération de bilans PDF
- ✅ Envoi de rappels automatiques
- ✅ Suivi des priorités et urgences

## 🚀 **Installation et Configuration**

### **1. Créer les Tables**
```bash
# Exécuter le script SQL
mysql -u username -p database_name < database/create_appointments_callbacks_tables.sql
```

### **2. Vérifier la Connexion**
```bash
# Tester la connexion à la base
curl http://localhost:4028/api/chatbot/data
```

### **3. Démarrer le Serveur**
```bash
npm run dev
# Accéder au CMS : http://localhost:4028/cms/chatbot
```

## 🔧 **Intégration avec le Chatbot**

### **Dans le Chatbot (SarahChatbot.jsx)**
```javascript
// À la fin d'une conversation
const completeConversation = async () => {
  const actionsData = {
    appointment: userWantsAppointment ? appointmentData : null,
    callback: userWantsCallback ? callbackData : null,
    pdfReport: userWantsPDF ? pdfData : null
  };

  await fetch('/api/chatbot/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      session_id: sessionId,
      isCompleted: true,
      actionsRequired: actionsData
    })
  });
};
```

## 📊 **Statistiques et Métriques**

Le système fournit en temps réel :
- Nombre total de conversations
- Rendez-vous en attente/confirmés
- Rappels par priorité
- Utilisateurs uniques
- Actions requises par session

## 🔒 **Sécurité et Validation**

- Validation des données côté serveur
- Gestion des erreurs et rollback
- Logs détaillés des opérations
- Protection contre les injections SQL

## 🚨 **Dépannage**

### **Problèmes Courants**
1. **Tables non créées** : Exécuter le script SQL
2. **Connexion DB échoue** : Vérifier les paramètres de connexion
3. **API ne répond pas** : Vérifier les logs du serveur
4. **Données non mises à jour** : Vérifier les permissions DB

### **Logs Utiles**
```bash
# Vérifier les erreurs API
tail -f logs/api.log

# Vérifier la base de données
mysql -u username -p -e "SHOW TABLES;"
```

## 🔮 **Évolutions Futures**

- Notifications push en temps réel
- Intégration calendrier (Google, Outlook)
- Système de rappels automatiques
- Génération automatique de PDF
- Analytics avancés des conversations
- Intégration CRM externe

---

**Note** : Ce système est conçu pour être évolutif et peut être étendu selon les besoins métier.





