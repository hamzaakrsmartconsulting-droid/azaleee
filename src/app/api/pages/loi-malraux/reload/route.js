export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:4028'}/api/pages/loi-malraux`);
    const data = await response.json();
    
    return Response.json({ 
      success: true, 
      message: 'Content reloaded successfully',
      content: data.content 
    });
  } catch (error) {
    console.error('Error reloading loi-malraux content:', error);
    return Response.json({ 
      success: false, 
      error: 'Failed to reload content' 
    }, { status: 500 });
  }
}