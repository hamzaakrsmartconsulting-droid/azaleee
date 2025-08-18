import { executeQuery, executeSelect } from '../database.js';

export class User {
  // Créer un nouvel utilisateur
  static async create(userData) {
    const { email, password_hash, nom, prenom, telephone, date_naissance, situation_matrimoniale, nombre_enfants, tmi } = userData;
    
    const query = `
      INSERT INTO users (email, password_hash, nom, prenom, telephone, date_naissance, situation_matrimoniale, nombre_enfants, tmi)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    try {
      const result = await executeQuery(query, [email, password_hash, nom, prenom, telephone, date_naissance, situation_matrimoniale, nombre_enfants, tmi]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Erreur lors de la création de l'utilisateur: ${error.message}`);
    }
  }

  // Trouver un utilisateur par email
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    
    try {
      const users = await executeSelect(query, [email]);
      return users[0] || null;
    } catch (error) {
      throw new Error(`Erreur lors de la recherche de l'utilisateur: ${error.message}`);
    }
  }

  // Trouver un utilisateur par ID
  static async findById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    
    try {
      const users = await executeSelect(query, [id]);
      return users[0] || null;
    } catch (error) {
      throw new Error(`Erreur lors de la recherche de l'utilisateur: ${error.message}`);
    }
  }

  // Mettre à jour un utilisateur
  static async update(id, updateData) {
    const fields = Object.keys(updateData).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updateData);
    values.push(id);
    
    const query = `UPDATE users SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    
    try {
      const result = await executeQuery(query, values);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour de l'utilisateur: ${error.message}`);
    }
  }

  // Supprimer un utilisateur
  static async delete(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    
    try {
      const result = await executeQuery(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Erreur lors de la suppression de l'utilisateur: ${error.message}`);
    }
  }

  // Lister tous les utilisateurs (avec pagination)
  static async findAll(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const query = 'SELECT * FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?';
    
    try {
      const users = await executeSelect(query, [limit, offset]);
      return users;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
    }
  }

  // Compter le nombre total d'utilisateurs
  static async count() {
    const query = 'SELECT COUNT(*) as total FROM users';
    
    try {
      const result = await executeSelect(query);
      return result[0].total;
    } catch (error) {
      throw new Error(`Erreur lors du comptage des utilisateurs: ${error.message}`);
    }
  }
}
