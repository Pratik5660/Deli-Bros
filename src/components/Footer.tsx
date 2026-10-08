import React from 'react';
import { ArrowUpRight, Instagram, MessageCircle, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface FooterProps {
  onOpenOwnerPitch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerPitch }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1F1712] text-[#FAF7F2] border-t border-[#423429] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#423429]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif-display text-3xl font-semibold tracking-wider text-[#FAF7F2]">
              {CAFE_INFO.brandName}
            </h3>
            <p className="text-sm text-[#E6DCD2]/80 leading-relaxed max-w-sm">
              {CAFE_INFO.address}
            </p>
            <p className="text-xs text-[#AB9785]">
              A neighbourhood café concept in Kuala Lumpur serving comforting food, great coffee and good moments.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#AB9785]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E6DCD2]">
              <li>
                <button onClick={() => scrollTo('#home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#menu')} className="hover:text-white transition-colors cursor-pointer">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#visit')} className="hover:text-white transition-colors cursor-pointer">
                  Visit Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#AB9785]">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={CAFE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#E6DCD2] hover:text-white transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#B86B43]" />
                <span>Instagram</span>
                <span className="text-xs text-[#AB9785]">({CAFE_INFO.instagramHandle})</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={CAFE_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#E6DCD2] hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
                <span className="text-xs text-[#AB9785]">(Direct Chat)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#E6DCD2] hover:text-white transition-colors group"
              >
                <span>Google Maps Location</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Pitch demo helper */}
            <div className="pt-2">
              <button
                onClick={onOpenOwnerPitch}
                className="text-xs text-amber-200/90 hover:text-amber-100 underline decoration-amber-400/30 cursor-pointer"
              >
                Business Owner: View Web Proposal Details
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AB9785]">
          <p>© Deli Bros Cafe. All rights reserved.</p>
          <p className="text-center sm:text-right text-[#826E5D]">
            Concept design prepared for Deli Bros Cafe. Ready to deploy with actual menu & verified details.
          </p>
        </div>
      </div>
    </footer>
  );
};
