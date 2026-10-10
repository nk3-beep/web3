import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = "Hello NK Bakery, I would like to enquire about your freshly baked items and availability.";
  const whatsappUrl = `https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group pointer-events-auto">
        {/* Hover Tooltip / Floating Label */}
        <div
          className={`hidden sm:flex items-center gap-2 bg-[#1F1124] text-[#FAF7F2] border border-[#3E2347] shadow-xl text-xs font-medium px-3.5 py-2 rounded-full mr-3 transition-all duration-300 origin-right pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>Chat on WhatsApp</span>
        </div>

        {/* Floating Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white btn-glow-green shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300/50 cursor-pointer"
          aria-label="Chat with NK Bakery on WhatsApp"
        >
          {/* Subtle radiating ping ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-40"></span>

          {/* Official WhatsApp Icon */}
          <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />

          {/* Online status indicator badge */}
          <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm z-20">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#128C7E] rounded-full"></span>
          </span>
        </a>
      </div>
    </aside>
  );
};
