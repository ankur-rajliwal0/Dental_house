import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Menu, 
  X, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  ChevronRight,
  Smile
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export default function Navbar({ activePage, setActivePage, onOpenBooking, onOpenQuiz }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { 
      id: 'smile-design', 
      label: 'Smile Makeover', 
      badge: 'Featured',
      highlight: true 
    },
    { id: 'services', label: 'Treatments' },
    { id: 'about', label: 'Dr. Priyanka' },
    { id: 'contact', label: 'Clinic & Hours' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 text-xs text-slate-600 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-cyan-800 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              <span>Dr. Priyanka Katewa, B.D.S. (Mahatma Gandhi College)</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Gokul Tower, Near SBI Bank, Kalwar Road, Jaipur</span>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="flex items-center space-x-1 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              <span>Mon-Sat: 9:30 AM - 1:30 PM & 5:00 PM - 8:30 PM</span>
            </span>
            <a 
              href={`tel:${CLINIC_INFO.phone}`} 
              className="flex items-center space-x-1 text-cyan-700 hover:text-cyan-900 font-bold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>{CLINIC_INFO.phoneFormatted}</span>
            </a>
            <a 
              href={CLINIC_INFO.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md shadow-slate-100 py-3' 
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Clinic Brand & Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-600/20 group-hover:shadow-cyan-600/35 group-hover:scale-105 transition-all duration-300 border border-white">
                {/* Stylized Tooth SVG */}
                <svg className="w-6 h-6 text-white drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 5.5 4.5 5.5 8c0 4 2 8 3.5 12 1 2.5 2 3 3 3s2-.5 3-3c1.5-4 3.5-8 3.5-12 0-3.5-2.5-6-6.5-6z" />
                  <path d="M9 7c1 1.5 2 1.5 3 0 1 1.5 2 1.5 3 0" />
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-500 rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-500 rounded-full border-2 border-white" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-outfit text-2xl font-black tracking-tight text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Dental <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">House</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  Jaipur
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Dr. Priyanka Katewa <span className="text-cyan-600 font-semibold">• B.D.S.</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/80 border border-slate-200 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-md shadow-cyan-600/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-300">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenQuiz}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-white border border-slate-200 hover:border-cyan-500 text-slate-700 hover:text-cyan-700 transition-all flex items-center space-x-1.5 shadow-sm group"
            >
              <Smile className="w-3.5 h-3.5 text-cyan-600 group-hover:rotate-12 transition-transform" />
              <span>Smile Quiz</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-cyan-600/20 hover:shadow-cyan-600/35 transition-all duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 group-hover:opacity-95 transition-opacity" />
              <span className="relative flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-lg bg-cyan-600 text-white"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="text-xs text-slate-600 border-b border-slate-200 pb-2 flex items-center justify-between">
            <span>Dr. Priyanka Katewa • Jaipur</span>
            <a href={`tel:${CLINIC_INFO.phone}`} className="text-cyan-700 font-bold flex items-center space-x-1">
              <Phone className="w-3 h-3 text-cyan-600" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-300">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="py-2.5 px-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-center space-x-1.5"
            >
              <Smile className="w-4 h-4 text-cyan-600" />
              <span>Smile Quiz</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-xs font-bold text-white shadow-md shadow-cyan-600/30 flex items-center justify-center space-x-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
