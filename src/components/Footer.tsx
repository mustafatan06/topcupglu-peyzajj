import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { SITE_INFO, SERVICES, ServiceItem } from '../data/siteData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenPrivacy,
  onOpenCookies,
  onSelectService
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center p-2 border border-emerald-600/40">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-300 stroke-current stroke-2">
                  <path d="M12 2L15 8L21 9L16.5 13.5L18 20L12 16.5L6 20L7.5 13.5L3 9L9 8L12 2Z" fill="rgba(52, 211, 153, 0.2)" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  TOPÇUOĞLU
                </span>
                <span className="text-[10px] tracking-[0.25em] font-semibold text-emerald-400 uppercase block -mt-1">
                  PEYZAJ & BAHÇE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Doğanın estetiğini modern yaşamın konforuyla birleştiren Topçuoğlu Peyzaj, Ankara genelinde peyzaj mimarlığı, rulo çim serimi, ağaç budama, mikrobiyal gübreleme ve profesyonel temizlik hizmetleri sunmaktadır.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p className="font-semibold text-emerald-400">{SITE_INFO.tagline}</p>
              <p>Mamak, Çankaya, Gölbaşı ve tüm Ankara ilçelerine profesyonel hizmet.</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Hızlı Menü
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors">
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors">
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-emerald-400 transition-colors">
                  Galeri
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('appointment')} className="hover:text-emerald-400 transition-colors">
                  Online Randevu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-emerald-400 transition-colors">
                  Blog & Rehber
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors">
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => {
                      onSelectService(s);
                      handleNav('services');
                    }}
                    className="hover:text-emerald-300 transition-colors text-left"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              İletişim Bilgileri
            </h4>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <a 
                href={`tel:${SITE_INFO.phone1Raw}`} 
                className="flex items-center text-stone-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0" />
                <span className="font-semibold">{SITE_INFO.phone1}</span>
              </a>

              <a 
                href={`tel:${SITE_INFO.phone2Raw}`} 
                className="flex items-center text-stone-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0" />
                <span>{SITE_INFO.phone2}</span>
              </a>

              <div className="flex items-start text-stone-300">
                <MapPin className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SITE_INFO.address}</span>
              </div>

              <div className="flex items-center text-stone-300">
                <Clock className="w-3.5 h-3.5 mr-2 text-emerald-400 shrink-0" />
                <span>{SITE_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 text-xs text-stone-400 hover:text-white bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-lg transition-colors"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Yukarı Çık</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Exact Wix Match */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Creator Credit & Year - EXACT WIX STRING */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left">
            <span>{SITE_INFO.creatorCredit}</span>
            <span className="hidden sm:inline">•</span>
            <span>{SITE_INFO.copyright}</span>
          </div>

          {/* Legal Policies - EXACT WIX LINKS */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenPrivacy}
              className="text-stone-400 hover:text-emerald-400 transition-colors"
            >
              Gizlilik Politikası
            </button>
            <span>•</span>
            <button
              onClick={onOpenCookies}
              className="text-stone-400 hover:text-emerald-400 transition-colors"
            >
              Çerez Politikası
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
