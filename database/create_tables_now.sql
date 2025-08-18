-- Script URGENT pour créer les tables nécessaires
-- À exécuter IMMÉDIATEMENT dans phpMyAdmin (XAMPP)

USE azalee_patrimoine;

-- 1. Table pour le contenu des pages (URGENT)
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

-- 2. Table pour les sessions utilisateur (URGENT)
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

-- 3. Vérifier que la table interactions_chatbot a les bonnes colonnes
ALTER TABLE interactions_chatbot 
ADD COLUMN IF NOT EXISTS conversation_history JSON AFTER contexte,
ADD COLUMN IF NOT EXISTS user_profile JSON AFTER conversation_history,
ADD COLUMN IF NOT EXISTS selected_intentions JSON AFTER user_profile,
ADD COLUMN IF NOT EXISTS current_step VARCHAR(100) AFTER selected_intentions,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER date_interaction;

-- 4. Créer les index
CREATE INDEX IF NOT EXISTS idx_page_content_path ON page_content(page_path);
CREATE INDEX IF NOT EXISTS idx_user_sessions_session ON user_sessions(session_id);

-- 5. Vérifier les tables créées
SHOW TABLES;
DESCRIBE page_content;
DESCRIBE user_sessions;
