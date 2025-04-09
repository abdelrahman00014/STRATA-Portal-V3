import { config } from '../../config';
import { NextResponse } from 'next/server';

/**
 * API route that demonstrates using environment variables
 * This route is configured to run as a cron job in vercel.json
 */
export async function GET() {
  try {
    // Check if we're in maintenance mode
    if (config.features.maintenanceMode) {
      return NextResponse.json(
        { success: false, message: 'System is in maintenance mode' },
        { status: 503 }
      );
    }

    // Demonstrate accessing environment variables
    const apiInfo = {
      apiUrl: config.apiUrl,
      environment: config.buildInfo.environment,
      notificationsEnabled: config.features.enableNotifications,
      siteName: config.siteName,
    };
    
    // In a real implementation, this would send maintenance reminders
    // using the EMAIL_SERVICE_API_KEY
    
    return NextResponse.json({
      success: true,
      message: 'Maintenance reminder API endpoint',
      timestamp: new Date().toISOString(),
      apiInfo,
      // Don't expose sensitive information like API keys in responses
    });
  } catch (error) {
    console.error('Error in maintenance-reminder API:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
} 