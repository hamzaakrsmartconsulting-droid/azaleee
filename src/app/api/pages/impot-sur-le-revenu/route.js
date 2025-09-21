import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

// Get impot-sur-le-revenu content for public display
export async function GET() {
  try {
    console.log('Public Impôt API - Loading content...');
    
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      ['impot-sur-le-revenu']
    );
    
    console.log('Public Impôt API - Raw sections from DB:', sections);
    
    // Convert to structured object format for impot page consumption
    const content = {};
    sections.forEach(section => {
      try {
        const sectionData = JSON.parse(section.content_data);
        console.log(`Public Impôt API - Parsed section ${section.section_name}:`, sectionData);
        
        // Keep the section structure instead of flattening
        content[section.section_name] = sectionData;
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
      }
    });
    
    console.log('Public Impôt API - Final structured content:', content);
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching public impot-sur-le-revenu content:', error);
    return NextResponse.json({ message: 'Error fetching content: ' + error.message }, { status: 500 });
  }
}
