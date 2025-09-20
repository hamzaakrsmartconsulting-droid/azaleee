import { NextResponse } from 'next/server';
import { PageContent } from '../../../../lib/models/PageContent';

// POST - Get migration status
export async function POST(request) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'status') {
      const status = await getMigrationStatus();
      return NextResponse.json({
        success: true,
        status: status
      });
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Only status action is supported. Migration is done client-side.'
      },
      { status: 400 }
    );

  } catch (error) {
    console.error('Erreur API CMS migration:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération du statut',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// Get migration status
async function getMigrationStatus() {
  try {
    const allPages = await PageContent.getAllByType('cms');
    const migratedPages = allPages.filter(page => 
      page.metadata && page.metadata.migratedFrom === 'localStorage'
    );

    return {
      totalPages: allPages.length,
      migratedPages: migratedPages.length,
      migrationComplete: migratedPages.length > 0,
      pages: allPages.map(page => ({
        path: page.page_path,
        migrated: page.metadata?.migratedFrom === 'localStorage',
        lastModified: page.updated_at
      }))
    };
  } catch (error) {
    return {
      error: error.message,
      migrationComplete: false
    };
  }
}
