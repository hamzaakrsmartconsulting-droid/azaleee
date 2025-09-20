import { executeQuery, executeSelect } from '../database.js';

export class Callback {
  // Créer un nouveau rappel
  static async create(callbackData) {
    const {
      session_id,
      client_name,
      client_phone,
      reason,
      priority = 'moyenne',
      scheduled_date,
      notes
    } = callbackData;

    const query = `
      INSERT INTO callbacks (
        session_id, client_name, client_phone, reason, 
        priority, scheduled_date, notes, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, 'en_attente')
    `;

    try {
      const result = await executeQuery(query, [
        session_id,
        client_name,
        client_phone,
        reason,
        priority,
        scheduled_date,
        notes
      ]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Erreur lors de la création du rappel: ${error.message}`);
    }
  }

  // Récupérer tous les rappels
  static async getAll() {
    const query = `
      SELECT c.*, ic.user_profile, ic.selected_intentions
      FROM callbacks c
      LEFT JOIN interactions_chatbot ic ON c.session_id = ic.session_id
      ORDER BY c.scheduled_date ASC
    `;

    try {
      const callbacks = await executeSelect(query);
      return callbacks.map(callback => ({
        ...callback,
        user_profile: callback.user_profile ? JSON.parse(callback.user_profile) : {},
        selected_intentions: callback.selected_intentions ? JSON.parse(callback.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rappels: ${error.message}`);
    }
  }

  // Récupérer les rappels par statut
  static async getByStatus(status) {
    const query = `
      SELECT c.*, ic.user_profile, ic.selected_intentions
      FROM callbacks c
      LEFT JOIN interactions_chatbot ic ON c.session_id = ic.session_id
      WHERE c.status = ?
      ORDER BY c.scheduled_date ASC
    `;

    try {
      const callbacks = await executeSelect(query, [status]);
      return callbacks.map(callback => ({
        ...callback,
        user_profile: callback.user_profile ? JSON.parse(callback.user_profile) : {},
        selected_intentions: callback.selected_intentions ? JSON.parse(callback.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rappels par statut: ${error.message}`);
    }
  }

  // Récupérer les rappels par priorité
  static async getByPriority(priority) {
    const query = `
      SELECT c.*, ic.user_profile, ic.selected_intentions
      FROM callbacks c
      LEFT JOIN interactions_chatbot ic ON c.session_id = ic.session_id
      WHERE c.priority = ? AND c.status = 'en_attente'
      ORDER BY c.scheduled_date ASC
    `;

    try {
      const callbacks = await executeSelect(query, [priority]);
      return callbacks.map(callback => ({
        ...callback,
        user_profile: callback.user_profile ? JSON.parse(callback.user_profile) : {},
        selected_intentions: callback.selected_intentions ? JSON.parse(callback.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rappels par priorité: ${error.message}`);
    }
  }

  // Mettre à jour le statut d'un rappel
  static async updateStatus(id, status) {
    const query = 'UPDATE callbacks SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    
    try {
      const result = await executeQuery(query, [status, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du statut: ${error.message}`);
    }
  }

  // Mettre à jour un rappel
  static async update(id, updateData) {
    const {
      client_name,
      client_phone,
      reason,
      priority,
      scheduled_date,
      notes,
      status
    } = updateData;

    const query = `
      UPDATE callbacks 
      SET client_name = ?, client_phone = ?, reason = ?, 
          priority = ?, scheduled_date = ?, notes = ?, 
          status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    try {
      const result = await executeQuery(query, [
        client_name,
        client_phone,
        reason,
        priority,
        scheduled_date,
        notes,
        status,
        id
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du rappel: ${error.message}`);
    }
  }

  // Supprimer un rappel
  static async delete(id) {
    const query = 'DELETE FROM callbacks WHERE id = ?';
    
    try {
      const result = await executeQuery(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la suppression du rappel: ${error.message}`);
    }
  }

  // Compter les rappels par statut
  static async countByStatus() {
    const query = `
      SELECT status, COUNT(*) as count
      FROM callbacks
      GROUP BY status
    `;

    try {
      const results = await executeSelect(query);
      const counts = {};
      results.forEach(result => {
        counts[result.status] = result.count;
      });
      return counts;
    } catch (error) {
      throw new Error(`Erreur lors du comptage des rappels: ${error.message}`);
    }
  }

  // Compter les rappels par priorité
  static async countByPriority() {
    const query = `
      SELECT priority, COUNT(*) as count
      FROM callbacks
      WHERE status = 'en_attente'
      GROUP BY priority
    `;

    try {
      const results = await executeSelect(query);
      const counts = {};
      results.forEach(result => {
        counts[result.priority] = result.count;
      });
      return counts;
    } catch (error) {
      throw new Error(`Erreur lors du comptage des rappels par priorité: ${error.message}`);
    }
  }

  // Récupérer les rappels urgents (priorité haute)
  static async getUrgent() {
    const query = `
      SELECT c.*, ic.user_profile, ic.selected_intentions
      FROM callbacks c
      LEFT JOIN interactions_chatbot ic ON c.session_id = ic.session_id
      WHERE c.priority = 'haute' AND c.status = 'en_attente'
      ORDER BY c.scheduled_date ASC
    `;

    try {
      const callbacks = await executeSelect(query);
      return callbacks.map(callback => ({
        ...callback,
        user_profile: callback.user_profile ? JSON.parse(callback.user_profile) : {},
        selected_intentions: callback.selected_intentions ? JSON.parse(callback.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rappels urgents: ${error.message}`);
    }
  }

  // Marquer un rappel comme traité
  static async markAsProcessed(id) {
    const query = 'UPDATE callbacks SET status = "traite", updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    
    try {
      const result = await executeQuery(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors du marquage du rappel: ${error.message}`);
    }
  }
}





