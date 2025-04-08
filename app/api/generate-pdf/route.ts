import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Mock PDF content - in a real app, you would generate a proper PDF
    const mockPdf = Buffer.from('Mock PDF Content');
    
    return new NextResponse(mockPdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="strata-document.pdf"'
      },
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
} 