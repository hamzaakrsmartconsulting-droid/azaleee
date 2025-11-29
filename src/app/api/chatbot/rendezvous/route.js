import connectDB from '../../../../lib/mongodb';
import ChatbotSession from '../../../../lib/models/ChatbotSession';

export async function GET(request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const statut = searchParams.get('statut');
    const limit = parseInt(searchParams.get('limit')) || 100;
    const skip = parseInt(searchParams.get('skip')) || 0;

    const query = { 
      actionFinale: 'rdv',
      'rendezVous.date': { $exists: true }
    };
    
    if (statut) {
      query['rendezVous.statut'] = statut;
    }

    const sessions = await ChatbotSession.find(query)
      .select('sessionId profile intention thematique actionFinale rendezVous status createdAt updatedAt')
      .sort({ 'rendezVous.date': 1 })
      .limit(limit)
      .skip(skip);

    const total = await ChatbotSession.countDocuments(query);

    // Statistiques par statut
    const stats = {
      en_cours: await ChatbotSession.countDocuments({ ...query, 'rendezVous.statut': 'en_cours' }),
      done: await ChatbotSession.countDocuments({ ...query, 'rendezVous.statut': 'done' }),
      canceled: await ChatbotSession.countDocuments({ ...query, 'rendezVous.statut': 'canceled' })
    };

    return Response.json({
      success: true,
      data: sessions,
      total,
      stats,
      limit,
      skip
    });
  } catch (error) {
    console.error('Error fetching rendez-vous:', error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { sessionId, statut } = body;

    if (!sessionId || !statut) {
      return Response.json(
        { success: false, message: 'sessionId and statut are required' },
        { status: 400 }
      );
    }

    if (!['en_cours', 'done', 'canceled'].includes(statut)) {
      return Response.json(
        { success: false, message: 'Invalid statut. Must be: en_cours, done, or canceled' },
        { status: 400 }
      );
    }

    // Essayer de trouver par sessionId d'abord, puis par _id
    let session = await ChatbotSession.findOne({ sessionId });
    
    // Si pas trouvé par sessionId, essayer par _id
    if (!session) {
      session = await ChatbotSession.findById(sessionId);
    }

    if (!session) {
      console.error('Session not found with sessionId or _id:', sessionId);
      return Response.json(
        { success: false, message: 'Session not found' },
        { status: 404 }
      );
    }

    if (!session.rendezVous) {
      console.error('No rendez-vous found for session:', sessionId);
      return Response.json(
        { success: false, message: 'No rendez-vous found for this session' },
        { status: 404 }
      );
    }

    // Mettre à jour le statut
    session.rendezVous.statut = statut;
    session.updatedAt = new Date();
    
    // Utiliser markModified pour s'assurer que Mongoose détecte le changement
    session.markModified('rendezVous');
    await session.save();
    
    console.log('Rendez-vous statut updated successfully:', session.sessionId, 'to', statut);

    return Response.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('Error updating rendez-vous statut:', error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

