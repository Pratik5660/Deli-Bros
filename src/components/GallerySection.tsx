import React, { useState } from 'react';
import { Eye, X, ZoomIn, Info, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F4EFEB]/40 border-t border-[#E6DCD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-[#6B7F6D] font-semibold mb-2">
            Visual Ambiance & Dishes
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2C221A] tracking-tight mb-4">
            The Deli Bros Experience
          </h2>
          <p className="text-base text-[#5E4C3D] leading-relaxed">
            From golden toasted cheese melts to single-origin Italian roasts, Japanese matcha and fresh daily bakes.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#826E5D] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E6DCD2]">
            <Sparkles className="w-3.5 h-3.5 text-[#B86B43]" />
            <span>Click any dish or atmosphere photo to expand full view</span>
          </div>
        </div>

        {/* 6-Card Harmonious Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] border border-[#E6DCD2] cursor-pointer shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Frame */}
              <div className="aspect-4/3 w-full overflow-hidden bg-[#FAF7F2] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/90 backdrop-blur-xs rounded-full text-[#2C221A] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Caption & Category */}
              <div className="p-4 bg-[#FFFFFF] flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-medium text-[#6B7F6D] uppercase tracking-wider mb-1">
                    <span>{item.category}</span>
                    <span className="text-[#AB9785]">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif-display text-lg font-semibold text-[#2C221A] group-hover:text-[#423429] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#F1ECE6] text-xs text-[#826E5D] flex items-center justify-between">
                  <span>Deli Bros Titiwangsa</span>
                  <span className="font-medium text-[#2C221A] group-hover:underline flex items-center gap-1">
                    <span>View photo</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E6DCD2] animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E6DCD2] bg-[#FFFFFF]">
                <div>
                  <span className="text-xs text-[#6B7F6D] font-medium uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#2C221A]">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl text-[#2C221A] hover:bg-[#F1ECE6] transition-colors cursor-pointer"
                  aria-label="Close photo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[72vh] overflow-hidden flex items-center justify-center bg-black/5 p-2">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[68vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="p-4 text-xs text-[#826E5D] bg-[#FFFFFF] border-t border-[#E6DCD2] flex items-center justify-between">
                <span>Deli Bros Cafe · 100, Jalan Pahang, Titiwangsa Sentral</span>
                <span className="font-medium text-[#2C221A]">Fresh Daily</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
