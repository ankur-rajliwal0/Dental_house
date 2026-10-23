import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Heart,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export default function Footer({ setActivePage, onOpenBooking }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'smile-design', label: 'Smile Design (Makeover)' },
    { id: 'services', label: 'All Dental Treatments' },
    { id: 'about', label: 'About Dr. Priyanka Katewa' },
    { id: 'contact', label: 'Clinic Location & Hours' },
  ];

  const handleLink = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-12 overflow-hidden z-10 text-slate-600">
      {/* Soft pastel ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top CTA Banner */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-50 via-sky-50 to-indigo-50 border border-cyan-200/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-800 text-xs font-bold border border-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Complimentary 3D Smile Makeover Consultation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
              Ready to Design Your Dream Hollywood Smile?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              Book a personal appointment with <strong>Dr. Priyanka Katewa</strong> at Dental House, Gokul Tower, Jaipur. Experience painless, aesthetic dental perfection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-cyan-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call 9166857779</span>
            </a>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Doctor info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-600/20 border border-white">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2C8 2 5.5 4.5 5.5 8c0 4 2 8 3.5 12 1 2.5 2 3 3 3s2-.5 3-3c1.5-4 3.5-8 3.5-12 0-3.5-2.5-6-6.5-6z" />
                </svg>
              </div>
              <span className="font-outfit text-2xl font-black text-slate-900">
                Dental <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">House</span>
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Founded & led by <strong>Dr. Priyanka Katewa</strong>, B.D.S. (Mahatma Gandhi College). Specializing in high-end Digital Smile Design, aesthetic ceramic veneers, and painless dental surgery in Jaipur.
            </p>

            <div className="pt-1 flex items-center space-x-2 text-xs text-cyan-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Class-B Hospital Grade Sterilization</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Explore Dental House
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLink(link.id)}
                    className="hover:text-cyan-700 transition-colors flex items-center space-x-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Clinic Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-600" />
              <span>Clinic Timings</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <p className="font-bold text-slate-900">Monday to Saturday</p>
                <p className="text-cyan-700 mt-0.5 font-medium">Morning: 9:30 AM – 1:30 PM</p>
                <p className="text-cyan-700 font-medium">Evening: 5:00 PM – 8:30 PM</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <p className="font-bold text-slate-900">Sunday</p>
                <p className="text-slate-500">10:00 AM – 1:00 PM (Prior Booking)</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Card Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Visit Dental House
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Shop No. 1, Gokul Tower</strong>,<br />
                  Near SBI Bank, Kardhani,<br />
                  Kalwar Road, Jaipur (Rajasthan)
                </span>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-cyan-700 font-bold hover:underline">
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-600 hover:text-slate-900 hover:underline">
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Dental House, Jaipur. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Dr. Priyanka Katewa's Smiles in Jaipur</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
