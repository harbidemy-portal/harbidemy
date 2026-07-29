import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl border border-white/20 shadow-2xl max-w-2xl w-full">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          HARBIDEMY <span className="text-yellow-400">Portal</span>
        </h1>
        <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">
          Welcome to the automated, self-service student platform. Access CBT prep, track admissions, and request counseling seamlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Student Login
          </Link>
          <button className="bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full font-bold hover:bg-white/30 transition">
            Admin Portal
          </button>
        </div>
      </div>
      
      <p className="text-white/50 text-sm mt-12">
        &copy; {new Date().getFullYear()} Harbidemy School Management Services.
      </p>
    </main>
  );
}
