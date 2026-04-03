import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { initDb } from '@/lib/db';

export async function GET() {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    await initDb();
    const { rows } = await sql`SELECT id, name, phone, date, department, status, created_at as "createdAt" FROM appointments ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Failed to fetch appointments:', error);
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    await initDb();
    const { name, phone, date, department } = await request.json();
    const { rows } = await sql`
      INSERT INTO appointments (name, phone, date, department, status)
      VALUES (${name}, ${phone}, ${date}, ${department}, 'pending')
      RETURNING id, name, phone, date, department, status, created_at as "createdAt";
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Failed to create appointment:', error);
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }

  try {
    const { id, status } = await request.json();
    const { rows } = await sql`
      UPDATE appointments SET status = ${status} WHERE id = ${id} RETURNING id, name, phone, date, department, status, created_at as "createdAt";
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Failed to update appointment:', error);
    return NextResponse.json({ error: 'Failed to update appointment' }, { status: 500 });
  }
}
