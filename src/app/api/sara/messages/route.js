import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Save message to database
export async function POST(request) {
  try {
    const { sessionId, messageType, content, step, options } = await request.json();
    
    const connection = await mysql.createConnection(dbConfig);
    
    // Save message
    await connection.execute(
      'INSERT INTO sara_messages (session_id, message_type, content, step, options) VALUES (?, ?, ?, ?, ?)',
      [sessionId, messageType, content, step, options ? JSON.stringify(options) : null]
    );
    
    // Update session current step
    if (step) {
      await connection.execute(
        'UPDATE sara_sessions SET current_step = ?, updated_at = CURRENT_TIMESTAMP WHERE session_id = ?',
        [step, sessionId]
      );
    }
    
    await connection.end();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
