import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Save user profile data
export async function POST(request) {
  try {
    const { sessionId, profileData } = await request.json();
    
    const connection = await mysql.createConnection(dbConfig);
    
    // Check if profile already exists
    const [existing] = await connection.execute(
      'SELECT id FROM sara_user_profiles WHERE session_id = ?',
      [sessionId]
    );
    
    if (existing.length > 0) {
      // Update existing profile
      await connection.execute(
        `UPDATE sara_user_profiles SET 
         nom = ?, prenom = ?, age = ?, situation_matrimoniale = ?, 
         enfants = ?, situation_professionnelle = ?, tmi = ?, 
         placements_actuels = ?, budget_projet = ?, intention = ?, 
         thematique_reponse = ?, canal_preference = ?, telephone = ?, 
         email = ?, updated_at = CURRENT_TIMESTAMP 
         WHERE session_id = ?`,
        [
          profileData.nom, profileData.prenom, profileData.age,
          profileData.situation_matrimoniale, profileData.enfants,
          profileData.situation_professionnelle, profileData.tmi,
          profileData.placements_actuels, profileData.budget_projet,
          profileData.intention, profileData.thematique_reponse,
          profileData.canal_preference, profileData.telephone,
          profileData.email, sessionId
        ]
      );
    } else {
      // Create new profile
      await connection.execute(
        `INSERT INTO sara_user_profiles 
         (session_id, nom, prenom, age, situation_matrimoniale, enfants, 
          situation_professionnelle, tmi, placements_actuels, budget_projet, 
          intention, thematique_reponse, canal_preference, telephone, email) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          sessionId, profileData.nom, profileData.prenom, profileData.age,
          profileData.situation_matrimoniale, profileData.enfants,
          profileData.situation_professionnelle, profileData.tmi,
          profileData.placements_actuels, profileData.budget_projet,
          profileData.intention, profileData.thematique_reponse,
          profileData.canal_preference, profileData.telephone,
          profileData.email
        ]
      );
    }
    
    await connection.end();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving profile:', error);
    return NextResponse.json({ error: 'Failed to save profile' }, { status: 500 });
  }
}
