import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Contact } from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const contact = await Contact.create({ name, phone, email, service, message });
    return NextResponse.json({ success: true, id: contact._id }, { status: 201 });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}
