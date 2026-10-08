import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  ArrowUpRight,
  ExternalLink,
  Check,
  Edit3,
  Compass,
  Navigation,
} from 'lucide-react';
import { CAFE_INFO, DEFAULT_HOURS } from '../data/cafeData';

export const VisitUsSection: React.FC = () => {
  const [hoursList, setHoursList] = useState(DEFAULT_HOURS);
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="visit" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#E6DCD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-[#6B7F6D] font-semibold mb-2">
            Location & Service Hours
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#2C221A] tracking-tight mb-4">
            Come Visit Deli Bros
          </h2>
          <p className="text-base text-[#5E4C3D] leading-relaxed">
            Conveniently situated in Titiwangsa Sentral, welcoming you for your daily coffee and comforting meals.
          </p>
        </div>

        {/* Top Information Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Address, Quick Contact & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E6DCD2] shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4EFEB] flex items-center justify-center shrink-0 text-[#3C4E3D]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7F6D]">
                    Our Address
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl text-[#2C221A] font-semibold leading-snug">
                    {CAFE_INFO.address}
                  </h3>
                  <p className="text-xs text-[#826E5D]">
                    Strategically located at Titiwangsa Sentral, close to LRT, Monorail and Jalan Pahang transportation hubs.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="px-3 py-1.5 text-xs font-medium bg-[#F4EFEB] hover:bg-[#E6DCD2] text-[#2C221A] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied to clipboard</span>
                        </>
                      ) : (
                        <span>Copy Address</span>
                      )}
                    </button>

                    <a
                      href={CAFE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-1.5 text-xs font-semibold bg-[#2C221A] hover:bg-[#423429] text-[#FAF7F2] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Enquiries */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E6DCD2] shadow-2xs space-y-4">
              <h4 className="font-serif-display text-lg text-[#2C221A] font-semibold">
                Get in Touch
              </h4>
              <p className="text-xs text-[#826E5D]">
                Direct links for table enquiries, takeaway pickups, and café updates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {/* WhatsApp */}
                <a
                  href={CAFE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#F4EFEB] hover:bg-[#E6DCD2] border border-[#E6DCD2] transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between text-[#3C4E3D] mb-2">
                    <MessageCircle className="w-5 h-5 text-emerald-700" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#2C221A]">WhatsApp Us</div>
                    <div className="text-[11px] text-[#826E5D] truncate">Direct Message</div>
                  </div>
                </a>

                {/* Call Us */}
                <a
                  href={CAFE_INFO.phoneTel}
                  className="p-3.5 rounded-xl bg-[#F4EFEB] hover:bg-[#E6DCD2] border border-[#E6DCD2] transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between text-[#3C4E3D] mb-2">
                    <Phone className="w-5 h-5 text-[#826E5D]" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#2C221A]">Call Us</div>
                    <div className="text-[11px] text-[#826E5D] truncate">Customer Line</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-[#F4EFEB] hover:bg-[#E6DCD2] border border-[#E6DCD2] transition-colors flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between text-[#3C4E3D] mb-2">
                    <Instagram className="w-5 h-5 text-[#B86B43]" />
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#2C221A]">Instagram</div>
                    <div className="text-[11px] text-[#826E5D] truncate">{CAFE_INFO.instagramHandle}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clearly Editable Opening Hours Component */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E6DCD2] shadow-2xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F1ECE6]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4EFEB] flex items-center justify-center text-[#3C4E3D]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl text-[#2C221A] font-semibold">
                      Opening Hours
                    </h3>
                    <p className="text-xs text-[#826E5D]">
                      Standard operating schedule (Editable placeholder)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditingHours(!isEditingHours)}
                  className="text-xs font-medium text-[#826E5D] hover:text-[#2C221A] flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F4EFEB] hover:bg-[#E6DCD2] transition-colors cursor-pointer"
                  title="Owner demo test: Adjust hours"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>{isEditingHours ? 'Finish' : 'Demo Edit'}</span>
                </button>
              </div>

              {/* Day-by-Day Hours Schedule */}
              <div className="space-y-3">
                {hoursList.map((item, index) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-1.5 border-b border-[#FAF7F2] text-xs sm:text-sm"
                  >
                    <span className="font-medium text-[#2C221A]">{item.day}</span>
                    {isEditingHours ? (
                      <input
                        type="text"
                        value={item.hours}
                        onChange={(e) => {
                          const updated = [...hoursList];
                          updated[index].hours = e.target.value;
                          setHoursList(updated);
                        }}
                        className="px-2 py-0.5 border border-[#D8CCC0] rounded text-right font-medium text-[#2C221A] bg-[#FAF7F2]"
                      />
                    ) : (
                      <div className="text-right">
                        <span className="font-semibold text-[#423429]">{item.hours}</span>
                        <span className="text-[11px] text-[#826E5D] block">{item.note}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-[#826E5D] bg-[#F4EFEB] p-3 rounded-xl border border-[#E6DCD2] flex items-center justify-between">
                <span>Kitchen last order: 45 minutes before closing</span>
                <span className="font-semibold text-[#3C4E3D]">Dine-in & Takeaway</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION: Centered on 100, Jalan Pahang, Titiwangsa Sentral */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E6DCD2] overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#E6DCD2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF7F2]">
            <div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#3C4E3D]" />
                <span className="text-xs uppercase tracking-wider font-semibold text-[#6B7F6D]">
                  Location Map
                </span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl text-[#2C221A] font-semibold mt-1">
                Deli Bros Cafe — 100, Jalan Pahang
              </h3>
              <p className="text-xs text-[#826E5D]">
                Titiwangsa Sentral • 53000 Kuala Lumpur, Wilayah Persekutuan
              </p>
            </div>

            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF7F2] bg-[#2C221A] hover:bg-[#423429] rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Interactive Map Container */}
          <div className="relative w-full h-[360px] sm:h-[420px] bg-[#E6DCD2] overflow-hidden">
            <iframe
              title="Deli Bros Cafe Location Map"
              src="https://maps.google.com/maps?q=100+Jalan+Pahang+Titiwangsa+Sentral+53000+Kuala+Lumpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter saturate-90"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Map Marker Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-[#E6DCD2] max-w-xs pointer-events-auto hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                <span className="font-serif-display font-semibold text-sm text-[#2C221A]">DELI BROS CAFE</span>
              </div>
              <p className="text-[11px] text-[#5E4C3D] leading-tight">
                100, Jalan Pahang, Titiwangsa Sentral, KL
              </p>
              <p className="text-[10px] text-[#826E5D] mt-1.5 flex items-center gap-1">
                <span>Near Monorail & LRT Interchange</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
