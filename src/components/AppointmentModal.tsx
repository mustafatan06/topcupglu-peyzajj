import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, SITE_INFO } from '../data/siteData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = ''
}) => {
  const [service, setService] = useState(defaultService || 'Bahçe Bakımı');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Mamak');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 - 13:00 (Öğleden Önce)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'TP-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-100">
        
        {/* Top Header */}
        <div className="bg-[#1b4332] text-white p-6 relative">
          <button
            onClick={resetForm}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-white"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Online Keşif ve Randevu</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            Ücretsiz Bahçe Keşfi Alın
          </h3>
          <p className="text-emerald-100/80 text-xs sm:text-sm mt-1">
            Mülkünüzü yerinde inceleyip en uygun fiyatlandırma ve uygulama planını hazırlayalım.
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">
                Randevunuz Alındı!
              </h4>
              <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 py-1.5 px-3 rounded-full inline-block">
                Randevu Takip Kodu: {bookingRef}
              </p>
              <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
                Sayın <strong>{name}</strong>, <strong>{district}</strong> bölgesindeki bahçeniz için keşif talebiniz oluşturulmuştur. 
                Temsilcimiz <strong>{phone}</strong> numarasından sizinle randevu saatini teyit edecektir.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl transition text-sm shadow-md"
                >
                  Tamam
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Talep Ettiğiniz Hizmet
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Tüm Bahçe Yenileme (Komple)">Tüm Bahçe Yenileme (Komple)</option>
                  <option value="Diğer">Diğer Hizmet</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Adınız & Soyadınız *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Telefon Numaranız *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    İlçe / Bölge
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  >
                    <option value="Mamak">Mamak</option>
                    <option value="Çankaya">Çankaya</option>
                    <option value="Gölbaşı">Gölbaşı</option>
                    <option value="İncek / Çayyolu">İncek / Çayyolu</option>
                    <option value="Yenimahalle">Yenimahalle</option>
                    <option value="Etimesgut">Etimesgut</option>
                    <option value="Keçiören">Keçiören</option>
                    <option value="Altındağ">Altındağ</option>
                    <option value="Ankara Dışı / Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tercih Edilen Tarih
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Uygun Zaman Dilimi
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    '10:00 - 13:00 (Öğleden Önce)',
                    '14:00 - 17:00 (Öğleden Sonra)',
                    '17:00 - 19:00 (Akşamüstü)',
                    'Hafta Sonu Randevusu'
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2 rounded-lg border text-left font-medium transition ${
                        timeSlot === slot
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                          : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Ek Notlar (İsteğe Bağlı)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Bahçe alanı kaç m², otomatik sulama var mı, özel istekler..."
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl transition text-sm shadow-md"
                >
                  Keşif Randevusunu Onayla
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-3 text-stone-500 hover:text-stone-800 text-sm font-medium"
                >
                  İptal
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
