import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../lib/cmsDatabase';

// Get homepage content for public display
export async function GET() {
  try {
    console.log('Public Homepage API - Loading content...');
    
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      ['homepage']
    );
    
    console.log('Public Homepage API - Raw sections from DB:', sections);
    
    // Convert to flat object format for homepage consumption
    const content = {};
    sections.forEach(section => {
      try {
        const sectionData = JSON.parse(section.content_data);
        console.log(`Public Homepage API - Parsed section ${section.section_name}:`, sectionData);
        
        // Flatten the content to match homepage structure
        if (typeof sectionData === 'object' && sectionData !== null) {
          Object.keys(sectionData).forEach(key => {
            content[key] = sectionData[key];
          });
        }
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
      }
    });
    
    console.log('Public Homepage API - Final flattened content:', content);
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching public homepage content:', error);
    return NextResponse.json({ message: 'Error fetching content: ' + error.message }, { status: 500 });
  }
}
