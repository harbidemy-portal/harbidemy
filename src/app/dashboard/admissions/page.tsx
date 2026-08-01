'use client'

import { useState } from 'react'

const nigeriaAdmissions = [
  { type: 'University', institution: 'University of Lagos', course: 'Computer Science', status: 'In Progress', statusColor: 'bg-yellow-100 text-yellow-700' },
  { type: 'Polytechnic', institution: 'Yaba College of Technology', course: 'Engineering', status: 'Approved', statusColor: 'bg-green-100 text-green-700' },
  { type: 'College of Education', institution: 'FCE Akoka', course: 'Mathematics Education', status: 'Pending', statusColor: 'bg-gray-100 text-gray-600' },
]

const intlAdmissions = [
  { type: 'Undergraduate', institution: 'University of Manchester', course: 'Data Science', status: 'Application Sent', statusColor: 'bg-blue-100 text-blue-700' },
  { type: 'Postgraduate', institution: 'University of Toronto', course: 'MSc Computer Science', status: 'Pending', statusColor: 'bg-gray-100 text-gray-600' },
]

const timeline = [
  { step: 'Application Submitted', done: true },
  { step: 'Documents Uploaded', done: true },
  { step: 'Document Verification', done: false },
  { step: 'Admission Decision', done: false },
  { step: 'Acceptance & Registration', done: false },
]

export default function AdmissionsPage() {
  const [tab, setTab] = useState<'nigeria' | 'international'>('nigeria')
  const [showForm, setShowForm] = useState(false)

  const admissions = tab === 'nigeria' ? nigeriaAdmissions : intlAdmissions

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">🎓 Admissions Tracking</h1>
        <p className="text-gray-500 mt-1">Monitor your admission applications and progress</p>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        <button onClick={() => setTab('nigeria')}
          className={`px-6 py-3 rounded-xl font-semibold transition ${tab === 'nigeria' ? 'bg-blue-900 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
          🇳🇬 Nigeria Admissions
        </button>
        <button onClick={() => setTab('international')}
          className={`px-6 py-3 rounded-xl font-semibold transition ${tab === 'international' ? 'bg-blue-900 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
          🌍 International Admissions
        </button>
      </div>

      {/* Admission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {admissions.map((a, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{a.type}</span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${a.statusColor}`}>{a.status}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{a.institution}</h3>
            <p className="text-sm text-gray-500">{a.course}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">📍 Application Progress</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-center gap-3 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${t.done ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {t.done ? '✓' : i + 1}
              </div>
              <span className={`text-sm font-medium ${t.done ? 'text-gray-900' : 'text-gray-400'}`}>{t.step}</span>
              {i < timeline.length - 1 && <div className={`hidden md:block flex-1 h-0.5 ${t.done ? 'bg-green-400' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>
      </div>

      {/* Apply Now */}
      <button onClick={() => setShowForm(!showForm)}
        className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition shadow-md">
        {showForm ? 'Close Form' : '+ Apply for New Admission'}
      </button>

      {showForm && (
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-slide-up">
          <h3 className="text-lg font-bold text-gray-900 mb-4">New Admission Application</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Institution Name" className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
            <input placeholder="Course / Program" className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
            <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
              <option>University</option>
              <option>Polytechnic</option>
              <option>College of Education</option>
              <option>International</option>
            </select>
            <input type="file" className="px-4 py-3 border border-gray-200 rounded-xl text-gray-600" />
          </div>
          <button className="mt-4 bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition" onClick={() => { setShowForm(false); alert('Application submitted successfully!') }}>
            Submit Application
          </button>
        </div>
      )}
    </div>
  )
}
