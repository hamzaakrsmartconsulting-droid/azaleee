import { NextResponse } from 'next/server';

// Server-Sent Events endpoint for real-time content updates - DISABLED TO PREVENT CRASHES
export async function GET() {
  // Return a simple response instead of SSE to prevent controller errors
  return new Response(JSON.stringify({ 
    message: 'SSE temporarily disabled - using polling instead',
    timestamp: Date.now()
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
