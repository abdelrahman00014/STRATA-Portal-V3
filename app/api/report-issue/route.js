export const runtime = 'edge';

// Mock database of reports
const reportDatabase = new Map([
  ['REP123', { 
    status: 'in-progress',
    submitted: '2025-04-05',
    assignedTo: 'Maintenance Team',
    details: {
      unit: '301',
      issueType: 'plumbing',
      description: 'Leaking faucet in master bathroom'
    }
  }],
  ['REP124', {
    status: 'pending',
    submitted: '2025-04-06',
    assignedTo: null,
    details: {
      unit: '205',
      issueType: 'electrical',
      description: 'Flickering lights in the hallway'
    }
  }]
]);

/**
 * GET handler - Look up report status
 * Demonstrates GET request handling with query parameters
 */
export async function GET(request) {
  try {
    // Extract the report ID from the URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Report ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Check if the report exists in our "database"
    if (reportDatabase.has(id)) {
      const reportData = reportDatabase.get(id);
      
      // Return the report data
      return new Response(JSON.stringify({
        id,
        status: reportData.status,
        submitted: reportData.submitted,
        assignedTo: reportData.assignedTo
      }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store' // Don't cache sensitive data
        }
      });
    } else {
      // Report not found
      return new Response(JSON.stringify({ error: 'Report not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error in GET handler:', error);
    
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

/**
 * POST handler - Submit a new report
 * Demonstrates POST request handling with JSON body
 */
export async function POST(request) {
  try {
    // Parse the request body as JSON
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.unit || !data.issueType || !data.description) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Generate a unique report ID (in a real app, this would be from your database)
    const reportId = `REP${Date.now().toString().slice(-6)}`;
    
    // Store the report in our "database"
    reportDatabase.set(reportId, {
      status: 'pending',
      submitted: new Date().toISOString().split('T')[0],
      assignedTo: null,
      details: {
        name: data.name,
        email: data.email,
        unit: data.unit,
        issueType: data.issueType,
        description: data.description,
        urgency: data.urgency
      }
    });
    
    // Return success response with the report ID
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Report submitted successfully',
      reportId
    }), {
      status: 201, // Created
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in POST handler:', error);
    
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 