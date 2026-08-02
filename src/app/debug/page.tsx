'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Debug() {
  const [status, setStatus] = useState('Checking...')
  const [url, setUrl] = useState('')

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    setUrl(supabaseUrl || 'NOT SET ❌')

    if (!supabaseUrl) {
      setStatus('❌ NEXT_PUBLIC_SUPABASE_URL is not set in Vercel environment variables!')
      return
    }

    supabase.from('_dummy_').select('*').limit(1).then(({ error }) => {
      if (error?.message?.includes('fetch') || error?.message?.includes('network')) {
        setStatus('❌ Cannot reach Supabase — project may be PAUSED. Go to supabase.com and click "Resume Project".')
      } else if (error?.message?.includes('relation') || error?.message?.includes('does not exist')) {
        setStatus('✅ Supabase is connected and responding!')
      } else if (error) {
        setStatus(`⚠️ Supabase responded with: ${error.message}`)
      } else {
        setStatus('✅ Supabase is connected and responding!')
      }
    })
  }, [])

  return (
    <div style={{ fontFamily: 'monospace', padding: 40, background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#facc15' }}>🔧 Harbidemy — Supabase Diagnostics</h1>
      <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
      <p><strong>Supabase URL:</strong> {url}</p>
      <p><strong>Connection Status:</strong> {status}</p>
      <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
      <p style={{ color: '#94a3b8', fontSize: 14 }}>
        If the project is paused: Go to <a href="https://supabase.com" style={{ color: '#facc15' }}>supabase.com</a> → your project → click the green "Resume Project" button.
      </p>
    </div>
  )
}
