import connectDB from '../../../../lib/mongodb';
import ChatbotSession from '../../../../lib/models/ChatbotSession';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { sessionId, message, step, profile, intention, thematique, actionFinale, rendezVous } = body;

    // Créer ou mettre à jour la session
    let session = await ChatbotSession.findOne({ sessionId });

    if (!session) {
      // Créer une nouvelle session
      session = new ChatbotSession({
        sessionId,
        status: 'active',
        currentStep: step || 'welcome',
        profile: profile || {},
        intention: intention,
        thematique: thematique,
        actionFinale: actionFinale,
        rendezVous: rendezVous ? {
          ...rendezVous,
          statut: rendezVous.statut || 'en_cours'
        } : undefined,
        messages: []
      });
    } else {
      // Mettre à jour la session existante
      if (step) session.currentStep = step;
      if (profile) {
        session.profile = { ...session.profile, ...profile };
      }
      if (intention) session.intention = intention;
      if (thematique) session.thematique = thematique;
      if (actionFinale) {
        session.actionFinale = actionFinale;
        session.status = 'completed';
      }
      if (rendezVous) {
        session.rendezVous = {
          ...rendezVous,
          statut: rendezVous.statut || 'en_cours'
        };
      }
    }

    // Ajouter le message si fourni
    if (message) {
      // Convertir le contenu en string si c'est un objet
      let contentToSave = message.content;
      if (typeof contentToSave === 'object' && contentToSave !== null) {
        // Si c'est un objet avec type/text, on peut le garder tel quel (Mixed type)
        // ou le convertir en JSON string selon les besoins
        contentToSave = contentToSave;
      }
      
      session.messages.push({
        role: message.role,
        content: contentToSave,
        timestamp: new Date()
      });
    }

    session.updatedAt = new Date();
    await session.save();

    return Response.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('Error saving chatbot session:', error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const actionFinale = searchParams.get('actionFinale');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const skip = parseInt(searchParams.get('skip')) || 0;

    const query = {};
    if (status) query.status = status;
    if (actionFinale) query.actionFinale = actionFinale;

    const sessions = await ChatbotSession.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    const total = await ChatbotSession.countDocuments(query);

    return Response.json({
      success: true,
      data: sessions,
      total,
      limit,
      skip
    });
  } catch (error) {
    console.error('Error fetching chatbot sessions:', error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

