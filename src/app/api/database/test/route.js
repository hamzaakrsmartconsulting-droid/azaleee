import { NextResponse } from 'next/server';
import { testConnection, initializeDatabase } from '../../../../lib/database';

export async function GET() {
  try {
    // Tester la connexion
    const isConnected = await testConnection();
    
    if (!isConnected) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Impossible de se connecter à la base de données MySQL',
          error: 'Vérifiez que XAMPP est démarré et que MySQL fonctionne'
        },
        { status: 500 }
      );
    }

    // Initialiser la base de données
    const isInitialized = await initializeDatabase();
    
    if (!isInitialized) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Erreur lors de l\'initialisation de la base de données'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Connexion à MySQL réussie ! Base de données initialisée.',
      database: 'azalee_patrimoine',
      status: 'connecté'
    });

  } catch (error) {
    console.error('Erreur API database test:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors du test de la base de données',
        error: error.message
      },
      { status: 500 }
    );
  }
}
