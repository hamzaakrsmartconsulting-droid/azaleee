import { NextResponse } from 'next/server';
import { executeQuery } from '../../../../../lib/cmsDatabase';

// Get fiscalité content
export async function GET() {
  try {
    const sections = await executeQuery(
      'SELECT * FROM cms_content WHERE page_slug = ? ORDER BY section_name',
      ['fiscalite']
    );
    
    return NextResponse.json(sections);
  } catch (error) {
    console.error('Error fetching fiscalité content:', error);
    return NextResponse.json({ message: 'Error fetching content' }, { status: 500 });
  }
}

// Save fiscalité content
export async function POST(request) {
  try {
    const { section, data } = await request.json();
    
    console.log('CMS Fiscalité Save API - Section:', section);
    console.log('CMS Fiscalité Save API - Data:', data);
    
    // Flatten the content structure to match fiscalité page expectations
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
    
    console.log('CMS Fiscalité Save API - Flattened data:', flattenedData);
    
    // Insert or update the section content
    const result = await executeQuery(`
      INSERT INTO cms_content (page_slug, section_name, content_type, content_data, is_published, created_by)
      VALUES (?, ?, 'json', ?, true, 1)
      ON DUPLICATE KEY UPDATE
      content_data = VALUES(content_data),
      is_published = true,
      updated_at = CURRENT_TIMESTAMP
    `, ['fiscalite', section, JSON.stringify(flattenedData)]);
    
    console.log('CMS Fiscalité Save API - Database result:', result);
    
    return NextResponse.json({ message: 'Fiscalité content saved successfully', section, data: flattenedData });
  } catch (error) {
    console.error('Error saving fiscalité content:', error);
    return NextResponse.json({ message: 'Error saving content: ' + error.message }, { status: 500 });
  }
}

// Delete fiscalité section
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');
    
    if (!section) {
      return NextResponse.json({ message: 'Section parameter required' }, { status: 400 });
    }
    
    await executeQuery(
      'DELETE FROM cms_content WHERE page_slug = ? AND section_name = ?',
      ['fiscalite', section]
    );
    
    return NextResponse.json({ message: 'Fiscalité section deleted successfully' });
  } catch (error) {
    console.error('Error deleting fiscalité section:', error);
    return NextResponse.json({ message: 'Error deleting section' }, { status: 500 });
  }
}
