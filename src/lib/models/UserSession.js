import { executeQuery, executeSelect } from '../database.js';

export class UserSession {
  // Créer ou mettre à jour une session
  static async createOrUpdate(sessionId, data, sessionType = 'chatbot', userId = null, expiresAt = null) {
    const existingQuery = 'SELECT id FROM user_sessions WHERE session_id = ?';
    const existing = await executeSelect(existingQuery, [sessionId]);
    
    if (existing.length > 0) {
      // Mettre à jour
      const updateQuery = `
        UPDATE user_sessions 
        SET data = ?, user_id = ?, expires_at = ?, updated_at = CURRENT_TIMESTAMP
        WHERE session_id = ?
      `;
      
      const result = await executeQuery(updateQuery, [
        JSON.stringify(data),
        userId,
        expiresAt,
        sessionId
      ]);
      
      return existing[0].id;
    } else {
      // Créer
      const insertQuery = `
        INSERT INTO user_sessions (session_id, user_id, session_type, data, expires_at)
        VALUES (?, ?, ?, ?, ?)
      `;
      
      const result = await executeQuery(insertQuery, [
        sessionId,
        userId,
        sessionType,
        JSON.stringify(data),
        expiresAt
      ]);
      
      return result.insertId;
    }
  }

  // Récupérer une session par ID
  static async getBySessionId(sessionId) {
    const query = 'SELECT * FROM user_sessions WHERE session_id = ?';
    
    try {
      const results = await executeSelect(query, [sessionId]);
      if (results.length === 0) return null;
      
      const session = results[0];
      return {
        ...session,
        data: JSON.parse(session.data)
      };
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de la session: ${error.message}`);
    }
  }

  // Récupérer toutes les sessions d'un utilisateur
  static async getByUserId(userId) {
    const query = 'SELECT * FROM user_sessions WHERE user_id = ? ORDER BY updated_at DESC';
    
    try {
      const sessions = await executeSelect(query, [userId]);
      return sessions.map(session => ({
        ...session,
        data: JSON.parse(session.data)
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des sessions: ${error.message}`);
    }
  }

  // Récupérer toutes les sessions d'un type
  static async getByType(sessionType) {
    const query = 'SELECT * FROM user_sessions WHERE session_type = ? ORDER BY updated_at DESC';
    
    try {
      const sessions = await executeSelect(query, [sessionType]);
      return sessions.map(session => ({
        ...session,
        data: JSON.parse(session.data)
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des sessions: ${error.message}`);
    }
  }

  // Supprimer une session
  static async delete(sessionId) {
    const query = 'DELETE FROM user_sessions WHERE session_id = ?';
    
    try {
      const result = await executeQuery(query, [sessionId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la suppression: ${error.message}`);
    }
  }

  // Nettoyer les sessions expirées
  static async cleanupExpired() {
    const query = 'DELETE FROM user_sessions WHERE expires_at IS NOT NULL AND expires_at < NOW()';
    
    try {
      const result = await executeQuery(query);
      return result.affectedRows;
    } catch (error) {
      throw new Error(`Erreur lors du nettoyage: ${error.message}`);
    }
  }

  // Compter les sessions par type
  static async countByType() {
    const query = `
      SELECT session_type, COUNT(*) as count 
      FROM user_sessions 
      GROUP BY session_type
    `;
    
    try {
      return await executeSelect(query);
    } catch (error) {
      throw new Error(`Erreur lors du comptage: ${error.message}`);
    }
  }
}
