import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { initDb } from '@/lib/db';

export async function GET() {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    await initDb();
    const { rows } = await sql`SELECT id, name, phone, message, status, created_at as "createdAt" FROM messages ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    await initDb();
    const { name, phone, message } = await request.json();
    const { rows } = await sql`
      INSERT INTO messages (name, phone, message, status)
      VALUES (${name}, ${phone}, ${message}, 'unread')
      RETURNING id, name, phone, message, status, created_at as "createdAt";
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Failed to create message:', error);
    return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id, status } = await request.json();
    const { rows } = await sql`
      UPDATE messages SET status = ${status} WHERE id = ${id} RETURNING id, name, phone, message, status, created_at as "createdAt";
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Failed to update message:', error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}
