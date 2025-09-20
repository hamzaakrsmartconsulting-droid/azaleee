import { executeQuery, executeSelect } from '@/lib/database';

// Create or update chatbot session
export async function POST(request) {
  try {
    const { sessionId, userId, status = 'active' } = await request.json();
    
    console.log('💾 Creating/updating chatbot session:', sessionId);
    
    const query = `
      INSERT INTO chatbot_sessions (session_id, user_id, status, started_at) 
      VALUES (?, ?, ?, NOW())
      ON DUPLICATE KEY UPDATE 
        user_id = VALUES(user_id),
        status = VALUES(status),
        updated_at = NOW()
    `;
    
    await executeQuery(query, [sessionId, userId, status]);
    
    return Response.json({
      success: true,
      message: 'Chatbot session created/updated successfully',
      data: { sessionId, userId, status }
    });
  } catch (error) {
    console.error('❌ Error creating chatbot session:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Get chatbot session data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const offset = parseInt(searchParams.get('offset')) || 0;
    
    let query = `
      SELECT 
        cs.*,
        cup.nom,
        cup.prenom,
        cup.age,
        cup.situation_matrimoniale,
        cup.enfants,
        cup.situation_professionnelle,
        cup.tmi,
        cup.placements_actuels,
        cup.budget_projet,
        cup.intention,
        cup.objectif,
        cup.canal_preference,
        cup.date_rdv,
        cup.telephone,
        cup.email
      FROM chatbot_sessions cs
      LEFT JOIN chatbot_user_profiles cup ON cs.session_id = cup.session_id
    `;
    
    const params = [];
    
    if (sessionId) {
      query += ' WHERE cs.session_id = ?';
      params.push(sessionId);
    } else if (status) {
      query += ' WHERE cs.status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY cs.created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    
    const sessions = await executeSelect(query, params);
    
    // Get conversation history for each session
    for (let session of sessions) {
      const conversationQuery = `
        SELECT * FROM chatbot_conversations 
        WHERE session_id = ? 
        ORDER BY timestamp ASC
      `;
      session.conversations = await executeSelect(conversationQuery, [session.session_id]);
      
      // Get actions for each session
      const actionsQuery = `
        SELECT * FROM chatbot_actions 
        WHERE session_id = ? 
        ORDER BY created_at DESC
      `;
      session.actions = await executeSelect(actionsQuery, [session.session_id]);
    }
    
    return Response.json({
      success: true,
      data: sessions,
      pagination: {
        limit,
        offset,
        total: sessions.length
      }
    });
  } catch (error) {
    console.error('❌ Error fetching chatbot sessions:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Update chatbot session status
export async function PUT(request) {
  try {
    const { sessionId, status, completedAt } = await request.json();
    
    console.log('🔄 Updating chatbot session status:', sessionId, status);
    
    const query = `
      UPDATE chatbot_sessions 
      SET status = ?, 
          completed_at = ?,
          updated_at = NOW()
      WHERE session_id = ?
    `;
    
    await executeQuery(query, [status, completedAt || null, sessionId]);
    
    return Response.json({
      success: true,
      message: 'Chatbot session status updated successfully'
    });
  } catch (error) {
    console.error('❌ Error updating chatbot session:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Delete chatbot session
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
    
    console.log('🗑️ Deleting chatbot session:', sessionId);
    
    const query = 'DELETE FROM chatbot_sessions WHERE session_id = ?';
    await executeQuery(query, [sessionId]);
    
    return Response.json({
      success: true,
      message: 'Chatbot session deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting chatbot session:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}




