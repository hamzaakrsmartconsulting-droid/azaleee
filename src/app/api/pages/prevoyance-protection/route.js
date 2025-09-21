import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

export async function GET() {
  try {
    const query = `
      SELECT section_name, content_data 
      FROM cms_content 
      WHERE page_slug = 'prevoyance-protection'
    `;
    
    const results = await executeQuery(query);
    
    const content = {};
    results.forEach(row => {
      try {
        content[row.section_name] = JSON.parse(row.content_data);
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
    console.error('Error fetching prevoyance-protection page content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch content'
    }, { status: 500 });
  }
}
