export async function POST(request) {
  try {
    const formData = await request.formData();
    const unit = formData.get('unit');
    const issueType = formData.get('issueType');
    const description = formData.get('description');
    
    // In a real app, save to database
    console.log("Maintenance request received:", { unit, issueType, description });
    
    // Redirect after form submission
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/maintenance?status=success',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const unit = searchParams.get('unit');
  
  // In a real app, fetch from database
  const mockData = {
    unit,
    requests: [
      { id: 1, date: "2025-03-15", issue: "Leaking tap", status: "Completed" },
      { id: 2, date: "2025-04-01", issue: "Broken light", status: "In Progress" }
    ]
  };
  
  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
