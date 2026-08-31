import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Quote } from '@/lib/models/Quote';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { fullName, phone, whatsapp, email, country, service, vesselType, vesselDetails, projectDescription, preferredColor, preferredDesign, preferredContactMethod } = body;

    if (!fullName || !phone || !email || !service || !vesselType || !projectDescription || !preferredContactMethod) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const quote = await Quote.create({
      fullName, phone, whatsapp, email, country, service, vesselType, vesselDetails,
      projectDescription, preferredColor, preferredDesign, preferredContactMethod,
    });

    return NextResponse.json({ success: true, id: quote._id }, { status: 201 });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json({ error: 'Failed to submit quote' }, { status: 500 });
  }
}
