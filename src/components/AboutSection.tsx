import React from 'react';
import { ArrowRight, MapPin, Coffee, Users } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const AboutSection: React.FC = () => {
  const scrollToVisit = () => {
    const el = document.querySelector('#visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Subtle backframe */}
              <div className="absolute -inset-2 bg-[#E6DCD2]/50 rounded-3xl -z-10 transform -rotate-1"></div>

              <div className="overflow-hidden rounded-2xl shadow-lg border border-[#E6DCD2] bg-[#FFFFFF]">
                <img
                  src="/src/assets/images/about_delibros_corner_1791432244466.jpg"
                  alt="Cozy sunlit dining nook at Deli Bros Cafe in Titiwangsa Sentral"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Quiet caption */}
                <div className="p-4 bg-[#FFFFFF] border-t border-[#F1ECE6] flex items-center justify-between text-xs text-[#826E5D]">
                  <span className="font-medium text-[#423429]">A relaxed corner for slow mornings</span>
                  <span>Titiwangsa Sentral, KL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#6B7F6D] font-semibold">
                About The Café
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2C221A] tracking-tight text-balance">
                Your Local Spot in Titiwangsa
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#5E4C3D] leading-relaxed">
              Deli Bros Cafe is a neighbourhood café in Kuala Lumpur, bringing together good food, coffee and a relaxed atmosphere in one welcoming space.
            </p>

            <p className="text-sm sm:text-base text-[#5E4C3D] leading-relaxed">
              Conveniently located along Jalan Pahang right by Titiwangsa Sentral, we are created for easy everyday visits — whether you are stopping by for a comforting breakfast, stepping out for a midday lunch, or unwinding with a freshly brewed cup of coffee.
            </p>

            {/* Quiet feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#E6DCD2]">
                <div className="font-serif-display text-lg font-semibold text-[#2C221A] mb-1">Toasted Melts</div>
                <div className="text-xs text-[#5E4C3D]">Signature Tuna & Chicken Cheese Melts from RM 17.90.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F4EFEB] border border-[#E6DCD2]">
                <div className="font-serif-display text-lg font-semibold text-[#2C221A] mb-1">Italian Brews</div>
                <div className="text-xs text-[#5E4C3D]">Single-origin roasts from RM 8 & Pure Japanese Matcha.</div>
              </div>
            </div>

            {/* CTA: Come Say Hello */}
            <div className="pt-2">
              <button
                onClick={scrollToVisit}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#2C221A] hover:text-[#423429] underline decoration-2 underline-offset-4 hover:decoration-[#826E5D] transition-all cursor-pointer group"
              >
                <span>Come Say Hello</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
