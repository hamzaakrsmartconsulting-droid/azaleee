import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../lib/cmsDatabase';

// Get placements content for public display
export async function GET() {
  try {
    console.log('Public Placements API - Loading content...');
    
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      ['placements']
    );
    
    console.log('Public Placements API - Raw sections from DB:', sections);
    
    // Convert to structured format for placements page consumption
    const content = {};
    sections.forEach(section => {
      try {
        const sectionData = JSON.parse(section.content_data);
        console.log(`Public Placements API - Parsed section ${section.section_name}:`, sectionData);
        
        // Store the section data directly under the section name
        content[section.section_name] = sectionData;
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
      }
    });
    
    console.log('Public Placements API - Final structured content:', content);
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching public placements content:', error);
    return NextResponse.json({ message: 'Error fetching content: ' + error.message }, { status: 500 });
  }
}