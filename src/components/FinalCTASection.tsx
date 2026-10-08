import React from 'react';
import { ArrowRight, Navigation, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FinalCTASectionProps {
  onOpenMenu: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenMenu }) => {
  return (
    <section className="py-20 md:py-28 bg-[#2C221A] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#423429] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#1F1712] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#423429]/60 border border-[#5E4C3D] text-xs text-[#E6DCD2]">
          <Coffee className="w-3.5 h-3.5 text-amber-300" />
          <span>Titiwangsa Sentral • Kuala Lumpur</span>
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] tracking-tight text-balance">
          Your Next Coffee Stop?
        </h2>

        <p className="text-base sm:text-xl text-[#E6DCD2] max-w-xl mx-auto leading-relaxed text-balance">
          Good food, good coffee and a good reason to drop by.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenMenu}
            className="px-7 py-3.5 text-sm sm:text-base font-semibold text-[#2C221A] bg-[#FAF7F2] hover:bg-[#FFFFFF] rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
          >
            <span>View Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 text-sm sm:text-base font-semibold text-[#FAF7F2] bg-[#423429] hover:bg-[#5E4C3D] border border-[#5E4C3D] rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-amber-200" />
            <span>Get Directions</span>
          </a>
        </div>

        <div className="pt-8 text-xs text-[#AB9785]">
          <span>100, Jalan Pahang, Titiwangsa Sentral · Walk-ins Always Welcome</span>
        </div>
      </div>
    </section>
  );
};
