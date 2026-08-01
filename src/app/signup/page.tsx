'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('student')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { signUp } = useAuth()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    const { error } = await signUp(email, password)
    if (error) {
      setError(error)
    } else {
      setSuccess(true)
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
        <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Check Your Email!</h2>
          <p className="text-blue-200 mb-8">We&apos;ve sent a confirmation link to <strong className="text-yellow-400">{email}</strong>. Click the link to activate your account.</p>
          <Link href="/login" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6">
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-3 mb-8 group">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform">
            <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">HARBIDEMY</span>
        </Link>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Create Your Account</h2>
          <p className="text-blue-200 text-center mb-8">Join the Harbidemy community</p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Full Name</label>
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition"
                placeholder="John Doe" />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition"
                placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">I am a...</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition">
                <option value="student" className="bg-blue-900">Student</option>
                <option value="parent" className="bg-blue-900">Parent</option>
                <option value="admin" className="bg-blue-900">School Administrator</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition"
                placeholder="••••••••" />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-2">Confirm Password</label>
              <input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition"
                placeholder="••••••••" />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-400/30 text-red-200 text-sm rounded-lg p-3">{error}</div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-yellow-400 text-blue-900 py-3 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Creating Account...
                </span>
              ) : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-blue-200 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-yellow-400 font-semibold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
