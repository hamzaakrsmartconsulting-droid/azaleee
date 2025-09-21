import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Test simple de connexion à la base de données
export async function GET(request) {
  try {
    console.log('Testing database connection...');
    console.log('DB Config:', { 
      host: dbConfig.host, 
      user: dbConfig.user, 
      database: dbConfig.database,
      port: dbConfig.port 
    });
    
    const connection = await mysql.createConnection(dbConfig);
    console.log('Database connected successfully');
    
    // Test simple query
    const [result] = await connection.execute('SELECT 1 as test');
    console.log('Test query result:', result);
    
    // Vérifier si les tables SARA existent
    const [tables] = await connection.execute(`
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? 
      AND TABLE_NAME LIKE 'sara_%'
    `, [dbConfig.database]);
    
    console.log('SARA tables found:', tables);
    
    await connection.end();
    
    return NextResponse.json({
      success: true,
      message: 'Connexion à la base de données réussie!',
      test: result[0],
      tables: tables.map(t => t.TABLE_NAME),
      config: {
        host: dbConfig.host,
        user: dbConfig.user,
        database: dbConfig.database,
        port: dbConfig.port
      }
    });
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
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