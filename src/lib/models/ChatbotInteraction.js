import { executeQuery, executeSelect } from '../database.js';

export class ChatbotInteraction {
  // Créer ou mettre à jour une conversation complète
  static async createOrUpdateConversation(conversationData) {
    const { session_id, user_id, conversationHistory, userProfile, selectedIntentions, currentStep } = conversationData;
    
    // Vérifier si la conversation existe déjà
    const existingQuery = 'SELECT id FROM interactions_chatbot WHERE session_id = ?';
    const existing = await executeSelect(existingQuery, [session_id]);
    
    if (existing.length > 0) {
      // Mettre à jour la conversation existante
      const updateQuery = `
        UPDATE interactions_chatbot 
        SET conversation_history = ?, user_profile = ?, selected_intentions = ?, current_step = ?, updated_at = CURRENT_TIMESTAMP
        WHERE session_id = ?
      `;
      
      const result = await executeQuery(updateQuery, [
        JSON.stringify(conversationHistory),
        JSON.stringify(userProfile),
        JSON.stringify(selectedIntentions),
        currentStep,
        session_id
      ]);
      
      return existing[0].id;
    } else {
      // Créer une nouvelle conversation
      const insertQuery = `
        INSERT INTO interactions_chatbot (session_id, user_id, conversation_history, user_profile, selected_intentions, current_step, contexte)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      
      const contexte = {
        step: currentStep,
        timestamp: new Date().toISOString()
      };
      
      const result = await executeQuery(insertQuery, [
        session_id,
        user_id,
        JSON.stringify(conversationHistory),
        JSON.stringify(userProfile),
        JSON.stringify(selectedIntentions),
        currentStep,
        JSON.stringify(contexte)
      ]);
      
      return result.insertId;
    }
  }

  // Créer une nouvelle interaction (gardé pour compatibilité)
  static async create(interactionData) {
    const { session_id, user_id, question, reponse, contexte } = interactionData;
    
    const query = `
      INSERT INTO interactions_chatbot (session_id, user_id, question, reponse, contexte)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    try {
      const result = await executeQuery(query, [session_id, user_id, question, reponse, JSON.stringify(contexte)]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Erreur lors de la sauvegarde de l'interaction: ${error.message}`);
    }
  }

  // Récupérer toutes les interactions d'une session
  static async getBySessionId(sessionId) {
    const query = 'SELECT * FROM interactions_chatbot WHERE session_id = ? ORDER BY date_interaction ASC';
    
    try {
      const interactions = await executeSelect(query, [sessionId]);
      return interactions.map(interaction => ({
        ...interaction,
        contexte: interaction.contexte ? JSON.parse(interaction.contexte) : null
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des interactions: ${error.message}`);
    }
  }

  // Récupérer toutes les interactions d'un utilisateur
  static async getByUserId(userId) {
    const query = 'SELECT * FROM interactions_chatbot WHERE user_id = ? ORDER BY date_interaction DESC';
    
    try {
      const interactions = await executeSelect(query, [userId]);
      return interactions.map(interaction => ({
        ...interaction,
        contexte: interaction.contexte ? JSON.parse(interaction.contexte) : null
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des interactions utilisateur: ${error.message}`);
    }
  }

  // Récupérer toutes les conversations (pour le CMS)
  static async getAll(page = 1, limit = 50) {
    const offset = (page - 1) * limit;
    const query = `
      SELECT ci.*, u.nom, u.prenom, u.email 
      FROM interactions_chatbot ci 
      LEFT JOIN users u ON ci.user_id = u.id 
      ORDER BY ci.date_interaction DESC 
      LIMIT ? OFFSET ?
    `;
    
    try {
      const conversations = await executeSelect(query, [limit, offset]);
      return conversations.map(conversation => ({
        ...conversation,
        conversation_history: conversation.conversation_history ? JSON.parse(conversation.conversation_history) : [],
        user_profile: conversation.user_profile ? JSON.parse(conversation.user_profile) : {},
        selected_intentions: conversation.selected_intentions ? JSON.parse(conversation.selected_intentions) : [],
        contexte: conversation.contexte ? JSON.parse(conversation.contexte) : null
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des conversations: ${error.message}`);
    }
  }

  // Compter le nombre total de conversations
  static async count() {
    const query = 'SELECT COUNT(DISTINCT session_id) as total FROM interactions_chatbot';
    
    try {
      const result = await executeSelect(query);
      return result[0].total;
    } catch (error) {
      throw new Error(`Erreur lors du comptage des conversations: ${error.message}`);
    }
  }

  // Récupérer les statistiques du chatbot
  static async getStats() {
    const query = `
      SELECT 
        COUNT(DISTINCT session_id) as total_conversations,
        COUNT(DISTINCT user_id) as total_users,
        DATE(date_interaction) as date,
        COUNT(DISTINCT session_id) as conversations_count
      FROM interactions_chatbot 
      WHERE date_interaction >= DATE_SUB(NOW(), INTERVAL 30 DAY)
      GROUP BY DATE(date_interaction)
      ORDER BY date DESC
    `;
    
    try {
      const stats = await executeSelect(query);
      return stats;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des statistiques: ${error.message}`);
    }
  }

  // Rechercher des conversations par mot-clé
  static async searchByKeyword(keyword, page = 1, limit = 20) {
    const offset = (page - 1) * limit;
    const query = `
      SELECT ci.*, u.nom, u.prenom, u.email 
      FROM interactions_chatbot ci 
      LEFT JOIN users u ON ci.user_id = u.id 
      WHERE ci.conversation_history LIKE ? OR ci.user_profile LIKE ? OR ci.selected_intentions LIKE ?
      ORDER BY ci.date_interaction DESC 
      LIMIT ? OFFSET ?
    `;
    
    try {
      const searchTerm = `%${keyword}%`;
      const conversations = await executeSelect(query, [searchTerm, searchTerm, searchTerm, limit, offset]);
      return conversations.map(conversation => ({
        ...conversation,
        conversation_history: conversation.conversation_history ? JSON.parse(conversation.conversation_history) : [],
        user_profile: conversation.user_profile ? JSON.parse(conversation.user_profile) : {},
        selected_intentions: conversation.selected_intentions ? JSON.parse(conversation.selected_intentions) : [],
        contexte: conversation.contexte ? JSON.parse(conversation.contexte) : null
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la recherche: ${error.message}`);
    }
  }
}
