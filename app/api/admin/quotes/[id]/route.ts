import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Quote } from '@/lib/models/Quote';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  try {
    await connectDB();
    const { id } = await params;
    const quote = await Quote.findById(id).lean();
    if (!quote) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(quote);
  } catch (error) {
    console.error('Quote fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch quote' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const quote = await Quote.findByIdAndUpdate(id, body, { new: true }).lean();
    if (!quote) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(quote);
  } catch (error) {
    console.error('Quote update error:', error);
    return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  try {
    await connectDB();
    const { id } = await params;
    const quote = await Quote.findByIdAndDelete(id);
    if (!quote) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote delete error:', error);
    return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 });
  }
}
