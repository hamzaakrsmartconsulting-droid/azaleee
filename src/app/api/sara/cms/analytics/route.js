import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Get analytics data
export async function GET(request) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Session statistics
    const [sessionStats] = await connection.execute(`
      SELECT 
        COUNT(*) as total_sessions,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_sessions,
        SUM(CASE WHEN status = 'active' THEN 1 ELSE 0 END) as active_sessions,
        SUM(CASE WHEN status = 'abandoned' THEN 1 ELSE 0 END) as abandoned_sessions
      FROM sara_sessions
    `);
    
    // Daily sessions for the last 30 days
    const [dailySessions] = await connection.execute(`
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as sessions_count
      FROM sara_sessions
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `);
    
    // Top intentions
    const [topIntentions] = await connection.execute(`
      SELECT 
        intention,
        COUNT(*) as count
      FROM sara_user_profiles
      WHERE intention IS NOT NULL AND intention != ''
      GROUP BY intention
      ORDER BY count DESC
      LIMIT 10
    `);
    
    // Conversion rates
    const [conversions] = await connection.execute(`
      SELECT 
        'RDV' as type,
        COUNT(*) as count
      FROM sara_appointments
      UNION ALL
      SELECT 
        'Rappel' as type,
        COUNT(*) as count
      FROM sara_callbacks
      UNION ALL
      SELECT 
        'PDF' as type,
        COUNT(*) as count
      FROM sara_pdf_requests
    `);
    
    // Average session duration
    const [avgDuration] = await connection.execute(`
      SELECT 
        AVG(TIMESTAMPDIFF(MINUTE, s.created_at, s.updated_at)) as avg_duration_minutes
      FROM sara_sessions s
      WHERE s.status = 'completed'
    `);
    
    await connection.end();
    
    return NextResponse.json({ 
      sessionStats: sessionStats[0],
      dailySessions,
      topIntentions,
      conversions,
      avgDuration: avgDuration[0]
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
