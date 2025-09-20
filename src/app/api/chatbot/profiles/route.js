import { executeQuery, executeSelect } from '@/lib/database';

// Create or update user profile
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
    
    const query = `
      INSERT INTO chatbot_user_profiles (
        session_id, user_id, nom, prenom, age, situation_matrimoniale,
        enfants, situation_professionnelle, tmi, placements_actuels,
        budget_projet, intention, objectif, canal_preference,
        date_rdv, telephone, email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
    
    await executeQuery(query, [
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

// Get user profiles
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const offset = parseInt(searchParams.get('offset')) || 0;
    
    let query = `
      SELECT 
        cup.*,
        cs.status as session_status,
        cs.created_at as session_created_at
      FROM chatbot_user_profiles cup
      LEFT JOIN chatbot_sessions cs ON cup.session_id = cs.session_id
    `;
    
    const params = [];
    
    if (sessionId) {
      query += ' WHERE cup.session_id = ?';
      params.push(sessionId);
    }
    
    query += ' ORDER BY cup.created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    
    const profiles = await executeSelect(query, params);
    
    return Response.json({
      success: true,
      data: profiles,
      pagination: {
        limit,
        offset,
        total: profiles.length
      }
    });
  } catch (error) {
    console.error('❌ Error fetching user profiles:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Update user profile
export async function PUT(request) {
  try {
    const { 
      sessionId,
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
    
    console.log('🔄 Updating user profile for session:', sessionId);
    
    const query = `
      UPDATE chatbot_user_profiles 
      SET 
        nom = ?,
        prenom = ?,
        age = ?,
        situation_matrimoniale = ?,
        enfants = ?,
        situation_professionnelle = ?,
        tmi = ?,
        placements_actuels = ?,
        budget_projet = ?,
        intention = ?,
        objectif = ?,
        canal_preference = ?,
        date_rdv = ?,
        telephone = ?,
        email = ?,
        updated_at = NOW()
      WHERE session_id = ?
    `;
    
    await executeQuery(query, [
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
      email,
      sessionId
    ]);
    
    return Response.json({
      success: true,
      message: 'User profile updated successfully'
    });
  } catch (error) {
    console.error('❌ Error updating user profile:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Delete user profile
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    
    if (!sessionId) {
      return Response.json({
        success: false,
        error: 'Session ID is required'
      }, { status: 400 });
    }
    
    console.log('🗑️ Deleting user profile for session:', sessionId);
    
    const query = 'DELETE FROM chatbot_user_profiles WHERE session_id = ?';
    await executeQuery(query, [sessionId]);
    
    return Response.json({
      success: true,
      message: 'User profile deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting user profile:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}




