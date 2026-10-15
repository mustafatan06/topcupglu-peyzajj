import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.phone.trim()) {
      setErrorMessage('Lütfen adınızı ve telefon numaranızı eksiksiz giriniz.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column - Matches Wix exact text */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                İletişim & Danışmanlık
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-3">
                Yeni Projenizi <br />
                <span className="text-emerald-400">Birlikte Yapalım</span>
              </h2>
              <p className="text-stone-300 text-base leading-relaxed">
                Evde ücretsiz konsültasyon için formu doldurun veya bizi arayın. 
                Uzman mimar ve bakım ekibimiz en kısa sürede sizinle irtibata geçecektir.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a 
                href={`tel:${SITE_INFO.phone1Raw}`}
                className="flex items-start p-4 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mr-4 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-stone-400 uppercase tracking-wider block">
                    Bizi Arayın (1. Hat)
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {SITE_INFO.phone1}
                  </span>
                </div>
              </a>

              <a 
                href={`tel:${SITE_INFO.phone2Raw}`}
                className="flex items-start p-4 rounded-2xl bg-stone-800/80 hover:bg-stone-800 border border-stone-700/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mr-4 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-stone-400 uppercase tracking-wider block">
                    2. İletişim Hattı
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {SITE_INFO.phone2}
                  </span>
                </div>
              </a>

              <div className="flex items-start p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-stone-400 uppercase tracking-wider block">
                    Adresimiz
                  </span>
                  <p className="text-sm text-stone-200 mt-0.5 leading-relaxed">
                    {SITE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mr-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-stone-400 uppercase tracking-wider block">
                    Çalışma Saatleri
                  </span>
                  <p className="text-sm text-stone-200 mt-0.5">
                    {SITE_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Column - Matches Wix exact form fields */}
          <div className="lg:col-span-7 bg-white text-stone-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-100">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                {/* Exact Wix submission confirmation text */}
                <h3 className="text-2xl font-bold text-stone-900">
                  Gönderdiğiniz için teşekkürler!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Mesajınız ve keşif talebiniz tarafımıza ulaştı. Ekibimiz en kısa sürede verdiğiniz telefon numarası üzerinden sizinle irtibata geçecektir.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg"
                >
                  Yeni Bir Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="border-b border-stone-200 pb-3 mb-4">
                  <h3 className="text-xl font-bold text-stone-900">Ücretsiz Konsültasyon Formu</h3>
                  <p className="text-xs text-stone-500 mt-1">Lütfen bilgilerinizi eksiksiz doldurunuz.</p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Adınız"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Soyadı
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Soyadınız"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@mail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Adres (Mamak / Çankaya / Ankara)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Bahçenizin veya mülkünüzün bulunduğu ilçe / semt"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Konu / Talep Edilen Hizmet
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition bg-white"
                  >
                    <option value="">Seçiniz (Bahçe Bakımı, Peyzaj, İlaçlama vb.)</option>
                    <option value="Bahçe Bakımı">Bahçe Bakımı & Çim Biçme</option>
                    <option value="Peyzaj Düzenleme">Peyzaj Düzenleme & Tasarım</option>
                    <option value="İlaçlama">İç / Dış Mekan İlaçlama</option>
                    <option value="Kanalizasyon Temizliği">Kanalizasyon & Altyapı Temizliği</option>
                    <option value="Mikrobiyal Gübre">Mikrobiyal Gübre Uygulaması</option>
                    <option value="Ağaç Budama">Ağaç Budama & Form Verme</option>
                    <option value="Çatı, Oluk Temizliği">Çatı & Oluk Temizliği</option>
                    <option value="Ofis Temizliği">Ofis Temizliği</option>
                    <option value="İnşaat Temizliği">İnşaat Sonrası Temizlik</option>
                    <option value="Diğer">Diğer Talep</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Mesajınızı buraya yazın...
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Bahçenizin büyüklüğü, mevcut durumu ve özel isteklerinizi belirtebilirsiniz..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Gönderiliyor...' : 'Gönder'}</span>
                  </button>
                  <p className="text-[11px] text-stone-400 text-center mt-2.5">
                    Gönder butonuna basarak kişisel verilerinizin keşif randevusu amacıyla işlenmesini kabul etmiş olursunuz.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
