import React, { useState } from 'react';
import { X, Sparkles, Sliders, Check, RefreshCw, Palette, Eye, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SmileSimulatorModal({ isOpen, onClose, onOpenBooking }) {
  const [shade, setShade] = useState('BL1');
  const [shape, setShape] = useState('natural');
  const [brightness, setBrightness] = useState(100);

  if (!isOpen) return null;

  const shadeOptions = [
    { id: 'BL1', name: 'Hollywood Bleach BL1', desc: 'Ultra-dazzling celebrity white', color: '#ffffff', filter: 'brightness(1.22) contrast(1.08)' },
    { id: 'B1', name: 'Natural Radiant B1', desc: 'Top natural shade, crisp & pristine', color: '#fbfbf7', filter: 'brightness(1.12) contrast(1.04)' },
    { id: 'A1', name: 'Youthful Warm A1', desc: 'Warm ivory with soft golden undertone', color: '#f8f6ed', filter: 'brightness(1.05) contrast(1.02)' },
    { id: 'A2', name: 'Classic Subtle A2', desc: 'Undetectable standard blend', color: '#f3efdf', filter: 'brightness(0.98) contrast(1)' },
  ];

  const shapeStyles = [
    { id: 'hollywood', name: 'Hollywood Rectangular', detail: 'Straight, bold incisal edges with confident presence.' },
    { id: 'natural', name: 'Natural Curved', detail: 'Softened lateral edges mirroring nature’s balance.' },
    { id: 'youthful', name: 'Soft Oval Youthful', detail: 'Slightly elongated central incisors for visual youth.' },
  ];

  const currentShadeObj = shadeOptions.find((s) => s.id === shade) || shadeOptions[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-800 my-8">
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
            <span>Virtual Smile Studio</span>
          </div>

          <h2 className="text-2xl font-outfit font-black text-slate-900">
            3D Smile Style & Shade Simulator
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Test different aesthetic shades and tooth contours designed by Dr. Priyanka Katewa.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Visual Preview Box */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] flex items-center justify-center shadow-lg group">
              <img
                src="/images/smile-after.jpg"
                alt="Simulated Smile"
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  filter: `${currentShadeObj.filter} brightness(${brightness / 100})`,
                }}
              />

              {/* Simulation Tag Overlay */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-md border border-cyan-400 text-cyan-800 shadow-sm">
                  {currentShadeObj.name}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 shadow-sm">
                  {shapeStyles.find((s) => s.id === shape)?.name}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5 mb-2">
                  <Palette className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Select Porcelain Shade</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {shadeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setShade(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        shade === opt.id
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: opt.color }}
                        />
                        <span className="font-bold text-xs">{opt.id}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{opt.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center space-x-1.5 mb-2">
                  <Sliders className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Smile Architectural Contour</span>
                </label>
                <div className="space-y-1.5">
                  {shapeStyles.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setShape(item.id)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                        shape === item.id
                          ? 'bg-cyan-50 border-cyan-500 text-cyan-950 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-semibold">{item.name}</span>
                      {shape === item.id && <Check className="w-3.5 h-3.5 text-cyan-600" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>Enamel Translucency / Brightness</span>
                  <span className="text-cyan-700 font-mono font-bold">{brightness}%</span>
                </div>
                <input
                  type="range"
                  min="85"
                  max="125"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full custom physical test smile provided before treatment</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-cyan-600/25 transition-all"
            >
              <span>Book My 3D Smile Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
