import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Get all leads (appointments, callbacks, PDF requests)
export async function GET(request) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Get appointments
    const [appointments] = await connection.execute(`
      SELECT a.*, p.nom, p.prenom, p.email, p.telephone, s.created_at as session_created
      FROM sara_appointments a
      LEFT JOIN sara_user_profiles p ON a.session_id = p.session_id
      LEFT JOIN sara_sessions s ON a.session_id = s.session_id
      ORDER BY a.created_at DESC
    `);
    
    // Get callbacks
    const [callbacks] = await connection.execute(`
      SELECT c.*, p.nom, p.prenom, p.email, s.created_at as session_created
      FROM sara_callbacks c
      LEFT JOIN sara_user_profiles p ON c.session_id = p.session_id
      LEFT JOIN sara_sessions s ON c.session_id = s.session_id
      ORDER BY c.created_at DESC
    `);
    
    // Get PDF requests
    const [pdfRequests] = await connection.execute(`
      SELECT p.*, pr.nom, pr.prenom, pr.telephone, s.created_at as session_created
      FROM sara_pdf_requests p
      LEFT JOIN sara_user_profiles pr ON p.session_id = pr.session_id
      LEFT JOIN sara_sessions s ON p.session_id = s.session_id
      ORDER BY p.created_at DESC
    `);
    
    await connection.end();
    
    return NextResponse.json({ 
      appointments, 
      callbacks, 
      pdfRequests 
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}
