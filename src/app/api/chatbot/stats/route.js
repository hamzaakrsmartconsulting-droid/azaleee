import { NextResponse } from 'next/server';
import { ChatbotInteraction } from '../../../../lib/models/ChatbotInteraction';

export async function GET() {
  try {
    const stats = await ChatbotInteraction.getStats();
    const totalInteractions = await ChatbotInteraction.count();

    return NextResponse.json({
      success: true,
      data: {
        totalInteractions,
        dailyStats: stats,
        summary: {
          totalSessions: stats.length > 0 ? stats[0].total_sessions : 0,
          totalUsers: stats.length > 0 ? stats[0].total_users : 0,
          averageInteractionsPerDay: stats.length > 0 ? (totalInteractions / stats.length).toFixed(2) : 0
        }
      }
    });

  } catch (error) {
    console.error('Erreur API chatbot stats:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des statistiques',
        error: error.message
      },
      { status: 500 }
    );
  }
}
