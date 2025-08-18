-- Script de mise à jour de la table interactions_chatbot
-- À exécuter dans phpMyAdmin (XAMPP) après avoir créé la base

USE azalee_patrimoine;

-- Ajouter les nouvelles colonnes pour les conversations complètes
ALTER TABLE interactions_chatbot 
ADD COLUMN conversation_history JSON AFTER contexte,
ADD COLUMN user_profile JSON AFTER conversation_history,
ADD COLUMN selected_intentions JSON AFTER user_profile,
ADD COLUMN current_step VARCHAR(100) AFTER selected_intentions,
ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER date_interaction;

-- Vérifier la structure mise à jour
DESCRIBE interactions_chatbot;
