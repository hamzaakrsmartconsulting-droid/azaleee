import { executeQuery, executeSelect } from '../database.js';

export class PageContent {
  // Créer ou mettre à jour le contenu d'une page
  static async createOrUpdate(pagePath, content, pageType = 'cms', metadata = {}) {
    const existingQuery = 'SELECT id FROM page_content WHERE page_path = ? AND page_type = ?';
    const existing = await executeSelect(existingQuery, [pagePath, pageType]);
    
    if (existing.length > 0) {
      // Mettre à jour
      const updateQuery = `
        UPDATE page_content 
        SET content = ?, metadata = ?, version = version + 1, updated_at = CURRENT_TIMESTAMP
        WHERE page_path = ? AND page_type = ?
      `;
      
      const result = await executeQuery(updateQuery, [
        JSON.stringify(content),
        JSON.stringify(metadata),
        pagePath,
        pageType
      ]);
      
      return existing[0].id;
    } else {
      // Créer
      const insertQuery = `
        INSERT INTO page_content (page_path, page_type, content, metadata)
        VALUES (?, ?, ?, ?)
      `;
      
      const result = await executeQuery(insertQuery, [
        pagePath,
        pageType,
        JSON.stringify(content),
        JSON.stringify(metadata)
      ]);
      
      return result.insertId;
    }
  }

  // Récupérer le contenu d'une page
  static async getByPath(pagePath, pageType = 'cms') {
    const query = 'SELECT * FROM page_content WHERE page_path = ? AND page_type = ? ORDER BY version DESC LIMIT 1';
    
    try {
      const results = await executeSelect(query, [pagePath, pageType]);
      if (results.length === 0) return null;
      
      const page = results[0];
      return {
        ...page,
        content: JSON.parse(page.content),
        metadata: page.metadata ? JSON.parse(page.metadata) : {}
      };
    } catch (error) {
      throw new Error(`Erreur lors de la récupération du contenu: ${error.message}`);
    }
  }

  // Récupérer toutes les pages d'un type
  static async getAllByType(pageType = 'cms') {
    const query = 'SELECT * FROM page_content WHERE page_type = ? ORDER BY updated_at DESC';
    
    try {
      const pages = await executeSelect(query, [pageType]);
      return pages.map(page => ({
        ...page,
        content: JSON.parse(page.content),
        metadata: page.metadata ? JSON.parse(page.metadata) : {}
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des pages: ${error.message}`);
    }
  }

  // Supprimer une page
  static async delete(pagePath, pageType = 'cms') {
    const query = 'DELETE FROM page_content WHERE page_path = ? AND page_type = ?';
    
    try {
      const result = await executeQuery(query, [pagePath, pageType]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la suppression: ${error.message}`);
    }
  }

  // Rechercher des pages par mot-clé
  static async searchByKeyword(keyword, pageType = 'cms') {
    const query = `
      SELECT * FROM page_content 
      WHERE page_type = ? AND (content LIKE ? OR metadata LIKE ?)
      ORDER BY updated_at DESC
    `;
    
    try {
      const searchTerm = `%${keyword}%`;
      const pages = await executeSelect(query, [pageType, searchTerm, searchTerm]);
      
      return pages.map(page => ({
        ...page,
        content: JSON.parse(page.content),
        metadata: page.metadata ? JSON.parse(page.metadata) : {}
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la recherche: ${error.message}`);
    }
  }
}
