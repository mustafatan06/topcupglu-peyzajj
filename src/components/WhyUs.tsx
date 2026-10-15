import React from 'react';
import { Award, Leaf, Clock, CheckCircle2 } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/siteData';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-600" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Exact from Wix */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full">
            Farkımız & Değerlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3 mb-4">
            Neden Biz?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Bahçenizi ve açık alanlarınızı uzman ellere teslim etmeniz için en önemli nedenler:
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-stone-50/80 rounded-2xl p-6 sm:p-8 border border-stone-200/60 hover:border-emerald-500/50 hover:bg-emerald-50/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/50 text-emerald-700 text-xs font-semibold flex items-center">
                <span>Standart Hizmet Garantisi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
