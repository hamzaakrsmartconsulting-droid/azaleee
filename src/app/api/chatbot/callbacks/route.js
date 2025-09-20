import { NextResponse } from 'next/server';
import { Callback } from '../../../../lib/models/Callback';

// GET - Récupérer tous les rappels
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    
    let callbacks;
    if (priority) {
      callbacks = await Callback.getByPriority(priority);
    } else if (status) {
      callbacks = await Callback.getByStatus(status);
    } else {
      callbacks = await Callback.getAll();
    }

    return NextResponse.json({
      success: true,
      data: callbacks
    });

  } catch (error) {
    console.error('Erreur API callbacks GET:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des rappels',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau rappel
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      session_id,
      client_name,
      client_phone,
      reason,
      priority,
      scheduled_date,
      notes
    } = body;

    if (!session_id || !client_name || !reason || !scheduled_date) {
      return NextResponse.json(
        { success: false, message: 'session_id, client_name, reason et scheduled_date sont requis' },
        { status: 400 }
      );
    }

    const callbackId = await Callback.create({
      session_id,
      client_name,
      client_phone,
      reason,
      priority,
      scheduled_date,
      notes
    });

    return NextResponse.json({
      success: true,
      message: 'Rappel créé avec succès',
      callbackId
    });

  } catch (error) {
    console.error('Erreur API callbacks POST:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la création du rappel',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un rappel
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID du rappel est requis' },
        { status: 400 }
      );
    }

    const success = await Callback.update(id, updateData);

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Rappel mis à jour avec succès'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Rappel non trouvé' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Erreur API callbacks PUT:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la mise à jour du rappel',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un rappel
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID du rappel est requis' },
        { status: 400 }
      );
    }

    const success = await Callback.delete(parseInt(id));

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Rappel supprimé avec succès'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Rappel non trouvé' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Erreur API callbacks DELETE:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la suppression du rappel',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// PATCH - Marquer un rappel comme traité
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, action } = body;

    if (!id || !action) {
      return NextResponse.json(
        { success: false, message: 'ID et action sont requis' },
        { status: 400 }
      );
    }

    let success = false;
    
    if (action === 'mark_processed') {
      success = await Callback.markAsProcessed(id);
    } else if (action === 'update_status') {
      const { status } = body;
      if (!status) {
        return NextResponse.json(
          { success: false, message: 'Status est requis pour cette action' },
          { status: 400 }
        );
      }
      success = await Callback.updateStatus(id, status);
    }

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Rappel mis à jour avec succès'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Rappel non trouvé' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Erreur API callbacks PATCH:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la mise à jour du rappel',
        error: error.message
      },
      { status: 500 }
    );
  }
}





