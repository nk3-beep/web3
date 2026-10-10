import React, { useState, useEffect } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { getStoreStatus, StoreStatus } from '../utils/storeHours';
import { useOrderTray } from '../context/OrderTrayContext';
import { BakeryLogo } from './BakeryLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Phone, Menu, X, CakeSlice } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [storeStatus, setStoreStatus] = useState<StoreStatus>(getStoreStatus());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCustomCakeModal } = useOrderTray();

  useEffect(() => {
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DAED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          
          {/* Brand with Bakery Logo */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <BakeryLogo sizeClass="w-11 h-11" className="transition-transform group-hover:scale-105" />
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#261428] block">
                {BAKERY_INFO.name}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-[#503956]">
            <a href="#hours" className="hover:text-[#5A3366] transition-colors">
              Store Hours
            </a>
            <a href="#about" className="hover:text-[#5A3366] transition-colors">
              Our Story
            </a>
            <a href="#contact" className="hover:text-[#5A3366] transition-colors">
              Visit &amp; Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Live Status indicator on desktop */}
            <a 
              href="#hours" 
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EEF8] border border-[#E5D4EA] text-xs text-[#503057] hover:bg-[#EBDCF2] transition-colors btn-glow-outline"
              title={storeStatus.subText}
            >
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? (storeStatus.isClosingSoon ? 'bg-amber-500 animate-pulse' : 'bg-emerald-600') : 'bg-stone-400'}`} />
              <span className="font-medium">{storeStatus.statusText}</span>
              <span className="text-[#886F90]">·</span>
              <span className="text-[#64446C]">{storeStatus.currentDayName.slice(0, 3)}</span>
            </a>

            {/* Custom Cake Button */}
            <button
              onClick={openCustomCakeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#5A3366] bg-[#F5EEF8] hover:bg-[#EBDCF2] border border-[#DECCE5] rounded-full transition-all cursor-pointer btn-glow-secondary"
            >
              <CakeSlice className="w-3.5 h-3.5 text-[#5A3366]" />
              <span>Custom Cake</span>
            </button>

            {/* Direct Call Button (Clickable icon without raw phone number text) */}
            <a
              href={`tel:${BAKERY_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center p-2.5 rounded-full text-[#5A3366] hover:bg-[#F3EAF6] border border-[#E1D1E7] transition-all btn-glow-outline"
              title="Call Bakery Counter"
              aria-label="Call Bakery Counter"
            >
              <Phone className="w-4 h-4 text-[#5A3366]" />
            </a>

            {/* WhatsApp CTA Button with Official WhatsApp Icon */}
            <a
              href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello NK Bakery, I would like to enquire about your freshly baked items and availability.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#5A3366] text-[#FAF7F2] text-xs font-semibold hover:bg-[#462351] transition-all btn-glow-plum"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#7DE29C]" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[#261428] hover:bg-[#F3EAF6] rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DAED] bg-[#FAF7F2] px-6 py-5 space-y-4 shadow-lg animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-[#EFE5D6]">
            <div className="flex items-center gap-2 text-xs">
              <span className={`w-2.5 h-2.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-600' : 'bg-stone-400'}`} />
              <span className="font-semibold text-[#261428]">{storeStatus.statusText}</span>
              <span className="text-[#88705F]">· {storeStatus.subText}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 text-sm font-medium text-[#46314D]">
            <a 
              href="#hours" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#5A3366]"
            >
              Store Hours &amp; Timings
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#5A3366]"
            >
              Our Story &amp; Craft
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#5A3366]"
            >
              Address, Directions &amp; Contact
            </a>
          </div>

          <div className="pt-3 border-t border-[#E8DAED] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCustomCakeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#F5EEF8] text-[#5A3366] text-xs font-semibold cursor-pointer border border-[#DECCE5] btn-glow-secondary"
            >
              <CakeSlice className="w-4 h-4 text-[#5A3366]" />
              <span>Order Custom Celebration Cake</span>
            </button>

            <a
              href={`https://wa.me/${BAKERY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#5A3366] text-[#FAF7F2] text-xs font-semibold btn-glow-plum"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#7DE29C]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
