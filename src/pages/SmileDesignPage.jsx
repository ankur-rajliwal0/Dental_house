import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Sliders, 
  Eye, 
  Layers, 
  Cpu, 
  Scan, 
  Check, 
  X as CloseIcon,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { CLINIC_INFO, SMILE_DESIGN_DETAILS } from '../data/dentalData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function SmileDesignPage({ onOpenBooking, onOpenQuiz, onOpenSimulator }) {
  const [selectedStyle, setSelectedStyle] = useState('hollywood');

  const currentStyleObj = SMILE_DESIGN_DETAILS.smileStyles.find((s) => s.id === selectedStyle) || SMILE_DESIGN_DETAILS.smileStyles[0];

  const comparisonData = [
    {
      feature: "Outcome Predictability",
      traditional: "Vague imagination, you only see final result after it's bonded permanently.",
      dsd: "100% Predictable: You test-drive a real physical mockup in your mouth before starting.",
    },
    {
      feature: "Impression Technique",
      traditional: "Messy, unpleasant gooey putty trays causing gag reflex.",
      dsd: "Zero putty. High-definition 3D digital laser intraoral scan in seconds.",
    },
    {
      feature: "Facial Harmony Analysis",
      traditional: "Focuses only on individual teeth in isolation.",
      dsd: "Maps golden ratio (1:1.618) to your eyes, lips, nose, and facial contours.",
    },
    {
      feature: "Tooth Enamel Conservation",
      traditional: "Aggressive tooth cutting and excessive grinding.",
      dsd: "Micro-prep (0.3mm ultra-thin) preserves 95%+ of natural healthy enamel.",
    },
    {
      feature: "Material Quality",
      traditional: "Standard ceramic or composite that stains within 2–4 years.",
      dsd: "German/Swiss E-Max Lithium Disilicate (15–20+ year stain-proof guarantee).",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* ================= PAGE HERO ================= */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>Specialty Cosmetic Dental Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight text-slate-900 leading-tight">
              Smile Design Treatment <br />
              <span className="shimmer-text">(Smile Makeover)</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Welcome to the pinnacle of aesthetic dentistry at <strong>Dental House</strong>. Directed by <strong>Dr. Priyanka Katewa</strong> (B.D.S. Mahatma Gandhi College), we create photogenic, radiant smiles using 3D Digital Smile Design and ultra-thin porcelain veneers.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/25 flex items-center space-x-2 hover:scale-105 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 3D Smile Consultation</span>
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-sm"
              >
                <Sliders className="w-4 h-4 text-cyan-600" />
                <span>Virtual Smile Quiz</span>
              </button>

              <button
                onClick={onOpenSimulator}
                className="px-5 py-3.5 rounded-xl bg-white border border-cyan-300 text-cyan-800 hover:bg-cyan-50 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>Style & Shade Simulator</span>
              </button>
            </div>
          </div>

          {/* DSD High-Tech Display Banner */}
          <div className="mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative bg-white">
            <img
              src="/images/smile-digital-design.jpg"
              alt="Digital Smile Design CAD CAM Simulation at Dental House Jaipur"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                  Technology in Action
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Golden Ratio 1:1.618 Digital Facial Mapping
                </h3>
                <p className="text-xs text-slate-600 max-w-xl mt-0.5">
                  We measure incisal edges, bipupillary lines, and gingival zenith curves to ensure your new smile harmonizes with your eyes and jawline.
                </p>
              </div>

              <div className="shrink-0 flex items-center space-x-2">
                <span className="px-3 py-1.5 rounded-xl bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold">
                  100% Painless
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  2 Clinic Visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE BEFORE / AFTER SLIDER ================= */}
      <section className="relative py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Interactive Clinical Transformation
            </span>
            <h2 className="text-3xl font-outfit font-black text-slate-900">
              Slide to Witness The Magic
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Drag the center slider to inspect how Dr. Priyanka eliminated discoloration and gaps, restoring perfect symmetry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider onConsultClick={onOpenBooking} />
          </div>
        </div>
      </section>

      {/* ================= SMILE STYLES EXPLORER ================= */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Customized For Your Persona
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-900">
              Explore Our Signature Smile Styles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              No two faces are alike. Select an aesthetic style below to see how Dr. Priyanka customizes tooth contours, translucency, and edge geometry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
            {SMILE_DESIGN_DETAILS.smileStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  selectedStyle === style.id
                    ? 'bg-cyan-50 border-cyan-500 shadow-md text-slate-900 scale-105'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <p className="font-bold text-sm text-slate-900">{style.name}</p>
                <span className="text-[10px] text-cyan-700 block mt-1 font-semibold">{style.tag}</span>
              </button>
            ))}
          </div>

          {/* Detailed Selected Style Card */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                    Aesthetic Profile
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 font-semibold">
                    {currentStyleObj.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
                  {currentStyleObj.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentStyleObj.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-500 block uppercase tracking-wider">
                    Anatomical Highlights:
                  </span>
                  {currentStyleObj.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-3">
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-cyan-600/25"
                  >
                    <span>Request This Style</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenSimulator}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-cyan-800 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Test on Simulator</span>
                  </button>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-square">
                  <img
                    src="/images/smile-after.jpg"
                    alt={currentStyleObj.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-[11px] font-bold shadow-sm">
                      Modeled by Dental House Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="relative py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              Why Choose Dental House
            </span>
            <h2 className="text-3xl font-outfit font-black text-slate-900">
              Traditional Dentistry vs Digital Smile Design
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              See why discerning patients in Jaipur trust Dr. Priyanka Katewa's modern methodology
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 sm:p-5 font-bold text-slate-600 uppercase tracking-wider text-xs">Aesthetic Criteria</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-500 uppercase tracking-wider text-xs">Standard Clinic</th>
                  <th className="p-4 sm:p-5 font-bold text-cyan-800 uppercase tracking-wider text-xs bg-cyan-50 border-l border-cyan-200">
                    Dental House (Dr. Priyanka)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <div className="flex items-start space-x-2">
                        <CloseIcon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 bg-cyan-50/40 border-l border-cyan-200 font-medium">
                      <div className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.dsd}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= CANDIDATE CHECKLIST & CTA ================= */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-50 via-sky-50 to-indigo-50 border border-cyan-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                Are You A Candidate?
              </span>
              <h2 className="text-3xl font-outfit font-black text-slate-900">
                Ready to Experience Your Test-Drive Smile?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If you have stained teeth, spacing, chipped enamel, or wish for a luminous Hollywood smile, schedule an in-person 3D scan at Gokul Tower, Kalwar Road, Jaipur.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-700 font-medium">
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Stain-Proof Porcelain</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>100% Painless Tech</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>2 Visits Only</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>15+ Year Guarantee</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/30 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 3D Smile Consultation</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Dr. Priyanka</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
