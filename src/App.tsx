import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitUsSection } from './components/VisitUsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FullMenuModal } from './components/FullMenuModal';
import { OwnerPitchModal } from './components/OwnerPitchModal';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isOwnerPitchOpen, setIsOwnerPitchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C221A] flex flex-col font-sans selection:bg-[#E8DCCF]">
      {/* Sticky Navigation */}
      <Navbar
        onOpenOwnerPitch={() => setIsOwnerPitchOpen(true)}
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenMenu={() => setIsFullMenuOpen(true)} />

        {/* Experience / Value Section (Good Food, Good Coffee, Good Company) */}
        <ExperienceSection />

        {/* Menu Section */}
        <MenuSection onOpenFullMenu={() => setIsFullMenuOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Food & Atmosphere Gallery */}
        <GallerySection />

        {/* Customer Social Proof / Reviews Section */}
        <ReviewsSection />

        {/* Visit Us & Map Section */}
        <VisitUsSection />

        {/* Final Call to Action */}
        <FinalCTASection onOpenMenu={() => setIsFullMenuOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerPitch={() => setIsOwnerPitchOpen(true)} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar onOpenMenu={() => setIsFullMenuOpen(true)} />

      {/* Modals */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
      />

      <OwnerPitchModal
        isOpen={isOwnerPitchOpen}
        onClose={() => setIsOwnerPitchOpen(false)}
      />
    </div>
  );
}
