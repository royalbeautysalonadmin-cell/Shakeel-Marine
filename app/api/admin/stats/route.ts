import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import { Quote } from '@/lib/models/Quote';
import { Contact } from '@/lib/models/Contact';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const auth = await requireAuth(request);
  if (auth instanceof NextResponse) return auth;

  try {
    await connectDB();

    const [totalQuotes, newQuotes, totalContacts, newContacts, recentQuotes, recentContacts] = await Promise.all([
      Quote.countDocuments(),
      Quote.countDocuments({ status: 'new' }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'new' }),
      Quote.find().sort({ createdAt: -1 }).limit(5).lean(),
      Contact.find().sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    return NextResponse.json({
      totalQuotes,
      newQuotes,
      totalContacts,
      newContacts,
      recentQuotes,
      recentContacts,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
