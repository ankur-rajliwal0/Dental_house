import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Navigation, 
  ShieldCheck, 
  Send,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_INFO } from '../data/dentalData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Smile Design Makeover Consultation',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#6366f1', '#10b981'],
      });
    } catch {}
  };

  const getWhatsAppBookingLink = () => {
    const text = `Hi Dr. Priyanka Katewa! I want to schedule a visit at Dental House.\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✨ Service: ${formData.service}\n📅 Date: ${formData.preferredDate || 'Flexible'}\n💬 Note: ${formData.message || 'Consultation'}`;
    return `https://wa.me/919166857779?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Header */}
      <section className="relative pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-cyan-600" />
            <span>Kardhani, Kalwar Road, Jaipur</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-outfit font-black text-slate-900 tracking-tight">
            Contact & Visit Dental House
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Conveniently located at <strong>Shop No. 1, Gokul Tower (Near SBI Bank)</strong>. Walk in during clinic hours or book a private aesthetic consultation with <strong>Dr. Priyanka Katewa</strong>.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact & Location Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card Digital Showcase */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 border border-blue-400/30 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-outfit font-black tracking-tight">Dental House</span>
                  <p className="text-[11px] text-cyan-200">Advanced Aesthetic & Restorative Care</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan-200" />
                </div>
              </div>

              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold font-outfit">Dr. Priyanka Katewa</h3>
                <p className="text-xs text-blue-200 font-medium">B.D.S. (Mahatma Gandhi College)</p>
              </div>

              <div className="space-y-2 text-xs border-t border-white/20 pt-4 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                  <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold hover:underline">
                    Ph.: {CLINIC_INFO.phone}
                  </a>
                </div>

                <div className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-300 shrink-0 mt-0.5" />
                  <span>
                    Shop No. 1, Gokul Tower, Near SBI Bank,<br />
                    Kardhani, Kalwar Road, Jaipur (Raj.)
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                  <a href={`mailto:${CLINIC_INFO.email}`} className="hover:underline">
                    E-mail : {CLINIC_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-cyan-800 font-bold text-sm uppercase tracking-wider">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>Consultation Timings</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm">Monday – Saturday</p>
                  <p className="text-cyan-700 mt-1 font-semibold">Morning: 9:30 AM – 1:30 PM</p>
                  <p className="text-cyan-700 font-semibold">Evening: 5:00 PM – 8:30 PM</p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm">Sunday</p>
                  <p className="text-slate-500 mt-0.5">10:00 AM – 1:00 PM (Prior Appointment Only)</p>
                </div>
              </div>

              <div className="pt-1 flex items-center space-x-2 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero waiting time when booked in advance</span>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all flex items-center justify-between text-slate-900 group shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Fast WhatsApp Consultation</p>
                  <p className="text-[11px] text-emerald-700">Message Dr. Priyanka Katewa directly</p>
                </div>
              </div>
              <Navigation className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right Direct Booking Form & Directions */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                  Quick Appointment Request
                </span>
                <h3 className="text-2xl font-outfit font-black text-slate-900">
                  Schedule Your Visit with Dr. Priyanka
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details below and our team will immediately lock your priority slot.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Appointment Request Received!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you <strong>{formData.name}</strong>. We look forward to welcoming you at Dental House, Gokul Tower.
                  </p>
                  <a
                    href={getWhatsAppBookingLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp Now</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9166857779"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Treatment of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white"
                    >
                      <option>Smile Design Treatment (Smile Makeover)</option>
                      <option>Porcelain & E-Max Veneers</option>
                      <option>Laser Teeth Whitening</option>
                      <option>Invisible Clear Aligners</option>
                      <option>Dental Implants & Zirconia Crowns</option>
                      <option>Painless Root Canal (RCT)</option>
                      <option>General Dental Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Notes or Dental Concern
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell Dr. Priyanka about any tooth pain, cosmetic goals, or preferred appointment hours..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/30 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Map Landmark Details */}
            <div className="mt-6 p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-between text-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">How to reach Dental House:</p>
                  <p className="text-slate-500">Located at Gokul Tower on main Kalwar Road, directly adjacent to SBI Bank, Kardhani.</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Gokul+Tower+Kalwar+Road+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-cyan-800 font-bold shrink-0 border border-slate-200 transition-colors"
              >
                Open Google Maps
              </a>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
