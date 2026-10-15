import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ABOUT_TEXT, SITE_INFO } from '../data/siteData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full">
            Kurumsal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3 mb-4">
            Hakkımızda
          </h2>
          <p className="text-stone-500 text-base sm:text-lg">
            Doğanın estetiğini modern bilimin ilkeleriyle buluşturan peyzaj ve açık alan yönetimi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src="https://static.wixstatic.com/media/e732c3_b9363eaa18bf44f8a60b3c1824550eeb~mv2.jpg/v1/fill/w_700,h_550,al_c,q_85,enc_avif,quality_auto/Gemini_Generated_Image_irg3yhirg3yhirg3_edited.jpg"
                alt="Topçuoğlu Peyzaj Bahçe Bakımı"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">
                  Ankara Peyzaj Mühendisliği
                </span>
                <p className="font-bold text-lg">Yaşayan Mekanlar İnşa Ediyoruz</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 h-40">
                <img
                  src="https://static.wixstatic.com/media/e732c3_052f263475344430b65b088405524540~mv2.jpg/v1/fill/w_400,h_300,al_c,q_85,enc_avif,quality_auto/e732c3_052f263475344430b65b088405524540~mv2.jpg"
                  alt="Mikrobiyal Canlandırma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-stone-200 h-40">
                <img
                  src="https://static.wixstatic.com/media/e732c3_c33a326197b842d78f73ecd14e7a9a74~mv2.png/v1/fit/w_400,h_300,q_85,enc_avif,quality_auto/e732c3_c33a326197b842d78f73ecd14e7a9a74~mv2.png"
                  alt="Hazır Çim Uygulaması"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content - EXACT MATCH TO WIX PAGE */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              {ABOUT_TEXT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-100/80">
                <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm mb-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  <span>Misyonumuz</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {ABOUT_TEXT.mission}
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                <div className="flex items-center space-x-2 text-stone-900 font-bold text-sm mb-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <span>Vizyonumuz</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {ABOUT_TEXT.vision}
                </p>
              </div>
            </div>

            {/* Closing motto */}
            <div className="p-4 bg-emerald-950 text-white rounded-2xl border border-emerald-900 flex items-center space-x-4">
              <Sparkles className="w-6 h-6 text-emerald-300 shrink-0" />
              <p className="text-xs sm:text-sm italic font-medium leading-normal text-emerald-100">
                "{ABOUT_TEXT.closing}"
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
              >
                Bizimle İletişime Geçin
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
