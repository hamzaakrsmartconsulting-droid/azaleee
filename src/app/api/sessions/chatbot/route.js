import { NextResponse } from 'next/server';
import { UserSession } from '../../../../lib/models/UserSession';

// POST - Créer ou mettre à jour une session chatbot
export async function POST(request) {
  try {
    const body = await request.json();
    const { sessionId, userId, data } = body;

    if (!sessionId || !data) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'sessionId et data sont requis'
        },
        { status: 400 }
      );
    }

    // Définir une expiration (30 jours)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    const sessionId_db = await UserSession.createOrUpdate(
      sessionId,
      data,
      'chatbot',
      userId,
      expiresAt
    );

    return NextResponse.json({
      success: true,
      message: 'Session chatbot sauvegardée avec succès',
      data: { id: sessionId_db }
    });

  } catch (error) {
    console.error('Erreur API sessions chatbot POST:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la sauvegarde de la session',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// GET - Récupérer une session chatbot
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Paramètre sessionId requis'
        },
        { status: 400 }
      );
    }

    const session = await UserSession.getBySessionId(sessionId);
    
    if (!session) {
      return NextResponse.json({
        success: false,
        message: 'Session non trouvée',
        session: null
      });
    }

    return NextResponse.json({
      success: true,
      session: session
    });

  } catch (error) {
    console.error('Erreur API sessions chatbot GET:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération de la session',
        error: error.message
      },
      { status: 500 }
    );
  }
}
