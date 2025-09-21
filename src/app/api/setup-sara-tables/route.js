import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_cms',
  port: process.env.DB_PORT || 3306,
};

// Créer les tables SARA si elles n'existent pas
export async function POST(request) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Créer les tables SARA
    const createTablesSQL = `
      -- Table pour les sessions utilisateur
      CREATE TABLE IF NOT EXISTS sara_sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        status ENUM('active', 'completed', 'abandoned') DEFAULT 'active',
        current_step VARCHAR(100),
        ip_address VARCHAR(45),
        user_agent TEXT
      );

      -- Table pour les profils utilisateur
      CREATE TABLE IF NOT EXISTS sara_user_profiles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        nom VARCHAR(100),
        prenom VARCHAR(100),
        age INT,
        situation_matrimoniale ENUM('Marié(e)', 'Pacsé(e)', 'Célibataire'),
        enfants ENUM('Oui', 'Non'),
        situation_professionnelle ENUM('Salarié', 'Entrepreneur', 'Retraité', 'Autre'),
        tmi VARCHAR(50),
        placements_actuels TEXT,
        budget_projet VARCHAR(100),
        intention VARCHAR(200),
        thematique_reponse TEXT,
        canal_preference ENUM('Téléphone', 'Visio', 'Agence'),
        telephone VARCHAR(20),
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
      );

      -- Table pour les messages de conversation
      CREATE TABLE IF NOT EXISTS sara_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        message_type ENUM('bot', 'user') NOT NULL,
        content TEXT NOT NULL,
        step VARCHAR(100),
        options JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
      );

      -- Table pour les rendez-vous
      CREATE TABLE IF NOT EXISTS sara_appointments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        type ENUM('rdv', 'rappel', 'pdf') NOT NULL,
        status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
        preferred_date DATETIME,
        preferred_time VARCHAR(20),
        canal_preference ENUM('Téléphone', 'Visio', 'Agence'),
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
      );

      -- Table pour les demandes de rappel
      CREATE TABLE IF NOT EXISTS sara_callbacks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        telephone VARCHAR(20) NOT NULL,
        email VARCHAR(255),
        preferred_time VARCHAR(100),
        status ENUM('pending', 'contacted', 'completed') DEFAULT 'pending',
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
      );

      -- Table pour les demandes de PDF
      CREATE TABLE IF NOT EXISTS sara_pdf_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        pdf_type VARCHAR(100) DEFAULT 'mini-bilan',
        status ENUM('pending', 'sent', 'failed') DEFAULT 'pending',
        sent_at TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (session_id) REFERENCES sara_sessions(session_id) ON DELETE CASCADE
      );
    `;
    
    // Exécuter les commandes SQL
    const statements = createTablesSQL.split(';').filter(stmt => stmt.trim());
    for (const statement of statements) {
      if (statement.trim()) {
        await connection.execute(statement);
      }
    }
    
    // Vérifier les tables créées
    const [tables] = await connection.execute(`
      SELECT TABLE_NAME 
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = ? 
      AND TABLE_NAME LIKE 'sara_%'
    `, [dbConfig.database]);
    
    await connection.end();
    
    return NextResponse.json({
      success: true,
      message: 'Tables SARA créées avec succès!',
      tables: tables.map(t => t.TABLE_NAME)
    });
  } catch (error) {
    console.error('Erreur lors de la création des tables:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message
    }, { status: 500 });
  }
}
