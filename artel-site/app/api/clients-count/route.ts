import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export async function GET() {
  try {
    const result = await pool.query('SELECT COUNT(*) FROM leads')
    const count = parseInt(result.rows[0].count, 10)
    return NextResponse.json({ count })
  } catch (err) {
    console.error('DB error:', err)
    return NextResponse.json({ count: 0 }, { status: 500 })
  }
}
