import { executeQuery } from '@/lib/cmsDatabase';

export async function GET() {
  try {
    const result = await executeQuery(
      'SELECT content FROM cms_content WHERE page_path = ? AND is_published = true ORDER BY updated_at DESC LIMIT 1',
      ['pfu']
    );

    if (result.length > 0) {
      const content = JSON.parse(result[0].content);
      return Response.json({ content });
    } else {
      return Response.json({ content: {} });
    }
  } catch (error) {
    console.error('Error fetching pfu content:', error);
    return Response.json({ content: {} }, { status: 500 });
  }
}