import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

export async function GET() {
  try {
    const query = `
      SELECT section_name, content 
      FROM cms_content 
      WHERE page_slug = 'plan-retraite'
    `;
    
    const results = await executeQuery(query);
    
    const content = {};
    results.forEach(row => {
      try {
      content[row.section_name] = JSON.parse(row.content);
      } catch (error) {
        console.error(`Error parsing content for section ${row.section_name}:`, error);
        content[row.section_name] = {};
      }
    });

    return NextResponse.json({
      success: true,
      content
    });
  } catch (error) {
    console.error('Error fetching plan-retraite CMS content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch content'
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { sectionId, content } = await request.json();
    
    if (!sectionId || !content) {
      return NextResponse.json({
        success: false,
        error: 'Missing sectionId or content'
      }, { status: 400 });
    }

    // Check if content already exists
    const checkQuery = `
      SELECT id FROM cms_content 
      WHERE page_slug = 'plan-retraite' AND section_name = ?
    `;
    
    const existing = await executeQuery(checkQuery, [sectionId]);
    
    if (existing.length > 0) {
      // Update existing content
      const updateQuery = `
        UPDATE cms_content 
        SET content = ?, updated_at = NOW()
        WHERE page_slug = 'plan-retraite' AND section_name = ?
      `;
      await executeQuery(updateQuery, [JSON.stringify(content), sectionId]);
    } else {
      // Insert new content
      const insertQuery = `
        INSERT INTO cms_content (page_slug, section_name, content, created_at, updated_at)
        VALUES ('plan-retraite', ?, ?, NOW(), NOW())
      `;
      await executeQuery(insertQuery, [sectionId, JSON.stringify(content)]);
    }

    return NextResponse.json({
      success: true,
      message: 'Content saved successfully'
    });
  } catch (error) {
    console.error('Error saving plan-retraite CMS content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to save content'
    }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sectionId = searchParams.get('sectionId');
    
    if (!sectionId) {
      return NextResponse.json({
        success: false,
        error: 'Missing sectionId'
      }, { status: 400 });
    }

    const query = `
      DELETE FROM cms_content 
      WHERE page_slug = 'plan-retraite' AND section_name = ?
    `;
    
    await executeQuery(query, [sectionId]);

    return NextResponse.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting plan-retraite CMS content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete content'
    }, { status: 500 });
  }
}
