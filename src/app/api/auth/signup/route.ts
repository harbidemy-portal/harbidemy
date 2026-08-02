import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    // Safely remove spaces or hidden characters like zero-width spaces
    const cleanUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/[\s\u200B-\u200D\uFEFF]/g, '')
    const cleanKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').replace(/[\s\u200B-\u200D\uFEFF]/g, '')

    if (!cleanUrl || !cleanKey) {
      return NextResponse.json({ error: 'Server configuration error: missing Supabase credentials.' }, { status: 500 })
    }

    const supabase = createClient(cleanUrl, cleanKey, {
      auth: { persistSession: false }
    })

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Signup failed. Please try again.' },
        { status: error.status || 400 }
      )
    }

    return NextResponse.json({ user: data.user, session: data.session })
  } catch (err: any) {
    return NextResponse.json({ error: `Server error: ${err.message}` }, { status: 500 })
  }
}
