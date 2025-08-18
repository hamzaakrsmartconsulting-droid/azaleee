-- Script simple pour corriger la table interactions_chatbot
-- À exécuter dans phpMyAdmin (XAMPP)

USE azalee_patrimoine;

-- Ajouter les colonnes manquantes
ALTER TABLE interactions_chatbot 
ADD COLUMN conversation_history JSON AFTER contexte,
ADD COLUMN user_profile JSON AFTER conversation_history,
ADD COLUMN selected_intentions JSON AFTER user_profile,
ADD COLUMN current_step VARCHAR(100) AFTER selected_intentions,
ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER date_interaction;

-- Vérifier la structure
DESCRIBE interactions_chatbot;
