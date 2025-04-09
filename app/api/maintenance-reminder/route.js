export const runtime = 'edge';

/**
 * Edge function for sending maintenance reminders
 * This is called by a cron job every Monday at 9am as configured in vercel.json
 * It's ideal for edge functions because it's a scheduled task that benefits from
 * global distribution and minimal cold start times
 */
export async function GET(request) {
  try {
    // Get current date
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    
    // In a real application, we would:
    // 1. Query scheduled maintenance from a database
    // 2. Find all users who need notifications
    // 3. Send emails or push notifications
    
    // For demonstration, we're just logging the execution
    console.log(`Maintenance reminder cron job executed at ${now.toISOString()}`);
    
    // Mock sending notifications
    const notificationsSent = {
      poolMaintenance: {
        date: "2025-06-15",
        recipients: 120,
        message: "Reminder: Pool will be closed for maintenance next week"
      },
      elevatorInspection: {
        date: "2025-06-20",
        recipients: 245,
        message: "Reminder: Elevator inspection scheduled for Friday"
      }
    };
    
    // Return success response
    return new Response(JSON.stringify({ 
      success: true,
      executed: now.toISOString(),
      notificationsSent
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    // Return error response
    return new Response(JSON.stringify({ 
      error: "Failed to process maintenance reminders",
      details: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 