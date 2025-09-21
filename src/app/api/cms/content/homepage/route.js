import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../../lib/cmsDatabase';

// Get homepage content
export async function GET() {
  try {
    const sections = await executeQuery(
      'SELECT * FROM cms_content WHERE page_slug = ? ORDER BY section_name',
      ['homepage']
    );
    
    return NextResponse.json(sections);
  } catch (error) {
    console.error('Error fetching homepage content:', error);
    return NextResponse.json({ message: 'Error fetching content' }, { status: 500 });
  }
}

// Save homepage content
export async function POST(request) {
  try {
    const { section, data } = await request.json();
    
    console.log('CMS Save API - Section:', section);
    console.log('CMS Save API - Data:', data);
    
    // Flatten the content structure to match homepage expectations
    let flattenedData = data;
    if (typeof data === 'object' && data !== null) {
      // If it's a nested object, flatten it
      flattenedData = {};
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object' && data[key] !== null && !Array.isArray(data[key])) {
          // If it's a nested object, flatten it further
          Object.keys(data[key]).forEach(subKey => {
            flattenedData[subKey] = data[key][subKey];
          });
        } else {
          // If it's a primitive or array, keep it as is
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
    `, ['homepage', section, JSON.stringify(flattenedData)]);
    
    console.log('CMS Save API - Database result:', result);
    
        // Note: SSE broadcasting disabled to prevent server crashes
        // Real-time updates now handled via polling on the homepage
    
    return NextResponse.json({ message: 'Content saved successfully', section, data: flattenedData });
  } catch (error) {
    console.error('Error saving homepage content:', error);
    return NextResponse.json({ message: 'Error saving content: ' + error.message }, { status: 500 });
  }
}

// Delete homepage section
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');
    
    if (!section) {
      return NextResponse.json({ message: 'Section parameter required' }, { status: 400 });
    }
    
    await executeQuery(
      'DELETE FROM cms_content WHERE page_slug = ? AND section_name = ?',
      ['homepage', section]
    );
    
    return NextResponse.json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error deleting homepage section:', error);
    return NextResponse.json({ message: 'Error deleting section' }, { status: 500 });
  }
}
