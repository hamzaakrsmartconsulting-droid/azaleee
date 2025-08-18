# 🗄️ Installation de la Base de Données MySQL avec XAMPP

## 📋 Prérequis

- [XAMPP](https://www.apachefriends.org/fr/index.html) installé sur votre machine
- Node.js et npm installés
- Projet Next.js configuré

## 🚀 Étapes d'Installation

### 1. Démarrer XAMPP

1. Ouvrir **XAMPP Control Panel**
2. Démarrer le service **Apache** (cliquer sur "Start")
3. Démarrer le service **MySQL** (cliquer sur "Start")
4. Vérifier que les deux services sont en **vert**

### 2. Accéder à phpMyAdmin

1. Ouvrir votre navigateur
2. Aller sur `http://localhost/phpmyadmin`
3. Se connecter avec :
   - **Utilisateur** : `root`
   - **Mot de passe** : (laisser vide par défaut)

### 3. Créer la Base de Données

1. Dans phpMyAdmin, cliquer sur **"Nouvelle base de données"**
2. Nom de la base : `azalee_patrimoine`
3. Interclassement : `utf8mb4_unicode_ci`
4. Cliquer sur **"Créer"**

### 4. Exécuter le Script SQL

1. Sélectionner la base `azalee_patrimoine`
2. Aller dans l'onglet **"SQL"**
3. Copier-coller le contenu du fichier `database/init.sql`
4. Cliquer sur **"Exécuter"**

### 5. Configurer les Variables d'Environnement

1. Créer un fichier `.env.local` à la racine du projet
2. Ajouter le contenu suivant :

```env
# Configuration de la base de données MySQL (XAMPP)
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=azalee_patrimoine
DB_PORT=3306

# Configuration de l'application
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:4028

# Sécurité
JWT_SECRET=votre_secret_jwt_tres_securise_ici
SESSION_SECRET=votre_secret_session_tres_securise_ici
```

### 6. Tester la Connexion

1. Démarrer votre application Next.js : `npm run dev`
2. Aller sur `http://localhost:4028/admin/database`
3. Vérifier que le statut affiche "Connecté"

## 🗂️ Structure de la Base de Données

### Tables Principales

- **`users`** - Utilisateurs et clients
- **`profils_patrimoniaux`** - Profils financiers des utilisateurs
- **`investissements_immobiliers`** - Investissements immobiliers (LMNP, Pinel, etc.)
- **`placements_financiers`** - Placements financiers (PEA, assurance-vie, etc.)
- **`simulations_fiscales`** - Simulations d'optimisation fiscale
- **`rendez_vous`** - Gestion des rendez-vous avec les conseillers
- **`conseillers`** - Équipe de conseillers
- **`contenus_cms`** - Contenu dynamique du site
- **`interactions_chatbot`** - Historique des interactions du chatbot

## 🔧 Utilisation

### Test de Connexion

```javascript
import { testConnection } from '../lib/database';

// Tester la connexion
const isConnected = await testConnection();
console.log('Connexion:', isConnected ? 'OK' : 'ÉCHEC');
```

### Exécuter une Requête

```javascript
import { executeQuery, executeSelect } from '../lib/database';

// Requête de sélection
const users = await executeSelect('SELECT * FROM users WHERE id = ?', [1]);

// Requête d'insertion/mise à jour
const result = await executeQuery('INSERT INTO users (email, nom) VALUES (?, ?)', ['test@test.com', 'Test']);
```

### Modèles de Données

```javascript
import { User } from '../lib/models/User';

// Créer un utilisateur
const userId = await User.create({
  email: 'user@example.com',
  nom: 'Dupont',
  prenom: 'Jean'
});

// Trouver un utilisateur
const user = await User.findByEmail('user@example.com');
```

## 🚨 Dépannage

### Erreur de Connexion

- Vérifier que XAMPP est démarré
- Vérifier que MySQL fonctionne (port 3306)
- Vérifier les identifiants dans `.env.local`

### Erreur de Base de Données

- Vérifier que la base `azalee_patrimoine` existe
- Vérifier que le script SQL a été exécuté
- Vérifier les permissions de l'utilisateur MySQL

### Erreur de Port

- Vérifier que le port 3306 n'est pas utilisé par un autre service
- Modifier le port dans XAMPP si nécessaire
- Mettre à jour le port dans `.env.local`

## 📱 Interface d'Administration

Accédez à l'interface d'administration de la base de données :
`http://localhost:4028/admin/database`

Cette interface vous permet de :
- Tester la connexion à la base de données
- Voir le statut de la connexion
- Accéder rapidement à phpMyAdmin
- Voir les instructions d'installation

## 🔒 Sécurité

- Changez le mot de passe root de MySQL en production
- Utilisez des secrets JWT forts
- Limitez l'accès à la base de données par IP
- Sauvegardez régulièrement vos données

## 📚 Ressources

- [Documentation MySQL](https://dev.mysql.com/doc/)
- [Documentation XAMPP](https://www.apachefriends.org/docs.html)
- [Documentation phpMyAdmin](https://docs.phpmyadmin.net/)
- [Documentation Next.js](https://nextjs.org/docs)
