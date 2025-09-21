// Script to fix patrimoine image path in database
const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'azalee_cms',
  charset: 'utf8mb4',
  collation: 'utf8mb4_unicode_ci'
};

async function fixPatrimoineImage() {
  let connection;
  
  try {
    console.log('Connecting to database...');
    connection = await mysql.createConnection(dbConfig);
    
    // Fix the hero section image path
    const heroContent = {
      title: "Patrimoine – Protégez et transmettez votre héritage avec Azalée Patrimoine",
      description: "Votre expert en transmission patrimoniale depuis plus de 30 ans. Nous vous accompagnons pour protéger votre famille, optimiser la transmission de votre patrimoine, et sécuriser l'avenir de vos proches avec des solutions personnalisées.",
      ctaText: "Demander un bilan patrimonial gratuit",
      image: "/images/pqtri;oine.webp"  // Correct image path
    };
    
    await connection.execute(`
      INSERT INTO cms_content (page_slug, section_name, content_type, content_data, is_published, created_by)
      VALUES (?, ?, 'json', ?, true, 1)
      ON DUPLICATE KEY UPDATE
      content_data = VALUES(content_data),
      is_published = true,
      updated_at = CURRENT_TIMESTAMP
    `, ['patrimoine', 'hero', JSON.stringify(heroContent)]);
    
    console.log('✅ Fixed patrimoine hero image path in database');
    console.log('The image should now appear at: http://localhost:4028/patrimoine');
    
  } catch (error) {
    console.error('Error fixing patrimoine image:', error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run the fix
fixPatrimoineImage();
