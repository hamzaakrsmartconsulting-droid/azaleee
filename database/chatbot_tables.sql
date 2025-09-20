-- Database tables for chatbot data collection and CMS management
-- Run this script in phpMyAdmin or MySQL command line

USE azalee_patrimoine;

-- Create chatbot_sessions table for tracking user sessions
CREATE TABLE IF NOT EXISTS chatbot_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  user_id INT NULL,
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP NULL,
  status ENUM('active', 'completed', 'abandoned') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_session_id (session_id),
  INDEX idx_user_id (user_id),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Create chatbot_user_profiles table for storing collected user data
CREATE TABLE IF NOT EXISTS chatbot_user_profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  user_id INT NULL,
  nom VARCHAR(255) NULL,
  prenom VARCHAR(255) NULL,
  age INT NULL,
  situation_matrimoniale VARCHAR(100) NULL,
  enfants VARCHAR(50) NULL,
  situation_professionnelle VARCHAR(100) NULL,
  tmi VARCHAR(100) NULL,
  placements_actuels VARCHAR(255) NULL,
  budget_projet VARCHAR(255) NULL,
  intention VARCHAR(255) NULL,
  objectif VARCHAR(50) NULL,
  canal_preference VARCHAR(100) NULL,
  date_rdv VARCHAR(255) NULL,
  telephone VARCHAR(50) NULL,
  email VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_session_id (session_id),
  INDEX idx_user_id (user_id),
  INDEX idx_email (email),
  INDEX idx_created_at (created_at),
  FOREIGN KEY (session_id) REFERENCES chatbot_sessions(session_id) ON DELETE CASCADE
);

-- Create chatbot_conversations table for storing conversation history
CREATE TABLE IF NOT EXISTS chatbot_conversations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  message_type ENUM('user', 'bot') NOT NULL,
  content TEXT NOT NULL,
  step VARCHAR(100) NULL,
  metadata JSON NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_session_id (session_id),
  INDEX idx_message_type (message_type),
  INDEX idx_timestamp (timestamp),
  FOREIGN KEY (session_id) REFERENCES chatbot_sessions(session_id) ON DELETE CASCADE
);

-- Create chatbot_actions table for tracking user actions (appointments, callbacks, etc.)
CREATE TABLE IF NOT EXISTS chatbot_actions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255) NOT NULL,
  action_type ENUM('appointment', 'callback', 'pdf_request', 'email_signup') NOT NULL,
  action_data JSON NOT NULL,
  status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_session_id (session_id),
  INDEX idx_action_type (action_type),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at),
  FOREIGN KEY (session_id) REFERENCES chatbot_sessions(session_id) ON DELETE CASCADE
);

-- Insert sample data for testing
INSERT INTO chatbot_sessions (session_id, status) VALUES 
('test_session_001', 'completed'),
('test_session_002', 'active');

INSERT INTO chatbot_user_profiles (session_id, nom, prenom, age, situation_matrimoniale, enfants, situation_professionnelle, intention, email) VALUES 
('test_session_001', 'Dupont', 'Jean', 45, 'Marié(e)', 'Oui', 'Salarié', 'Réduire mes impôts', 'jean.dupont@email.com'),
('test_session_002', 'Martin', 'Marie', 38, 'Célibataire', 'Non', 'Entrepreneur', 'Investir dans l\'immobilier', 'marie.martin@email.com');




