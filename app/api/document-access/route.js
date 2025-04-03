export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const documentId = searchParams.get('documentId');
  const userRole = searchParams.get('userRole');
  
  // Check if user has permission to access document
  const hasAccess = userRole === 'committee' || userRole === 'admin';
  
  if (!hasAccess) {
    return new Response(JSON.stringify({ error: 'Access denied' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
  return new Response(JSON.stringify({ 
    documentId,
    accessUrl: `/documents/${documentId}.pdf` 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
