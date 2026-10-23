import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, MessageCircle, Calendar, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_INFO } from '../data/dentalData';

export default function SmileQuizModal({ isOpen, onClose, onOpenBooking }) {
  const [step, setStep] = useState(1);
  const [selectedConcerns, setSelectedConcerns] = useState(['stains', 'gap']);
  const [targetVibe, setTargetVibe] = useState('natural');
  const [timeline, setTimeline] = useState('asap');

  if (!isOpen) return null;

  const concernOptions = [
    { id: 'stains', label: 'Discolored or Stained Teeth', emoji: '✨' },
    { id: 'gap', label: 'Gap Between Front Teeth', emoji: '↔️' },
    { id: 'chipped', label: 'Chipped or Uneven Edge', emoji: '💎' },
    { id: 'gummy', label: 'Excessive Gum Display (Gummy Smile)', emoji: '🌸' },
    { id: 'crooked', label: 'Slightly Crowded or Tilted Teeth', emoji: '📐' },
    { id: 'old', label: 'Dark Metal Fillings / Dull Caps', emoji: '🔄' },
  ];

  const vibeOptions = [
    { 
      id: 'hollywood', 
      title: 'Hollywood Glamour', 
      desc: 'Ultra-bright radiant white (Bleach shade BL1/BL2). Maximum star power.',
      shade: 'Ultra Bright White' 
    },
    { 
      id: 'natural', 
      title: 'Natural Radiance', 
      desc: 'Harmonious lifelike translucency matching skin undertones (Shade B1/A1).',
      shade: 'Natural Luminous' 
    },
    { 
      id: 'executive', 
      title: 'Sophisticated Executive', 
      desc: 'Balanced, masculine/feminine proportional symmetry for sharp presence.',
      shade: 'Refined Elegance' 
    },
  ];

  const timelineOptions = [
    { id: 'asap', label: 'Immediate / Within 1–2 Weeks' },
    { id: 'event', label: 'Preparing for Wedding / Event' },
    { id: 'flexible', label: 'Researching & Planning Ahead' },
  ];

  const toggleConcern = (id) => {
    if (selectedConcerns.includes(id)) {
      if (selectedConcerns.length > 1) {
        setSelectedConcerns(selectedConcerns.filter((c) => c !== id));
      }
    } else {
      setSelectedConcerns([...selectedConcerns, id]);
    }
  };

  const handleFinish = () => {
    setStep(4);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#6366f1', '#10b981', '#f472b6'],
      });
    } catch {
      // safe fallback
    }
  };

  const getRecommendation = () => {
    let treatments = ['Digital Smile Design (DSD) 3D Scan'];
    if (selectedConcerns.includes('gummy')) treatments.push('Laser Gum Symmetry Sculpting');
    if (selectedConcerns.includes('gap') || selectedConcerns.includes('chipped') || selectedConcerns.includes('crooked')) {
      treatments.push('Ultra-Thin E-Max Porcelain Veneers');
    }
    if (selectedConcerns.includes('stains')) treatments.push('Laser Whitening & Enamel Glaze');
    return treatments;
  };

  const generateWhatsAppMessage = () => {
    const summary = `Hi Dr. Priyanka Katewa! I completed the Smile Design Assessment on Dental House website.\nMy Concerns: ${selectedConcerns.join(', ')}\nDesired Look: ${targetVibe}\nTimeline: ${timeline}.\nPlease guide me for a 3D consultation!`;
    return `https://wa.me/919166857779?text=${encodeURIComponent(summary)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-800 my-8">
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-cyan-50 via-sky-50 to-indigo-50 border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/80 text-slate-500 hover:text-slate-800 hover:bg-white transition-colors border border-slate-200 shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>Interactive Smile Makeover Assessment</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
            Discover Your Ideal Smile Design
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Answer 3 quick questions for a personalized transformation roadmap by Dr. Priyanka Katewa.
          </p>

          {/* Progress bar */}
          <div className="mt-4 flex items-center space-x-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  step >= s ? 'bg-gradient-to-r from-cyan-500 to-indigo-600' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center text-xs">1</span>
                <span>What would you love to improve in your smile?</span>
              </h3>
              <p className="text-xs text-slate-500">Select one or more concerns that apply:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {concernOptions.map((opt) => {
                  const isSelected = selectedConcerns.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleConcern(opt.id)}
                      className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{opt.emoji}</span>
                        <span className="text-xs font-semibold">{opt.label}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md shadow-cyan-600/20 hover:scale-105 transition-all"
                >
                  <span>Next: Desired Smile Vibe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center text-xs">2</span>
                <span>Select Your Preferred Smile Aesthetic</span>
              </h3>
              <p className="text-xs text-slate-500">Dr. Priyanka customizes tooth shape and luminescence accordingly:</p>

              <div className="space-y-3 pt-2">
                {vibeOptions.map((v) => {
                  const isSelected = targetVibe === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setTargetVibe(v.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between transition-all ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-sm text-slate-900">{v.title}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 font-semibold">
                            {v.shade}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{v.desc}</p>
                      </div>
                      <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md shadow-cyan-600/20 hover:scale-105 transition-all"
                >
                  <span>Next: Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center text-xs">3</span>
                <span>When are you hoping to transform your smile?</span>
              </h3>

              <div className="space-y-3 pt-2">
                {timelineOptions.map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTimeline(t.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-semibold text-xs sm:text-sm text-slate-800">{t.label}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Back
                </button>
                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md shadow-emerald-600/25 hover:scale-105 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Plan</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-300">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Clinical Assessment Generated</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
                  Your Bespoke Smile Design Plan
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                  Prepared by <strong>Dr. Priyanka Katewa</strong> (B.D.S. Mahatma Gandhi College) at Dental House, Jaipur.
                </p>
              </div>

              {/* Recommendation Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs text-slate-500 font-medium">Target Aesthetic</span>
                  <span className="text-xs font-bold text-cyan-800 uppercase tracking-wide bg-cyan-100 px-2.5 py-0.5 rounded-full">
                    {targetVibe} Vibe
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-600 block mb-2 font-medium">Recommended Treatment Blend:</span>
                  <div className="flex flex-wrap gap-2">
                    {getRecommendation().map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-800 flex items-center space-x-1.5 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-cyan-600" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-center">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Visits</span>
                    <span className="text-sm font-bold text-slate-900">2 - 3 Sessions</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Pain Level</span>
                    <span className="text-sm font-bold text-emerald-600">0/10 Painless</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Veneer Life</span>
                    <span className="text-sm font-bold text-cyan-700">15 - 20+ Years</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Plan to WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-cyan-600/25 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free 3D Preview</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1 mx-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Assessment</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
