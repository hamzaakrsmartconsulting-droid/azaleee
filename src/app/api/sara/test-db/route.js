import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Test database connection and show tables
export async function GET(request) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Test connection
    await connection.ping();
    
    // Check if SARA tables exist
    const [tables] = await connection.execute(`
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? 
      AND TABLE_NAME LIKE 'sara_%'
    `, [dbConfig.database]);
    
    // Get table counts
    const tableCounts = {};
    for (const table of tables) {
      const [count] = await connection.execute(`SELECT COUNT(*) as count FROM ${table.TABLE_NAME}`);
      tableCounts[table.TABLE_NAME] = count[0].count;
    }
    
    await connection.end();
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      database: dbConfig.database,
      tables: tables.map(t => t.TABLE_NAME),
      counts: tableCounts,
      config: {
        host: dbConfig.host,
        user: dbConfig.user,
        database: dbConfig.database,
        port: dbConfig.port
      }
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      config: {
        host: dbConfig.host,
        user: dbConfig.user,
        database: dbConfig.database,
        port: dbConfig.port
      }
    }, { status: 500 });
  }
}
