-- Script de correction de la table interactions_chatbot
-- À exécuter dans phpMyAdmin (XAMPP)

USE azalee_patrimoine;

-- Vérifier d'abord la structure actuelle
DESCRIBE interactions_chatbot;

-- Ajouter les colonnes manquantes une par une (plus sûr)
-- Colonne conversation_history
SET @sql = 'ALTER TABLE interactions_chatbot ADD COLUMN conversation_history JSON';
SET @sql = CONCAT(@sql, ' AFTER contexte');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Colonne user_profile
SET @sql = 'ALTER TABLE interactions_chatbot ADD COLUMN user_profile JSON';
SET @sql = CONCAT(@sql, ' AFTER conversation_history');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Colonne selected_intentions
SET @sql = 'ALTER TABLE interactions_chatbot ADD COLUMN selected_intentions JSON';
SET @sql = CONCAT(@sql, ' AFTER user_profile');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Colonne current_step
SET @sql = 'ALTER TABLE interactions_chatbot ADD COLUMN current_step VARCHAR(100)';
SET @sql = CONCAT(@sql, ' AFTER selected_intentions');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Colonne updated_at
SET @sql = 'ALTER TABLE interactions_chatbot ADD COLUMN updated_at TIMESTAMP';
SET @sql = CONCAT(@sql, ' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP');
SET @sql = CONCAT(@sql, ' AFTER date_interaction');
PREPARE stmt FROM @sql;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Vérifier la structure finale
DESCRIBE interactions_chatbot;

-- Mettre à jour les enregistrements existants
UPDATE interactions_chatbot 
SET updated_at = date_interaction 
WHERE updated_at IS NULL;

-- Vérifier le résultat
SELECT COUNT(*) as total_records, 
       COUNT(conversation_history) as with_history,
       COUNT(user_profile) as with_profile,
       COUNT(selected_intentions) as with_intentions,
       COUNT(current_step) as with_step,
       COUNT(updated_at) as with_updated
FROM interactions_chatbot;
