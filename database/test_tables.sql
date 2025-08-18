-- Script de test pour vérifier les tables
USE azalee_patrimoine;

-- Vérifier que les tables existent
SHOW TABLES;

-- Vérifier la structure de page_content
DESCRIBE page_content;

-- Vérifier la structure de user_sessions
DESCRIBE user_sessions;

-- Vérifier la structure de interactions_chatbot
DESCRIBE interactions_chatbot;

-- Compter les enregistrements
SELECT COUNT(*) as total_pages FROM page_content;
SELECT COUNT(*) as total_sessions FROM user_sessions;
SELECT COUNT(*) as total_interactions FROM interactions_chatbot;
