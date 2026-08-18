import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'shakeelmarine-admin-secret-key-2024';

export interface AdminPayload {
  id: string;
  email: string;
  name: string;
}

export function signToken(payload: AdminPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): AdminPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminPayload;
  } catch {
    return null;
  }
}

export async function getAuthFromRequest(request: NextRequest): Promise<AdminPayload | null> {
  const token = request.cookies.get('admin_token')?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAuth(request: NextRequest): Promise<AdminPayload | NextResponse> {
  const admin = await getAuthFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return admin;
}
