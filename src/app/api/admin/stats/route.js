import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import User from '../../../../lib/models/User';
import PageContent from '../../../../lib/models/PageContent';

export async function GET() {
  try {
    await connectDB();

    // Get total users
    const totalUsers = await User.countDocuments({});

    // Get total pages
    const totalPages = await PageContent.countDocuments({});

    // Get published pages
    const publishedPages = await PageContent.countDocuments({ published: true });

    // Get total content items (pages)
    const totalContentItems = totalPages;

    return NextResponse.json({
      success: true,
      data: {
        totalUsers,
        totalPages,
        publishedPages,
        totalContentItems
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}

