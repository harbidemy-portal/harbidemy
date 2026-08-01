'use client'

import { useState } from 'react'

const exams = [
  { name: 'WAEC', subjects: 9, time: '2h 30m', color: 'bg-blue-500', desc: 'West African Examinations Council' },
  { name: 'NECO', subjects: 9, time: '2h 30m', color: 'bg-green-500', desc: 'National Examinations Council' },
  { name: 'JAMB/UTME', subjects: 4, time: '2h 00m', color: 'bg-purple-500', desc: 'Joint Admissions & Matriculation Board' },
  { name: 'Cambridge', subjects: 6, time: '3h 00m', color: 'bg-orange-500', desc: 'Cambridge International Examinations' },
]

const recentResults = [
  { exam: 'JAMB Mock', subject: 'English Language', score: 72, total: 100, date: 'Jul 28, 2026' },
  { exam: 'JAMB Mock', subject: 'Mathematics', score: 68, total: 100, date: 'Jul 28, 2026' },
  { exam: 'WAEC Mock', subject: 'Physics', score: 81, total: 100, date: 'Jul 25, 2026' },
  { exam: 'WAEC Mock', subject: 'Chemistry', score: 75, total: 100, date: 'Jul 25, 2026' },
  { exam: 'NECO Mock', subject: 'Biology', score: 88, total: 100, date: 'Jul 22, 2026' },
]

export default function CBTPage() {
  const [started, setStarted] = useState<string | null>(null)

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">📝 CBT Practice</h1>
        <p className="text-gray-500 mt-1">Prepare for your exams with interactive computer-based tests</p>
      </header>

      {/* Exam Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {exams.map((exam) => (
          <div key={exam.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exam.name}</h3>
                <p className="text-sm text-gray-500">{exam.desc}</p>
              </div>
              <div className={`${exam.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>AVAILABLE</div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <span>📚 {exam.subjects} subjects</span>
              <span>⏱️ {exam.time} per session</span>
            </div>
            <button onClick={() => setStarted(exam.name)}
              className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition shadow-sm">
              {started === exam.name ? '✅ Practice Started!' : 'Start Practice'}
            </button>
          </div>
        ))}
      </div>

      {/* Recent Results */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">📈 Recent Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-100">
                <th className="pb-3 text-sm font-semibold text-gray-500">Exam</th>
                <th className="pb-3 text-sm font-semibold text-gray-500">Subject</th>
                <th className="pb-3 text-sm font-semibold text-gray-500">Score</th>
                <th className="pb-3 text-sm font-semibold text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentResults.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="py-4 font-medium text-gray-900">{r.exam}</td>
                  <td className="py-4 text-gray-600">{r.subject}</td>
                  <td className="py-4">
                    <span className={`font-bold ${r.score >= 75 ? 'text-green-600' : r.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {r.score}/{r.total}
                    </span>
                  </td>
                  <td className="py-4 text-gray-500 text-sm">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
