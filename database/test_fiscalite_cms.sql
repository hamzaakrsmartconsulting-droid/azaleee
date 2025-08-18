-- Script de test pour vérifier la connexion CMS de fiscalité
USE azalee_patrimoine;

-- 1. Vérifier que les tables existent
SHOW TABLES;

-- 2. Insérer du contenu de test pour la page principale de fiscalité
INSERT INTO page_content (page_path, page_type, content, metadata, status) 
VALUES (
  '/fiscalite',
  'cms',
  '{"hero": {"title": "TEST - Tout savoir sur la fiscalité patrimoniale", "paragraph": "Ceci est un test de la base de données pour la page de fiscalité", "pill": {"bullets": ["Test avantage 1", "Test avantage 2"], "cta": "Test CTA", "portrait": "/test-portrait.png"}, "ctaPanel": {"title": "Test guide", "tag": "Test version", "placeholder": "Test email", "button": "Test télécharger"}}, "sommaire": {"leftItems": ["Test item 1", "Test item 2"], "boxes": ["Test box 1", "Test box 2"]}}',
  '{"lastModified": "2024-01-17T10:00:00Z", "modifiedBy": "test"}',
  'published'
) ON DUPLICATE KEY UPDATE 
  content = VALUES(content),
  metadata = VALUES(metadata),
  updated_at = CURRENT_TIMESTAMP;

-- 3. Insérer du contenu de test pour une sous-page de fiscalité
INSERT INTO page_content (page_path, page_type, content, metadata, status) 
VALUES (
  '/fiscalite/declaration-impots',
  'cms',
  '{"hero": {"title": "TEST - Déclaration d''impôts", "subtitle": "Test sous-titre", "button": "Test bouton", "image": "/test-image.jpg"}, "declarationSteps": [{"step": 1, "title": "Test étape 1", "description": "Test description 1"}], "documentsRequis": ["Test document 1", "Test document 2"]}',
  '{"lastModified": "2024-01-17T10:00:00Z", "modifiedBy": "test", "pageId": "declarationImpots"}',
  'published'
) ON DUPLICATE KEY UPDATE 
  content = VALUES(content),
  metadata = VALUES(metadata),
  updated_at = CURRENT_TIMESTAMP;

-- 4. Vérifier le contenu inséré
SELECT page_path, status, created_at, updated_at FROM page_content WHERE page_path LIKE '/fiscalite%';

-- 5. Compter les enregistrements
SELECT COUNT(*) as total_pages FROM page_content WHERE page_path LIKE '/fiscalite%';
