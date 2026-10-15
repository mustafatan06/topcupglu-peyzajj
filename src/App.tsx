import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyUs } from './components/WhyUs';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactFormSection } from './components/ContactFormSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AppointmentModal } from './components/AppointmentModal';
import { LegalModal } from './components/LegalModal';
import { ServiceItem } from './data/siteData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'cookies' | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setActiveTab('services');
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-['Poppins',sans-serif]">
      {/* Global Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
        onSelectService={handleSelectService}
      />

      {/* Main Content Sections based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onOpenBooking={handleOpenBooking}
              onExploreServices={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setActiveTab('services');
              }}
            />
            <ServicesSection
              onOpenBooking={handleOpenBooking}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
            <WhyUs />
            <GallerySection onOpenBooking={handleOpenBooking} />
            <AboutSection onOpenBooking={handleOpenBooking} />
            <BlogSection onOpenBooking={handleOpenBooking} />
            <ContactFormSection />
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-4">
            <AboutSection onOpenBooking={handleOpenBooking} />
            <WhyUs />
            <ContactFormSection />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-4">
            <ServicesSection
              onOpenBooking={handleOpenBooking}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
            <WhyUs />
            <ContactFormSection />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="pt-4">
            <GallerySection onOpenBooking={handleOpenBooking} />
            <ContactFormSection />
          </div>
        )}

        {activeTab === 'appointment' && (
          <div className="py-12 bg-stone-100 min-h-[70vh] flex items-center justify-center">
            <div className="max-w-2xl w-full mx-4 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-200">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Online Randevu
                </span>
                <h1 className="text-3xl font-extrabold text-stone-900 mt-3 mb-2">
                  Ücretsiz Keşif Randevusu Alın
                </h1>
                <p className="text-stone-600 text-sm">
                  Bahçenizin durumunu incelemek ve size özel teklif sunmak için randevu oluşturun.
                </p>
              </div>
              <button
                onClick={handleOpenBooking}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition text-base"
              >
                Randevu Formunu Başlat
              </button>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="pt-4">
            <BlogSection onOpenBooking={handleOpenBooking} />
            <ContactFormSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <ContactFormSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenCookies={() => setLegalModalType('cookies')}
        onSelectService={handleSelectService}
      />

      {/* Floating Action Buttons */}
      <WhatsAppButton />

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService ? selectedService.title : ''}
      />

      {/* Privacy / Cookie Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
