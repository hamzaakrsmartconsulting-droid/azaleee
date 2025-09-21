import { executeQuery } from '@/lib/cmsDatabase';

export async function POST(request) {
  try {
    const { content } = await request.json();
    
    const contentJson = JSON.stringify(content);
    
    await executeQuery(
      `INSERT INTO cms_content (page_path, content, is_published, created_at, updated_at) 
       VALUES (?, ?, true, NOW(), NOW()) 
       ON DUPLICATE KEY UPDATE 
       content = VALUES(content), 
       is_published = true, 
       updated_at = NOW()`,
      ['fiscalite-placements', contentJson]
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error saving fiscalite-placements content:', error);
    return Response.json({ error: 'Failed to save content' }, { status: 500 });
  }
}