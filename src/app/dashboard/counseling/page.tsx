'use client'

import { useState } from 'react'

const upcomingSessions = [
  { topic: 'Career Guidance', counselor: 'Dr. Adebayo O.', date: 'Aug 15, 2026', time: '10:00 AM', type: 'Career' },
  { topic: 'Study Abroad Orientation', counselor: 'Mrs. Johnson K.', date: 'Aug 20, 2026', time: '2:00 PM', type: 'Study Abroad' },
]

const pastSessions = [
  { topic: 'Academic Planning', counselor: 'Dr. Adebayo O.', date: 'Jul 10, 2026', notes: 'Discussed course selection for next semester.' },
  { topic: 'Personal Development', counselor: 'Mr. Emeka C.', date: 'Jun 25, 2026', notes: 'Reviewed study habits and time management strategies.' },
]

export default function CounselingPage() {
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">💬 Counseling & Mentoring</h1>
        <p className="text-gray-500 mt-1">Book sessions, view upcoming appointments, and get guidance</p>
      </header>

      {/* Upcoming Sessions */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📅 Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingSessions.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex items-start justify-between mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{s.type}</span>
                <span className="text-sm text-gray-400">{s.time}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{s.topic}</h3>
              <p className="text-sm text-gray-500 mb-1">👤 {s.counselor}</p>
              <p className="text-sm text-gray-500">📆 {s.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Request New Session */}
      <button onClick={() => { setShowForm(!showForm); setSubmitted(false) }}
        className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition shadow-md mb-6">
        {showForm ? 'Close' : '+ Request New Session'}
      </button>

      {showForm && !submitted && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-10 animate-slide-up">
          <h3 className="text-lg font-bold text-gray-900 mb-4">New Counseling Request</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
                <option>Academic Counseling</option>
                <option>Career Guidance</option>
                <option>Personal Development</option>
                <option>Study Abroad</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
              <textarea rows={3} placeholder="Tell us what you'd like to discuss..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none" />
            </div>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition"
              onClick={() => setSubmitted(true)}>
              Submit Request
            </button>
          </div>
        </div>
      )}

      {submitted && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10 animate-slide-up">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="font-bold text-green-800">Session Requested Successfully!</p>
              <p className="text-sm text-green-600">A counselor will be assigned and you&apos;ll receive a confirmation email shortly.</p>
            </div>
          </div>
        </div>
      )}

      {/* Past Sessions */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">📜 Past Sessions</h2>
        <div className="space-y-4">
          {pastSessions.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{s.topic}</h3>
                <span className="text-sm text-gray-400">{s.date}</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">👤 {s.counselor}</p>
              <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 mt-2">📝 {s.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
