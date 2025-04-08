import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate required fields
    if (!body.visitorName || !body.hostName || !body.visitDate) {
      return NextResponse.json(
        { error: 'Visitor name, host name, and visit date are required' },
        { status: 400 }
      );
    }

    // Here you would typically save to a database
    return NextResponse.json(
      { message: 'Visitor registration successful' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 