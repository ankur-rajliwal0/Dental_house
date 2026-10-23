import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Check, 
  Calendar, 
  Phone, 
  Filter, 
  Smile, 
  Zap, 
  HeartHandshake 
} from 'lucide-react';
import { SERVICES_LIST, CLINIC_INFO } from '../data/dentalData';

export default function ServicesPage({ setActivePage, onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cosmetic Dentistry', 'Orthodontics', 'Restorative Dentistry', 'Preventive Care'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter((s) => s.category === activeCategory);

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Page Header */}
      <section className="relative pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            <span>Excellence in Dental Care</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-outfit font-black text-slate-900 tracking-tight">
            Specialized Dental Treatments
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            From our signature <strong>Smile Design Makeovers</strong> to gentle painless root canals and German implants, every treatment is personally administered by <strong>Dr. Priyanka Katewa</strong> (B.D.S.).
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                srv.featured
                  ? 'bg-gradient-to-b from-cyan-50/60 via-white to-white border-cyan-300 shadow-xl shadow-cyan-100'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {srv.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                    {srv.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-outfit font-bold text-slate-900 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-cyan-700 font-semibold mt-1">
                    {srv.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>

                {/* Treatment Metrics */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Duration:</span>
                    </span>
                    <span className="text-slate-900 font-semibold">{srv.duration}</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Comfort Level:</span>
                    </span>
                    <span className="text-emerald-700 font-semibold">{srv.painLevel}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Ideal for: </span>
                  {srv.bestFor}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                {srv.id === 'smile-design' ? (
                  <button
                    onClick={() => setActivePage('smile-design')}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-600/30"
                  >
                    <span>Explore Smile Makeover</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenBooking}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-600/20"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Treatment</span>
                  </button>
                )}

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  title="Call for enquiry"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-cyan-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Dental Pain Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-rose-50 border border-rose-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-rose-600" />
              <span>Dental Emergency or Toothache?</span>
            </div>
            <h3 className="text-2xl font-outfit font-black text-slate-900">
              Same-Day Pain Relief at Gokul Tower, Jaipur
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Severe toothaches, chipped teeth, and bleeding gums receive immediate priority attention under Dr. Priyanka Katewa's gentle care.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md shadow-rose-600/30"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {CLINIC_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
