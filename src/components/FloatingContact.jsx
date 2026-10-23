import React from 'react';
import { Phone, MessageCircle, Sparkles, Smile } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export default function FloatingContact({ onOpenQuiz, onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Smile Assessment Pill */}
      <button
        onClick={onOpenQuiz}
        className="pointer-events-auto flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white/95 border border-cyan-400 text-cyan-800 text-xs font-bold shadow-xl hover:bg-cyan-50 hover:scale-105 transition-all group backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
        <Smile className="w-3.5 h-3.5 text-cyan-600 group-hover:rotate-12 transition-transform" />
        <span>Smile Quiz</span>
      </button>

      {/* Buttons Row */}
      <div className="flex items-center space-x-2.5 pointer-events-auto">
        {/* Direct Phone Call */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          aria-label="Call Dental House"
          className="w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-cyan-500 text-cyan-700 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Direct Chat */}
        <a
          href={CLINIC_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Dr. Priyanka Katewa"
          className="relative w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>
        </a>
      </div>
    </div>
  );
}
