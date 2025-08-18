-- Script de test pour vérifier la connexion CMS de la page d'accueil
USE azalee_patrimoine;

-- 1. Vérifier que les tables existent
SHOW TABLES;

-- 2. Insérer du contenu de test pour la page d'accueil
INSERT INTO page_content (page_path, page_type, content, metadata, status) 
VALUES (
  '/',
  'cms',
  '{"heroTitle": "TEST - Votre partenaire de confiance en matière de gestion de patrimoine", "heroSubtitle": "Ceci est un test de la base de données pour la page d''accueil", "heroButton1": "Test consultation", "heroButton2": "Test explorer", "introTitle": "TEST - Gestion de patrimoine — Optimisation fiscale immobilière — Conseil financier", "introParagraph": "Test paragraphe d''introduction", "introButton": "Test rencontrez-nous", "expertsTitle": "TEST - Nos experts à votre service", "expertsDescription": "Test description des experts", "testimonialsTitle": "TEST - Témoignages", "testimonialText": "Test témoignage", "testimonialAuthor": "Test auteur", "stats": [{"value": "TEST 2006", "label": "Test date de création"}, {"value": "TEST 7000", "label": "Test clients"}], "sectionOrder": ["hero", "intro", "experts", "testimonials", "stats"]}',
  '{"lastModified": "2024-01-17T10:00:00Z", "modifiedBy": "test", "pageType": "homepage"}',
  'published'
) ON DUPLICATE KEY UPDATE 
  content = VALUES(content),
  metadata = VALUES(metadata),
  updated_at = CURRENT_TIMESTAMP;

-- 3. Vérifier le contenu inséré
SELECT page_path, status, created_at, updated_at FROM page_content WHERE page_path = '/';

-- 4. Compter les enregistrements
SELECT COUNT(*) as total_pages FROM page_content WHERE page_path = '/';
