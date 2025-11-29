import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import PageContent from '../../../../lib/models/PageContent';

export const dynamic = 'force-dynamic';

// GET - Get content for a specific page path
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');

    if (!path) {
      return NextResponse.json(
        { success: false, message: 'Path parameter is required' },
        { status: 400 }
      );
    }

    const page = await PageContent.findOne({ 
      path: path.toLowerCase(),
      published: true 
    });
    
    if (!page) {
      return NextResponse.json(
        { success: false, message: 'Page not found or not published' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: page.content
    });
  } catch (error) {
    console.error('Error fetching page content:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

