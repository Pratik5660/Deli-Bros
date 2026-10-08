import React, { useState } from 'react';
import {
  Coffee,
  Utensils,
  Sparkles,
  ArrowRight,
  Flame,
  Check,
  Plus,
  MessageCircle,
  Eye,
  Info,
} from 'lucide-react';
import { MENU_ITEMS, MenuItem, CAFE_INFO } from '../data/cafeData';

interface MenuSectionProps {
  onOpenFullMenu: () => void;
  onAddToCart?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenFullMenu, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'mains' | 'breakfast' | 'coffee' | 'desserts'>('all');
  const [selectedDishPreview, setSelectedDishPreview] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'mains', label: 'Signature Melts & Mains' },
    { id: 'breakfast', label: 'Breakfast & Brunch' },
    { id: 'coffee', label: 'Italian Coffee & Matcha' },
    { id: 'desserts', label: 'Bakery & Desserts' },
  ] as const;

  const filteredItems = activeTab === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeTab);

  const handleQuickWhatsApp = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hi Deli Bros Cafe! I'm interested in ordering the ${item.name} (${item.price}) for takeaway/dine-in.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#F4EFEB]/60 border-y border-[#E6DCD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6DCD2] text-xs font-semibold text-[#6B7F6D] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B86B43]" />
            <span>Official Deli Bros Menu & Pricing</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2C221A] tracking-tight mb-4 text-balance">
            Something Good Is Waiting
          </h2>

          <p className="text-base sm:text-lg text-[#5E4C3D] leading-relaxed text-balance">
            Simple, comforting favourites made for slow mornings, quick lunches and everything in between.
          </p>

          <p className="text-xs text-[#826E5D] mt-2">
            Featuring our iconic toasted cheese melts, single-origin Italian roasts, and artisan bakes. All prices in Malaysian Ringgit (RM).
          </p>
        </div>

        {/* Category Tabs (Segmented Control) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#E6DCD2] shadow-2xs gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#2C221A] text-[#FAF7F2] shadow-xs'
                    : 'text-[#5E4C3D] hover:text-[#2C221A] hover:bg-[#F1ECE6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* High-Fidelity Menu Cards Grid with Real Pictures & Real RM Prices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.slice(0, 9).map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] rounded-2xl border border-[#E6DCD2] shadow-2xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden group"
            >
              {/* Product Card Image Container */}
              <div className="relative aspect-4/3 w-full bg-[#FAF7F2] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.isSignature && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FAF7F2] bg-[#2C221A]/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                      <Flame className="w-3 h-3 text-amber-300" />
                      <span>Signature</span>
                    </span>
                  )}
                  {item.tag && !item.isSignature && (
                    <span className="text-[11px] font-medium text-[#2C221A] bg-[#FFFFFF]/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#E6DCD2] shadow-2xs">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Floating Price Tag */}
                <div className="absolute bottom-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E6DCD2] shadow-sm">
                  <span className="font-serif-display text-base sm:text-lg font-bold text-[#2C221A] tabular-nums tracking-tight">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#6B7F6D] font-medium">
                      {item.category}
                    </span>
                    {item.dietary && item.dietary.length > 0 && (
                      <>
                        <span className="text-[#AB9785] text-xs">·</span>
                        <span className="text-[11px] text-[#826E5D]">{item.dietary.join(', ')}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#2C221A] mb-2 group-hover:text-[#423429] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5E4C3D] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Actions Row */}
                <div className="pt-4 mt-4 border-t border-[#F1ECE6] flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleQuickWhatsApp(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#3C4E3D] hover:text-[#1F1712] bg-[#F4EFEB] hover:bg-[#E6DCD2] rounded-xl transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Order via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSelectedDishPreview(item)}
                    className="p-2 text-[#826E5D] hover:text-[#2C221A] hover:bg-[#FAF7F2] rounded-lg transition-colors cursor-pointer"
                    title="View details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center space-y-4">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-[#FAF7F2] bg-[#2C221A] hover:bg-[#423429] rounded-2xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>View Complete Menu Directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-xs text-[#826E5D]">
            Explore our full range of 16+ crafted dishes, hot & cold brew beverages, and daily fresh pastries.
          </p>
        </div>
      </div>

      {/* Dish Detailed Preview Lightbox Modal */}
      {selectedDishPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E6DCD2] animate-in zoom-in-95 duration-200">
            <div className="relative aspect-4/3 w-full">
              <img
                src={selectedDishPreview.image}
                alt={selectedDishPreview.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() => setSelectedDishPreview(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-3 bg-[#2C221A]/90 backdrop-blur-xs px-3.5 py-1.5 rounded-xl text-white font-serif-display font-semibold text-lg tabular-nums">
                {selectedDishPreview.price}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7F6D]">
                  {selectedDishPreview.category} · {selectedDishPreview.tag}
                </span>
                <h3 className="font-serif-display text-2xl font-semibold text-[#2C221A] mt-1">
                  {selectedDishPreview.name}
                </h3>
              </div>

              <p className="text-sm text-[#5E4C3D] leading-relaxed">
                {selectedDishPreview.description}
              </p>

              {selectedDishPreview.dietary && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedDishPreview.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 bg-[#FFFFFF] rounded-lg border border-[#E6DCD2] text-[#826E5D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-[#E6DCD2] flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    handleQuickWhatsApp(selectedDishPreview);
                    setSelectedDishPreview(null);
                  }}
                  className="flex-1 py-3 px-4 bg-[#2C221A] hover:bg-[#423429] text-[#FAF7F2] font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order via WhatsApp ({selectedDishPreview.price})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
