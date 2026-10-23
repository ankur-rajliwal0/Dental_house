import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, CheckCircle2, MessageCircle, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_INFO } from '../data/dentalData';

export default function BookingModal({ isOpen, onClose, defaultService = 'Smile Design Treatment (Smile Makeover)' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (9:30 AM - 1:30 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'Smile Design Treatment (Smile Makeover)',
    'Porcelain & E-Max Veneers',
    'Laser Teeth Whitening (Zoom)',
    'Invisible Clear Aligners',
    'Single-Visit Dental Implants',
    'Painless Root Canal (RCT)',
    'Gentle Kids Dentistry',
    'General Dental Checkup & Consultation',
  ];

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

  const getWhatsAppLink = () => {
    const text = `Hello Dr. Priyanka Katewa, I would like to confirm my dental appointment at Dental House.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n✨ Service: ${formData.service}\n📅 Date: ${formData.date}\n⏰ Slot: ${formData.timeSlot}\n📝 Note: ${formData.notes || 'None'}`;
    return `https://wa.me/919166857779?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-800 my-8">
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-cyan-50 via-sky-50 to-indigo-50 border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/80 text-slate-500 hover:text-slate-800 hover:bg-white transition-colors border border-slate-200 shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Dental House • Jaipur</span>
          </div>

          <h2 className="text-2xl font-outfit font-black text-slate-900">
            Schedule Your Visit with Dr. Priyanka
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Shop No. 1, Gokul Tower, Near SBI Bank, Kalwar Road, Jaipur
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-outfit font-black text-slate-900">
                  Appointment Request Sent!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Dr. Priyanka Katewa’s team has received your request for <strong>{formData.service}</strong> on <strong>{formData.date}</strong> ({formData.timeSlot}).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Clinic Address:</span>
                  <span className="text-slate-800 font-semibold text-right">Shop No. 1, Gokul Tower, Kalwar Rd</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Clinic Phone:</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-cyan-700 font-bold hover:underline">
                    {CLINIC_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Doctor Quick Badge */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-3">
                <img 
                  src="/images/dr-priyanka.jpg" 
                  alt="Dr. Priyanka Katewa" 
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-cyan-500 shadow-sm"
                />
                <div className="text-xs">
                  <p className="font-bold text-slate-900">Dr. Priyanka Katewa, B.D.S.</p>
                  <p className="text-slate-500">Smile Architect & Cosmetic Surgeon • Mahatma Gandhi College</p>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9166857779"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv} className="bg-white text-slate-900">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Shift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Shift
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500"
                    >
                      <option value="Morning (9:30 AM - 1:30 PM)">Morning: 9:30 AM - 1:30 PM</option>
                      <option value="Evening (5:00 PM - 8:30 PM)">Evening: 5:00 PM - 8:30 PM</option>
                      <option value="Sunday By Appointment">Sunday Special Appointment</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Concern / Message (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Describe your smile goal or dental discomfort..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-1 focus:ring-cyan-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-600/25 flex items-center justify-center space-x-2 transition-all active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment with Dr. Priyanka</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                <span>Zero wait time with prior booking • 100% sterile clinic</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
