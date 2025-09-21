import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Insérer des données de test pour le chatbot SARA
export async function POST(request) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Créer une session de test
    const testSessionId = `test_${Date.now()}`;
    
    await connection.execute(
      'INSERT INTO sara_sessions (session_id, status, current_step) VALUES (?, ?, ?)',
      [testSessionId, 'completed', 'engagement']
    );
    
    // Insérer un profil utilisateur de test
    await connection.execute(`
      INSERT INTO sara_user_profiles 
      (session_id, nom, prenom, age, situation_matrimoniale, enfants, 
       situation_professionnelle, tmi, placements_actuels, budget_projet, 
       intention, thematique_reponse, canal_preference, telephone, email) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      testSessionId,
      'Dupont',
      'Jean',
      35,
      'Marié(e)',
      'Oui',
      'Salarié',
      'Oui, je le connais',
      'Oui, financiers',
      '100 000 € à 500 000 €',
      'Réduire mes impôts',
      'Je souhaite optimiser ma fiscalité',
      'Téléphone',
      '0123456789',
      'jean.dupont@email.com'
    ]);
    
    // Insérer des messages de test
    const testMessages = [
      { type: 'bot', content: 'Bonjour et bienvenue sur azalee-patrimoine.fr ! Je suis votre conseiller patrimonial virtuel.', step: 'welcome' },
      { type: 'user', content: 'Obtenir une réponse rapide à une question patrimoniale', step: 'welcome' },
      { type: 'bot', content: 'Pour vous orienter efficacement, que souhaitez-vous explorer aujourd\'hui ?', step: 'intention' },
      { type: 'user', content: 'Réduire mes impôts', step: 'intention' },
      { type: 'bot', content: 'La fiscalité peut être optimisée selon votre situation personnelle.', step: 'thematique' },
      { type: 'user', content: 'Je souhaite optimiser ma fiscalité', step: 'thematique' },
      { type: 'bot', content: 'Parfait ! Un conseiller vous rappellera bientôt. À très bientôt !', step: 'final' }
    ];
    
    for (const message of testMessages) {
      await connection.execute(
        'INSERT INTO sara_messages (session_id, message_type, content, step) VALUES (?, ?, ?, ?)',
        [testSessionId, message.type, message.content, message.step]
      );
    }
    
    // Insérer un rendez-vous de test
    await connection.execute(
      'INSERT INTO sara_appointments (session_id, type, canal_preference) VALUES (?, ?, ?)',
      [testSessionId, 'rdv', 'Téléphone']
    );
    
    // Insérer une demande de rappel de test
    await connection.execute(
      'INSERT INTO sara_callbacks (session_id, telephone, email) VALUES (?, ?, ?)',
      [testSessionId, '0123456789', 'jean.dupont@email.com']
    );
    
    // Insérer une demande de PDF de test
    await connection.execute(
      'INSERT INTO sara_pdf_requests (session_id, email, pdf_type) VALUES (?, ?, ?)',
      [testSessionId, 'jean.dupont@email.com', 'mini-bilan']
    );
    
    await connection.end();
    
    return NextResponse.json({
      success: true,
      message: 'Données de test insérées avec succès!',
      sessionId: testSessionId
    });
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données de test:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message
    }, { status: 500 });
  }
}
