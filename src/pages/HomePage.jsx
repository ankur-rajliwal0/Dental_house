import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  Phone, 
  CheckCircle2, 
  Calendar, 
  Award, 
  MapPin, 
  Layers, 
  Eye, 
  Heart,
  ChevronDown,
  ChevronUp,
  Smile,
  Zap,
  Check
} from 'lucide-react';
import { CLINIC_INFO, SMILE_DESIGN_DETAILS, SERVICES_LIST, TESTIMONIALS, FAQS } from '../data/dentalData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ClinicTourGallery from '../components/ClinicTourGallery';

export default function HomePage({ setActivePage, onOpenBooking, onOpenQuiz, onOpenSimulator }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Doctor & Location pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                <span>Dr. Priyanka Katewa, B.D.S. (Mahatma Gandhi College)</span>
                <span className="text-cyan-300">•</span>
                <span className="text-slate-600">Jaipur</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-slate-900 leading-[1.12]">
                Architecting Your{' '}
                <span className="shimmer-text">Hollywood Smile</span>{' '}
                With 3D Digital Precision
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <strong>Dental House</strong>, Jaipur’s premier destination for specialized{' '}
                <span className="text-cyan-700 font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">
                  Smile Design Treatment (Smile Makeover)
                </span>
                . We merge cosmetic dental facial aesthetics with ultra-thin porcelain veneers and 100% painless care.
              </p>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-600/25 flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Smile Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenQuiz}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <Smile className="w-4 h-4 text-cyan-600" />
                  <span>Interactive Smile Quiz</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>4.9 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">420+ Jaipur Reviews</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center space-x-1 text-cyan-700 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>2 Visits</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Quick Transformation</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center space-x-1 text-emerald-600 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Painless</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Gentle Local Anesthesia</p>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-300 to-indigo-300 opacity-40 blur-2xl animate-pulse-subtle" />

                {/* Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                  <img
                    src="/images/hero-smile.jpg"
                    alt="Smile Makeover Hero Result"
                    className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Floating badge top right */}
                  <div className="absolute top-4 right-4 animate-float">
                    <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-400 text-cyan-800 text-xs font-bold shadow-md flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Digital Smile Design (DSD)</span>
                    </div>
                  </div>

                  {/* Floating Doctor Profile Pill bottom */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/dr-priyanka.jpg"
                        alt="Dr. Priyanka Katewa"
                        className="w-11 h-11 rounded-full object-cover object-top border-2 border-cyan-500 shadow-sm"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Dr. Priyanka Katewa</p>
                        <p className="text-[10px] text-cyan-700 font-semibold">B.D.S. (Mahatma Gandhi College)</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setActivePage('about')}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                      title="View Doctor Bio"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Floating Aesthetic Card Tag */}
                <div className="absolute -bottom-6 -left-6 hidden sm:block p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xl animate-float-slow">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-[11px]">15+ Year Veneer Longevity</p>
                      <p className="text-[10px] text-slate-500">German E-Max Lithium Disilicate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS COUNTER STRIP ================= */}
      <section className="relative py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CLINIC_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3">
                <span className="text-3xl sm:text-4xl font-outfit font-black bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{stat.label}</p>
                <p className="text-[11px] text-slate-500">{stat.suffix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE SMILE DESIGN SHOWCASE ================= */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>Signature Specialty Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-black text-slate-900">
              Smile Design Treatment (Smile Makeover)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every smile is uniquely crafted by Dr. Priyanka Katewa to match your facial symmetry, lip curvature, and complexion. Experience our interactive before-and-after slider below.
            </p>
          </div>

          {/* Interactive Before & After Slider Box */}
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider onConsultClick={onOpenBooking} />
          </div>

          {/* Interactive Simulator Button Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-50 via-sky-50 to-indigo-50 border border-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Curious how different shades & tooth shapes look on you?</p>
                <p className="text-xs text-slate-600">Launch our 3D Smile Simulator tool to experiment with Hollywood Bleach BL1 or Natural Radiance B1.</p>
              </div>
            </div>

            <button
              onClick={onOpenSimulator}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md shadow-cyan-600/20 flex items-center space-x-1.5 transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>Launch Simulator</span>
            </button>
          </div>

          {/* DSD 5-Step Journey Cards */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-slate-900">
                How We Design Your Perfect Smile
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                The 5-step scientifically guided Digital Smile Design protocol at Dental House
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SMILE_DESIGN_DETAILS.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-outfit font-black text-cyan-700 group-hover:scale-110 transition-transform">
                        {st.step}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 font-semibold border border-cyan-200">
                        {st.highlight}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setActivePage('smile-design')}
                className="inline-flex items-center space-x-2 text-cyan-700 hover:text-cyan-900 font-bold text-xs uppercase tracking-wider group"
              >
                <span>Read in-depth about Smile Makeover technology & case studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MEET DR. PRIYANKA KATEWA SECTION ================= */}
      <section className="relative py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Doctor Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                <img
                  src="/images/dr-priyanka.jpg"
                  alt="Dr. Priyanka Katewa - Lead Dentist Dental House Jaipur"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                  <h3 className="text-lg font-outfit font-bold text-slate-900">Dr. Priyanka Katewa</h3>
                  <p className="text-xs text-cyan-700 font-semibold">B.D.S. (Mahatma Gandhi College)</p>
                  <p className="text-[11px] text-slate-600 mt-1">Founder & Chief Smile Makeover Surgeon</p>
                </div>
              </div>
            </div>

            {/* Right Doctor Bio */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100/70 border border-cyan-300 text-cyan-800 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-cyan-700" />
                <span>Jaipur’s Trusted Cosmetic Dentist</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-900 leading-tight">
                "A true smile makeover doesn’t just transform teeth; it unleashes your inner radiance."
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Graduated from the prestigious <strong>Mahatma Gandhi Dental College & Hospital</strong>, Dr. Priyanka Katewa has dedicated over a decade to mastering the delicate intersection of facial aesthetics and conservative restorative dentistry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">B.D.S. Accredited Surgeon</p>
                    <p className="text-slate-500">Trained under international dental mentors</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">100% Painless Guarantee</p>
                    <p className="text-slate-500">Painless rotary endodontics & gentle anesthesia</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Digital Smile Design Pioneer</p>
                    <p className="text-slate-500">Precise 3D computerized mock-up preview</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Patient-First Ethics</p>
                    <p className="text-slate-500">Conservative tooth-saving philosophy</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/25 flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Dr. Priyanka</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>Call {CLINIC_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE SERVICES GRID ================= */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-2">
                <span>World-Class Clinical Care</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-900">
                Comprehensive Dental Treatments
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                From emergency pain relief to Hollywood aesthetic smile redesigns
              </p>
            </div>

            <button
              onClick={() => setActivePage('services')}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-cyan-800 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 self-start md:self-auto transition-colors shadow-sm"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.slice(0, 6).map((srv) => (
              <div
                key={srv.id}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                  srv.featured
                    ? 'bg-gradient-to-b from-cyan-50/60 via-white to-white border-cyan-300 shadow-xl shadow-cyan-100'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {srv.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-outfit font-bold text-slate-900 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-cyan-700 font-semibold">
                    {srv.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
                    <div className="flex items-center justify-between">
                      <span>Duration:</span>
                      <span className="text-slate-800 font-semibold">{srv.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Comfort Level:</span>
                      <span className="text-emerald-600 font-semibold">{srv.painLevel}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (srv.id === 'smile-design') {
                        setActivePage('smile-design');
                      } else {
                        onOpenBooking();
                      }
                    }}
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center space-x-1"
                  >
                    <span>{srv.id === 'smile-design' ? 'Explore Makeover' : 'Book Session'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-cyan-600 text-slate-600 hover:text-white transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLINIC VIRTUAL TOUR & GALLERY ================= */}
      <section className="relative py-20 bg-slate-50/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ClinicTourGallery 
            onOpenBooking={onOpenBooking}
            setActivePage={setActivePage}
            title="Step Inside Dental House, Gokul Tower"
            subtitle="Explore our real operatory suite, sterilization bay, comfortable waiting lounge, and reception desk. Designed for painless treatments and zero anxiety."
          />
        </div>
      </section>

      {/* ================= PATIENT TESTIMONIALS ================= */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Verified Patient Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-900">
              Real Smiles. Real Confidence.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Read how Dr. Priyanka Katewa's smile makeovers have changed lives in Jaipur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t.name}</p>
                    <p className="text-[10px] text-cyan-700 font-semibold">{t.service}</p>
                    <p className="text-[10px] text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Got Questions?
            </span>
            <h2 className="text-3xl font-outfit font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500">
              Clear answers about Smile Design Treatment, costs, duration, and painless techniques
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900 hover:text-cyan-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-600 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            <span>Have a specific dental question for Dr. Priyanka? </span>
            <a href={`tel:${CLINIC_INFO.phone}`} className="text-cyan-700 font-bold hover:underline">
              Call us directly at {CLINIC_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
