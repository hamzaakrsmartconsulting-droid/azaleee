import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

export async function GET() {
  try {
    const query = `
      SELECT section_name, content 
      FROM cms_content 
      WHERE page_slug = 'retraite'
    `;
    
    const results = await executeQuery(query);
    
    const content = {};
    results.forEach(row => {
      try {
      content[row.section_name] = JSON.parse(row.content);
      } catch (error) {
        console.error(`Error parsing content for section ${row.section_name}:`, error);
        content[row.section_name] = {};
      }
    });

    return NextResponse.json({
      success: true,
      content
    });
  } catch (error) {
    console.error('Error fetching retraite page content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch content'
    }, { status: 500 });
  }
}
