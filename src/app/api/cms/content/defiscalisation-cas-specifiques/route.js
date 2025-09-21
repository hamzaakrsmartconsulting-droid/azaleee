import { executeQuery } from '@/lib/cmsDatabase';

export async function GET() {
  try {
    const query = `
      SELECT content 
      FROM cms_content 
      WHERE page_name = 'defiscalisation-cas-specifiques' 
      AND is_published = true 
      ORDER BY updated_at DESC 
      LIMIT 1
    `;
    
    const results = await executeQuery(query);
    
    if (results.length > 0) {
      const content = JSON.parse(results[0].content);
      return Response.json({ content });
    } else {
      return Response.json({ content: {} });
    }
  } catch (error) {
    console.error('Error fetching defiscalisation-cas-specifiques content:', error);
    return Response.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { content } = await request.json();

    if (!content || typeof content !== 'object') {
      return Response.json({ error: 'Invalid content format' }, { status: 400 });
    }

    // Save the entire content as a single JSON object
    await executeQuery(
      `INSERT INTO cms_content (page_name, section_name, content, is_published, created_at, updated_at) 
       VALUES (?, 'main', ?, true, NOW(), NOW())
       ON DUPLICATE KEY UPDATE 
       content = VALUES(content), 
       is_published = true,
       updated_at = NOW()`,
      ['defiscalisation-cas-specifiques', JSON.stringify(content)]
    );

    return Response.json({ success: true, message: 'Content saved successfully' });
  } catch (error) {
    console.error('Error saving defiscalisation-cas-specifiques content:', error);
    return Response.json({ error: 'Failed to save content' }, { status: 500 });
  }
}