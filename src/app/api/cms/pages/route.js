import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import PageContent from '../../../../lib/models/PageContent';

export const dynamic = 'force-dynamic';

// GET - Get all pages or a specific page
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');

    if (path) {
      // Get specific page
      const page = await PageContent.findOne({ path: path.toLowerCase() });
      
      if (!page) {
        return NextResponse.json(
          { success: false, message: 'Page not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: page
      });
    } else {
      // Get all pages
      const pages = await PageContent.find({})
        .sort({ createdAt: -1 })
        .select('-content'); // Don't send full content in list view

      return NextResponse.json({
        success: true,
        data: pages,
        count: pages.length
      });
    }
  } catch (error) {
    console.error('Error fetching pages:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new page
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { path, title, content, published = true } = body;

    if (!path || !title || !content) {
      return NextResponse.json(
        { success: false, message: 'Path, title, and content are required' },
        { status: 400 }
      );
    }

    // Check if page already exists
    const existing = await PageContent.findOne({ path: path.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { success: false, message: 'Page with this path already exists' },
        { status: 409 }
      );
    }

    const page = new PageContent({
      path: path.toLowerCase(),
      title,
      content,
      published,
      lastModified: new Date()
    });

    await page.save();

    return NextResponse.json({
      success: true,
      message: 'Page created successfully',
      data: page
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

// PUT - Update a page
export async function PUT(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { path, title, content, published } = body;

    if (!path) {
      return NextResponse.json(
        { success: false, message: 'Path is required' },
        { status: 400 }
      );
    }

    const updateData = {
      lastModified: new Date()
    };

    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;
    if (published !== undefined) updateData.published = published;

    const page = await PageContent.findOneAndUpdate(
      { path: path.toLowerCase() },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!page) {
      return NextResponse.json(
        { success: false, message: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Page updated successfully',
      data: page
    });
  } catch (error) {
    console.error('Error updating page:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a page
export async function DELETE(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');

    if (!path) {
      return NextResponse.json(
        { success: false, message: 'Path is required' },
        { status: 400 }
      );
    }

    const page = await PageContent.findOneAndDelete({ path: path.toLowerCase() });

    if (!page) {
      return NextResponse.json(
        { success: false, message: 'Page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Page deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting page:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

