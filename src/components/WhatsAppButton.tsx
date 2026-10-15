import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(
    'Merhaba, Topçuoğlu Peyzaj web siteniz üzerinden ulaşıyorum. Bahçe keşfi ve hizmetleriniz hakkında bilgi alabilir miyim?'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Quick Call floating button */}
      <a
        href={`tel:${SITE_INFO.phone1Raw}`}
        aria-label="Hemen Ara"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 transition-all hover:scale-105"
      >
        <Phone className="w-5 h-5 animate-bounce" />
        <span className="absolute right-14 bg-stone-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          {SITE_INFO.phone1}
        </span>
      </a>

      {/* WhatsApp Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile Mesaj Gönder"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all hover:scale-105"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        <span className="absolute right-16 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md font-medium">
          WhatsApp'tan Yazın
        </span>
      </a>
    </div>
  );
};
