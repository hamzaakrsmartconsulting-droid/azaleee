import { NextResponse } from 'next/server';
import { Appointment } from '../../../../lib/models/Appointment';

// GET - Récupérer tous les rendez-vous
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let appointments;
    if (status) {
      appointments = await Appointment.getByStatus(status);
    } else {
      appointments = await Appointment.getAll();
    }

    return NextResponse.json({
      success: true,
      data: appointments
    });

  } catch (error) {
    console.error('Erreur API appointments GET:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la récupération des rendez-vous',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau rendez-vous
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      session_id,
      client_name,
      client_email,
      client_phone,
      appointment_date,
      appointment_type,
      notes,
      priority
    } = body;

    if (!session_id || !client_name || !appointment_date) {
      return NextResponse.json(
        { success: false, message: 'session_id, client_name et appointment_date sont requis' },
        { status: 400 }
      );
    }

    const appointmentId = await Appointment.create({
      session_id,
      client_name,
      client_email,
      client_phone,
      appointment_date,
      appointment_type,
      notes,
      priority
    });

    return NextResponse.json({
      success: true,
      message: 'Rendez-vous créé avec succès',
      appointmentId
    });

  } catch (error) {
    console.error('Erreur API appointments POST:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la création du rendez-vous',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un rendez-vous
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID du rendez-vous est requis' },
        { status: 400 }
      );
    }

    const success = await Appointment.update(id, updateData);

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Rendez-vous mis à jour avec succès'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Rendez-vous non trouvé' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Erreur API appointments PUT:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la mise à jour du rendez-vous',
        error: error.message
      },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un rendez-vous
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID du rendez-vous est requis' },
        { status: 400 }
      );
    }

    const success = await Appointment.delete(parseInt(id));

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Rendez-vous supprimé avec succès'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Rendez-vous non trouvé' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Erreur API appointments DELETE:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la suppression du rendez-vous',
        error: error.message
      },
      { status: 500 }
    );
  }
}





