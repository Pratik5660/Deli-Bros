import React from 'react';
import { MapPin, ArrowRight, Coffee, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface HeroSectionProps {
  onOpenMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMenu }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Location Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#6B7F6D] tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-[#3C4E3D]"></span>
            <span className="uppercase tracking-widest font-semibold">{CAFE_INFO.neighbourhood}</span>
          </div>
          <span className="text-[#AB9785] text-xs">·</span>
          <span className="text-xs text-[#826E5D]">Jalan Pahang</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#2C221A] leading-[1.12] tracking-tight text-balance">
              Good Food.
              <br />
              Good Coffee.
              <br />
              <span className="italic font-normal text-[#5E4C3D]">Good Times.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5E4C3D] leading-relaxed max-w-xl">
              {CAFE_INFO.subtagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenMenu}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FAF7F2] bg-[#2C221A] hover:bg-[#423429] rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('#visit')}
                className="px-6 py-3.5 text-sm sm:text-base font-medium text-[#2C221A] bg-[#FFFFFF] hover:bg-[#F1ECE6] border border-[#E6DCD2] rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#826E5D]" />
                <span>Find Us</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 border-t border-[#E8DCCF]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#826E5D]">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#3C4E3D]" />
                <span>Artisan Espresso & Bakes</span>
              </div>
              <span className="text-[#D8CCC0] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3C4E3D]" />
                <span>All-Day Casual Dining</span>
              </div>
              <span className="text-[#D8CCC0] hidden sm:inline">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3C4E3D]" />
                <span>Near Titiwangsa Sentral</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer Decorative Frame with Warm Offset */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E6DCD2] to-[#FAF7F2] rounded-3xl -z-10 opacity-70 transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#E6DCD2] bg-[#FFFFFF]">
                <img
                  src="/src/assets/images/hero_delibros_cafe_1791432229232.jpg"
                  alt="Deli Bros Cafe welcoming interior atmosphere in Titiwangsa Sentral Kuala Lumpur"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle Image Bottom Scrim with Address Tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[#E6DCD2]/90 font-medium">Toasted Cheese Melts · Italian Roasts</p>
                    <p className="font-serif-display text-lg sm:text-xl text-white font-medium">100, Jalan Pahang, Kuala Lumpur</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-white/95 border border-white/30 whitespace-nowrap">
                      Melts from RM 17.90
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-amber-400/90 text-black font-semibold rounded-md whitespace-nowrap">
                      Americano RM 8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
