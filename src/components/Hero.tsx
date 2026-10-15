import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Sprout, Award, Check } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-emerald-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background Photography with High Contrast Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.wixstatic.com/media/e732c3_b9363eaa18bf44f8a60b3c1824550eeb~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85,enc_avif,quality_auto/Gemini_Generated_Image_irg3yhirg3yhirg3_edited.jpg"
          alt="Topçuoğlu Peyzaj Bahçe Tasarımı"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-emerald-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300 text-xs sm:text-sm font-medium tracking-wide">
              Ankara'nın Güvenilir Peyzaj & Bahçe Çözüm Ortağı
            </span>
          </div>

          {/* Heading - EXACT MATCH TO WIX SITE */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Hayalinizdeki Bahçeyi <br />
            <span className="text-emerald-400 underline decoration-emerald-500/50 underline-offset-8">
              İnşa Ediyoruz.
            </span>
          </h1>

          {/* Subheading - EXACT MATCH TO WIX SITE */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Yaşam alanlarınıza estetik dokunuşlar yaparak, doğayı sanatla buluşturuyoruz. 
            Modern tasarım ve doğru bitkilendirme ile bahçenizi yeniden yaratıyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-12">
            <a
              href={`tel:${SITE_INFO.phone1Raw}`}
              className="inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/40 text-base group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Hemen Ara: {SITE_INFO.phone1}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-6 py-4 rounded-xl transition-all backdrop-blur-md text-base"
            >
              <Calendar className="w-5 h-5 text-emerald-300" />
              <span>Ücretsiz Keşif Talebi</span>
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center space-x-2 text-stone-300 hover:text-white px-4 py-3 rounded-xl transition-colors text-sm font-medium"
            >
              <span>Hizmetlerimiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Key Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-stone-300">Uzman & Deneyimli Kadro</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-stone-300">Mikrobiyal Gübreleme</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-stone-300">A'dan Z'ye Tam Çözüm</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-stone-300">Zamanında & Dakik</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
