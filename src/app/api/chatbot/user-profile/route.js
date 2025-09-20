import { executeQuery } from '@/lib/database';

export async function POST(request) {
  try {
    const { 
      sessionId, 
      userId, 
      nom,
      prenom,
      age,
      situation_matrimoniale,
      enfants,
      situation_professionnelle,
      tmi,
      placements_actuels,
      budget_projet,
      intention,
      objectif,
      canal_preference,
      date_rdv,
      telephone,
      email
    } = await request.json();
    
    console.log('💾 Saving user profile data for session:', sessionId);
    
    // Save user profile data to a dedicated table
    const profileQuery = `
      INSERT INTO user_profiles (
        session_id, user_id, nom, prenom, age, situation_matrimoniale,
        enfants, situation_professionnelle, tmi, placements_actuels,
        budget_projet, intention, objectif, canal_preference,
        date_rdv, telephone, email, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
      ON DUPLICATE KEY UPDATE 
        nom = VALUES(nom),
        prenom = VALUES(prenom),
        age = VALUES(age),
        situation_matrimoniale = VALUES(situation_matrimoniale),
        enfants = VALUES(enfants),
        situation_professionnelle = VALUES(situation_professionnelle),
        tmi = VALUES(tmi),
        placements_actuels = VALUES(placements_actuels),
        budget_projet = VALUES(budget_projet),
        intention = VALUES(intention),
        objectif = VALUES(objectif),
        canal_preference = VALUES(canal_preference),
        date_rdv = VALUES(date_rdv),
        telephone = VALUES(telephone),
        email = VALUES(email),
        updated_at = NOW()
    `;
    
    await executeQuery(profileQuery, [
      sessionId,
      userId,
      nom || null,
      prenom || null,
      age || null,
      situation_matrimoniale || null,
      enfants || null,
      situation_professionnelle || null,
      tmi || null,
      placements_actuels || null,
      budget_projet || null,
      intention || null,
      objectif || null,
      canal_preference || null,
      date_rdv || null,
      telephone || null,
      email || null
    ]);
    
    console.log('✅ User profile data saved successfully');
    
    return Response.json({
      success: true,
      message: 'User profile data saved successfully',
      data: {
        sessionId,
        userId,
        nom,
        prenom,
        age,
        situation_matrimoniale,
        enfants,
        situation_professionnelle,
        tmi,
        placements_actuels,
        budget_projet,
        intention,
        objectif,
        canal_preference,
        date_rdv,
        telephone,
        email
      }
    });
  } catch (error) {
    console.error('❌ Error saving user profile:', error);
    
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    
    if (!sessionId) {
      return Response.json({
        success: false,
        error: 'Session ID is required'
      }, { status: 400 });
    }
    
    const query = `
      SELECT * FROM user_profiles 
      WHERE session_id = ? 
      ORDER BY updated_at DESC 
      LIMIT 1
    `;
    
    const result = await executeQuery(query, [sessionId]);
    
    return Response.json({
      success: true,
      data: result[0] || null
    });
  } catch (error) {
    console.error('❌ Error fetching user profile:', error);
    
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}




