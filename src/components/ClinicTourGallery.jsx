import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  Grid,
  Layers,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import { CLINIC_GALLERY, CLINIC_INFO } from '../data/dentalData';

export default function ClinicTourGallery({ onOpenBooking, setActivePage, title, subtitle }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('spotlight'); // 'spotlight' or 'grid'
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxAutoPlaying, setIsLightboxAutoPlaying] = useState(true);

  const categories = ['All', 'Operatory', 'Lounge', 'Reception'];

  const filteredImages = activeCategory === 'All' 
    ? CLINIC_GALLERY 
    : CLINIC_GALLERY.filter(item => item.category === activeCategory);

  const currentImage = filteredImages[selectedIndex] || filteredImages[0] || CLINIC_GALLERY[0];

  // Auto-play slideshow timer (changes picture every 3.5 seconds)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || lightboxOpen || viewMode !== 'spotlight') return;

    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, lightboxOpen, viewMode, filteredImages.length]);

  // Lightbox auto-play timer
  useEffect(() => {
    if (!lightboxOpen || !isLightboxAutoPlaying) return;

    const timer = setInterval(() => {
      setLightboxIndex((prev) => (prev + 1) % CLINIC_GALLERY.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [lightboxOpen, isLightboxAutoPlaying]);

  const handleSelectImage = (idx) => {
    setSelectedIndex(idx);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const openLightbox = (indexInAll) => {
    setLightboxIndex(indexInAll);
    setLightboxOpen(true);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % CLINIC_GALLERY.length);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + CLINIC_GALLERY.length) % CLINIC_GALLERY.length);
  };

  return (
    <div className="w-full">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Virtual Clinic Tour & Ambience</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-emerald-700 font-bold lowercase tracking-normal">auto-playing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-black text-slate-900 tracking-tight">
            {title || "Inside Dental House, Gokul Tower"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
            {subtitle || "Take a look inside our modern, pristine clinic designed for calm, anxiety-free dental visits and aesthetic smile design."}
          </p>
        </div>

        {/* View Switcher & Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Categories */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(0);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-cyan-800 font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Spaces (6)' : cat}
              </button>
            ))}
          </div>

          {/* Spotlight vs Grid Switcher */}
          <div className="hidden sm:flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
            <button
              onClick={() => setViewMode('spotlight')}
              title="Spotlight View"
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'spotlight' 
                  ? 'bg-white text-cyan-800 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              title="Grid View"
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white text-cyan-800 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Showcase Layout */}
      {viewMode === 'spotlight' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-lg">
          {/* Main Large Image Container */}
          <div className="lg:col-span-7">
            <div 
              className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group cursor-pointer"
              onClick={() => {
                const allIdx = CLINIC_GALLERY.findIndex(img => img.id === currentImage.id);
                openLightbox(allIdx >= 0 ? allIdx : 0);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Autoplay animated progress bar */}
              {isAutoPlaying && !isHovered && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20 overflow-hidden">
                  <div 
                    key={`${currentImage.id}-${selectedIndex}`}
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 animate-gallery-progress"
                  />
                </div>
              )}

              {/* Dynamic Image with crossfade scale animation */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
                <img
                  key={currentImage.id}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  onError={(e) => {
                    if (e.target.src !== currentImage.originalSrc) {
                      e.target.src = currentImage.originalSrc;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in-scale"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40 pointer-events-none" />

              {/* Top Controls: Landmark badge */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Shop No. 1, Gokul Tower</span>
                </span>
              </div>

              {/* Bottom Caption on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    {currentImage.badge}
                  </span>
                  <span className="text-xs text-cyan-200 font-medium">
                    {currentImage.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-outfit text-white">
                  {currentImage.title}
                </h3>
              </div>

              {/* Prev / Next Floating Navigation */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous Image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 border border-white/20 shadow-lg z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next Image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110 border border-white/20 shadow-lg z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip with Active Progress Bar */}
            <div className="grid grid-cols-6 gap-2 sm:gap-3 mt-4">
              {filteredImages.map((img, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={img.id}
                    onClick={() => handleSelectImage(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all ${
                      isSelected
                        ? 'border-cyan-600 scale-105 shadow-md ring-2 ring-cyan-200'
                        : 'border-slate-200 hover:border-cyan-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      onError={(e) => {
                        if (e.target.src !== img.originalSrc) {
                          e.target.src = img.originalSrc;
                        }
                      }}
                      className="w-full h-full object-cover"
                    />

                    {/* Active photo indicator & mini progress */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-cyan-600/15 pointer-events-none border-b-2 border-cyan-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details & Features Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                  {currentImage.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Photo {selectedIndex + 1} of {filteredImages.length}
                </span>
                <span className="text-[11px] text-cyan-600 font-semibold ml-auto flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  <span>Auto-rotating</span>
                </span>
              </div>
              <h3 className="text-2xl font-outfit font-black text-slate-900 transition-all">
                {currentImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[48px]">
                {currentImage.description}
              </p>
            </div>

            {/* Key Feature Checkpoints */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Highlighted Patient Amenities
              </span>
              <ul className="space-y-2">
                {currentImage.features.map((feat, i) => (
                  <li key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic Trust Badges */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-100 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
                <span className="font-semibold text-slate-800">Class-B Sterilization</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-800">Air-Conditioned Comfort</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              {onOpenBooking && (
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit with Dr. Priyanka</span>
                </button>
              )}

              {setActivePage && (
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 border border-slate-200 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>Get Directions</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Grid View of all 6 Images */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => {
            const allIdx = CLINIC_GALLERY.findIndex(item => item.id === img.id);
            return (
              <div
                key={img.id}
                onClick={() => openLightbox(allIdx >= 0 ? allIdx : 0)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={img.src}
                    alt={img.alt}
                    onError={(e) => {
                      if (e.target.src !== img.originalSrc) {
                        e.target.src = img.originalSrc;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                      {img.badge}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-cyan-700" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 block">
                      {img.tag}
                    </span>
                    <h3 className="text-base font-bold font-outfit text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {img.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-700">
                    <span>Click to view photo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Fullscreen Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Top Bar */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between text-white pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 rounded-md bg-cyan-600 text-white text-xs font-bold">
                {CLINIC_GALLERY[lightboxIndex].badge}
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-bold font-outfit">
                  {CLINIC_GALLERY[lightboxIndex].title}
                </h4>
                <p className="text-[11px] text-slate-300">
                  Photo {lightboxIndex + 1} of {CLINIC_GALLERY.length} • Shop No. 1, Gokul Tower, Jaipur
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Lightbox Auto-play Toggle */}
              <button
                onClick={() => setIsLightboxAutoPlaying(!isLightboxAutoPlaying)}
                className={`p-2 rounded-full transition-colors flex items-center space-x-1 text-xs ${
                  isLightboxAutoPlaying 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title={isLightboxAutoPlaying ? "Pause full-screen auto-play" : "Resume full-screen auto-play"}
              >
                {isLightboxAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Lightbox Image Viewport */}
          <div 
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={CLINIC_GALLERY[lightboxIndex].id}
              src={CLINIC_GALLERY[lightboxIndex].src}
              alt={CLINIC_GALLERY[lightboxIndex].alt}
              onError={(e) => {
                if (e.target.src !== CLINIC_GALLERY[lightboxIndex].originalSrc) {
                  e.target.src = CLINIC_GALLERY[lightboxIndex].originalSrc;
                }
              }}
              className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10 animate-fade-in-scale"
            />

            {/* Navigation buttons */}
            <button
              onClick={handleLightboxPrev}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleLightboxNext}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl hover:scale-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails & Caption */}
          <div 
            className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs text-slate-300 max-w-lg text-center sm:text-left">
              {CLINIC_GALLERY[lightboxIndex].description}
            </p>

            <div className="flex items-center space-x-2 overflow-x-auto py-1">
              {CLINIC_GALLERY.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`w-12 h-10 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    idx === lightboxIndex
                      ? 'border-cyan-400 scale-110 shadow-lg ring-1 ring-cyan-300'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    onError={(e) => {
                      if (e.target.src !== img.originalSrc) {
                        e.target.src = img.originalSrc;
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {onOpenBooking && (
              <button
                onClick={() => {
                  setLightboxOpen(false);
                  onOpenBooking();
                }}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
              >
                Book Appointment
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
