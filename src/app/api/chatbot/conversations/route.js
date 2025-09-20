import { executeQuery, executeSelect } from '@/lib/database';

// Add conversation message
export async function POST(request) {
  try {
    const { 
      sessionId, 
      messageType, 
      content, 
      step, 
      metadata 
    } = await request.json();
    
    console.log('💬 Adding conversation message for session:', sessionId);
    
    const query = `
      INSERT INTO chatbot_conversations (
        session_id, message_type, content, step, metadata
      ) VALUES (?, ?, ?, ?, ?)
    `;
    
    await executeQuery(query, [
      sessionId,
      messageType,
      content,
      step || null,
      metadata ? JSON.stringify(metadata) : null
    ]);
    
    return Response.json({
      success: true,
      message: 'Conversation message added successfully'
    });
  } catch (error) {
    console.error('❌ Error adding conversation message:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Get conversation history
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    const limit = parseInt(searchParams.get('limit')) || 100;
    const offset = parseInt(searchParams.get('offset')) || 0;
    
    if (!sessionId) {
      return Response.json({
        success: false,
        error: 'Session ID is required'
      }, { status: 400 });
    }
    
    const query = `
      SELECT * FROM chatbot_conversations 
      WHERE session_id = ? 
      ORDER BY timestamp ASC 
      LIMIT ? OFFSET ?
    `;
    
    const conversations = await executeSelect(query, [sessionId, limit, offset]);
    
    return Response.json({
      success: true,
      data: conversations,
      pagination: {
        limit,
        offset,
        total: conversations.length
      }
    });
  } catch (error) {
    console.error('❌ Error fetching conversation history:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// Delete conversation history
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
    
    console.log('🗑️ Deleting conversation history for session:', sessionId);
    
    const query = 'DELETE FROM chatbot_conversations WHERE session_id = ?';
    await executeQuery(query, [sessionId]);
    
    return Response.json({
      success: true,
      message: 'Conversation history deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting conversation history:', error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}