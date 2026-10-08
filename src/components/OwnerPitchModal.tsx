import React from 'react';
import { X, CheckCircle, Smartphone, MapPin, Zap, MessageSquare, Coffee, ExternalLink } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface OwnerPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerPitchModal: React.FC<OwnerPitchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border border-[#E6DCD2] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-[#FFFFFF] border-b border-[#E6DCD2] flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#6B7F6D]">
                Commercial Pitch Demo
              </span>
            </div>
            <h3 className="font-serif-display text-2xl font-semibold text-[#2C221A]">
              Website Concept for Deli Bros Cafe
            </h3>
            <p className="text-xs text-[#826E5D]">
              Tailored for 100, Jalan Pahang, Titiwangsa Sentral, 53000 Kuala Lumpur
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#2C221A] hover:bg-[#F1ECE6] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#423429]">
          <div className="p-4 bg-[#F4EFEB] rounded-2xl border border-[#E6DCD2] space-y-2">
            <h4 className="font-serif-display text-lg font-semibold text-[#2C221A]">
              “I created this website concept specifically for Deli Bros Cafe.”
            </h4>
            <p className="text-xs sm:text-sm text-[#5E4C3D] leading-relaxed">
              This concept is engineered specifically for modern Kuala Lumpur café patrons who search for coffee spots on Instagram, Google Maps, and mobile browsers. Every component has been crafted with warm hospitality aesthetics to elevate your brand presence.
            </p>
          </div>

          {/* Key Business Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#E6DCD2] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3C4E3D] font-semibold text-xs uppercase tracking-wider">
                <Smartphone className="w-4 h-4 text-[#3C4E3D]" />
                <span>Mobile-First Conversion</span>
              </div>
              <p className="text-xs text-[#5E4C3D] leading-relaxed">
                Persistent bottom action bar gives mobile visitors instant 1-tap access to Directions, Menu, and WhatsApp ordering without friction.
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#E6DCD2] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3C4E3D] font-semibold text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-[#3C4E3D]" />
                <span>Direct WhatsApp Inquiries</span>
              </div>
              <p className="text-xs text-[#5E4C3D] leading-relaxed">
                Captures table bookings, group gatherings, and takeaway pickups directly through WhatsApp without commission cuts.
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#E6DCD2] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3C4E3D] font-semibold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#3C4E3D]" />
                <span>Titiwangsa Local SEO</span>
              </div>
              <p className="text-xs text-[#5E4C3D] leading-relaxed">
                Centered on 100 Jalan Pahang and Titiwangsa Sentral to rank for commuters, hospital visitors (HKL), and local neighbourhood foot traffic.
              </p>
            </div>

            <div className="p-4 bg-[#FFFFFF] rounded-xl border border-[#E6DCD2] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3C4E3D] font-semibold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4 text-[#3C4E3D]" />
                <span>Pre-Loaded with Real Menu</span>
              </div>
              <p className="text-xs text-[#5E4C3D] leading-relaxed">
                Already pre-configured with Deli Bros signature Tuna Cheese Melt (RM 17.90), Chicken Cheese Melt (RM 17.90), Single Origin Italian roasts (from RM 8), and fresh bakes.
              </p>
            </div>
          </div>

          {/* Quick checklist */}
          <div className="space-y-3 pt-2">
            <h5 className="font-semibold text-xs uppercase tracking-wider text-[#6B7F6D]">
              Ready for Business Owner Verification:
            </h5>
            <ul className="space-y-2 text-xs text-[#5E4C3D]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Provide official food & drinks menu with confirmed prices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Confirm daily opening and closing hours</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Connect official WhatsApp line and Instagram account</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sync verified Google Reviews and official business photographs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#FFFFFF] border-t border-[#E6DCD2] flex items-center justify-between text-xs">
          <span className="text-[#826E5D]">
            Agency-grade web build ready to go live.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#2C221A] hover:bg-[#423429] text-[#FAF7F2] rounded-xl font-medium transition-colors cursor-pointer"
          >
            Explore Live Concept
          </button>
        </div>
      </div>
    </div>
  );
};
