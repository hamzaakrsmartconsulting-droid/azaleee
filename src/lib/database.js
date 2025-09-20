import mysql from 'mysql2/promise';

// Configuration de la base de données
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'azalee_patrimoine',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
  // Performance optimizations
  multipleStatements: true,
  charset: 'utf8mb4',
  // Connection pooling optimizations
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  // Query optimization
  dateStrings: true,
  supportBigNumbers: true,
  bigNumberStrings: true
};

// Pool de connexions
let pool = null;

// Initialiser le pool de connexions
function initializePool() {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

// Obtenir une connexion du pool
export async function getConnection() {
  const pool = initializePool();
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    throw error;
  }
}

// Exécuter une requête avec des paramètres
export async function executeQuery(query, params = []) {
  const connection = await getConnection();
  try {
    const [result] = await connection.execute(query, params);
    return result;
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête:', error);
    throw error;
  } finally {
    connection.release();
  }
}

// Exécuter une requête SELECT
export async function executeSelect(query, params = []) {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute(query, params);
    return rows;
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête SELECT:', error);
    throw error;
  } finally {
    connection.release();
  }
}

// Tester la connexion
export async function testConnection() {
  try {
    const connection = await getConnection();
    await connection.ping();
    connection.release();
    return { success: true, message: 'Connexion à la base de données réussie' };
  } catch (error) {
    return { success: false, message: `Erreur de connexion: ${error.message}` };
  }
}

// Initialiser la base de données
export async function initializeDatabase() {
  try {
    // Créer la table page_content si elle n'existe pas
    const createPageContentTable = `
      CREATE TABLE IF NOT EXISTS page_content (
        id INT AUTO_INCREMENT PRIMARY KEY,
        page_path VARCHAR(255) NOT NULL,
        page_type ENUM('cms', 'public', 'admin') DEFAULT 'cms',
        content JSON NOT NULL,
        metadata JSON,
        version INT DEFAULT 1,
        status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY unique_page_path (page_path, page_type)
      )
    `;

    // Créer la table user_sessions si elle n'existe pas
    const createUserSessionsTable = `
      CREATE TABLE IF NOT EXISTS user_sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        session_id VARCHAR(255) NOT NULL UNIQUE,
        user_id VARCHAR(255),
        session_type ENUM('chatbot', 'cms', 'admin') DEFAULT 'chatbot',
        data JSON,
        expires_at TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_session_id (session_id),
        INDEX idx_user_id (user_id),
        INDEX idx_session_type (session_type)
      )
    `;

    // Mettre à jour la table interactions_chatbot si elle existe
    const alterChatbotTable = `
      ALTER TABLE interactions_chatbot 
      ADD COLUMN IF NOT EXISTS conversation_history JSON,
      ADD COLUMN IF NOT EXISTS user_profile JSON,
      ADD COLUMN IF NOT EXISTS selected_intentions JSON,
      ADD COLUMN IF NOT EXISTS current_step VARCHAR(100),
      ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    `;

    await executeQuery(createPageContentTable);
    await executeQuery(createUserSessionsTable);
    
    // Essayer de mettre à jour la table chatbot (peut échouer si elle n'existe pas)
    try {
      await executeQuery(alterChatbotTable);
    } catch (error) {
      console.log('Table interactions_chatbot non trouvée ou déjà mise à jour');
    }

    return { success: true, message: 'Base de données initialisée avec succès' };
  } catch (error) {
    return { success: false, message: `Erreur d'initialisation: ${error.message}` };
  }
}

// Fermer le pool de connexions
export async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
