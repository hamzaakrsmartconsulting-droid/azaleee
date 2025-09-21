import { executeQuery } from '@/lib/cmsDatabase';

export async function POST() {
  try {
    // Force refresh by clearing any cached content
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
      return Response.json({ 
        success: true, 
        message: 'Content reloaded successfully',
        content 
      });
    } else {
      return Response.json({ 
        success: true, 
        message: 'No published content found',
        content: null 
      });
    }
  } catch (error) {
    console.error('Error reloading defiscalisation-cas-specifiques content:', error);
    return Response.json({ 
      success: false, 
      error: 'Failed to reload content' 
    }, { status: 500 });
  }
}