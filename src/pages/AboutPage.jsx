import React, { useState } from 'react';
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
  MapPin,
  BadgeCheck,
  FileCheck,
  Maximize2,
  X
} from 'lucide-react';
import { CLINIC_INFO, DOCTOR_CREDENTIALS } from '../data/dentalData';
import ClinicTourGallery from '../components/ClinicTourGallery';

export default function AboutPage({ onOpenBooking }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const credentials = [
    { 
      title: "State Dental Council Reg. A-6352", 
      subtitle: "Registered Dental Surgeon (Dentists Act, 1948)", 
      icon: BadgeCheck,
      badge: "Govt. Registered" 
    },
    { 
      title: "FAAD Fellowship (Indo-German Board)", 
      subtitle: "In collab. with Univ. Medicine Greifswald, Germany", 
      icon: Award,
      badge: "International Fellow" 
    },
    { 
      title: "Digital Smile Design Certified", 
      subtitle: "ILAMED 3D Computer-Guided Facial Aesthetics", 
      icon: Sparkles,
      badge: "DSD Certified" 
    },
    { 
      title: "Soft Tissue Laser in Dentistry", 
      subtitle: "ILAMED Diode Laser Gum Aesthetics Certification", 
      icon: FileCheck,
      badge: "Laser Certified" 
    },
    { 
      title: "B.D.S. Dental Surgery Graduate", 
      subtitle: "Mahatma Gandhi Dental College & Hospital, Jaipur", 
      icon: GraduationCap,
      badge: "B.D.S. Degree" 
    },
    { 
      title: "10+ Years of Clinical Mastery", 
      subtitle: "Over 2,400+ Successful Patient Treatments", 
      icon: Clock,
      badge: "10+ Years" 
    },
  ];

  const clinicHighlights = [
    "Ultra-hygienic facility located at Shop No. 1, Gokul Tower, Kalwar Road",
    "Individual sterilized instrument pouches opened exclusively in front of each patient",
    "Gentle local anesthesia delivery and reassuring clinical atmosphere",
    "Pre-treatment 3D digital smile simulation before any procedure begins",
    "Dedicated post-treatment follow-up and comprehensive oral care guidance",
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
            Combining medical precision, artistic finesse, and empathetic care to deliver gentle, life-changing dental aesthetics in Jaipur.
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
                alt="Dr. Priyanka Katewa B.D.S. FAAD Mahatma Gandhi College"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-lg">
                <p className="text-lg font-outfit font-bold text-slate-900">Dr. Priyanka Katewa</p>
                <p className="text-xs text-cyan-700 font-semibold">B.D.S. • FAAD (Fellow in Aesthetic Dentistry)</p>
                <p className="text-[11px] text-slate-600 mt-1 font-medium">State Dental Council Reg. No. A-6352</p>
              </div>
            </div>
          </div>

          {/* Bio Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>State Dental Council Reg. No. A-6352</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
                "Every patient deserves a smile they never have to hide."
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Dr. Priyanka Katewa</strong> graduated with a Bachelor of Dental Surgery (B.D.S.) from the prestigious <strong>Mahatma Gandhi Dental College & Hospital, Jaipur</strong>. She is registered with the <strong>State Dental Council (Registration No. A-6352)</strong> under the Dentists Act, 1948.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                She earned a prestigious <strong>Fellowship in Advanced Aesthetic Dentistry (FAAD)</strong> awarded by the <strong>Indo-German Board of Aesthetic Medicine & Surgery</strong> in collaboration with <strong>University Medicine Greifswald, Germany</strong> (Department of Maxillo-Facial & Plastic Surgery).
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Additionally, Dr. Priyanka holds certified clinical training in <strong>Digital Smile Design (DSD) & Facial Aesthetics</strong> as well as <strong>Soft Tissue Laser in Dentistry</strong> from the <strong>Institute of Laser & Aesthetic Medicine (ILAMED Dental)</strong>. Over the past 10+ years, she has transformed over 2,400+ smiles with ethical, conservative, and cutting-edge dentistry at Dental House, Gokul Tower, Jaipur.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {credentials.map((cred, idx) => {
                const IconComponent = cred.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3 hover:border-cyan-400 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-xs font-bold text-slate-900 truncate">{cred.title}</p>
                      </div>
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
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-600/25 flex items-center space-x-2 hover:opacity-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Dr. Priyanka</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Direct Call: {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VERIFIED CERTIFICATES & ACCREDITATIONS SECTION ================= */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            <BadgeCheck className="w-4 h-4 text-cyan-600" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-outfit font-black text-slate-900">
            Official Accreditations & Certifications
          </h2>
          <p className="text-sm text-slate-600">
            Formal registrations, international fellowship diplomas, and specialized clinical certifications awarded to Dr. Priyanka Katewa.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTOR_CREDENTIALS.filter(c => c.image).map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Certificate Thumbnail Preview */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center space-x-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-cyan-600" />
                      <span>View Certificate</span>
                    </span>
                  </div>

                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {cert.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <div className="inline-block px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 text-[10px] font-bold">
                    {cert.credential}
                  </div>
                  <h3 className="font-outfit font-bold text-sm text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-cyan-700 font-semibold">
                    {cert.authority}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                    {cert.detail}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  type="button"
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 hover:text-cyan-800 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Original Document</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATE LIGHTBOX MODAL ================= */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 block">
                  {selectedCert.badge}
                </span>
                <h3 className="text-base sm:text-lg font-outfit font-bold text-slate-900">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="overflow-y-auto p-4 sm:p-6 flex-1 bg-slate-100 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-lg border border-slate-300 bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="font-bold text-slate-900">{selectedCert.authority}</p>
                <p className="text-slate-500 text-[11px] mt-0.5">{selectedCert.detail}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 self-end sm:self-auto"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clinic Ambience & Real Facilities Showcase */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                The Dental House Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-outfit font-black text-slate-900">
                Hygiene, Technology & Zero-Stress Comfort
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Experience the difference of a clinic built around your safety and serenity. Dr. Priyanka Katewa personally supervises all sterilization and clinical protocols at Gokul Tower.
              </p>

              <ul className="space-y-3 pt-2">
                {clinicHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs text-slate-700">
                <span className="font-bold text-cyan-800 block mb-1">Clinic Address:</span>
                Shop No. 1, Gokul Tower, Near SBI Bank, Kardhani, Kalwar Road, Jaipur (Rajasthan).
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Highlight card with the doctor's consultation suite photo */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group">
                <img
                  src="/images/clinic-consultation-suite.png"
                  alt="Dr. Priyanka Katewa Consultation and Operatory Suite"
                  onError={(e) => { e.target.src = "/images/image copy 4.png"; }}
                  className="w-full h-auto aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold">
                  Dr. Priyanka's Consultation Suite • Shop No. 1, Gokul Tower
                </div>
              </div>
            </div>
          </div>

          {/* Full Interactive Virtual Tour Gallery */}
          <div className="pt-8 border-t border-slate-200">
            <ClinicTourGallery 
              onOpenBooking={onOpenBooking}
              title="Virtual Tour of Dental House Clinic"
              subtitle="Browse through real photographs of our treatment operatory, patient lounge, and front office."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
