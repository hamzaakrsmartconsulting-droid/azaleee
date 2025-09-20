import { NextResponse } from 'next/server';
import { ChatbotInteraction } from '../../../../lib/models/ChatbotInteraction';
import { Appointment } from '../../../../lib/models/Appointment';
import { Callback } from '../../../../lib/models/Callback';
import { executeQuery } from '../../../../lib/database.js';

// Fonction de parsing JSON sécurisé
function safeJsonParse(str, defaultValue = {}) {
  if (!str || typeof str !== 'string') return defaultValue;
  
  try {
    // Vérifier si c'est déjà un objet
    if (typeof str === 'object') return str;
    
    // Vérifier si c'est "[object Object]"
    if (str === '[object Object]') return defaultValue;
    
    const parsed = JSON.parse(str);
    return parsed;
  } catch (error) {
    console.warn('⚠️ JSON parsing failed for:', str, 'Error:', error.message);
    return defaultValue;
  }
}

// GET - Récupérer toutes les données du chatbot pour le CMS
export async function GET(request) {
  try {
    console.log('🔍 API GET appelée');
    
    // Récupérer toutes les conversations
    const conversations = await ChatbotInteraction.getAllConversations();
    console.log('📊 Conversations récupérées:', conversations.length);
    
    // Récupérer tous les rendez-vous
    const appointments = await Appointment.getAll();
    console.log('📅 Rendez-vous récupérés:', appointments.length);
    
    // Récupérer tous les rappels
    const callbacks = await Callback.getAll();
    console.log('📞 Rappels récupérés:', callbacks.length);
    
    // Traiter les conversations avec parsing sécurisé
    const processedData = {
      conversations: conversations.map(conv => {
        const chatId = conv.session_id.replace('chat_', '');
        return {
          id: conv.id,
          sessionId: conv.session_id,
          chatId: chatId, // Clean ID for display
          startTime: conv.date_interaction,
          endTime: conv.updated_at,
          userProfile: safeJsonParse(conv.user_profile, {}),
          selectedIntentions: safeJsonParse(conv.selected_intentions, []),
          currentStep: conv.current_step,
          messageCount: safeJsonParse(conv.conversation_history, []).length,
          status: conv.current_step === 'confirmation' ? 'Terminé' : 'En cours',
          actionsRequired: safeJsonParse(conv.actions_required, {}),
          appointmentRequested: conv.appointment_requested || false,
          callbackRequested: conv.callback_requested || false,
          pdfRequested: conv.pdf_requested || false,
          conversationHistory: safeJsonParse(conv.conversation_history, [])
        };
      }),
      
      // Rendez-vous réels depuis la base
      appointments: appointments.map(apt => ({
        id: apt.id,
        sessionId: apt.session_id,
        clientName: apt.client_name,
        clientEmail: apt.client_email,
        clientPhone: apt.client_phone,
        appointmentDate: apt.appointment_date,
        appointmentType: apt.appointment_type,
        status: apt.status,
        notes: apt.notes,
        priority: apt.priority,
        createdAt: apt.created_at,
        updatedAt: apt.updated_at
      })),
      
      // Rappels réels depuis la base
      callbacks: callbacks.map(cb => ({
        id: cb.id,
        sessionId: cb.session_id,
        clientName: cb.client_name,
        clientPhone: cb.client_phone,
        reason: cb.reason,
        priority: cb.priority,
        status: cb.status,
        scheduledDate: cb.scheduled_date,
        notes: cb.notes,
        createdAt: cb.created_at,
        updatedAt: cb.updated_at
      })),
      
      userProfiles: [],
      interactions: [],
      
      stats: {
        totalConversations: conversations.length,
        activeConversations: conversations.filter(conv => conv.current_step !== 'confirmation').length,
        completedConversations: conversations.filter(conv => conv.current_step === 'confirmation').length,
        totalUsers: new Set(conversations.filter(conv => conv.user_profile).map(conv => conv.session_id)).size,
        pendingAppointments: appointments.filter(apt => apt.status === 'en_attente').length,
        confirmedAppointments: appointments.filter(apt => apt.status === 'confirme').length,
        pendingCallbacks: callbacks.filter(cb => cb.status === 'en_attente').length,
        urgentCallbacks: callbacks.filter(cb => cb.priority === 'haute' && cb.status === 'en_attente').length
      }
    };

    console.log('✅ Données traitées avec succès');
    return NextResponse.json({
      success: true,
      data: processedData
    });

  } catch (error) {
    console.error('❌ Erreur API chatbot data GET:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des données',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour une conversation et ses actions
export async function POST(request) {
  try {
    console.log('📥 API POST appelée');
    const body = await request.json();
    console.log('📋 Données reçues:', body);
    
    const { 
      session_id, 
      user_id, 
      conversationHistory, 
      userProfile, 
      selectedIntentions, 
      currentStep,
      actionsRequired,
      isCompleted = false
    } = body;

    if (!session_id) {
      return NextResponse.json(
        { success: false, message: 'session_id est requis' },
        { status: 400 }
      );
    }

    let conversationId;

    if (isCompleted && actionsRequired) {
      // Finaliser la conversation et créer les actions
      console.log('🎯 Finalisation de la conversation avec actions:', actionsRequired);
      conversationId = await ChatbotInteraction.completeConversation(session_id, actionsRequired);
    } else {
      // Créer ou mettre à jour la conversation
      conversationId = await ChatbotInteraction.createOrUpdateConversation({
        session_id,
        user_id,
        conversationHistory,
        userProfile,
        selectedIntentions,
        currentStep,
        actionsRequired
      });
    }

    return NextResponse.json({
      success: true,
      message: isCompleted ? 'Conversation terminée et actions créées' : 'Conversation sauvegardée',
      conversationId
    });

  } catch (error) {
    console.error('❌ Erreur API chatbot data POST:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la sauvegarde de la conversation',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// PATCH - Mettre à jour le statut des actions (PDF, etc.)
export async function PATCH(request) {
  try {
    console.log('📝 API PATCH appelée');
    const body = await request.json();
    console.log('📋 Données reçues:', body);
    
    const { session_id, pdf_status, update_type } = body;

    if (!session_id) {
      return NextResponse.json(
        { success: false, message: 'session_id est requis' },
        { status: 400 }
      );
    }

    if (update_type === 'pdf_status' && pdf_status) {
      // Mettre à jour le statut du PDF dans la base de données
      const updateQuery = `
        UPDATE interactions_chatbot 
        SET pdf_status = ?, updated_at = CURRENT_TIMESTAMP
        WHERE session_id = ?
      `;
      
      const result = await executeQuery(updateQuery, [pdf_status, session_id]);
      
      if (result.affectedRows > 0) {
        console.log('✅ Statut PDF mis à jour:', pdf_status);
        return NextResponse.json({
          success: true,
          message: 'Statut PDF mis à jour avec succès',
          pdf_status
        });
      } else {
        return NextResponse.json(
          { success: false, message: 'Session non trouvée' },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { success: false, message: 'Type de mise à jour non reconnu' },
      { status: 400 }
    );

  } catch (error) {
    console.error('❌ Erreur API chatbot data PATCH:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la mise à jour',
        error: error.message
      },
      { status: 500 }
    );
  }
}
