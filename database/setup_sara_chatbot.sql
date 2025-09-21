-- SARA Chatbot Database Setup Script
-- Run this script to create all necessary tables for the SARA chatbot

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS azalee_cms;
USE azalee_cms;

-- Table for storing user sessions
CREATE TABLE IF NOT EXISTS sara_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status ENUM('active', 'completed', 'abandoned') DEFAULT 'active',
    current_step VARCHAR(100),
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Table for storing user profiles collected during conversation
CREATE TABLE IF NOT EXISTS sara_user_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    situation_matrimoniale ENUM('Marié(e)', 'Pacsé(e)', 'Célibataire'),
    enfants ENUM('Oui', 'Non'),
    situation_professionnelle ENUM('Salarié', 'Entrepreneur', 'Retraité', 'Autre'),
    tmi VARCHAR(50),
    placements_actuels TEXT,
    budget_projet VARCHAR(100),
    intention VARCHAR(200),
    thematique_reponse TEXT,
    canal_preference ENUM('Téléphone', 'Visio', 'Agence'),
    telephone VARCHAR(20),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
);

-- Table for storing conversation messages
CREATE TABLE IF NOT EXISTS sara_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    message_type ENUM('bot', 'user') NOT NULL,
    content TEXT NOT NULL,
    step VARCHAR(100),
    options JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
);

-- Table for storing appointments/leads
CREATE TABLE IF NOT EXISTS sara_appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    type ENUM('rdv', 'rappel', 'pdf') NOT NULL,
    status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
    preferred_date DATETIME,
    preferred_time VARCHAR(20),
    canal_preference ENUM('Téléphone', 'Visio', 'Agence'),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
);

-- Table for storing callback requests
CREATE TABLE IF NOT EXISTS sara_callbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    preferred_time VARCHAR(100),
    status ENUM('pending', 'contacted', 'completed') DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
);

-- Table for storing PDF requests
CREATE TABLE IF NOT EXISTS sara_pdf_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    pdf_type VARCHAR(100) DEFAULT 'mini-bilan',
    status ENUM('pending', 'sent', 'failed') DEFAULT 'pending',
    sent_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
);

-- Table for storing CMS content
CREATE TABLE IF NOT EXISTS cms_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_slug VARCHAR(255) NOT NULL,
    section_name VARCHAR(255) NOT NULL,
    content LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_page_section (page_slug, section_name)
);

-- Indexes for better performance
CREATE INDEX idx_sessions_status ON sara_sessions(status);
CREATE INDEX idx_sessions_created ON sara_sessions(created_at);
CREATE INDEX idx_profiles_session ON sara_user_profiles(session_id);
CREATE INDEX idx_messages_session ON sara_messages(session_id);
CREATE INDEX idx_appointments_session ON sara_appointments(session_id);
CREATE INDEX idx_callbacks_session ON sara_callbacks(session_id);
CREATE INDEX idx_pdf_requests_session ON sara_pdf_requests(session_id);
CREATE INDEX idx_cms_content_page ON cms_content(page_slug);
CREATE INDEX idx_cms_content_section ON cms_content(section_name);

-- Success message
SELECT 'SARA Chatbot database tables created successfully!' as message;
