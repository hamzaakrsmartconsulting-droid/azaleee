import { executeQuery } from '@/lib/database';

export async function GET() {
  try {
    // Performance metrics
    const startTime = Date.now();
    
    // Test database connection
    const dbTest = await executeQuery('SELECT 1 as test');
    const dbTime = Date.now() - startTime;
    
    // Memory usage
    const memoryUsage = process.memoryUsage();
    
    // System info
    const systemInfo = {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      uptime: process.uptime(),
      memoryUsage: {
        rss: Math.round(memoryUsage.rss / 1024 / 1024) + ' MB',
        heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024) + ' MB',
        heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024) + ' MB',
        external: Math.round(memoryUsage.external / 1024 / 1024) + ' MB'
      }
    };
    
    // Database performance
    const dbPerformance = {
      connectionTime: dbTime + 'ms',
      status: dbTest ? 'Connected' : 'Error',
      timestamp: new Date().toISOString()
    };
    
    return Response.json({
      success: true,
      performance: {
        system: systemInfo,
        database: dbPerformance,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}























