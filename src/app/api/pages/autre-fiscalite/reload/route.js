import { NextResponse } from 'next/server';

// Reload autre-fiscalite content
export async function POST() {
  try {
    // This endpoint can be used to trigger a reload of the content
    // For now, we'll just return a success response
    return NextResponse.json({ 
      success: true, 
      message: 'Content reload triggered',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error reloading autre-fiscalite content:', error);
    return NextResponse.json({ error: 'Failed to reload content' }, { status: 500 });
  }
}
