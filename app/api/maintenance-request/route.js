export const runtime = 'edge';

/**
 * Edge function for processing maintenance requests
 * Uses POST method to receive form data and returns confirmation
 * This handles form submission from the maintenance request page
 */
export async function POST(request) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    
    // Extract fields from the form data
    const unit = formData.get('unit');
    const issueType = formData.get('issueType');
    const description = formData.get('description');
    const priority = formData.get('priority') || 'normal';
    
    // Log the request (would save to database in production)
    console.log({
      unit,
      issueType,
      description,
      priority,
      timestamp: new Date().toISOString(),
    });
    
    // In a real app, we would save this to a database
    // and perhaps send notifications to staff
    
    // Return success response
    return new Response(JSON.stringify({ 
      message: "Maintenance request submitted successfully",
      requestId: `REQ-${Date.now()}`,
      estimatedResponse: "24-48 hours"
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    // Return error response
    return new Response(JSON.stringify({ 
      error: "Failed to process maintenance request",
      details: error.message
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

/**
 * GET method for checking maintenance request status
 * Demonstrates difference between GET and POST
 */
export async function GET(request) {
  // Get request ID from URL parameters
  const { searchParams } = new URL(request.url);
  const requestId = searchParams.get('requestId');
  
  if (!requestId) {
    return new Response(JSON.stringify({ 
      error: "Missing requestId parameter"
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  // In a real app, we would query a database for the status
  // This is just a mock response
  return new Response(JSON.stringify({ 
    requestId,
    status: "in progress",
    lastUpdated: new Date().toISOString(),
    assignedTo: "Maintenance Staff",
    estimatedCompletion: "2025-06-12"
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} 