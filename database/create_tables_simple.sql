-- Script simple pour créer les tables nécessaires
USE azalee_patrimoine;

-- 1. Créer la table page_content
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

-- 2. Créer la table user_sessions
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

-- 3. Vérifier que les tables existent
SHOW TABLES;

-- 4. Vérifier la structure des tables
DESCRIBE page_content;
DESCRIBE user_sessions;
