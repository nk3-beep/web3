/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { OrderTrayProvider } from './context/OrderTrayContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreHours } from './components/StoreHours';
import { AboutCraft } from './components/AboutCraft';
import { TaglineBanner } from './components/TaglineBanner';
import { ContactLocation } from './components/ContactLocation';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';
import { CustomCakeModal } from './components/CustomCakeModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#261428] flex flex-col font-sans selection:bg-[#EBDCF2] selection:text-[#3B1944] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        
        {/* Subtle floral divider between Hero and Store Hours */}
        <SectionDivider variant="wheat" bgClass="bg-[#FAF7F2]" />

        <StoreHours />

        {/* Subtle flourish divider between Store Hours and Our Story */}
        <SectionDivider variant="flourish" bgClass="bg-[#F8F1FA]" />

        <AboutCraft />

        {/* Subtle minimal floral divider before Tagline Banner */}
        <SectionDivider variant="minimal" bgClass="bg-[#FAF7F2]" />

        <TaglineBanner />

        {/* Subtle wheat divider before Contact & Location */}
        <SectionDivider variant="wheat" bgClass="bg-[#FAF7F2]" />

        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Cake Builder Modal */}
      <CustomCakeModal />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <OrderTrayProvider>
      <AppContent />
    </OrderTrayProvider>
  );
}
