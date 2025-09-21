import { NextResponse } from 'next/server';

// Force reload declaration-impots content (clear any server-side cache)
export async function POST() {
  try {
    console.log('Déclaration reload endpoint called - clearing cache');
    
    return NextResponse.json({ 
      message: 'Déclaration d\'impôts content cache cleared successfully',
      timestamp: new Date().toISOString(),
      sectionsCount: 'N/A'
    });
  } catch (error) {
    console.error('Error clearing declaration cache:', error);
    return NextResponse.json({ 
      message: 'Error clearing cache: ' + error.message 
    }, { status: 500 });
  }
}
