-- Script de test pour vérifier la connexion CMS
USE azalee_patrimoine;

-- 1. Vérifier que les tables existent
SHOW TABLES;

-- 2. Insérer du contenu de test dans page_content
INSERT INTO page_content (page_path, page_type, content, metadata, status) 
VALUES (
  '/cms/immobilier/lmnp',
  'cms',
  '{"hero": {"title": "TEST - Investir avec le statut LMNP", "subtitle": "Ceci est un test de la base de données", "button": "Test bouton"}, "rightCard": {"title": "Test experts", "benefits": ["Test avantage 1", "Test avantage 2"], "floatingText": "Test 0€", "icon": "/test-icon.png"}}',
  '{"lastModified": "2024-01-17T10:00:00Z", "modifiedBy": "test"}',
  'published'
) ON DUPLICATE KEY UPDATE 
  content = VALUES(content),
  metadata = VALUES(metadata),
  updated_at = CURRENT_TIMESTAMP;

-- 3. Vérifier le contenu inséré
SELECT * FROM page_content WHERE page_path = '/cms/immobilier/lmnp';

-- 4. Compter les enregistrements
SELECT COUNT(*) as total_pages FROM page_content;
SELECT COUNT(*) as total_sessions FROM user_sessions;
