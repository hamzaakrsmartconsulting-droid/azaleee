import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../../lib/cmsDatabase';

// Force reload homepage content (clear any server-side cache)
export async function POST() {
  try {
    console.log('Force reload API - Clearing cache and reloading content...');
    
    // Get fresh content from database
    const sections = await executeQuery(
      'SELECT section_name, content_data FROM cms_content WHERE page_slug = ? AND is_published = true ORDER BY section_name',
      ['homepage']
    );
    
    console.log('Force reload API - Fresh content from DB:', sections);
    
    // Convert to object format
    const content = {};
    sections.forEach(section => {
      try {
        content[section.section_name] = JSON.parse(section.content_data);
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
        content[section.section_name] = {};
      }
    });
    
    console.log('Force reload API - Final content:', content);
    
    return NextResponse.json({ 
      message: 'Content reloaded successfully',
      content,
      timestamp: Date.now(),
      sectionsCount: sections.length
    });
  } catch (error) {
    console.error('Error in force reload API:', error);
    return NextResponse.json({ 
      message: 'Error reloading content: ' + error.message 
    }, { status: 500 });
  }
}
