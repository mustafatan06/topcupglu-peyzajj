import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/siteData';

interface BlogSectionProps {
  onOpenBooking: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-emerald-700 text-xs sm:text-sm font-bold uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full mb-3">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Nasıl Yapılır & Bilgi Köşesi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Peyzaj ve Bahçe Blogu
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Bahçenizin dört mevsim canlı kalması için uzmanlarımızdan pratik ipuçları, bakım rehberleri ve peyzaj trendleri.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col cursor-pointer group"
            >
              <div className="relative h-52 overflow-hidden bg-stone-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-stone-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>Yazıyı Oku</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-stone-900/80 hover:bg-stone-900 text-white p-2.5 rounded-full transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest block mb-1">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl font-bold leading-tight">
                  {selectedPost.title}
                </h3>
                <div className="flex items-center space-x-3 text-xs text-stone-300 mt-2">
                  <span>{selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx} className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Bu Konuda Uzman Desteği Alın
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-stone-500 hover:text-stone-800 text-sm font-medium"
                >
                  Kapat
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
