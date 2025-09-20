import { NextResponse } from 'next/server';
import { executeSelect } from '../../../lib/database.js';

export async function GET() {
  try {
    console.log('🔍 Test DB endpoint appelé');
    
    // Test simple de connexion
    const result = await executeSelect('SELECT 1 as test, NOW() as current_time');
    
    console.log('✅ Test DB réussi:', result);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Connexion à la base de données réussie',
      data: result 
    });
    
  } catch (error) {
    console.error('❌ Erreur test DB:', error);
    
    return NextResponse.json({ 
      success: false, 
      message: 'Erreur de connexion à la base de données',
      error: error.message 
    }, { status: 500 });
  }
}
