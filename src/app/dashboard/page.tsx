'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

const stats = [
  { label: 'CBT Average', value: '78%', change: '↑ 4% from last week', color: 'text-green-600', bg: 'bg-green-50', icon: '📊' },
  { label: 'Admission Status', value: 'Pending Review', change: 'Documents submitted', color: 'text-blue-600', bg: 'bg-blue-50', icon: '📋' },
  { label: 'Counseling Sessions', value: '2 upcoming', change: 'Next: Aug 15', color: 'text-purple-600', bg: 'bg-purple-50', icon: '💬' },
  { label: 'Exam Prep Progress', value: '65%', change: '12 topics completed', color: 'text-orange-600', bg: 'bg-orange-50', icon: '🎯' },
]

const actions = [
  { text: 'Upload your O-Level results for admission processing', type: 'warning', btn: 'Upload Now', href: '/dashboard/admissions' },
  { text: 'Take the weekly JAMB mock test', type: 'info', btn: 'Start Test', href: '/dashboard/cbt' },
  { text: 'Upcoming career mentoring session — Aug 15, 10:00 AM', type: 'success', btn: 'View Details', href: '/dashboard/counseling' },
]

const quickLinks = [
  { label: 'CBT Practice', href: '/dashboard/cbt', icon: '📝', desc: 'Take mock exams' },
  { label: 'Admissions', href: '/dashboard/admissions', icon: '🎓', desc: 'Track applications' },
  { label: 'Counseling', href: '/dashboard/counseling', icon: '💬', desc: 'Book a session' },
  { label: 'Settings', href: '/dashboard/settings', icon: '⚙️', desc: 'Update profile' },
]

const typeStyles: Record<string, string> = {
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  success: 'bg-green-50 border-green-200 text-green-800',
}

const btnStyles: Record<string, string> = {
  warning: 'text-yellow-700 hover:text-yellow-900',
  info: 'text-blue-700 hover:text-blue-900',
  success: 'text-green-700 hover:text-green-900',
}

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back! 👋</h1>
        <p className="text-gray-500 mt-1">{user?.email} — here&apos;s your overview</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center text-xl mb-4`}>{s.icon}</div>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{s.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
            <p className={`text-sm mt-2 font-medium ${s.color}`}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔔 Automated Action Items</h2>
        <div className="space-y-3">
          {actions.map((a) => (
            <Link key={a.text} href={a.href} className={`flex items-center justify-between p-4 rounded-xl border ${typeStyles[a.type]} hover:shadow-sm transition`}>
              <span className="font-medium">{a.text}</span>
              <span className={`text-sm font-semibold whitespace-nowrap ml-4 ${btnStyles[a.type]}`}>{a.btn} →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Access</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((q) => (
            <Link key={q.label} href={q.href} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all text-center group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{q.icon}</div>
              <p className="font-bold text-gray-900">{q.label}</p>
              <p className="text-sm text-gray-500 mt-1">{q.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
