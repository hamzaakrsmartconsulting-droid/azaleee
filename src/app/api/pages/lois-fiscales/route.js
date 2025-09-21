import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

// Get lois-fiscales content for public display
export async function GET() {
  try {
    const sections = await executeQuery(
      'SELECT section_name, content FROM cms_content WHERE page_name = ? AND is_published = true ORDER BY section_name',
      ['lois-fiscales']
    );

    const content = {};
    sections.forEach(section => {
      try {
        content[section.section_name] = JSON.parse(section.content);
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
        content[section.section_name] = {};
      }
    });

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error fetching lois-fiscales content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}
