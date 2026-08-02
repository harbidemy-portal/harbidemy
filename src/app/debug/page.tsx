'use client'

import { useEffect, useState } from 'react'

export default function Debug() {
  const [results, setResults] = useState<string[]>(['Running diagnostics...'])

  useEffect(() => {
    const run = async () => {
      const logs: string[] = []
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      logs.push(`📌 SUPABASE_URL: ${url ? url : '❌ NOT SET'}`)
      logs.push(`📌 ANON_KEY: ${key ? key.slice(0, 30) + '...' : '❌ NOT SET'}`)

      if (!url || !key) {
        setResults([...logs, '❌ STOP: Environment variables are missing on Vercel!'])
        return
      }

      // Test 1: raw fetch to supabase health
      try {
        logs.push(`\n🔍 Test 1: Pinging Supabase REST endpoint...`)
        const res = await fetch(`${url}/rest/v1/`, {
          headers: {
            'apikey': key,
            'Authorization': `Bearer ${key}`
          }
        })
        logs.push(`✅ REST responded: HTTP ${res.status}`)
      } catch (e: any) {
        logs.push(`❌ REST fetch failed: ${e.message}`)
      }

      // Test 2: raw fetch to supabase auth health
      try {
        logs.push(`\n🔍 Test 2: Pinging Supabase Auth endpoint...`)
        const res = await fetch(`${url}/auth/v1/health`, {
          headers: { 'apikey': key }
        })
        const text = await res.text()
        logs.push(`✅ Auth responded: HTTP ${res.status} — ${text.slice(0, 100)}`)
      } catch (e: any) {
        logs.push(`❌ Auth fetch failed: ${e.message}`)
      }

      // Test 3: Attempt actual signup
      try {
        logs.push(`\n🔍 Test 3: Attempting signup call...`)
        const res = await fetch(`${url}/auth/v1/signup`, {
          method: 'POST',
          headers: {
            'apikey': key,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: 'test-debug@test.com', password: 'test123456' })
        })
        const json = await res.json()
        logs.push(`✅ Signup call responded: HTTP ${res.status}`)
        logs.push(`   Response: ${JSON.stringify(json).slice(0, 200)}`)
      } catch (e: any) {
        logs.push(`❌ Signup call failed: ${e.message}`)
      }

      setResults(logs)
    }

    run()
  }, [])

  return (
    <div style={{ fontFamily: 'monospace', padding: 40, background: '#0f172a', color: '#e2e8f0', minHeight: '100vh', whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
      <h1 style={{ color: '#facc15', marginBottom: 24 }}>🔧 Harbidemy — Deep Diagnostics</h1>
      <hr style={{ borderColor: '#334155', marginBottom: 24 }} />
      {results.map((line, i) => (
        <div key={i} style={{ color: line.startsWith('❌') ? '#f87171' : line.startsWith('✅') ? '#4ade80' : line.startsWith('📌') ? '#93c5fd' : '#e2e8f0' }}>
          {line}
        </div>
      ))}
    </div>
  )
}
