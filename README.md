# 🏛️ Azalée Patrimoine - Application Web

Application Next.js 14 pour la gestion de patrimoine et conseil financier.

## 📋 Vue d'ensemble

Azalée Patrimoine est une plateforme complète de gestion de patrimoine offrant :
- **Gestion de contenu CMS** : Système de gestion de contenu headless
- **Dashboard Admin** : Interface d'administration complète
- **Pages thématiques** : Fiscalité, Immobilier, Placements, Patrimoine, Retraite
- **Outils financiers** : Calculateurs et simulateurs
- **Chatbot** : Assistant virtuel pour les clients

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- MongoDB (local ou Atlas)
- npm ou yarn

### Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd "azalee demo"
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp env.example .env.local
   ```
   
   Éditer `.env.local` :
   ```env
   MONGODB_URI=mongodb://localhost:27017/azalee_db
   JWT_SECRET=your-secret-key-change-in-production
   NEXT_PUBLIC_APP_URL=http://localhost:4028
   ```

4. **Démarrer MongoDB** (si local)
   ```bash
   # Windows PowerShell (Admin)
   net start MongoDB
   ```

5. **Initialiser le contenu CMS** (optionnel)
   ```bash
   node scripts/init-cms-content.js
   ```

6. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

7. **Accéder à l'application**
   - Frontend : http://localhost:4028
   - Admin : http://localhost:4028/admin/login
   - Identifiants par défaut : `admin@azalee.com` / `admin123`

## 🐳 Déploiement Docker

### Développement local avec Docker

```bash
# Démarrer tous les services
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

### Déploiement EC2

Voir `DOCKER_SETUP_SUMMARY.md` pour les instructions complètes.

## 📁 Structure du Projet

```
azalee-demo/
├── src/
│   ├── app/              # Pages Next.js (App Router)
│   │   ├── admin/        # Interface d'administration
│   │   ├── api/          # API Routes
│   │   ├── fiscalite/    # Pages fiscalité
│   │   ├── immobilier/   # Pages immobilier
│   │   └── ...
│   ├── components/       # Composants React réutilisables
│   │   ├── cms/          # Composants CMS
│   │   └── common/       # Composants communs
│   └── lib/              # Utilitaires et modèles
│       ├── models/       # Modèles Mongoose
│       └── mongodb.js    # Connexion MongoDB
├── scripts/              # Scripts utilitaires
│   ├── init-*.js         # Initialisation contenu CMS
│   ├── export-mongodb-data.js
│   └── reset-admin-password.js
├── public/               # Fichiers statiques
├── docker-compose.yml    # Configuration Docker
├── Dockerfile            # Image Docker
└── package.json          # Dépendances
```

## 🗄️ Base de Données

### Collections MongoDB

- **`pagecontents`** : Contenu CMS des pages
- **`users`** : Utilisateurs admin
- **`chatbotsessions`** : Sessions du chatbot

### Modèles

- `PageContent` : Contenu des pages CMS
- `User` : Utilisateurs avec authentification JWT
- `ChatbotSession` : Sessions de conversation

## 🔐 Authentification

### Créer un utilisateur admin

```bash
node scripts/reset-admin-password.js
```

### API d'authentification

- `POST /api/auth/login` : Connexion
- `GET /api/auth/verify` : Vérification du token
- `GET /api/auth/init` : Initialisation admin par défaut

## 📝 Système CMS

Le CMS permet de modifier le contenu de toutes les pages sans redémarrage.

### Architecture

Voir `CMS_ARCHITECTURE_DOCUMENTATION.md` pour la documentation complète.

### Utilisation

1. Se connecter à `/admin/login`
2. Accéder à `/admin/cms`
3. Sélectionner une page à modifier
4. Éditer les sections
5. Sauvegarder

## 🛠️ Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement (port 4028)
npm run build        # Build de production
npm run start        # Serveur de production

# Utilitaires
node scripts/init-cms-content.js           # Initialiser contenu CMS
node scripts/export-mongodb-data.js       # Exporter données MongoDB
node scripts/reset-admin-password.js      # Réinitialiser mot de passe admin
```

## 📚 Documentation

- **CMS** : `CMS_ARCHITECTURE_DOCUMENTATION.md`
- **Docker** : `DOCKER_SETUP_SUMMARY.md`
- **MongoDB** : `MONGODB_LOCAL_SETUP.md`

## 🔧 Configuration

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `MONGODB_URI` | URI de connexion MongoDB | `mongodb://localhost:27017/azalee_db` |
| `JWT_SECRET` | Secret pour JWT | `your-secret-key-change-in-production` |
| `NEXT_PUBLIC_APP_URL` | URL publique de l'application | `http://localhost:4028` |
| `NODE_ENV` | Environnement | `development` |

### Configuration Next.js

- `next.config.mjs` : Configuration Next.js
- `tailwind.config.js` : Configuration Tailwind CSS
- `jsconfig.json` : Alias de chemins (`@` → `src`)

## 🚢 Déploiement

### EC2 avec Docker

1. Configurer le Security Group (ports 22, 80, 443)
2. SSH dans l'instance
3. Cloner le repository
4. Configurer `.env.production`
5. `docker-compose up -d --build`

Voir `DOCKER_SETUP_SUMMARY.md` pour plus de détails.

## 🧪 Tests

```bash
# Vérifier la connexion MongoDB
node scripts/test-mongodb-connection.js

# Tester l'authentification
curl http://localhost:4028/api/auth/init
```

## 📦 Dépendances Principales

- **Next.js 14.2.0** : Framework React
- **Mongoose 9.0.0** : ODM MongoDB
- **bcryptjs** : Hachage de mots de passe
- **jsonwebtoken** : Authentification JWT
- **Tailwind CSS** : Framework CSS

## 🤝 Contribution

1. Créer une branche feature
2. Faire les modifications
3. Tester localement
4. Créer une Pull Request

## 📄 Licence

Propriétaire - Azalée Patrimoine

## 📞 Support

Pour toute question ou problème, consulter la documentation ou créer une issue.

---

**Version** : 1.0.0  
**Dernière mise à jour** : 2024
