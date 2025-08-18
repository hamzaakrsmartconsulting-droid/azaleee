# 🔧 GUIDE DE DÉPANNAGE - ERREURS DE BASE DE DONNÉES

## 🚨 **ERREURS ACTUELLES IDENTIFIÉES :**

```
Error: (0 , _database_js__WEBPACK_IMPORTED_MODULE_0__.executeSelect) is not a function
Error: (0 , _database_js__WEBPACK_IMPORTED_MODULE_0__.executeQuery) is not a function
```

## 🔍 **CAUSE DU PROBLÈME :**

Le fichier `src/lib/database.js` était vide, ce qui causait l'échec des importations dans les modèles.

## ✅ **SOLUTIONS APPLIQUÉES :**

### **1. FICHIER DATABASE.JS RECRÉÉ :**
- ✅ Connexion MySQL avec `mysql2/promise`
- ✅ Pool de connexions configuré
- ✅ Fonctions `executeQuery` et `executeSelect` disponibles
- ✅ Gestion des erreurs et timeouts

### **2. ROUTE DE TEST CRÉÉE :**
- ✅ `/api/test-db` pour tester la connexion
- ✅ Initialisation automatique des tables

### **3. SCRIPT SQL SIMPLE :**
- ✅ `database/create_tables_simple.sql` pour créer les tables

## 🚀 **ÉTAPES DE RÉSOLUTION :**

### **ÉTAPE 1 : VÉRIFIER LA BASE DE DONNÉES**
```bash
# Aller dans phpMyAdmin
# Vérifier que la base 'azalee_patrimoine' existe
# Vérifier que l'utilisateur 'root' a les droits
```

### **ÉTAPE 2 : CRÉER LES TABLES**
```sql
-- Exécuter dans phpMyAdmin :
USE azalee_patrimoine;

-- Créer la table page_content
CREATE TABLE IF NOT EXISTS page_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_path VARCHAR(255) NOT NULL,
    page_type ENUM('cms', 'public', 'admin') DEFAULT 'cms',
    content JSON NOT NULL,
    metadata JSON,
    version INT DEFAULT 1,
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_page_path (page_path, page_type)
);

-- Créer la table user_sessions
CREATE TABLE IF NOT EXISTS user_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL UNIQUE,
    user_id VARCHAR(255),
    session_type ENUM('chatbot', 'cms', 'admin') DEFAULT 'chatbot',
    data JSON,
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_session_id (session_id),
    INDEX idx_user_id (user_id),
    INDEX idx_session_type (session_type)
);
```

### **ÉTAPE 3 : TESTER LA CONNEXION**
```bash
# Redémarrer le serveur Next.js
npm run dev

# Tester l'API de connexion
curl http://localhost:4028/api/test-db
# ou aller dans le navigateur : http://localhost:4028/api/test-db
```

### **ÉTAPE 4 : VÉRIFIER LES VARIABLES D'ENVIRONNEMENT**
```bash
# Vérifier que .env.local contient :
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=azalee_patrimoine
DB_PORT=3306
```

## 🧪 **TESTS À EFFECTUER :**

### **TEST 1 : CONNEXION DE BASE**
- ✅ Aller sur `http://localhost:4028/api/test-db`
- ✅ Vérifier que la réponse est `{"success": true}`

### **TEST 2 : CMS PRINCIPAL**
- ✅ Aller sur `http://localhost:4028/cms`
- ✅ Vérifier que la page se charge sans erreur
- ✅ Tester la sauvegarde

### **TEST 3 : PAGE D'ACCUEIL**
- ✅ Aller sur `http://localhost:4028/`
- ✅ Vérifier que le contenu se charge
- ✅ Modifier dans le CMS et vérifier la synchronisation

## 🔄 **SI LES ERREURS PERSISTENT :**

### **PROBLÈME 1 : MYSQL2 NON INSTALLÉ**
```bash
npm install mysql2
```

### **PROBLÈME 2 : VARIABLES D'ENVIRONNEMENT**
```bash
# Vérifier que .env.local existe et contient les bonnes valeurs
cat .env.local
```

### **PROBLÈME 3 : BASE DE DONNÉES NON ACCESSIBLE**
```bash
# Vérifier que XAMPP est démarré
# Vérifier que MySQL est actif sur le port 3306
```

### **PROBLÈME 4 : DROITS UTILISATEUR**
```sql
-- Dans phpMyAdmin, vérifier les droits de l'utilisateur 'root'
SHOW GRANTS FOR 'root'@'localhost';
```

## 📋 **CHECKLIST DE VÉRIFICATION :**

- [ ] XAMPP démarré et MySQL actif
- [ ] Base de données `azalee_patrimoine` créée
- [ ] Tables `page_content` et `user_sessions` créées
- [ ] Fichier `.env.local` configuré
- [ ] Serveur Next.js redémarré
- [ ] Route `/api/test-db` fonctionne
- [ ] CMS principal accessible
- [ ] Page d'accueil synchronisée

## 🆘 **EN CAS D'URGENCE :**

Si rien ne fonctionne, vous pouvez temporairement désactiver la base de données en commentant les appels API dans les composants et utiliser uniquement localStorage.

## 📞 **SUPPORT :**

Une fois ces étapes effectuées, testez et dites-moi ce qui fonctionne ou ne fonctionne pas !
