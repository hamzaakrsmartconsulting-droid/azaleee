import { NextResponse } from 'next/server';
import { testConnection, initializeDatabase } from '../../../lib/database.js';

export async function GET() {
  try {
    // Tester la connexion
    const connectionTest = await testConnection();
    
    if (connectionTest.success) {
      // Initialiser la base de données
      const initResult = await initializeDatabase();
      
      return NextResponse.json({
        success: true,
        connection: connectionTest,
        initialization: initResult
      });
    } else {
      return NextResponse.json({
        success: false,
        error: connectionTest.message
      });
    }
  } catch (error) {
    console.error('Erreur lors du test de la base de données:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
