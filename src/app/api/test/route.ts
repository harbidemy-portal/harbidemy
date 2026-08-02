import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const result: any = {
    env: {
      url: supabaseUrl ? `${supabaseUrl.slice(0, 30)}...` : 'MISSING',
      key: supabaseKey ? `${supabaseKey.slice(0, 20)}...` : 'MISSING',
    },
    tests: {}
  }

  // Test connectivity from server-side
  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/auth/v1/health`, {
        headers: { 'apikey': supabaseKey }
      })
      result.tests.auth_health = { status: res.status, ok: res.ok, body: await res.text() }
    } catch (e: any) {
      result.tests.auth_health = { error: e.message }
    }
  }

  return NextResponse.json(result, { status: 200 })
}
