import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Get all sessions for CMS
export async function GET(request) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Get all sessions with basic info
    const [sessions] = await connection.execute(`
      SELECT s.*, 
             COUNT(m.id) as message_count,
             p.nom, p.prenom, p.email, p.telephone
      FROM sara_sessions s
      LEFT JOIN sara_messages m ON s.session_id = m.session_id
      LEFT JOIN sara_user_profiles p ON s.session_id = p.session_id
      GROUP BY s.id
      ORDER BY s.created_at DESC
    `);
    
    await connection.end();
    
    return NextResponse.json({ sessions });
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}
