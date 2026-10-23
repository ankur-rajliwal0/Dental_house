import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  Calendar, 
  Phone, 
  Check, 
  GraduationCap, 
  Clock, 
  MapPin 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

export default function AboutPage({ onOpenBooking }) {
  const credentials = [
    { title: "B.D.S. Degree", subtitle: "Mahatma Gandhi Dental College & Hospital, Jaipur", icon: GraduationCap },
    { title: "10+ Years Clinical Mastery", subtitle: "Specialized in Aesthetic Smile Transformations", icon: Clock },
    { title: "Digital Smile Design Certified", subtitle: "Advanced Computer-Guided Facial Mapping", icon: Sparkles },
    { title: "Class-B Sterilization Standard", subtitle: "International Hospital Infection Control Protocol", icon: ShieldCheck },
  ];

  const clinicHighlights = [
    "Ultra-hygienic facility located at Shop No. 1, Gokul Tower, Kalwar Road",
    "Individual sterilized instrument pouches opened exclusively in front of each patient",
    "Painless local anesthesia delivery and fear-free clinical atmosphere",
    "Pre-treatment 3D digital smile simulation before any procedure begins",
    "Dedicated post-treatment follow-up and lifetime oral care guidance",
  ];

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Page Header */}
      <section className="relative pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-cyan-600" />
            <span>Meet Your Smile Architect</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-outfit font-black text-slate-900 tracking-tight">
            About Dr. Priyanka Katewa & Dental House
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Combining medical precision, artistic finesse, and empathetic care to deliver painless, life-changing dental aesthetics in Jaipur.
          </p>
        </div>
      </section>

      {/* Main Doctor Bio Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <img
                src="/images/dr-priyanka.jpg"
                alt="Dr. Priyanka Katewa B.D.S. Mahatma Gandhi College"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-lg">
                <p className="text-lg font-outfit font-bold text-slate-900">Dr. Priyanka Katewa</p>
                <p className="text-xs text-cyan-700 font-semibold">B.D.S. (Mahatma Gandhi College)</p>
                <p className="text-[11px] text-slate-500 mt-1">Founder & Chief Cosmetic Dental Surgeon</p>
              </div>
            </div>
          </div>

          {/* Bio Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
                "Every patient deserves a smile they never have to hide."
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dr. Priyanka Katewa completed her Bachelor of Dental Surgery (B.D.S.) at the prestigious <strong>Mahatma Gandhi Dental College & Hospital</strong>. Driven by a deep passion for aesthetic harmony and restorative medicine, she established <strong>Dental House</strong> at Gokul Tower, Kalwar Road, Jaipur, to deliver world-class dental care in a soothing, fear-free environment.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over the past 10+ years, Dr. Priyanka has helped over 2,400+ patients in Jaipur regain their biting comfort and social confidence. She is particularly celebrated for her work in <strong>Digital Smile Design (Smile Makeovers)</strong>, where she custom crafts porcelain veneers with lifelike light refraction that perfectly complements each patient's facial contour and skin tone.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {credentials.map((cred, idx) => {
                const IconComponent = cred.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{cred.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{cred.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/25 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Dr. Priyanka</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Direct Call: {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Clinic Ambience & Sterilization */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              The Dental House Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
              Hygiene, Technology & Comfort
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Experience the difference of a clinic built around your safety and serenity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/images/clinic-interior.jpg"
                alt="Clinic sterilization and operatory"
                className="w-full h-auto aspect-[16/10] object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-outfit font-bold text-slate-900">
                Why Patients Trust Dental House Jaipur
              </h3>
              <ul className="space-y-3">
                {clinicHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs text-slate-700">
                <span className="font-bold text-cyan-800 block mb-1">Location Details:</span>
                Shop No. 1, Gokul Tower, Near SBI Bank, Kardhani, Kalwar Road, Jaipur (Rajasthan).
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
