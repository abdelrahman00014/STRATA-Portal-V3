export const runtime = 'edge';

/**
 * Edge function for demonstrating redirects based on parameters
 * This function shows how to implement different types of redirects
 * using HTTP status codes
 */
export async function GET(request) {
  // Get the redirect type from URL parameters
  const { searchParams } = new URL(request.url);
  const redirectType = searchParams.get('type') || 'temp';
  const destination = searchParams.get('to') || '/maintenance';
  
  // Log the redirect request
  console.log(`Redirect requested: ${redirectType} to ${destination}`);
  
  // Determine the appropriate status code based on redirect type
  let statusCode = 302; // Temporary redirect by default
  
  switch (redirectType) {
    case 'permanent':
      // 301 - Permanent redirect (client should update bookmarks)
      statusCode = 301;
      break;
      
    case 'found':
      // 302 - Found (temporary redirect)
      statusCode = 302;
      break;
      
    case 'see-other':
      // 303 - See Other (redirect to result of POST operation)
      statusCode = 303;
      break;
      
    case 'temporary':
      // 307 - Temporary redirect (preserves HTTP method)
      statusCode = 307;
      break;
      
    case 'permanent-method':
      // 308 - Permanent redirect (preserves HTTP method)
      statusCode = 308;
      break;
      
    default:
      // Default to temporary redirect
      statusCode = 302;
  }
  
  // Create headers for the redirect
  const headers = new Headers();
  headers.set('Location', destination);
  
  // Include explanatory information in the response
  headers.set('X-Redirect-Type', redirectType);
  headers.set('X-Redirect-Info', `HTTP ${statusCode} redirect to ${destination}`);
  
  // Return the redirect response
  return new Response(null, {
    status: statusCode,
    headers
  });
} 