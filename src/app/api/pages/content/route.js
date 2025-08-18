import { NextResponse } from 'next/server';
import { PageContent } from '../../../../lib/models/PageContent';

// GET - Récupérer le contenu d'une page
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pagePath = searchParams.get('path');
    const pageType = searchParams.get('type') || 'cms';

    if (!pagePath) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Paramètre path requis'
        },
        { status: 400 }
      );
    }

    const content = await PageContent.getByPath(pagePath, pageType);
    
    if (!content) {
      return NextResponse.json({
        success: false,
        message: 'Contenu non trouvé',
        content: null
      });
    }

    return NextResponse.json({
      success: true,
      content: content
    });

  } catch (error) {
    console.error('Erreur API pages content GET:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération du contenu',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour le contenu d'une page
export async function POST(request) {
  try {
    const body = await request.json();
    const { pagePath, pageType = 'cms', content, metadata = {} } = body;

    if (!pagePath || !content) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'pagePath et content sont requis'
        },
        { status: 400 }
      );
    }

    const pageId = await PageContent.createOrUpdate(pagePath, content, pageType, metadata);

    return NextResponse.json({
      success: true,
      message: 'Contenu sauvegardé avec succès',
      data: { id: pageId }
    });

  } catch (error) {
    console.error('Erreur API pages content POST:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la sauvegarde du contenu',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer le contenu d'une page
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pagePath = searchParams.get('path');
    const pageType = searchParams.get('type') || 'cms';

    if (!pagePath) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Paramètre path requis'
        },
        { status: 400 }
      );
    }

    const deleted = await PageContent.delete(pagePath, pageType);

    if (!deleted) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Page non trouvée'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Page supprimée avec succès'
    });

  } catch (error) {
    console.error('Erreur API pages content DELETE:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la suppression',
        error: error.message
      },
      { status: 500 }
    );
  }
}
