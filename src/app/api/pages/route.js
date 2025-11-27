import { NextResponse } from 'next/server';
import { executeQuery } from '../../../lib/cmsDatabase';

// Generic public API for all pages
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get('page') || 'homepage';
    
    console.log(`Public API - Loading content for page: ${pageSlug}`);
    
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      [pageSlug]
    );
    
    console.log(`Public API - Found ${sections.length} published sections for ${pageSlug}`);
    
    // Convert to flat object format for page consumption
    const content = {};
    sections.forEach(section => {
      try {
        const sectionData = JSON.parse(section.content_data);
        console.log(`Public API - Parsed section ${section.section_name}:`, sectionData);
        
        // Flatten the content to match page structure
        if (typeof sectionData === 'object' && sectionData !== null) {
          Object.keys(sectionData).forEach(key => {
            content[key] = sectionData[key];
          });
        }
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
      }
    });
    
    console.log(`Public API - Final flattened content for ${pageSlug}:`, Object.keys(content));
    
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching public page content:', error);
    return NextResponse.json({ message: 'Error fetching content: ' + error.message }, { status: 500 });
  }
}
