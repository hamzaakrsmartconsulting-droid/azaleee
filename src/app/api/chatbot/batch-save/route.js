import { executeQuery } from '@/lib/database';

export async function POST(request) {
  try {
    const { sessionId, userId, sessionData, conversationData } = await request.json();
    
    const startTime = Date.now();
    
    console.log('💾 Batch saving data for session:', sessionId);
    
    // Save session data first
    const sessionQuery = `
      INSERT INTO user_sessions (session_id, user_id, session_type, data, updated_at) 
      VALUES (?, ?, 'chatbot', ?, NOW())
      ON DUPLICATE KEY UPDATE 
        data = VALUES(data),
        updated_at = NOW()
    `;
    
    await executeQuery(sessionQuery, [
      sessionId, 
      userId, 
      JSON.stringify(sessionData)
    ]);
    
    console.log('✅ Session data saved');
    
    // Save conversation data
    const conversationQuery = `
      INSERT INTO interactions_chatbot (
        session_id, user_id, conversation_history, user_profile, 
        selected_intentions, current_step, actions_required, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
      ON DUPLICATE KEY UPDATE 
        conversation_history = VALUES(conversation_history),
        user_profile = VALUES(user_profile),
        selected_intentions = VALUES(selected_intentions),
        current_step = VALUES(current_step),
        actions_required = VALUES(actions_required),
        updated_at = NOW()
    `;
    
    await executeQuery(conversationQuery, [
      sessionId,
      userId,
      JSON.stringify(conversationData.conversationHistory),
      JSON.stringify(sessionData.userProfile),
      JSON.stringify(sessionData.selectedIntentions),
      sessionData.currentStep,
      JSON.stringify(conversationData.actionsRequired)
    ]);
    
    console.log('✅ Conversation data saved');
    
    const executionTime = Date.now() - startTime;
    
    return Response.json({
      success: true,
      message: 'Data saved successfully',
      performance: {
        executionTime: executionTime + 'ms',
        queriesExecuted: 2
      }
    });
  } catch (error) {
    console.error('❌ Error in batch-save:', error);
    
    return Response.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
