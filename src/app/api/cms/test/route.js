import { NextResponse } from 'next/server';
import { testConnection, initializeCMSTables } from '../../../../lib/cmsDatabase';

// Test CMS functionality
export async function GET() {
  try {
    // Test database connection
    const isConnected = await testConnection();
    if (!isConnected) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'Database connection failed' 
      }, { status: 500 });
    }

    // Initialize tables if needed
    const tablesInitialized = await initializeCMSTables();
    if (!tablesInitialized) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'Failed to initialize CMS tables' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      status: 'success', 
      message: 'CMS is ready and functional',
      database: 'connected',
      tables: 'initialized'
    });
  } catch (error) {
    console.error('CMS test error:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: 'CMS test failed',
      error: error.message 
    }, { status: 500 });
  }
}
