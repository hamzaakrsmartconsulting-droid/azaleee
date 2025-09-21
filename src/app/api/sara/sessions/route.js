import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Create a new session
export async function POST(request) {
  try {
    const { sessionId, ipAddress, userAgent } = await request.json();
    
    const connection = await mysql.createConnection(dbConfig);
    
    // Create new session
    await connection.execute(
      'INSERT INTO sara_sessions (session_id, ip_address, user_agent, current_step) VALUES (?, ?, ?, ?)',
      [sessionId, ipAddress, userAgent, 'welcome']
    );
    
    await connection.end();
    
    return NextResponse.json({ success: true, sessionId });
  } catch (error) {
    console.error('Error creating session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}

// Get session data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    
    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }
    
    const connection = await mysql.createConnection(dbConfig);
    
    // Get session
    const [sessions] = await connection.execute(
      'SELECT * FROM sara_sessions WHERE session_id = ?',
      [sessionId]
    );
    
    if (sessions.length === 0) {
      await connection.end();
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }
    
    // Get messages
    const [messages] = await connection.execute(
      'SELECT * FROM sara_messages WHERE session_id = ? ORDER BY created_at ASC',
      [sessionId]
    );
    
    // Get user profile
    const [profiles] = await connection.execute(
      'SELECT * FROM sara_user_profiles WHERE session_id = ?',
      [sessionId]
    );
    
    await connection.end();
    
    return NextResponse.json({
      session: sessions[0],
      messages,
      profile: profiles[0] || null
    });
  } catch (error) {
    console.error('Error getting session:', error);
    return NextResponse.json({ error: 'Failed to get session' }, { status: 500 });
  }
}
