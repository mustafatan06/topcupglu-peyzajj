import React, { useState } from 'react';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/siteData';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const categories = ['Tümü', 'Peyzaj Tasarımı', 'Sert Zemin & Çim', 'Sulama Sistemleri', 'Ağaç Bakımı'];

  const filteredItems = selectedCategory === 'Tümü'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenPhoto = (item: GalleryItem, index: number) => {
    setActivePhoto(item);
    setPhotoIndex(index);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (photoIndex + 1) % filteredItems.length;
    setPhotoIndex(nextIdx);
    setActivePhoto(filteredItems[nextIdx]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (photoIndex - 1 + filteredItems.length) % filteredItems.length;
    setPhotoIndex(prevIdx);
    setActivePhoto(filteredItems[prevIdx]);
  };

  return (
    <section className="py-20 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs sm:text-sm font-bold uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full mb-3">
            <Camera className="w-4 h-4 text-emerald-600" />
            <span>Projelerimiz & Uygulamalarımız</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Uygulama Galerisi
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Ankara genelinde hayata geçirdiğimiz peyzaj, hazır rulo çim serimi, budama ve bahçe düzenleme projelerimizden kareler.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-stone-600 hover:bg-stone-50 hover:text-emerald-700 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenPhoto(item, index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-200/60 aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-base leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center text-xs text-stone-300 mt-2">
                  <ZoomIn className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  <span>Büyütmek için tıklayın</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md text-sm"
          >
            <span>Kendi Bahçeniz İçin Keşif İsteyin</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-700"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption */}
            <div className="p-6 bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                  {activePhoto.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {activePhoto.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  {activePhoto.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setActivePhoto(null);
                  onOpenBooking();
                }}
                className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                Bu Proje Gibi Keşif İste
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
