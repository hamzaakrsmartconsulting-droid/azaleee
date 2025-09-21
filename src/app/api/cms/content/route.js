import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../lib/cmsDatabase';

// Generic CMS API for all pages
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageSlug = searchParams.get('page') || 'homepage';
    
    console.log(`CMS API - Loading content for page: ${pageSlug}`);
    
    const sections = await executeQuery(
      'SELECT * FROM cms_content WHERE page_slug = ? ORDER BY section_name',
      [pageSlug]
    );
    
    console.log(`CMS API - Found ${sections.length} sections for ${pageSlug}`);
    
    return NextResponse.json(sections);
  } catch (error) {
    console.error('Error fetching CMS content:', error);
    return NextResponse.json({ message: 'Error fetching content' }, { status: 500 });
  }
}

// Save content for any page
export async function POST(request) {
  try {
    const { page, section, data } = await request.json();
    
    console.log(`CMS Save API - Page: ${page}, Section: ${section}`);
    console.log('CMS Save API - Data:', data);
    
    // Flatten the content structure
    let flattenedData = data;
    if (typeof data === 'object' && data !== null) {
      flattenedData = {};
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object' && data[key] !== null && !Array.isArray(data[key])) {
          Object.keys(data[key]).forEach(subKey => {
            flattenedData[subKey] = data[key][subKey];
          });
        } else {
          flattenedData[key] = data[key];
        }
      });
    }
    
    console.log('CMS Save API - Flattened data:', flattenedData);
    
    // Insert or update the section content
    const result = await executeQuery(`
      INSERT INTO cms_content (page_slug, section_name, content_type, content_data, is_published, created_by)
      VALUES (?, ?, 'json', ?, true, 1)
      ON DUPLICATE KEY UPDATE
      content_data = VALUES(content_data),
      is_published = true,
      updated_at = CURRENT_TIMESTAMP
    `, [page, section, JSON.stringify(flattenedData)]);
    
    console.log('CMS Save API - Database result:', result);
    
    return NextResponse.json({ 
      message: 'Content saved successfully', 
      page, 
      section, 
      data: flattenedData 
    });
  } catch (error) {
    console.error('Error saving CMS content:', error);
    return NextResponse.json({ message: 'Error saving content: ' + error.message }, { status: 500 });
  }
}

// Delete section for any page
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const section = searchParams.get('section');
    
    if (!page || !section) {
      return NextResponse.json({ message: 'Page and section parameters required' }, { status: 400 });
    }
    
    await executeQuery(
      'DELETE FROM cms_content WHERE page_slug = ? AND section_name = ?',
      [page, section]
    );
    
    return NextResponse.json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error deleting CMS section:', error);
    return NextResponse.json({ message: 'Error deleting section' }, { status: 500 });
  }
}
