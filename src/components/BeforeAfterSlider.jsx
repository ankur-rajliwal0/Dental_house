import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export default function BeforeAfterSlider({ onConsultClick }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full relative">
      {/* Visual Frame */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-xl border border-slate-200 bg-slate-100 group"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* AFTER IMAGE (Background / full width) */}
        <img 
          src="/images/smile-after.jpg" 
          alt="After Smile Makeover - Dental House Dr. Priyanka Katewa"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-400 text-cyan-800 text-xs font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse-subtle" />
            <span>AFTER: Smile Makeover</span>
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped by slider position) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src="/images/smile-before.jpg" 
            alt="Before Smile Makeover"
            className="absolute top-0 left-0 max-w-none h-full object-cover object-center"
            style={{ 
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />

          {/* BEFORE BADGE */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-300 text-slate-700 text-xs font-bold shadow-md">
              <span>BEFORE: Stains & Spacing</span>
            </div>
          </div>
        </div>

        {/* DIVIDER LINE & HANDLE */}
        <div 
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 via-white to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

          {/* Center Handle Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 border-2 border-white shadow-xl flex items-center justify-center text-white cursor-grab active:cursor-grabbing group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 drop-shadow animate-pulse" />
          </div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] text-slate-700 font-medium flex items-center space-x-2 shadow-md">
            <MoveHorizontal className="w-3.5 h-3.5 text-cyan-600" />
            <span>Drag slider horizontally to compare</span>
          </div>
        </div>
      </div>

      {/* Preset View Buttons & Details */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-slate-500 font-medium">Quick Views:</span>
          <button
            onClick={() => setSliderPosition(10)}
            className={`px-3 py-1 rounded-lg border transition-all ${
              sliderPosition < 25 
                ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold shadow-sm' 
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Show After
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1 rounded-lg border transition-all ${
              sliderPosition >= 35 && sliderPosition <= 65
                ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold shadow-sm' 
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            50 / 50 Split
          </button>
          <button
            onClick={() => setSliderPosition(90)}
            className={`px-3 py-1 rounded-lg border transition-all ${
              sliderPosition > 75 
                ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold shadow-sm' 
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Show Before
          </button>
        </div>

        {/* Clinical Note */}
        <div className="flex items-center space-x-2 text-slate-600 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Treated by <strong>Dr. Priyanka Katewa</strong> • 2 Visits • Zero Pain</span>
        </div>
      </div>
    </div>
  );
}
