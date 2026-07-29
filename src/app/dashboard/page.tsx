import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-900">
          HARBIDEMY <span className="font-light text-gray-500">Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">Welcome, Student</div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition">
            Sign Out
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
          <ul className="flex flex-col py-6">
            <li className="px-6 py-3 bg-blue-50 border-r-4 border-blue-900 text-blue-900 font-medium cursor-pointer">
              Overview
            </li>
            <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-900 cursor-pointer">
              CBT Practice
            </li>
            <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-900 cursor-pointer">
              Admissions Tracking
            </li>
            <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-900 cursor-pointer">
              Counseling Requests
            </li>
            <li className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-900 cursor-pointer">
              Settings
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-600 mt-1">Track your progress and access educational services.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">CBT Average</h3>
              <div className="text-3xl font-bold text-gray-900 mt-2">78%</div>
              <div className="text-green-500 text-sm mt-2 font-medium">↑ 4% from last week</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Admission Status</h3>
              <div className="text-xl font-bold text-blue-600 mt-2">Application Received</div>
              <div className="text-gray-500 text-sm mt-2">Pending Document Verification</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Next Session</h3>
              <div className="text-xl font-bold text-gray-900 mt-2">Career Mentoring</div>
              <div className="text-gray-500 text-sm mt-2">Oct 12, 10:00 AM</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Automated Action Items</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-800">Upload your O-Level results for admission processing</span>
                </div>
                <button className="text-sm font-medium text-yellow-700 hover:text-yellow-800">Complete Now &rarr;</button>
              </li>
              <li className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-gray-800">Take the weekly JAMB mock test</span>
                </div>
                <button className="text-sm font-medium text-blue-700 hover:text-blue-800">Start Test &rarr;</button>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
