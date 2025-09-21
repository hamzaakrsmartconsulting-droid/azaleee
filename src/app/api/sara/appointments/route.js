import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Save appointment/lead
export async function POST(request) {
  try {
    const { sessionId, type, data } = await request.json();
    
    const connection = await mysql.createConnection(dbConfig);
    
    if (type === 'rdv') {
      await connection.execute(
        'INSERT INTO sara_appointments (session_id, type, preferred_date, preferred_time, canal_preference, notes) VALUES (?, ?, ?, ?, ?, ?)',
        [sessionId, type, data.preferred_date, data.preferred_time, data.canal_preference, data.notes]
      );
    } else if (type === 'rappel') {
      await connection.execute(
        'INSERT INTO sara_callbacks (session_id, telephone, email, preferred_time, notes) VALUES (?, ?, ?, ?, ?)',
        [sessionId, data.telephone, data.email, data.preferred_time, data.notes]
      );
    } else if (type === 'pdf') {
      await connection.execute(
        'INSERT INTO sara_pdf_requests (session_id, email, pdf_type) VALUES (?, ?, ?)',
        [sessionId, data.email, data.pdf_type || 'mini-bilan']
      );
    }
    
    // Update session status to completed
    await connection.execute(
      'UPDATE sara_sessions SET status = "completed", updated_at = CURRENT_TIMESTAMP WHERE session_id = ?',
      [sessionId]
    );
    
    await connection.end();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving appointment:', error);
    return NextResponse.json({ error: 'Failed to save appointment' }, { status: 500 });
  }
}
