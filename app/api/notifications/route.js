export const runtime = 'edge';

/**
 * Edge function for sending notifications to residents
 * This is more efficient than standard serverless functions because it runs closer to users
 * and has faster cold starts
 */
export async function GET(request) {
  // Get user's location from the request
  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  
  // Mock notifications based on location
  // In a real app, this would query a database
  const notifications = [
    {
      id: 1,
      title: "Building Maintenance Notice",
      message: "Elevator maintenance scheduled for June 10th, 2025.",
      date: "2025-06-01",
      priority: "medium"
    },
    {
      id: 2,
      title: "Community Meeting",
      message: "Annual General Meeting will be held on July 15th, 2025.",
      date: "2025-06-15",
      priority: "high"
    }
  ];
  
  // Return notifications as JSON with optimized headers
  return new Response(JSON.stringify(notifications), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=60, s-maxage=60',
      'X-Location': ip, // For demonstration
    }
  });
} 