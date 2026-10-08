import React from 'react';
import { Utensils, Coffee, Users } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/cafeData';

export const ExperienceSection: React.FC = () => {
  const icons = [
    <Utensils key="utensils" className="w-5 h-5 text-[#3C4E3D]" />,
    <Coffee key="coffee" className="w-5 h-5 text-[#3C4E3D]" />,
    <Users key="users" className="w-5 h-5 text-[#3C4E3D]" />,
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#E6DCD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E6DCD2] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4EFEB] flex items-center justify-center mb-6 group-hover:bg-[#E6DCD2] transition-colors">
                  {icons[index]}
                </div>

                <h3 className="font-serif-display text-2xl text-[#2C221A] font-semibold mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#423429] font-medium leading-relaxed mb-3">
                  {pillar.description}
                </p>

                <p className="text-xs sm:text-sm text-[#826E5D] leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F1ECE6] flex items-center justify-between text-xs text-[#6B7F6D] font-medium">
                <span>{pillar.metric}</span>
                <span className="text-[#AB9785]">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
