import { NextResponse } from 'next/server';
import { initializeCMSTables, testConnection } from '../../../../lib/cmsDatabase';

export async function GET() {
  try {
    // Test database connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Impossible de se connecter à la base de données MySQL' 
        },
        { status: 500 }
      );
    }

    // Initialize CMS tables
    const isInitialized = await initializeCMSTables();
    if (!isInitialized) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Erreur lors de l\'initialisation des tables CMS' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'CMS initialisé avec succès',
      data: {
        database: 'Connected',
        tables: 'Created',
        adminUser: 'Created (admin@azalee.com / admin123)'
      }
    });

  } catch (error) {
    console.error('CMS initialization error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur serveur lors de l\'initialisation' 
      },
      { status: 500 }
    );
  }
}
