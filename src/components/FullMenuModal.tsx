import React, { useState } from 'react';
import {
  X,
  Search,
  Sparkles,
  MessageCircle,
  Coffee,
  Check,
  Plus,
  Minus,
  Trash2,
  Flame,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { MENU_ITEMS, CAFE_INFO, MenuItem } from '../data/cafeData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [showOrderDrawer, setShowOrderDrawer] = useState(false);

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.price.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const cartTotalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const cartTotalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.priceNumber * qty : 0);
  }, 0);

  const handleSendWhatsAppOrder = () => {
    if (cartTotalItems === 0) return;
    const itemsText = Object.entries(cart)
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? `• ${qty}x ${item.name} (${item.price})` : '';
      })
      .filter(Boolean)
      .join('\n');

    const message = `Hi Deli Bros Cafe! I would like to place a takeaway / dine-in order:\n\n${itemsText}\n\nEstimated Total: RM ${cartTotalPrice.toFixed(
      2
    )}\n\nLocation: 100 Jalan Pahang, Titiwangsa Sentral. Please let me know when it's ready!`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-[#E6DCD2] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#FFFFFF] border-b border-[#E6DCD2] flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#2C221A]">
                DELI BROS CAFE
              </span>
              <span className="text-xs font-semibold text-[#FAF7F2] bg-[#2C221A] px-2.5 py-0.5 rounded-full">
                Full Menu
              </span>
            </div>
            <p className="text-xs text-[#826E5D]">
              100, Jalan Pahang, Titiwangsa Sentral · Signature Melts, Single Origin Italian Coffee & Bakes
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Order Cart Indicator */}
            {cartTotalItems > 0 && (
              <button
                onClick={() => setShowOrderDrawer(!showOrderDrawer)}
                className="flex items-center gap-2 px-3.5 py-2 bg-[#2C221A] text-[#FAF7F2] rounded-xl text-xs font-semibold shadow-xs cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>{cartTotalItems} items</span>
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px]">
                  RM {cartTotalPrice.toFixed(2)}
                </span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#2C221A] hover:bg-[#F1ECE6] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 bg-[#F4EFEB] border-b border-[#E6DCD2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#826E5D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cheese melts, coffee, matcha, brownie, RM price..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FFFFFF] border border-[#E6DCD2] rounded-xl focus:outline-hidden focus:border-[#2C221A] text-[#2C221A] shadow-2xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All (16)' },
              { id: 'mains', label: 'Melts & Mains' },
              { id: 'breakfast', label: 'Breakfast' },
              { id: 'coffee', label: 'Coffee & Drinks' },
              { id: 'desserts', label: 'Desserts & Bakes' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C221A] text-[#FAF7F2]'
                    : 'bg-[#FFFFFF] text-[#5E4C3D] hover:bg-[#E6DCD2] border border-[#E6DCD2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Menu Items Grid */}
          <div className={showOrderDrawer ? 'lg:col-span-8' : 'lg:col-span-12'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] rounded-2xl border border-[#E6DCD2] hover:border-[#AB9785] transition-all p-4 flex flex-col justify-between shadow-2xs hover:shadow-md group"
                >
                  <div className="flex gap-4">
                    {/* Item Photo Thumbnail */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#FAF7F2] shrink-0 border border-[#E6DCD2]">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.isSignature && (
                        <div className="absolute top-1 left-1 bg-[#2C221A] text-white p-0.5 rounded">
                          <Flame className="w-2.5 h-2.5 text-amber-300" />
                        </div>
                      )}
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] uppercase font-semibold text-[#6B7F6D] tracking-wider truncate">
                          {item.category}
                        </span>
                        <span className="font-serif-display text-base font-bold text-[#2C221A] tabular-nums shrink-0">
                          {item.price}
                        </span>
                      </div>

                      <h4 className="font-serif-display text-lg font-semibold text-[#2C221A] leading-snug group-hover:text-[#423429] transition-colors truncate">
                        {item.name}
                      </h4>

                      <p className="text-xs text-[#5E4C3D] line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#826E5D]">
                        <span className="bg-[#F4EFEB] px-1.5 py-0.5 rounded font-medium">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add to order / quick whatsapp */}
                  <div className="pt-3 mt-3 border-t border-[#F1ECE6] flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#826E5D] italic">
                      Dine-in or Takeaway
                    </span>

                    <div className="flex items-center gap-1.5">
                      {cart[item.id] ? (
                        <div className="flex items-center gap-2 bg-[#F4EFEB] px-2 py-1 rounded-lg border border-[#E6DCD2]">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#2C221A] hover:text-red-600 cursor-pointer p-0.5"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold tabular-nums text-[#2C221A]">
                            {cart[item.id]}
                          </span>
                          <button
                            onClick={() => addToCart(item.id)}
                            className="text-[#2C221A] hover:text-emerald-700 cursor-pointer p-0.5"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="px-3 py-1.5 bg-[#F4EFEB] hover:bg-[#2C221A] text-[#2C221A] hover:text-[#FAF7F2] rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Pre-selection Drawer */}
          {showOrderDrawer && (
            <div className="lg:col-span-4 bg-[#FFFFFF] rounded-2xl border border-[#E6DCD2] p-5 flex flex-col justify-between shadow-sm animate-in slide-in-from-right-4 duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F1ECE6]">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-[#3C4E3D]" />
                    <h4 className="font-serif-display text-lg font-semibold text-[#2C221A]">
                      Your Order Tray
                    </h4>
                  </div>
                  <button
                    onClick={() => setCart({})}
                    className="text-[11px] text-[#826E5D] hover:text-red-600 transition-colors cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {cartTotalItems === 0 ? (
                  <div className="text-center py-10 text-xs text-[#826E5D] space-y-2">
                    <p>No dishes added yet.</p>
                    <p className="text-[11px] text-[#AB9785]">
                      Click "Add to Tray" next to any melt, coffee, or dessert to build your takeaway or pre-order!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
                    {Object.entries(cart).map(([id, qty]) => {
                      const item = MENU_ITEMS.find((m) => m.id === id);
                      if (!item) return null;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between py-2 border-b border-[#FAF7F2] text-xs"
                        >
                          <div className="flex-1 pr-2">
                            <div className="font-semibold text-[#2C221A] truncate">{item.name}</div>
                            <div className="text-[11px] text-[#826E5D]">
                              {qty} × {item.price}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="font-semibold text-[#2C221A] tabular-nums">
                              RM {(item.priceNumber * qty).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeFromCart(id)}
                              className="p-1 text-[#826E5D] hover:text-red-500 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => addToCart(id)}
                              className="p-1 text-[#826E5D] hover:text-emerald-600 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Drawer Checkout Action */}
              <div className="pt-4 border-t border-[#E6DCD2] space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#5E4C3D]">Total ({cartTotalItems} items)</span>
                  <span className="font-serif-display text-xl font-bold text-[#2C221A] tabular-nums">
                    RM {cartTotalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleSendWhatsAppOrder}
                  disabled={cartTotalItems === 0}
                  className="w-full py-3.5 bg-[#2C221A] hover:bg-[#423429] disabled:opacity-50 text-[#FAF7F2] rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Order via WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-[#826E5D]">
                  Sends your custom order directly to Deli Bros Cafe staff on WhatsApp.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:p-5 bg-[#FFFFFF] border-t border-[#E6DCD2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#5E4C3D]">
            <Sparkles className="w-4 h-4 text-[#B86B43]" />
            <span>
              All 16 dishes prepared fresh daily at 100 Jalan Pahang, Titiwangsa Sentral.
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {cartTotalItems > 0 && !showOrderDrawer && (
              <button
                onClick={() => setShowOrderDrawer(true)}
                className="px-4 py-2 bg-[#F4EFEB] hover:bg-[#E6DCD2] text-[#2C221A] rounded-xl font-semibold transition-colors cursor-pointer"
              >
                View Tray (RM {cartTotalPrice.toFixed(2)})
              </button>
            )}

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#2C221A] hover:bg-[#423429] text-[#FAF7F2] rounded-xl font-semibold transition-colors cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
