import React from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { BakeryLogo } from './BakeryLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1022] text-[#FAF7F2] border-t border-[#341F3B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#341F3B]">
          
          {/* Brand & Story */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BakeryLogo sizeClass="w-11 h-11" />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight block text-[#FAF7F2]">
                  {BAKERY_INFO.name}
                </span>
                <span className="text-xs text-[#CFAFCF]">
                  Near JMP Medical Centre · Piravom
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D1B8D4] max-w-sm leading-relaxed font-light">
              Serving our Piravom community with daily stone-baked breads, flaky pastries, celebration cakes, and warm hospitality. Baked fresh each dawn without compromise.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs">
              <a
                href={BAKERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#2F1A37] hover:bg-[#43264E] text-[#FAF7F2] transition-all btn-glow-outline hover:shadow-[0_0_15px_rgba(209,184,212,0.35)]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#2F1A37] hover:bg-[#43264E] text-[#FAF7F2] transition-all btn-glow-outline hover:shadow-[0_0_18px_rgba(37,211,102,0.4)]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#7BD499]" />
              </a>
              <a
                href={`tel:${BAKERY_INFO.phoneRaw}`}
                className="p-2.5 rounded-full bg-[#2F1A37] hover:bg-[#43264E] text-[#FAF7F2] transition-all btn-glow-outline hover:shadow-[0_0_15px_rgba(209,184,212,0.35)]"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4 text-[#D8B4E2]" />
              </a>
              <a
                href={`mailto:${BAKERY_INFO.email}`}
                className="p-2.5 rounded-full bg-[#2F1A37] hover:bg-[#43264E] text-[#FAF7F2] transition-all btn-glow-outline hover:shadow-[0_0_15px_rgba(209,184,212,0.35)]"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4 text-[#D8B4E2]" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E8CDF2] uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C8AFC9]">
              <li>
                <a href="#hours" className="hover:text-white transition-colors">Store Hours &amp; Timings</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Our Story &amp; Craft</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Location &amp; Directions</a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${BAKERY_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#7BD499]" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Bakery Visit Quick Details without showing raw phone or email text */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E8CDF2] uppercase">
              Piravom Counter
            </h4>
            <div className="space-y-2.5 text-xs text-[#C8AFC9]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D8B4E2] shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.address}</span>
              </p>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={`tel:${BAKERY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E8D1EF] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8B4E2]" />
                  <span>Call Us</span>
                </a>
                <span className="text-[#51365A]">·</span>
                <a
                  href={`mailto:${BAKERY_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E8D1EF] hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D8B4E2]" />
                  <span>Send Email</span>
                </a>
              </div>
              <div className="pt-2">
                <span className="text-[11px] text-[#AFA0B4] block">
                  Monday – Saturday: 8:00 AM – 8:30 PM
                </span>
                <span className="text-[11px] text-[#E597B0] font-medium block">
                  Sunday: Holiday (Closed)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8B9F]">
          <div>
            © {new Date().getFullYear()} {BAKERY_INFO.name}. All rights reserved. Piravom, Kerala.
          </div>
          <div className="flex items-center gap-3">
            <span>Shop Pickup Only</span>
            <span aria-hidden="true">·</span>
            <span>Made with Care</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
