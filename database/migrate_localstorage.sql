-- Script de migration localStorage vers base de données MySQL
-- À exécuter dans phpMyAdmin (XAMPP)

USE azalee_patrimoine;

-- 1. Table pour le contenu des pages (remplace localStorage des pages CMS)
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

-- 2. Table pour les sessions utilisateur (remplace localStorage du chatbot)
CREATE TABLE IF NOT EXISTS user_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) UNIQUE NOT NULL,
    user_id INT,
    session_type ENUM('chatbot', 'cms', 'public') DEFAULT 'chatbot',
    data JSON NOT NULL,
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 3. Table pour l'historique des conversations (remplace conversationHistory)
CREATE TABLE IF NOT EXISTS conversation_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    message_type ENUM('user', 'bot', 'system', 'options') DEFAULT 'user',
    content TEXT NOT NULL,
    metadata JSON,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session_id (session_id),
    INDEX idx_timestamp (timestamp)
);

-- 4. Table pour les profils utilisateur (remplace userProfile)
CREATE TABLE IF NOT EXISTS user_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    session_id VARCHAR(255),
    profile_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_session_id (session_id)
);

-- 5. Table pour les préférences et sélections (remplace selectedIntentions, selectedThemes)
CREATE TABLE IF NOT EXISTS user_preferences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    session_id VARCHAR(255),
    preference_type ENUM('intentions', 'themes', 'options') DEFAULT 'intentions',
    preference_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_session_id (session_id),
    INDEX idx_preference_type (preference_type)
);

-- 6. Mise à jour de la table interactions_chatbot existante
ALTER TABLE interactions_chatbot 
ADD COLUMN IF NOT EXISTS conversation_history JSON AFTER contexte,
ADD COLUMN IF NOT EXISTS user_profile JSON AFTER conversation_history,
ADD COLUMN IF NOT EXISTS selected_intentions JSON AFTER user_profile,
ADD COLUMN IF NOT EXISTS current_step VARCHAR(100) AFTER selected_intentions,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER date_interaction;

-- Création des index pour optimiser les performances
CREATE INDEX idx_page_content_path ON page_content(page_path);
CREATE INDEX idx_user_sessions_session ON user_sessions(session_id);
CREATE INDEX idx_user_sessions_type ON user_sessions(session_type);
CREATE INDEX idx_conversation_messages_session ON conversation_messages(session_id);
CREATE INDEX idx_user_profiles_session ON user_profiles(session_id);
CREATE INDEX idx_user_preferences_session ON user_preferences(session_id);

-- Affichage des tables créées
SHOW TABLES;
