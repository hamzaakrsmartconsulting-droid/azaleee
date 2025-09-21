# 🚀 Azalée CMS - Guide d'Installation

## 📋 Prérequis

- **Node.js** (version 18+)
- **MySQL** (version 8.0+)
- **npm** ou **yarn**

## 🗄️ Configuration de la Base de Données

### 1. Créer la Base de Données MySQL

```sql
CREATE DATABASE azalee_cms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 2. Configuration des Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# MySQL Database Configuration for CMS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=votre_mot_de_passe_mysql
MYSQL_DATABASE=azalee_cms

# JWT Secret for CMS Authentication
JWT_SECRET=azalee-cms-secret-key-change-in-production

# Next.js Configuration
NEXTAUTH_URL=http://localhost:4028
NEXTAUTH_SECRET=your-nextauth-secret

# Development
NODE_ENV=development
```

## 🔧 Installation

### 1. Installer les Dépendances

```bash
npm install
```

### 2. Initialiser le CMS

```bash
# Démarrer le serveur de développement
npm run dev

# Dans un autre terminal, initialiser le CMS
curl http://localhost:4028/api/cms/init
```

Ou visitez directement : `http://localhost:4028/api/cms/init`

## 🔐 Accès au CMS

### Identifiants par Défaut

- **URL** : `http://localhost:4028/cms/login`
- **Email** : `admin@azalee.com`
- **Mot de passe** : `admin123`

⚠️ **Important** : Changez ces identifiants en production !

## 📁 Structure du CMS

```
src/app/cms/
├── login/           # Page de connexion
├── dashboard/       # Tableau de bord
└── layout.jsx       # Layout CMS

src/app/api/cms/
├── auth/
│   └── login/       # API de connexion
└── init/            # API d'initialisation

src/lib/
└── cmsDatabase.js   # Configuration MySQL
```

## 🛠️ Fonctionnalités

### ✅ Implémentées

- [x] **Authentification** avec JWT
- [x] **Base de données MySQL** avec tables CMS
- [x] **Interface de connexion** avec logo Azalée
- [x] **Tableau de bord** administrateur
- [x] **Gestion des sessions**
- [x] **Hachage des mots de passe** (bcrypt)

### 🚧 À Développer

- [ ] **Éditeur de contenu** WYSIWYG
- [ ] **Gestion des pages** dynamiques
- [ ] **Upload d'images**
- [ ] **Gestion des utilisateurs**
- [ ] **Historique des modifications**
- [ ] **Prévisualisation** en temps réel

## 🔒 Sécurité

- **Mots de passe hachés** avec bcrypt
- **Tokens JWT** pour l'authentification
- **Sessions** stockées en base de données
- **Validation** des entrées utilisateur

## 🐛 Dépannage

### Erreur de Connexion MySQL

1. Vérifiez que MySQL est démarré
2. Vérifiez les identifiants dans `.env.local`
3. Vérifiez que la base `azalee_cms` existe

### Erreur d'Initialisation

1. Vérifiez les permissions MySQL
2. Vérifiez que l'utilisateur a les droits CREATE TABLE
3. Consultez les logs du serveur

## 📞 Support

Pour toute question ou problème, consultez les logs du serveur ou contactez l'équipe de développement.

---

**Azalée Patrimoine CMS** - Interface d'administration moderne et sécurisée
