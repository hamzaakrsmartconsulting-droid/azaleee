import { NextResponse } from 'next/server';
import { Callback } from '../../../../../lib/models/Callback';

// PATCH - Mettre à jour le statut d'un rappel
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();
    
    console.log('📞 Mise à jour du statut du rappel:', id, '->', status);
    
    if (!status) {
      return NextResponse.json(
        { success: false, message: 'Le statut est requis' },
        { status: 400 }
      );
    }
    
    // Mettre à jour le statut dans la base de données
    const result = await Callback.updateStatus(id, status);
    
    if (result) {
      console.log('✅ Statut du rappel mis à jour:', result);
      return NextResponse.json({
        success: true,
        message: 'Statut du rappel mis à jour avec succès',
        callback: result
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Rappel non trouvé' },
        { status: 404 }
      );
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du statut:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la mise à jour du statut',
        error: error.message
      },
      { status: 500 }
    );
  }
}





