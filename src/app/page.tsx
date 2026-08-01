import Link from "next/link";

const services = [
  { icon: "🏫", title: "School Management", desc: "Administration support, policy, accreditation, ICT transformation, and staff recruitment." },
  { icon: "👨‍🎓", title: "Student Management", desc: "Record management, academic monitoring, counseling, career guidance, and attendance tracking." },
  { icon: "🎯", title: "Examination Success", desc: "WAEC, NECO, JAMB/UTME prep, mock exams, CBT practice, and study techniques." },
  { icon: "🎓", title: "Admission Services", desc: "Nigeria & international admissions, visa guidance, scholarship support, and course changes." },
  { icon: "💻", title: "Educational Technology", desc: "School software, CBT solutions, e-learning platforms, and digital result processing." },
  { icon: "🌍", title: "Consultancy (EduCare)", desc: "Educational planning, curriculum development, research, and teacher professional development." },
];

const reasons = [
  "Experienced educational consultants",
  "Personalized student support",
  "Reliable admission processing",
  "Proven examination success strategies",
  "Professional school management solutions",
  "Local and international opportunities",
  "Affordable and quality services",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl max-w-3xl w-full animate-fade-in">
          <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
            <svg className="w-10 h-10 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            HARBIDEMY <span className="text-yellow-400">Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-3">
            Empowering Schools. Inspiring Students. Building Successful Futures.
          </p>
          <p className="text-blue-200/80 text-base mb-10 max-w-lg mx-auto">
            Your automated, self-service educational management platform. Access CBT prep, track admissions, request counseling, and more — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              Student Login
            </Link>
            <Link href="/login?role=admin" className="bg-white/10 text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
              Admin Portal
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive solutions tailored to schools, parents, students, and educational institutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Why Choose HARBIDEMY?</h2>
            <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full" />
            <p className="text-blue-200 text-lg mb-8">Partnering with us means choosing excellence, dedication, and measurable success.</p>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400 text-xl">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-3xl p-10 border border-yellow-400/20 backdrop-blur-sm">
              <blockquote className="text-2xl font-semibold text-white italic leading-relaxed">
                &ldquo;Managing Schools, Shaping Futures, Inspiring Success.&rdquo;
              </blockquote>
              <p className="text-yellow-400 mt-4 font-medium">— Our Motto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-2">HARBIDEMY <span className="text-yellow-400">School Management Services</span></p>
          <p className="mb-6">Your Trusted Partner in Educational Excellence.</p>
          <p className="text-sm">&copy; 2026 Harbidemy School Management Services. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
