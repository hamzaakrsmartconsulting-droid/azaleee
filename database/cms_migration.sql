-- CMS Database Migration Script
-- This script ensures the page_content table is properly set up for CMS content management

-- Create the page_content table if it doesn't exist
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
  UNIQUE KEY unique_page_path (page_path, page_type),
  INDEX idx_page_type (page_type),
  INDEX idx_status (status),
  INDEX idx_updated_at (updated_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index for better performance on content searches
CREATE INDEX IF NOT EXISTS idx_content_search ON page_content ((CAST(content AS CHAR(1000))));

-- Insert some sample CMS pages if they don't exist
INSERT IGNORE INTO page_content (page_path, page_type, content, metadata, status) VALUES
('/', 'cms', '{"hero": {"title": "Welcome", "subtitle": "Default content"}}', '{"lastModified": "2024-01-01", "modifiedBy": "system"}', 'published'),
('/outils', 'cms', '{"title": "Tools", "description": "Default tools content"}', '{"lastModified": "2024-01-01", "modifiedBy": "system"}', 'published'),
('/immobilier', 'cms', '{"title": "Real Estate", "description": "Default real estate content"}', '{"lastModified": "2024-01-01", "modifiedBy": "system"}', 'published');


