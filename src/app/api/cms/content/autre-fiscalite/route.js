import { NextResponse } from 'next/server';
import { executeQuery } from '@/lib/cmsDatabase';

// Get autre-fiscalite content
export async function GET() {
  try {
    const sections = await executeQuery(
      'SELECT section_name, content FROM cms_content WHERE page_name = ? AND is_published = true ORDER BY section_name',
      ['autre-fiscalite']
    );

    const content = {};
    sections.forEach(section => {
      try {
        content[section.section_name] = JSON.parse(section.content);
      } catch (error) {
        console.error(`Error parsing content for section ${section.section_name}:`, error);
        content[section.section_name] = {};
      }
    });

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error fetching autre-fiscalite content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

// Save autre-fiscalite content
export async function POST(request) {
  try {
    const { content } = await request.json();

    if (!content || typeof content !== 'object') {
      return NextResponse.json({ error: 'Invalid content format' }, { status: 400 });
    }

    // Save each section
    for (const [sectionName, sectionContent] of Object.entries(content)) {
      await executeQuery(
        `INSERT INTO cms_content (page_name, section_name, content, is_published, created_at, updated_at) 
         VALUES (?, ?, ?, true, NOW(), NOW())
         ON DUPLICATE KEY UPDATE 
         content = VALUES(content), 
         is_published = true,
         updated_at = NOW()`,
        ['autre-fiscalite', sectionName, JSON.stringify(sectionContent)]
      );
    }

    return NextResponse.json({ success: true, message: 'Content saved successfully' });
  } catch (error) {
    console.error('Error saving autre-fiscalite content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
