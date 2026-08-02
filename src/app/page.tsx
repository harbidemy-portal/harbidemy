'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CheckCircle, ArrowRight, BookOpen, Users, GraduationCap, Laptop, Building2, TrendingUp, Sparkles, Target, Award } from 'lucide-react'

// Content Data
const heroWords = ['Schools', 'Students', 'Futures', 'Excellence']

const services = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "School Management",
    desc: "Comprehensive administration support, policy formulation, accreditation guidance, and staff recruitment.",
    image: "/images/admin.jpg"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Student Mentoring",
    desc: "Record management, academic monitoring, personalized counseling, and career guidance.",
    image: "/images/mentoring.jpg"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Examination Success",
    desc: "WAEC, NECO, JAMB/UTME preparation, mock exams, and advanced study techniques.",
    image: "/images/cbt.jpg"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Admission Services",
    desc: "Seamless Nigeria & international admissions, visa guidance, and scholarship support.",
    image: "/images/admissions.jpg"
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Educational Tech",
    desc: "State-of-the-art school software, CBT solutions, and digital result processing systems.",
    image: "/images/hero.jpg"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "EduCare Consultancy",
    desc: "Educational planning, curriculum development, research, and teacher professional development.",
    image: "/images/educare.jpg"
  },
]

const galleryImages = [
  { url: "/images/hero.jpg", span: "col-span-1 row-span-2" },
  { url: "/images/mentoring.jpg", span: "col-span-2 row-span-1" },
  { url: "/images/educare.jpg", span: "col-span-1 row-span-1" },
  { url: "/images/cbt.jpg", span: "col-span-1 row-span-1" },
]

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  
  // Setup Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false }, [Autoplay({ delay: 4000, stopOnInteraction: true })])

  // Word Animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-indigo-900/80 backdrop-blur-sm" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-400 font-semibold text-sm mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Welcome to the Future of Education
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              HARBIDEMY <span className="text-yellow-400">Portal</span>
            </h1>
            
            <div className="text-3xl md:text-5xl font-bold text-white mb-8 h-16 md:h-20 flex items-center">
              <span className="mr-3">Empowering</span>
              <div className="relative inline-block overflow-hidden h-full flex-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute text-blue-300 font-black"
                  >
                    {heroWords[currentWord]}.
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-xl leading-relaxed">
              Your automated, self-service educational management platform. Access CBT prep, track admissions, request counseling, and manage your institution with professional ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/login" className="flex items-center justify-center gap-2 bg-yellow-400 text-blue-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl shadow-yellow-400/20 group">
                Student Login
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/login?role=admin" className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-md">
                Admin Portal
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/admissions.jpg" 
                alt="Student studying" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-8">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-white w-full">
                  <div className="flex items-center gap-4 mb-2">
                    <Award className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h3 className="font-bold text-lg">Top-Tier Mentoring</h3>
                      <p className="text-sm text-blue-100">Guiding students to global success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES CAROUSEL */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Premium Services</h3>
          </motion.div>
          
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition" onClick={() => emblaApi?.scrollPrev()}>
              ←
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition" onClick={() => emblaApi?.scrollNext()}>
              →
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative h-[450px] rounded-3xl overflow-hidden group shadow-xl"
                  >
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-blue-950/95" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="w-14 h-14 bg-yellow-400 text-blue-950 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">{service.title}</h4>
                      <p className="text-blue-100 leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {service.desc}
                      </p>
                      <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-0 h-full bg-yellow-400 group-hover:w-full transition-all duration-500 delay-100" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PICTORIAL SHOWCASE */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-yellow-400 tracking-widest uppercase mb-2">Professionals in Action</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">We deliver excellence across all educational fields.</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-1">Experienced Consultants</h4>
                  <p className="text-gray-400">Our team consists of veterans in school administration, teaching, and policy making.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-1">Modern Technology</h4>
                  <p className="text-gray-400">We integrate the latest ed-tech solutions to streamline school processes and exams.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-1">Proven Results</h4>
                  <p className="text-gray-400">Consistent track record of improving student performance and school accreditation.</p>
                </div>
              </div>
            </div>
            
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition">
              Partner With Us
            </Link>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[600px]">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-3xl overflow-hidden ${img.span} group`}
              >
                <img src={img.url} alt={`Gallery ${i}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-900" />
              </div>
              <span className="text-2xl font-extrabold text-blue-950">HARBIDEMY</span>
            </div>
            <p className="text-gray-500 max-w-sm mx-auto md:mx-0">
              Your Trusted Partner in Educational Excellence. Shaping futures and inspiring success globally.
            </p>
          </div>
          <div className="md:text-right md:col-span-2 flex flex-col justify-end">
            <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-6 font-semibold text-gray-600">
              <Link href="#" className="hover:text-blue-600 transition">About Us</Link>
              <Link href="#" className="hover:text-blue-600 transition">Services</Link>
              <Link href="/login" className="hover:text-blue-600 transition">Portal Login</Link>
              <Link href="/signup" className="hover:text-blue-600 transition">Register</Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2026 Harbidemy School Management Services. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      
    </main>
  )
}
