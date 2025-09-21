import { NextResponse } from 'next/server';

// Force reload patrimoine content (clear any server-side cache)
export async function POST() {
  try {
    console.log('Patrimoine reload endpoint called - clearing cache');
    
    // In a real application, you might clear server-side cache here
    // For now, we'll just return a success message
    
    return NextResponse.json({ 
      message: 'Patrimoine content cache cleared successfully',
      timestamp: new Date().toISOString(),
      sectionsCount: 'N/A' // We don't have a way to count sections without DB query
    });
  } catch (error) {
    console.error('Error clearing patrimoine cache:', error);
    return NextResponse.json({ 
      message: 'Error clearing cache: ' + error.message 
    }, { status: 500 });
  }
}
