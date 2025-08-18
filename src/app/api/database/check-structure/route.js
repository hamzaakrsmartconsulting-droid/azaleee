import { NextResponse } from 'next/server';
import { executeSelect } from '../../../../lib/database';

export async function GET() {
  try {
    // Vérifier la structure de la table interactions_chatbot
    const structureQuery = `
      DESCRIBE interactions_chatbot
    `;
    
    const structure = await executeSelect(structureQuery);
    
    // Vérifier si les nouvelles colonnes existent
    const requiredColumns = ['conversation_history', 'user_profile', 'selected_intentions', 'current_step', 'updated_at'];
    const missingColumns = requiredColumns.filter(col => 
      !structure.some(s => s.Field === col)
    );
    
    const hasNewColumns = missingColumns.length === 0;
    
    return NextResponse.json({
      success: true,
      structure: structure,
      hasNewColumns: hasNewColumns,
      missingColumns: missingColumns,
      message: hasNewColumns 
        ? 'Table interactions_chatbot mise à jour avec succès' 
        : `Table interactions_chatbot nécessite une mise à jour. Colonnes manquantes: ${missingColumns.join(', ')}`
    });

  } catch (error) {
    console.error('Erreur lors de la vérification de la structure:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erreur lors de la vérification de la structure',
        error: error.message
      },
      { status: 500 }
    );
  }
}
