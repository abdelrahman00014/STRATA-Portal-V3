export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const unitSize = parseFloat(searchParams.get('unitSize') || 0);
  const rate = 4.25; // Combined admin and capital works rate
  const levy = unitSize * rate;
  
  return new Response(JSON.stringify({ 
    unitSize, 
    rate, 
    calculatedLevy: levy.toFixed(2) 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
