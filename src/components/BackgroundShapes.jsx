import React from 'react';

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Crisp White Base with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-sky-50/30" />

      {/* Subtle modern medical tech grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glowing soft pastel atmospheric orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-indigo-100/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 -left-32 w-[28rem] h-[28rem] bg-teal-100/40 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Decorative floating geometric shapes & light rings */}
      <svg className="absolute top-36 right-1/4 w-32 h-32 opacity-25 text-cyan-500 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
        <circle cx="50" cy="50" r="20" strokeDasharray="3 3" />
      </svg>

      <svg className="absolute top-1/2 left-8 w-24 h-24 opacity-20 text-indigo-400 animate-float-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" strokeDasharray="6 4" />
        <path d="M50 15 L50 85 M15 50 L85 50" strokeOpacity="0.5" />
      </svg>

      {/* Floating Sparkle Symbols */}
      <div className="absolute top-44 left-1/3 text-cyan-500/40 text-2xl animate-pulse-subtle">✦</div>
      <div className="absolute top-2/3 right-1/3 text-sky-400/40 text-xl animate-float" style={{ animationDelay: '3s' }}>✧</div>
      <div className="absolute bottom-1/4 left-1/4 text-indigo-400/35 text-3xl animate-pulse-subtle" style={{ animationDelay: '1.5s' }}>✦</div>
    </div>
  );
}
