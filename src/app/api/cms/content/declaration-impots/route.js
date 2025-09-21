import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

// Get declaration-impots content
export async function GET() {
  try {
    const sections = await executeQuery(
      'SELECT * FROM cms_content WHERE page_slug = ? ORDER BY section_name',
      ['declaration-impots']
    );
    
    return NextResponse.json(sections);
  } catch (error) {
    console.error('Error fetching declaration-impots content:', error);
    return NextResponse.json({ message: 'Error fetching content' }, { status: 500 });
  }
}

// Save declaration-impots content
export async function POST(request) {
  try {
    const { section, data } = await request.json();
    
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
    
    // Insert or update the section content
    const result = await executeQuery(`
      INSERT INTO cms_content (page_slug, section_name, content_type, content_data, is_published, created_by)
      VALUES (?, ?, 'json', ?, true, 1)
      ON DUPLICATE KEY UPDATE
      content_data = VALUES(content_data),
      is_published = true,
      updated_at = CURRENT_TIMESTAMP
    `, ['declaration-impots', section, JSON.stringify(flattenedData)]);
    
    return NextResponse.json({ message: 'Déclaration d\'impôts content saved successfully', section, data: flattenedData });
  } catch (error) {
    console.error('Error saving declaration-impots content:', error);
    return NextResponse.json({ message: 'Error saving content: ' + error.message }, { status: 500 });
  }
}

// Delete declaration-impots section
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');
    
    if (!section) {
      return NextResponse.json({ message: 'Section parameter required' }, { status: 400 });
    }
    
    await executeQuery(
      'DELETE FROM cms_content WHERE page_slug = ? AND section_name = ?',
      ['declaration-impots', section]
    );
    
    return NextResponse.json({ message: 'Déclaration d\'impôts section deleted successfully' });
  } catch (error) {
    console.error('Error deleting declaration-impots section:', error);
    return NextResponse.json({ message: 'Error deleting section' }, { status: 500 });
  }
}
