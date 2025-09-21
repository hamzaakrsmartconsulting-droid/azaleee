-- Add CMS Content Table to Existing Database
-- Run this script to add the missing cms_content table

USE azalee_cms;

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
CREATE INDEX IF NOT EXISTS idx_cms_content_page ON cms_content(page_slug);
CREATE INDEX IF NOT EXISTS idx_cms_content_section ON cms_content(section_name);

-- Success message
SELECT 'CMS Content table added successfully!' as message;
