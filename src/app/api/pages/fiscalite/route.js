import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../lib/cmsDatabase';

// Get fiscalité content for public display
export async function GET() {
  try {
    console.log('Public Fiscalité API - Loading content...');
    
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      ['fiscalite']
    );
    
    console.log('Public Fiscalité API - Raw sections from DB:', sections);
    
    // Convert to structured format for fiscalité page consumption
    const content = {};
    sections.forEach(section => {
      try {
        const sectionData = JSON.parse(section.content_data);
        console.log(`Public Fiscalité API - Parsed section ${section.section_name}:`, sectionData);
        
        // Store the section data directly under the section name
        content[section.section_name] = sectionData;
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
      }
    });
    
    console.log('Public Fiscalité API - Final structured content:', content);
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching public fiscalité content:', error);
    return NextResponse.json({ message: 'Error fetching content: ' + error.message }, { status: 500 });
  }
}
