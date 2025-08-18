import { NextResponse } from 'next/server';
import { ChatbotInteraction } from '../../../../lib/models/ChatbotInteraction';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 50;
    const keyword = searchParams.get('search') || '';

    let interactions;
    let total;

    if (keyword) {
      interactions = await ChatbotInteraction.searchByKeyword(keyword, page, limit);
      total = await ChatbotInteraction.count();
    } else {
      interactions = await ChatbotInteraction.getAll(page, limit);
      total = await ChatbotInteraction.count();
    }

    return NextResponse.json({
      success: true,
      data: interactions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Erreur API chatbot interactions:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des interactions',
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { session_id, user_id, question, reponse, contexte } = body;

    if (!session_id) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'session_id est requis'
        },
        { status: 400 }
      );
    }

    const interactionId = await ChatbotInteraction.create({
      session_id,
      user_id,
      question,
      reponse,
      contexte
    });

    return NextResponse.json({
      success: true,
      message: 'Interaction sauvegardée avec succès',
      data: { id: interactionId }
    });

  } catch (error) {
    console.error('Erreur API chatbot interactions POST:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la sauvegarde de l\'interaction',
        error: error.message
      },
      { status: 500 }
    );
  }
}
