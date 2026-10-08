import React from 'react';
import { Navigation, Utensils, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface MobileStickyBarProps {
  onOpenMenu: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenMenu }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E6DCD2] px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Directions */}
        <a
          href={CAFE_INFO.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FFFFFF] border border-[#E6DCD2] text-[#2C221A] active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#3C4E3D] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">Directions</span>
        </a>

        {/* View Menu */}
        <button
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#2C221A] text-[#FAF7F2] active:scale-95 transition-transform cursor-pointer shadow-xs"
        >
          <Utensils className="w-4 h-4 text-amber-200 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">View Menu</span>
        </button>

        {/* WhatsApp */}
        <a
          href={CAFE_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#FFFFFF] border border-[#E6DCD2] text-[#2C221A] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
