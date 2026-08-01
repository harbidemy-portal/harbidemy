'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function SettingsPage() {
  const { user } = useAuth()
  const [saved, setSaved] = useState(false)
  const [emailNotif, setEmailNotif] = useState(true)
  const [smsNotif, setSmsNotif] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">⚙️ Settings</h1>
        <p className="text-gray-500 mt-1">Manage your profile and notification preferences</p>
      </header>

      {saved && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3 animate-slide-up">
          <span className="text-xl">✅</span>
          <p className="font-medium text-green-800">Changes saved successfully!</p>
        </div>
      )}

      {/* Profile Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">👤 Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" value={user?.email || ''} disabled
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" placeholder="+234 800 000 0000"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
            <input type="text" placeholder="Enter your school name"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class / Level</label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
              <option>SS1</option>
              <option>SS2</option>
              <option>SS3</option>
              <option>University Year 1</option>
              <option>University Year 2</option>
              <option>University Year 3</option>
              <option>University Year 4</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State of Origin</label>
            <input type="text" placeholder="e.g. Lagos"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">🔔 Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive updates and reminders via email</p>
            </div>
            <button onClick={() => setEmailNotif(!emailNotif)}
              className={`w-12 h-7 rounded-full transition-colors relative ${emailNotif ? 'bg-blue-900' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-sm ${emailNotif ? 'right-1' : 'left-1'}`} />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p className="font-medium text-gray-900">SMS Notifications</p>
              <p className="text-sm text-gray-500">Receive important alerts via text message</p>
            </div>
            <button onClick={() => setSmsNotif(!smsNotif)}
              className={`w-12 h-7 rounded-full transition-colors relative ${smsNotif ? 'bg-blue-900' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-sm ${smsNotif ? 'right-1' : 'left-1'}`} />
            </button>
          </div>
        </div>
      </div>

      <button onClick={handleSave}
        className="bg-blue-900 text-white px-10 py-3 rounded-xl font-bold hover:bg-blue-800 transition shadow-md">
        Save Changes
      </button>
    </div>
  )
}
