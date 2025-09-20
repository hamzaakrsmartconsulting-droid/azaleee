import { executeQuery, executeSelect } from '../database.js';

export class ChatbotInteraction {
  // Créer ou mettre à jour une conversation complète
  static async createOrUpdateConversation(conversationData) {
    const { session_id, user_id, conversationHistory, userProfile, selectedIntentions, currentStep, actionsRequired } = conversationData;
    
    // Vérifier si la conversation existe déjà
    const existingQuery = 'SELECT id FROM interactions_chatbot WHERE session_id = ?';
    const existing = await executeSelect(existingQuery, [session_id]);
    
    if (existing.length > 0) {
      // Mettre à jour la conversation existante
      const updateQuery = `
        UPDATE interactions_chatbot 
        SET conversation_history = ?, user_profile = ?, selected_intentions = ?, current_step = ?, 
            actions_required = ?, updated_at = CURRENT_TIMESTAMP
        WHERE session_id = ?
      `;
      
      const result = await executeQuery(updateQuery, [
        JSON.stringify(conversationHistory),
        JSON.stringify(userProfile),
        JSON.stringify(selectedIntentions),
        currentStep,
        JSON.stringify(actionsRequired || {}),
        session_id
      ]);
      
      return existing[0].id;
    } else {
      // Créer une nouvelle conversation
      const insertQuery = `
        INSERT INTO interactions_chatbot (session_id, user_id, conversation_history, user_profile, selected_intentions, current_step, contexte, actions_required)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
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
        JSON.stringify(contexte),
        JSON.stringify(actionsRequired || {})
      ]);
      
      return result.insertId;
    }
  }

  // Marquer une conversation comme terminée et créer les actions nécessaires
  static async completeConversation(sessionId, actionsData) {
    try {
      console.log('🎯 Finalisation de la conversation pour session:', sessionId);
      console.log('📋 Actions reçues:', actionsData);
      
      // Mettre à jour le statut de la conversation
      const updateQuery = `
        UPDATE interactions_chatbot 
        SET current_step = 'confirmation', 
            actions_required = ?, 
            appointment_requested = ?,
            callback_requested = ?,
            pdf_requested = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE session_id = ?
      `;
      
      await executeQuery(updateQuery, [
        JSON.stringify(actionsData),
        actionsData.appointmentRequested || false,
        actionsData.callbackRequested || false,
        actionsData.pdfRequested || false,
        sessionId
      ]);
      
      // Créer les actions nécessaires (rendez-vous, rappels, etc.)
      if (actionsData.appointmentRequested && actionsData.appointmentDetails) {
        console.log('📅 Création du rendez-vous...');
        await this.createAppointmentFromConversation(sessionId, actionsData.appointmentDetails);
      }
      
      if (actionsData.callbackRequested && actionsData.callbackDetails) {
        console.log('📞 Création du rappel...');
        await this.createCallbackFromConversation(sessionId, actionsData.callbackDetails);
      }
      
      if (actionsData.pdfRequested && actionsData.pdfDetails) {
        console.log('📄 Création du rapport PDF...');
        await this.createPDFReportFromConversation(sessionId, actionsData.pdfDetails);
      }
      
      console.log('✅ Conversation finalisée avec succès');
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de la finalisation de la conversation:', error);
      throw new Error(`Erreur lors de la finalisation de la conversation: ${error.message}`);
    }
  }

  // Créer un rendez-vous à partir d'une conversation
  static async createAppointmentFromConversation(sessionId, appointmentData) {
    const { Appointment } = await import('./Appointment.js');
    
    try {
      console.log('📅 Données du rendez-vous:', appointmentData);
      
      // Construire la date complète
      const appointmentDate = new Date(`${appointmentData.date}T${appointmentData.heure}`);
      
      // Récupérer le profil utilisateur pour le nom
      const userProfileQuery = 'SELECT user_profile FROM interactions_chatbot WHERE session_id = ?';
      const userProfileResult = await executeSelect(userProfileQuery, [sessionId]);
      
      let clientName = 'Client';
      if (userProfileResult.length > 0 && userProfileResult[0].user_profile) {
        try {
          const profile = JSON.parse(userProfileResult[0].user_profile);
          if (profile.nom && profile.prenom) {
            clientName = `${profile.prenom} ${profile.nom}`;
          } else if (profile.prenom) {
            clientName = profile.prenom;
          }
        } catch (e) {
          console.warn('Impossible de parser le profil utilisateur:', e);
        }
      }
      
      const appointment = await Appointment.create({
        session_id: sessionId,
        client_name: clientName,
        client_email: appointmentData.email,
        client_phone: appointmentData.telephone,
        appointment_date: appointmentDate,
        appointment_type: 'consultation_fiscale', // Par défaut
        status: 'en_attente',
        notes: `Rendez-vous créé via chatbot - Canal: ${appointmentData.canal}`,
        priority: 'moyenne'
      });
      
      console.log('✅ Rendez-vous créé:', appointment);
      return appointment;
    } catch (error) {
      console.error('❌ Erreur lors de la création du rendez-vous:', error);
      throw error;
    }
  }

  // Créer un rappel à partir d'une conversation
  static async createCallbackFromConversation(sessionId, callbackData) {
    const { Callback } = await import('./Callback.js');
    
    try {
      console.log('📞 Données du rappel:', callbackData);
      
      // Construire la date complète
      const scheduledDate = new Date(`${callbackData.dateRappel}T${callbackData.heureRappel}`);
      
      // Récupérer le profil utilisateur pour le nom
      const userProfileQuery = 'SELECT user_profile FROM interactions_chatbot WHERE session_id = ?';
      const userProfileResult = await executeSelect(userProfileQuery, [sessionId]);
      
      let clientName = 'Client';
      if (userProfileResult.length > 0 && userProfileResult[0].user_profile) {
        try {
          const profile = JSON.parse(userProfileResult[0].user_profile);
          if (profile.nom && profile.prenom) {
            clientName = `${profile.prenom} ${profile.nom}`;
          } else if (profile.prenom) {
            clientName = profile.prenom;
          }
        } catch (e) {
          console.warn('Impossible de parser le profil utilisateur:', e);
        }
      }
      
      const callback = await Callback.create({
        session_id: sessionId,
        client_name: clientName,
        client_phone: callbackData.telephone,
        reason: 'Rappel demandé via chatbot',
        priority: 'moyenne',
        scheduled_date: scheduledDate,
        notes: `Rappel créé via chatbot - Email: ${callbackData.email}`,
        status: 'en_attente'
      });
      
      console.log('✅ Rappel créé:', callback);
      return callback;
    } catch (error) {
      console.error('❌ Erreur lors de la création du rappel:', error);
      throw error;
    }
  }

  // Créer un rapport PDF à partir d'une conversation
  static async createPDFReportFromConversation(sessionId, pdfData) {
    try {
      const query = `
        INSERT INTO pdf_reports (session_id, report_type, metadata, status)
        VALUES (?, ?, ?, 'en_cours')
      `;
      
      const result = await executeQuery(query, [
        sessionId,
        pdfData.reportType,
        JSON.stringify(pdfData.metadata)
      ]);
      
      // Mettre à jour le flag dans interactions_chatbot
      await executeQuery(
        'UPDATE interactions_chatbot SET pdf_requested = TRUE WHERE session_id = ?',
        [sessionId]
      );
      
      return result.insertId;
    } catch (error) {
      console.error('Erreur lors de la création du rapport PDF:', error);
      throw error;
    }
  }

  // Récupérer les actions requises pour une session
  static async getActionsRequired(sessionId) {
    const query = `
      SELECT actions_required, appointment_requested, callback_requested, pdf_requested
      FROM interactions_chatbot 
      WHERE session_id = ?
    `;
    
    try {
      const result = await executeSelect(query, [sessionId]);
      if (result.length > 0) {
        const actions = result[0];
        return {
          actionsRequired: actions.actions_required ? JSON.parse(actions.actions_required) : {},
          appointmentRequested: actions.appointment_requested || false,
          callbackRequested: actions.callback_requested || false,
          pdfRequested: actions.pdf_requested || false
        };
      }
      return null;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des actions requises: ${error.message}`);
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
        contexte: conversation.contexte ? JSON.parse(conversation.contexte) : null,
        actions_required: conversation.actions_required ? JSON.parse(conversation.actions_required) : {}
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des conversations: ${error.message}`);
    }
  }

  // Récupérer toutes les conversations sans pagination (pour le CMS)
  static async getAllConversations() {
    const query = `
      SELECT ci.*, u.nom, u.prenom, u.email 
      FROM interactions_chatbot ci 
      LEFT JOIN users u ON ci.user_id = u.id 
      ORDER BY ci.date_interaction DESC
    `;
    
    try {
      const conversations = await executeSelect(query);
      return conversations.map(conversation => ({
        ...conversation,
        conversation_history: conversation.conversation_history ? JSON.parse(conversation.conversation_history) : [],
        user_profile: conversation.user_profile ? JSON.parse(conversation.user_profile) : {},
        selected_intentions: conversation.selected_intentions ? JSON.parse(conversation.selected_intentions) : [],
        contexte: conversation.contexte ? JSON.parse(conversation.contexte) : null,
        actions_required: conversation.actions_required ? JSON.parse(conversation.actions_required) : {}
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de toutes les conversations: ${error.message}`);
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
        contexte: conversation.contexte ? JSON.parse(conversation.contexte) : null,
        actions_required: conversation.actions_required ? JSON.parse(conversation.actions_required) : {}
      }));
    } catch (error) {
      throw new Error(`Erreur lors de la recherche: ${error.message}`);
    }
  }
}
