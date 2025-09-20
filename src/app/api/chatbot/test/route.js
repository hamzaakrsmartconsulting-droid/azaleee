import { NextResponse } from 'next/server';
import { executeQuery, executeSelect } from '@/lib/database';

export async function GET() {
  try {
    console.log('🔍 Testing chatbot database tables...');
    
    // Test 1: Check if tables exist
    const tablesQuery = `
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = ? 
      AND TABLE_NAME IN ('interactions_chatbot', 'appointments', 'callbacks', 'user_sessions')
    `;
    
    const tables = await executeSelect(tablesQuery, [process.env.DB_NAME || 'azalee_patrimoine']);
    console.log('📊 Tables found:', tables.map(t => t.TABLE_NAME));
    
    // Test 2: Check interactions_chatbot structure
    const structureQuery = `
      DESCRIBE interactions_chatbot
    `;
    
    let structure = [];
    try {
      structure = await executeSelect(structureQuery);
      console.log('📋 interactions_chatbot structure:', structure.length, 'columns');
    } catch (error) {
      console.error('❌ interactions_chatbot table not found:', error.message);
    }
    
    // Test 3: Check if we can insert a test record
    const testSessionId = `test_${Date.now()}`;
    const testInsertQuery = `
      INSERT INTO interactions_chatbot (
        session_id, user_id, conversation_history, user_profile, 
        selected_intentions, current_step, actions_required
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    let insertSuccess = false;
    try {
      await executeQuery(testInsertQuery, [
        testSessionId,
        null,
        JSON.stringify([{ id: 1, text: 'Test message', isUser: false }]),
        JSON.stringify({ nom: 'Test' }),
        JSON.stringify(['test']),
        'welcome',
        JSON.stringify({})
      ]);
      insertSuccess = true;
      console.log('✅ Test insert successful');
      
      // Clean up test data
      await executeQuery('DELETE FROM interactions_chatbot WHERE session_id = ?', [testSessionId]);
      console.log('🧹 Test data cleaned up');
    } catch (error) {
      console.error('❌ Test insert failed:', error.message);
    }
    
    // Test 4: Check database connection
    const connectionTest = await executeSelect('SELECT 1 as test');
    const connectionSuccess = connectionTest.length > 0;
    
    return NextResponse.json({
      success: true,
      database: {
        connected: connectionSuccess,
        tables: tables.map(t => t.TABLE_NAME),
        interactions_chatbot_columns: structure.length,
        test_insert: insertSuccess
      },
      environment: {
        DB_HOST: process.env.DB_HOST,
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PORT: process.env.DB_PORT
      }
    });
    
  } catch (error) {
    console.error('❌ Chatbot test failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
