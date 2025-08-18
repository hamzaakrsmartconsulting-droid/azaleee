import { NextResponse } from 'next/server';
import { ChatbotInteraction } from '../../../../lib/models/ChatbotInteraction';

export async function POST(request) {
  try {
    const body = await request.json();
    const { session_id, user_id, conversationHistory, userProfile, selectedIntentions, currentStep } = body;

    if (!session_id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'session_id est requis'
        },
        { status: 400 }
      );
    }

    const conversationId = await ChatbotInteraction.createOrUpdateConversation({
      session_id,
      user_id,
      conversationHistory,
      userProfile,
      selectedIntentions,
      currentStep
    });

    return NextResponse.json({
      success: true,
      message: 'Conversation sauvegardée avec succès',
      data: { id: conversationId }
    });

  } catch (error) {
    console.error('Erreur API chatbot conversations POST:', error);
    
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
