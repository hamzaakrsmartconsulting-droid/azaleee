import mysql from 'mysql2/promise';

// MySQL Database Configuration
const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'azalee_cms',
  charset: 'utf8mb4',
  collation: 'utf8mb4_unicode_ci',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL CMS Database connected successfully');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ MySQL CMS Database connection failed:', error.message);
    return false;
  }
}

// Hash password function
export async function hashPassword(password) {
  const bcrypt = await import('bcryptjs');
  return await bcrypt.default.hash(password, 10);
}

// Compare password function
export async function comparePassword(password, hashedPassword) {
  const bcrypt = await import('bcryptjs');
  return await bcrypt.default.compare(password, hashedPassword);
}

// Initialize CMS tables
export async function initializeCMSTables() {
  try {
    const connection = await pool.getConnection();
    
    // Create CMS users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS cms_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        role ENUM('admin', 'editor', 'viewer') DEFAULT 'editor',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create CMS content table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS cms_content (
        id INT AUTO_INCREMENT PRIMARY KEY,
        page_slug VARCHAR(255) NOT NULL,
        section_name VARCHAR(255) NOT NULL,
        content_type ENUM('text', 'html', 'json') DEFAULT 'text',
        content_data LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
        is_published BOOLEAN DEFAULT false,
        created_by INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES cms_users(id),
        UNIQUE KEY unique_page_section (page_slug, section_name)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    // Create CMS sessions table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS cms_sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        token VARCHAR(255) UNIQUE NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES cms_users(id) ON DELETE CASCADE
      )
    `);

    // Insert default admin user if not exists
    const [users] = await connection.execute('SELECT COUNT(*) as count FROM cms_users WHERE email = ?', ['admin@azalee.com']);
    
    if (users[0].count === 0) {
      const hashedPassword = await hashPassword('admin123');
      
      await connection.execute(`
        INSERT INTO cms_users (email, password, name, role) 
        VALUES (?, ?, ?, ?)
      `, ['admin@azalee.com', hashedPassword, 'Administrateur', 'admin']);
      
      console.log('✅ Default admin user created: admin@azalee.com / admin123');
    }

    connection.release();
    console.log('✅ CMS tables initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Error initializing CMS tables:', error.message);
    return false;
  }
}

// Get database connection
export async function getConnection() {
  return await pool.getConnection();
}

// Execute query with automatic connection management
export async function executeQuery(query, params = []) {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(query, params);
    return results;
  } finally {
    connection.release();
  }
}

export default pool;