import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  X, 
  Phone, 
  Calendar,
  Shield, 
  ChevronRight,
  Info
} from 'lucide-react';
import { SERVICES, ServiceItem, SITE_INFO } from '../data/siteData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  selectedService: ServiceItem | null;
  setSelectedService: (service: ServiceItem | null) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  selectedService,
  setSelectedService
}) => {
  const [modalService, setModalService] = useState<ServiceItem | null>(selectedService);

  const handleOpenDetail = (s: ServiceItem) => {
    setModalService(s);
  };

  const handleCloseDetail = () => {
    setModalService(null);
    setSelectedService(null);
  };

  return (
    <section id="services-section" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs sm:text-sm font-bold uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Faaliyet Alanlarımız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Bahçe düzenlemesinden periyodik bakıma, canlı mikrobiyal gübrelemeden inşaat sonrası temizliğe kadar 
            Ankara genelinde anahtar teslim profesyonel çözümler sunuyoruz.
          </p>
        </div>

        {/* 9 Services Grid - Matches Wix Website Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/70 flex flex-col group"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  {service.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-emerald-700/90 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors group/btn"
                  >
                    <span>Detaylı İncele</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs bg-stone-100 hover:bg-emerald-50 text-stone-700 hover:text-emerald-700 px-3 py-1.5 rounded-lg font-medium transition-colors"
                  >
                    Keşif İste
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Consultation Banner beneath services */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 to-[#1b4332] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Bahçeniz veya Mülkünüz İçin Fiyat Teklifi Alın
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Uzman ekibimiz adresinize gelerek ücretsiz keşif yapsın, ihtiyaçlarınıza en uygun bakım veya uygulama planını çıkarsın.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-center"
              >
                Ücretsiz Keşif Talebi
              </button>
              <a
                href={`tel:${SITE_INFO.phone1Raw}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-xl transition-all text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>{SITE_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Detailed Service Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            {/* Modal Header with Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-stone-900">
              <img
                src={modalService.image}
                alt={modalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <button
                onClick={handleCloseDetail}
                className="absolute top-4 right-4 bg-stone-900/80 hover:bg-stone-900 text-white p-2 rounded-full backdrop-blur-xs transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1 block">
                  Topçuoğlu Peyzaj Hizmet Detayı
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {modalService.title}
                </h3>
                <p className="text-emerald-200 text-sm mt-1">
                  {modalService.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Hizmet Tanımı
                </h4>
                <p className="text-stone-700 text-base leading-relaxed">
                  {modalService.description}
                </p>
              </div>

              {/* Details Bullet List */}
              {modalService.details && modalService.details.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                    Hizmet Detayları ve Uygulama Adımları
                  </h4>
                  <ul className="space-y-2.5">
                    {modalService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-stone-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 mr-2.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Points if applicable */}
              {modalService.whyPoints && modalService.whyPoints.length > 0 && (
                <div className="bg-emerald-50/60 rounded-2xl p-4 sm:p-5 border border-emerald-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                    Neden Bu Hizmeti Almalısınız?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {modalService.whyPoints.map((pt, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-emerald-100/60 shadow-xs">
                        <h5 className="font-bold text-stone-900 text-xs mb-1 text-emerald-800">{pt.title}</h5>
                        <p className="text-xs text-stone-600 leading-normal">{pt.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical / Security Notes */}
              {(modalService.technical || modalService.security) && (
                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs text-stone-600 space-y-2">
                  {modalService.technical && (
                    <div className="flex items-start">
                      <Info className="w-4 h-4 text-emerald-700 mr-2 mt-0.5 shrink-0" />
                      <span><strong>Teknik Yaklaşım:</strong> {modalService.technical}</span>
                    </div>
                  )}
                  {modalService.security && (
                    <div className="flex items-start">
                      <Shield className="w-4 h-4 text-emerald-700 mr-2 mt-0.5 shrink-0" />
                      <span><strong>Güvenlik ve Standartlar:</strong> {modalService.security}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Customer Advantage Quote */}
              {modalService.advantage && (
                <div className="border-l-4 border-emerald-600 pl-4 py-2 italic text-sm text-emerald-950 bg-emerald-50/40 rounded-r-lg font-medium">
                  "{modalService.advantage}"
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${SITE_INFO.phone1Raw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{SITE_INFO.phone1}</span>
                </a>

                <div className="w-full sm:w-auto flex items-center gap-2">
                  <button
                    onClick={() => {
                      handleCloseDetail();
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-xs"
                  >
                    Ücretsiz Keşif İste
                  </button>
                  <button
                    onClick={handleCloseDetail}
                    className="px-4 py-3 text-stone-500 hover:text-stone-800 text-sm font-medium"
                  >
                    Kapat
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
