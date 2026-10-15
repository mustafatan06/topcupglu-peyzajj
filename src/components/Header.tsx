import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { SITE_INFO, SERVICES, ServiceItem } from '../data/siteData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onSelectService
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (s: ServiceItem) => {
    onSelectService(s);
    setActiveTab('services');
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      {/* Top Banner Bar - Wix Exact Match */}
      <div className="bg-[#1b4332] text-white text-xs py-2 px-4 border-b border-[#2d6a4f]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-emerald-200 font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-300 animate-pulse" />
              {SITE_INFO.tagline}
            </span>
            <span className="flex items-center text-emerald-100/90">
              <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-300" />
              {SITE_INFO.city}
            </span>
            <span className="flex items-center text-emerald-100/90">
              <Clock className="w-3.5 h-3.5 mr-1 text-emerald-300" />
              08:00 - 19:00
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-3 py-1 rounded transition-colors text-xs flex items-center shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 mr-1" />
              Ücretsiz Keşif
            </button>
            <a 
              href={`tel:${SITE_INFO.phone1Raw}`} 
              className="flex items-center font-semibold text-white hover:text-emerald-200 transition-colors tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-300" />
              {SITE_INFO.phone1}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer group select-none"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-green-950 flex items-center justify-center shadow-md p-2 border border-emerald-600/30">
                {/* SVG Leaf / Landscape Brand Icon */}
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-emerald-300 stroke-current stroke-2">
                  <path d="M12 2L15 8L21 9L16.5 13.5L18 20L12 16.5L6 20L7.5 13.5L3 9L9 8L12 2Z" fill="rgba(52, 211, 153, 0.2)" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  TOPÇUOĞLU
                </span>
                <span className="text-xs tracking-[0.25em] font-semibold text-emerald-700 uppercase -mt-1">
                  PEYZAJ & BAHÇE
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'home'
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              Ana Sayfa
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'about'
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              Hakkımızda
            </button>

            {/* Hizmetler Dropdown */}
            <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                onClick={() => handleNavClick('services')}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg inline-flex items-center transition-all ${
                  activeTab === 'services'
                    ? 'text-emerald-800 bg-emerald-50 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
                }`}
              >
                <span>Hizmetler</span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-stone-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
                    Faaliyet Alanlarımız
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleServiceClick(s)}
                        className="text-left w-full px-3 py-2 text-sm rounded-lg hover:bg-emerald-50 hover:text-emerald-900 transition-colors flex items-center justify-between group"
                      >
                        <span className="font-medium text-stone-700 group-hover:text-emerald-800">
                          {s.title}
                        </span>
                        <span className="text-emerald-600 opacity-0 group-hover:opacity-100 text-xs">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'gallery'
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              Galeri
            </button>

            <button
              onClick={() => handleNavClick('appointment')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'appointment'
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              Online Randevu
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'blog'
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'contact'
                  ? 'text-emerald-800 bg-emerald-50 font-semibold'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              İletişim
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${SITE_INFO.phone1Raw}`}
              className="inline-flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Hemen Ara</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href={`tel:${SITE_INFO.phone1Raw}`}
              className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              aria-label="Telefon"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-700 hover:text-emerald-800 hover:bg-stone-100"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between py-2 border-b border-stone-100 text-xs text-stone-500">
            <span>Ankara Mamak & Çevresi</span>
            <span className="font-semibold text-emerald-700">{SITE_INFO.phone1}</span>
          </div>

          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'home' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-stone-700'
            }`}
          >
            Ana Sayfa
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'about' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-stone-700'
            }`}
          >
            Hakkımızda
          </button>

          <div className="space-y-1">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 flex items-center justify-between"
            >
              <span>Hizmetlerimiz</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-stone-50 rounded-lg">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceClick(s)}
                    className="w-full text-left px-2.5 py-1.5 text-xs text-stone-600 hover:text-emerald-800 font-medium"
                  >
                    • {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('gallery')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'gallery' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-stone-700'
            }`}
          >
            Galeri
          </button>

          <button
            onClick={() => handleNavClick('appointment')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'appointment' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-stone-700'
            }`}
          >
            Online Randevu
          </button>

          <button
            onClick={() => handleNavClick('blog')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'blog' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-stone-700'
            }`}
          >
            Blog & Rehber
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              activeTab === 'contact' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-stone-700'
            }`}
          >
            İletişim
          </button>

          <div className="pt-3 border-t border-stone-200 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-semibold text-center shadow-xs"
            >
              Ücretsiz Keşif Formu
            </button>
            <a
              href={`tel:${SITE_INFO.phone1Raw}`}
              className="w-full py-2.5 bg-emerald-800 text-white rounded-lg text-sm font-semibold flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{SITE_INFO.phone1}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
