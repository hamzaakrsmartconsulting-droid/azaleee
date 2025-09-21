import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

// Get declaration-impots content for public display
export async function GET() {
  try {
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      ['declaration-impots']
    );
    
    // Convert to structured object format
    const content = {};
    sections.forEach(section => {
      try {
        const sectionData = JSON.parse(section.content_data);
        content[section.section_name] = sectionData;
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
      }
    });
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching public declaration-impots content:', error);
    return NextResponse.json({ message: 'Error fetching content: ' + error.message }, { status: 500 });
  }
}
