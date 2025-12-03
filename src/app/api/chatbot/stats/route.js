import connectDB from '../../../../lib/mongodb';
import ChatbotSession from '../../../../lib/models/ChatbotSession';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectDB();

    const [
      totalSessions,
      completedSessions,
      activeSessions,
      rdvSessions,
      rappelSessions,
      pdfSessions,
      leadsQualifies
    ] = await Promise.all([
      ChatbotSession.countDocuments(),
      ChatbotSession.countDocuments({ status: 'completed' }),
      ChatbotSession.countDocuments({ status: 'active' }),
      ChatbotSession.countDocuments({ actionFinale: 'rdv' }),
      ChatbotSession.countDocuments({ actionFinale: 'rappel' }),
      ChatbotSession.countDocuments({ actionFinale: 'pdf' }),
      ChatbotSession.countDocuments({
        'profile.nom': { $exists: true, $ne: '' },
        'profile.prenom': { $exists: true, $ne: '' }
      })
    ]);

    // Top intentions
    const intentions = await ChatbotSession.aggregate([
      { $match: { intention: { $exists: true, $ne: null } } },
      { $group: { _id: '$intention', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    // Taux de conversion
    const tauxConversion = totalSessions > 0 
      ? ((completedSessions / totalSessions) * 100).toFixed(1)
      : 0;

    return Response.json({
      success: true,
      data: {
        totalSessions,
        completedSessions,
        activeSessions,
        rdvSessions,
        rappelSessions,
        pdfSessions,
        leadsQualifies,
        tauxConversion: parseFloat(tauxConversion),
        topIntentions: intentions
      }
    });
  } catch (error) {
    console.error('Error fetching chatbot stats:', error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

