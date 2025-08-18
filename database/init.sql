-- Script d'initialisation de la base de données Azalée Patrimoine
-- À exécuter dans phpMyAdmin (XAMPP)

-- Créer la base de données
CREATE DATABASE IF NOT EXISTS azalee_patrimoine 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE azalee_patrimoine;

-- Table des utilisateurs/clients
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    telephone VARCHAR(20),
    date_naissance DATE,
    situation_matrimoniale ENUM('celibataire', 'marie', 'pacs', 'divorce') DEFAULT 'celibataire',
    nombre_enfants INT DEFAULT 0,
    tmi ENUM('0%', '14%', '30%', '41%', '45%'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des profils patrimoniaux
CREATE TABLE IF NOT EXISTS profils_patrimoniaux (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    revenus_annuels DECIMAL(12,2),
    patrimoine_immobilier DECIMAL(12,2) DEFAULT 0,
    patrimoine_financier DECIMAL(12,2) DEFAULT 0,
    objectifs JSON,
    tolerance_risque ENUM('conservateur', 'modere', 'dynamique'),
    horizon_investissement ENUM('court_terme', 'moyen_terme', 'long_terme'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des investissements immobiliers
CREATE TABLE IF NOT EXISTS investissements_immobiliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type_investissement ENUM('lmnp', 'lmp', 'pinel', 'robien', 'scellier', 'autre'),
    adresse TEXT NOT NULL,
    prix_acquisition DECIMAL(12,2) NOT NULL,
    loyer_mensuel DECIMAL(8,2),
    charges_annuelles DECIMAL(8,2) DEFAULT 0,
    date_acquisition DATE NOT NULL,
    statut ENUM('en_cours', 'termine', 'vendu'),
    rendement_annuel DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des placements financiers
CREATE TABLE IF NOT EXISTS placements_financiers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type_placement ENUM('assurance_vie', 'pea', 'compte_titres', 'scpi', 'livret', 'autre'),
    nom_placement VARCHAR(255) NOT NULL,
    montant_investi DECIMAL(12,2) NOT NULL,
    valeur_actuelle DECIMAL(12,2),
    rendement_annuel DECIMAL(5,2),
    date_investissement DATE NOT NULL,
    statut ENUM('actif', 'vendu', 'en_cours'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des simulations fiscales
CREATE TABLE IF NOT EXISTS simulations_fiscales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type_simulation ENUM('lmnp', 'pinel', 'deficit_foncier', 'autre'),
    parametres JSON NOT NULL,
    resultats JSON NOT NULL,
    economie_impots DECIMAL(8,2),
    date_simulation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des rendez-vous
CREATE TABLE IF NOT EXISTS rendez_vous (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    conseiller_id INT,
    date_rdv DATETIME NOT NULL,
    duree_minutes INT DEFAULT 60,
    type_rdv ENUM('consultation', 'suivi', 'simulation', 'autre'),
    statut ENUM('planifie', 'confirme', 'annule', 'termine'),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des conseillers
CREATE TABLE IF NOT EXISTS conseillers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    specialite ENUM('patrimoine', 'immobilier', 'fiscalite', 'retraite', 'placements'),
    telephone VARCHAR(20),
    bio TEXT,
    photo_url VARCHAR(500),
    statut ENUM('actif', 'inactif') DEFAULT 'actif',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des contenus CMS
CREATE TABLE IF NOT EXISTS contenus_cms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page VARCHAR(100) NOT NULL,
    section VARCHAR(100) NOT NULL,
    contenu JSON NOT NULL,
    version INT DEFAULT 1,
    statut ENUM('brouillon', 'publie', 'archive') DEFAULT 'brouillon',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_page_section (page, section)
);

-- Table des interactions chatbot
CREATE TABLE IF NOT EXISTS interactions_chatbot (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    user_id INT,
    question TEXT,
    reponse TEXT,
    contexte JSON,
    conversation_history JSON,
    user_profile JSON,
    selected_intentions JSON,
    current_step VARCHAR(100),
    date_interaction TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Insertion de données de test pour les conseillers
INSERT INTO conseillers (nom, prenom, email, specialite, bio) VALUES
('Dupont', 'Marie', 'marie.dupont@azalee-patrimoine.fr', 'patrimoine', 'Conseillère en gestion de patrimoine avec 15 ans d\'expérience'),
('Martin', 'Pierre', 'pierre.martin@azalee-patrimoine.fr', 'immobilier', 'Expert en investissement immobilier et défiscalisation'),
('Bernard', 'Sophie', 'sophie.bernard@azalee-patrimoine.fr', 'fiscalite', 'Avocate fiscaliste spécialisée en optimisation fiscale'),
('Leroy', 'Thomas', 'thomas.leroy@azalee-patrimoine.fr', 'retraite', 'Conseiller en épargne retraite et prévoyance'),
('Moreau', 'Julie', 'julie.moreau@azalee-patrimoine.fr', 'placements', 'Spécialiste en placements financiers et diversification');

-- Insertion de contenu CMS par défaut
INSERT INTO contenus_cms (page, section, contenu, statut) VALUES
('home', 'hero', '{"title": "Votre partenaire de confiance en matière de gestion de patrimoine", "subtitle": "Explorez des conseils personnalisés"}', 'publie'),
('lmnp', 'definition', '{"title": "Qu\'est-ce que le statut LMNP ?", "content": "Le statut de loueur meublé non professionnel..."}', 'publie');

-- Création des index pour optimiser les performances
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_investissements_user ON investissements_immobiliers(user_id);
CREATE INDEX idx_placements_user ON placements_financiers(user_id);
CREATE INDEX idx_simulations_user ON simulations_fiscales(user_id);
CREATE INDEX idx_rdv_user ON rendez_vous(user_id);
CREATE INDEX idx_rdv_date ON rendez_vous(date_rdv);
CREATE INDEX idx_contenus_page ON contenus_cms(page, section);
CREATE INDEX idx_chatbot_session ON interactions_chatbot(session_id);

-- Affichage des tables créées
SHOW TABLES;
