import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Sparkles, 
  MoveHorizontal, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  Grid, 
  Layers, 
  MessageCircle,
  Phone,
  Check,
  Zap,
  Play,
  Pause
} from 'lucide-react';
import { TRANSFORMATIONS_DATA, CLINIC_INFO } from '../data/dentalData';

export default function TransformationsSection({ onOpenBooking, setActivePage, initialCategory = 'All' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState('spotlight'); // 'spotlight' or 'grid'
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Slider state for interactive before/after
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef(null);
  const thumbnailsRef = useRef(null);

  const categories = ['All', 'Smile Makeover', 'Teeth Whitening', 'Teeth Cleaning', 'Crown & Bridge'];

  const filteredCases = activeCategory === 'All'
    ? TRANSFORMATIONS_DATA
    : TRANSFORMATIONS_DATA.filter((item) => item.category === activeCategory);

  const activeCase = filteredCases[selectedIndex] || filteredCases[0] || TRANSFORMATIONS_DATA[0];

  // Auto-play slideshow timer (changes picture automatically every 4 seconds)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || isDragging || viewMode !== 'spotlight') return;

    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % filteredCases.length);
      setSliderPosition(50);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, isDragging, viewMode, filteredCases.length]);

  // Handle slider movement
  const handleSliderMove = useCallback((clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Scroll active thumbnail horizontally only inside its container, never scrolling the page window
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeEl = thumbnailsRef.current.children[selectedIndex];
      if (activeEl) {
        const container = thumbnailsRef.current;
        const targetScrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedIndex(0);
    setSliderPosition(50);
  };

  const handleBookCase = (caseItem) => {
    if (onOpenBooking) {
      onOpenBooking(caseItem.serviceName || 'Smile Design');
    }
  };

  const getWhatsAppLink = (caseItem) => {
    const msg = `Hello Dr. Priyanka Katewa, I saw the real transformation "${caseItem.title}" on Dental House website. I would like to consult for a similar treatment.`;
    return `https://wa.me/919166857779?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="transformations" className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-y border-slate-200">
      {/* Soft background ambient glows */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-100/90 border border-cyan-300 text-cyan-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse-subtle" />
            <span>Verified In-Clinic Outcomes</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-outfit font-black text-slate-900 tracking-tight leading-tight">
            Real Patient Transformations
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto px-2">
            Documented clinical before-and-after cases performed personally by{' '}
            <strong className="text-slate-900 font-bold">Dr. Priyanka Katewa</strong> (B.D.S.) at Dental House, Jaipur.
          </p>

          {/* Authenticity Trust Badges - Horizontal scroll on mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-2 pt-1 overflow-x-auto no-scrollbar pb-1 px-1 text-[11px] font-semibold text-slate-600">
            <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs shrink-0">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Real Dental House Patients</span>
            </span>
            <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs shrink-0">
              <ShieldCheck className="w-3 h-3 text-cyan-600" />
              <span>Zero AI or Retouching</span>
            </span>
            <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs shrink-0">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Gentle Modern Care</span>
            </span>
          </div>
        </div>

        {/* ================= CONTROLS: CATEGORIES + VIEW TOGGLE ================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-200">
          
          {/* Category Tabs - Mobile swipeable horizontal strip */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 px-0.5 sm:flex-wrap">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? TRANSFORMATIONS_DATA.length 
                : TRANSFORMATIONS_DATA.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/25 scale-[1.02]'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs active:bg-slate-50'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    activeCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-xs self-end sm:self-auto shrink-0">
            <button
              onClick={() => setViewMode('spotlight')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'spotlight'
                  ? 'bg-cyan-50 text-cyan-800 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Spotlight</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                viewMode === 'grid'
                  ? 'bg-cyan-50 text-cyan-800 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid ({filteredCases.length})</span>
            </button>
          </div>
        </div>

        {/* ================= VIEW MODE 1: SPOTLIGHT SHOWCASE ================= */}
        {viewMode === 'spotlight' && (
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Active Case Hero Display */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-3.5 sm:p-6 lg:p-8 shadow-xl shadow-slate-200/50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              {/* Left Column: Media Viewport */}
              <div className="lg:col-span-7">
                <div 
                  key={activeCase.id}
                  className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-inner group animate-fade-in-scale"
                >
                  
                  {/* Top Autoplay Progress Bar */}
                  {isAutoPlaying && !isHovered && !isDragging && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-black/40 z-30 overflow-hidden pointer-events-none">
                      <div 
                        key={selectedIndex}
                        className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 animate-gallery-progress"
                        style={{ animationDuration: '4s' }}
                      />
                    </div>
                  )}

                  {/* CASE A: Interactive Slider Mode */}
                  {activeCase.type === 'slider' ? (
                    <div 
                      ref={sliderContainerRef}
                      className="relative w-full aspect-square sm:aspect-[4/3] select-none cursor-ew-resize overflow-hidden touch-pan-y"
                      onMouseDown={(e) => {
                        setIsDragging(true);
                        handleSliderMove(e.clientX);
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onTouchStart={(e) => {
                        setIsDragging(true);
                        handleSliderMove(e.touches[0].clientX);
                      }}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={() => setIsDragging(false)}
                    >
                      {/* After Image (Full background) */}
                      <img 
                        src={activeCase.afterSrc} 
                        alt={`After - ${activeCase.title}`}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      />

                      {/* After Badge */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-600/95 text-white text-[10px] sm:text-xs font-bold shadow-md flex items-center space-x-1 backdrop-blur-xs">
                          <Check className="w-3 h-3" />
                          <span>AFTER</span>
                        </span>
                      </div>

                      {/* Before Image (Clipped by slider position) */}
                      <div 
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img 
                          src={activeCase.beforeSrc} 
                          alt={`Before - ${activeCase.title}`}
                          className="absolute top-0 left-0 max-w-none h-full object-cover"
                          style={{ 
                            width: sliderContainerRef.current ? `${sliderContainerRef.current.clientWidth}px` : '100%',
                            height: '100%' 
                          }}
                        />

                        {/* Before Badge */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none">
                          <span className="px-2.5 py-1 rounded-full bg-slate-900/90 text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-xs">
                            BEFORE
                          </span>
                        </div>
                      </div>

                      {/* Divider Handle Line */}
                      <div 
                        className="absolute top-0 bottom-0 z-20 pointer-events-none"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                      >
                        <div className="w-1 h-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 border-2 border-white shadow-xl flex items-center justify-center text-white cursor-grab">
                          <MoveHorizontal className="w-5 h-5 drop-shadow animate-pulse" />
                        </div>
                      </div>

                      {/* Drag hint overlay */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                        <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium flex items-center space-x-1.5 shadow-md">
                          <MoveHorizontal className="w-3 h-3 text-cyan-400" />
                          <span>Slide to compare</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* CASE B: Split-Image Mode */
                    <div className="relative w-full aspect-square sm:aspect-[4/3] bg-slate-950 flex items-center justify-center overflow-hidden">
                      <img 
                        src={activeCase.src} 
                        alt={activeCase.alt}
                        className="w-full h-full object-contain pointer-events-none"
                      />

                      {/* Floating Before Tag (Top) */}
                      <div className="absolute top-3 right-3 pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-rose-300 text-[10px] font-extrabold uppercase tracking-wider border border-rose-500/30 flex items-center space-x-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                          <span>Top: Before</span>
                        </span>
                      </div>

                      {/* Floating After Tag (Bottom) */}
                      <div className="absolute bottom-3 left-3 pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/30 flex items-center space-x-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Bottom: After Result</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top category pill on image */}
                  <div className="absolute top-3 left-3 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {activeCase.badge}
                    </span>
                  </div>
                </div>

                {/* Slider Preset Controls (Only when activeCase.type === 'slider') */}
                {activeCase.type === 'slider' && (
                  <div className="mt-2.5 flex items-center justify-between text-xs px-1 text-slate-500">
                    <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">Quick Compare:</span>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <button
                        onClick={() => setSliderPosition(90)}
                        className={`px-2.5 py-1 rounded-md border text-[10px] sm:text-[11px] font-medium transition-colors ${
                          sliderPosition > 70 ? 'bg-cyan-50 border-cyan-400 text-cyan-800 font-bold' : 'bg-white border-slate-200'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setSliderPosition(50)}
                        className={`px-2.5 py-1 rounded-md border text-[10px] sm:text-[11px] font-medium transition-colors ${
                          sliderPosition >= 40 && sliderPosition <= 60 ? 'bg-cyan-50 border-cyan-400 text-cyan-800 font-bold' : 'bg-white border-slate-200'
                        }`}
                      >
                        50/50
                      </button>
                      <button
                        onClick={() => setSliderPosition(10)}
                        className={`px-2.5 py-1 rounded-md border text-[10px] sm:text-[11px] font-medium transition-colors ${
                          sliderPosition < 30 ? 'bg-cyan-50 border-cyan-400 text-cyan-800 font-bold' : 'bg-white border-slate-200'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Clinical Case Details & Booking Action */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {activeCase.category}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-semibold flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{activeCase.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-outfit font-black text-slate-900 leading-tight">
                    {activeCase.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-700">
                    {activeCase.procedure}
                  </p>
                </div>

                {/* Before vs After Summary Cards */}
                <div className="space-y-2">
                  <div className="p-3 rounded-xl sm:rounded-2xl bg-rose-50/80 border border-rose-200/90">
                    <div className="flex items-start space-x-2">
                      <span className="px-1.5 py-0.5 rounded bg-rose-200 text-rose-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 mt-0.5">
                        Before
                      </span>
                      <p className="text-[11px] sm:text-xs text-slate-700 leading-snug">
                        {activeCase.beforeSummary}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl sm:rounded-2xl bg-emerald-50/80 border border-emerald-200/90">
                    <div className="flex items-start space-x-2">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0 mt-0.5">
                        Result
                      </span>
                      <p className="text-[11px] sm:text-xs text-slate-800 font-medium leading-snug">
                        {activeCase.afterSummary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clinical Story */}
                <div className="text-[11px] sm:text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                  <span className="font-bold text-slate-800">Clinical Protocol: </span>
                  {activeCase.story}
                </div>

                {/* Treatment Tags */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {activeCase.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => handleBookCase(activeCase)}
                    className="flex-1 py-3 px-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/25 flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Consult Dr. Priyanka</span>
                  </button>

                  <a
                    href={getWhatsAppLink(activeCase)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:scale-[0.98] border border-emerald-200 text-emerald-800 transition-colors flex items-center justify-center shrink-0 shadow-xs"
                    title="Ask on WhatsApp about this case"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Thumbnail Carousel / Case Switcher with Auto-play Controls */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                    Patient Cases ({selectedIndex + 1} of {filteredCases.length}):
                  </span>
                  
                  {/* Auto-play status pill & toggle button */}
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center space-x-1 border transition-colors ${
                      isAutoPlaying 
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700' 
                        : 'bg-slate-100 border-slate-300 text-slate-600'
                    }`}
                    title={isAutoPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-2.5 h-2.5" />
                        <span>Auto-playing</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Paused</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Prev / Next Buttons */}
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => {
                      setSelectedIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
                      setSliderPosition(50);
                    }}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    aria-label="Previous Case"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedIndex((prev) => (prev + 1) % filteredCases.length);
                      setSliderPosition(50);
                    }}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                    aria-label="Next Case"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Thumbnails row: Smooth horizontal swipe on mobile, clean grid on desktop */}
              <div 
                ref={thumbnailsRef}
                className="flex lg:grid lg:grid-cols-7 gap-2.5 overflow-x-auto no-scrollbar pb-2 pt-1 px-0.5 snap-x snap-mandatory"
              >
                {filteredCases.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  const thumbSrc = item.type === 'slider' ? item.afterSrc : item.src;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedIndex(idx);
                        setSliderPosition(50);
                      }}
                      className={`min-w-[135px] sm:min-w-[155px] lg:min-w-0 flex-1 snap-start relative p-2 rounded-xl sm:rounded-2xl border text-left transition-all group overflow-hidden shrink-0 ${
                        isSelected
                          ? 'bg-cyan-50/80 border-cyan-500 shadow-md ring-2 ring-cyan-400/50 scale-[1.02]'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs opacity-85 hover:opacity-100'
                      }`}
                    >
                      <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-slate-900 mb-1.5 relative">
                        <img 
                          src={thumbSrc} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-bold bg-black/75 text-white">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-slate-900 truncate">
                        {item.title}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-cyan-700 font-medium truncate">
                        {item.procedure}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW MODE 2: SHOW ALL GRID ================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
            {filteredCases.map((item) => {
              const displaySrc = item.type === 'slider' ? item.afterSrc : item.src;
              return (
                <div
                  key={item.id}
                  className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Image Box */}
                    <div className="relative aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200">
                      <img 
                        src={displaySrc} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Badge Top Left */}
                      <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                        <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-white/20">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Header */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                          {item.category}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">
                          {item.duration}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-outfit font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-cyan-700 font-medium mt-0.5">
                        {item.procedure}
                      </p>
                    </div>

                    {/* Problem & Solution Mini Cards */}
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-slate-700 text-[11px] sm:text-xs">
                        <span className="font-bold text-rose-800">Problem: </span>
                        {item.beforeSummary}
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-800 text-[11px] sm:text-xs font-medium">
                        <span className="font-bold text-emerald-800">Result: </span>
                        {item.afterSummary}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleBookCase(item)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1 shadow-xs transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Treatment</span>
                    </button>

                    <a
                      href={getWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:scale-[0.98] border border-emerald-200 text-emerald-800 transition-colors flex items-center justify-center shrink-0 shadow-xs"
                      title="WhatsApp Enquiry"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Consultation Promo Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Zap className="w-3.5 h-3.5" />
              <span>Personalized Digital Smile Planning</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-outfit font-black">
              Want a transformation like these for your smile?
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 max-w-xl">
              Book a 3D intraoral smile scan with Dr. Priyanka Katewa at Gokul Tower, Jaipur. Preview your future smile before starting any treatment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking && onOpenBooking('Smile Design')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-cyan-900 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-cyan-50 active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5"
            >
              <Calendar className="w-4 h-4 text-cyan-700" />
              <span>Book Transformation Visit</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CLINIC_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}