import { executeQuery, executeSelect } from '../database.js';

export class Appointment {
  // Créer un nouveau rendez-vous
  static async create(appointmentData) {
    const {
      session_id,
      client_name,
      client_email,
      client_phone,
      appointment_date,
      appointment_type,
      notes,
      priority = 'moyenne'
    } = appointmentData;

    const query = `
      INSERT INTO appointments (
        session_id, client_name, client_email, client_phone, 
        appointment_date, appointment_type, notes, priority, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'en_attente')
    `;

    try {
      const result = await executeQuery(query, [
        session_id,
        client_name,
        client_email,
        client_phone,
        appointment_date,
        appointment_type,
        notes,
        priority
      ]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Erreur lors de la création du rendez-vous: ${error.message}`);
    }
  }

  // Récupérer tous les rendez-vous
  static async getAll() {
    const query = `
      SELECT a.*, ic.user_profile, ic.selected_intentions
      FROM appointments a
      LEFT JOIN interactions_chatbot ic ON a.session_id = ic.session_id
      ORDER BY a.appointment_date ASC
    `;

    try {
      const appointments = await executeSelect(query);
      return appointments.map(appointment => ({
        ...appointment,
        user_profile: appointment.user_profile ? JSON.parse(appointment.user_profile) : {},
        selected_intentions: appointment.selected_intentions ? JSON.parse(appointment.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rendez-vous: ${error.message}`);
    }
  }

  // Récupérer les rendez-vous par statut
  static async getByStatus(status) {
    const query = `
      SELECT a.*, ic.user_profile, ic.selected_intentions
      FROM appointments a
      LEFT JOIN interactions_chatbot ic ON a.session_id = ic.session_id
      WHERE a.status = ?
      ORDER BY a.appointment_date ASC
    `;

    try {
      const appointments = await executeSelect(query, [status]);
      return appointments.map(appointment => ({
        ...appointment,
        user_profile: appointment.user_profile ? JSON.parse(appointment.user_profile) : {},
        selected_intentions: appointment.selected_intentions ? JSON.parse(appointment.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rendez-vous par statut: ${error.message}`);
    }
  }

  // Mettre à jour le statut d'un rendez-vous
  static async updateStatus(id, status) {
    const query = 'UPDATE appointments SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    
    try {
      const result = await executeQuery(query, [status, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du statut: ${error.message}`);
    }
  }

  // Mettre à jour un rendez-vous
  static async update(id, updateData) {
    const {
      client_name,
      client_email,
      client_phone,
      appointment_date,
      appointment_type,
      notes,
      priority,
      status
    } = updateData;

    const query = `
      UPDATE appointments 
      SET client_name = ?, client_email = ?, client_phone = ?, 
          appointment_date = ?, appointment_type = ?, notes = ?, 
          priority = ?, status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    try {
      const result = await executeQuery(query, [
        client_name,
        client_email,
        client_phone,
        appointment_date,
        appointment_type,
        notes,
        priority,
        status,
        id
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du rendez-vous: ${error.message}`);
    }
  }

  // Supprimer un rendez-vous
  static async delete(id) {
    const query = 'DELETE FROM appointments WHERE id = ?';
    
    try {
      const result = await executeQuery(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la suppression du rendez-vous: ${error.message}`);
    }
  }

  // Compter les rendez-vous par statut
  static async countByStatus() {
    const query = `
      SELECT status, COUNT(*) as count
      FROM appointments
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
      throw new Error(`Erreur lors du comptage des rendez-vous: ${error.message}`);
    }
  }

  // Récupérer les rendez-vous à venir
  static async getUpcoming(limit = 10) {
    const query = `
      SELECT a.*, ic.user_profile, ic.selected_intentions
      FROM appointments a
      LEFT JOIN interactions_chatbot ic ON a.session_id = ic.session_id
      WHERE a.appointment_date >= NOW() AND a.status IN ('en_attente', 'confirme')
      ORDER BY a.appointment_date ASC
      LIMIT ?
    `;

    try {
      const appointments = await executeSelect(query, [limit]);
      return appointments.map(appointment => ({
        ...appointment,
        user_profile: appointment.user_profile ? JSON.parse(appointment.user_profile) : {},
        selected_intentions: appointment.selected_intentions ? JSON.parse(appointment.selected_intentions) : []
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des rendez-vous à venir: ${error.message}`);
    }
  }
}





