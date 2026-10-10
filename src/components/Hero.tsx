import React, { useState, useEffect } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';
import { getStoreStatus, StoreStatus } from '../utils/storeHours';
import { useOrderTray } from '../context/OrderTrayContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ArrowDownRight, MapPin, Clock, CakeSlice, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [storeStatus, setStoreStatus] = useState<StoreStatus>(getStoreStatus());
  const { openCustomCakeModal } = useOrderTray();

  useEffect(() => {
    const timer = setInterval(() => setStoreStatus(getStoreStatus()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Headline & Curated Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A3366]">
              <Sparkles className="w-3.5 h-3.5 text-[#5A3366]" />
              <span>Neighbourhood Bakery &amp; Celebration Craft</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal leading-[1.08] tracking-tight text-[#261428]">
              Piping hot puffs, slow loaves &amp; <span className="italic font-normal text-[#5A3366]">sweet daily comforts.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#553E5C] leading-relaxed max-w-2xl font-light">
              Welcome to <strong className="font-semibold text-[#261428]">{BAKERY_INFO.name}</strong> in Piravom. We wake up before sunrise to laminate golden egg &amp; chicken puffs, bake slow-fermented artisan breads, and handcraft bespoke celebration cakes with pure dairy butter and unhurried care.
            </p>

            {/* Clear Ordering & Exploration Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#5A3366] text-[#FAF7F2] text-xs sm:text-sm font-semibold hover:bg-[#462351] transition-all btn-glow-plum"
              >
                <span>Our Story &amp; Craft</span>
                <ArrowDownRight className="w-4 h-4 text-[#F3E2F8]" />
              </a>

              <button
                onClick={openCustomCakeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#F5EEF8] text-[#5A3366] border border-[#DECCE5] hover:bg-[#EBDCF2] text-xs sm:text-sm font-semibold transition-all cursor-pointer btn-glow-secondary"
              >
                <CakeSlice className="w-4 h-4 text-[#5A3366]" />
                <span>Order Custom Cake</span>
              </button>

              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello NK Bakery, I'd like to ask about today's fresh bakes and counter availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#FFFDFB] text-[#261428] border border-[#DECCE5] hover:bg-[#F8F1FA] text-xs sm:text-sm font-medium transition-all btn-glow-outline"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#2E7D32]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Trust and Visit Notes with clean unboxed metadata */}
            <div className="pt-4 border-t border-[#E8DAED] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#705578]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#5A3366]" />
                <span>Near JMP Medical Centre, Piravom</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5A3366]" />
                <span>Mon – Sat: 8:00 AM – 8:30 PM (Sun Holiday)</span>
              </div>
              <div className="text-[#5A3366] font-semibold">
                Shop Pickup Only
              </div>
            </div>

          </div>

          {/* Right Column: Curated High-Quality Imagery Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Featured Bakery Visual */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#DFCEE5] bg-[#EFE4F3]">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85"
                  alt="Artisan sourdough and rustic bakery loaves at NK Bakery"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Embedded overlay card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FFFDFB]/95 backdrop-blur-md border border-[#E8DAED] text-[#261428] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#5A3366] font-semibold">
                        Fresh Out of The Oven
                      </p>
                      <p className="font-serif text-lg font-medium text-[#261428]">
                        Morning Bakes &amp; Golden Puffs
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#5A3366] bg-[#F5EEF8] px-2.5 py-1 rounded-full">
                      Daily Batches
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#6F5777] font-light">
                    Baked on stone with natural levain, pure dairy butter, and whole spices.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Live Status Card */}
              <div className="hidden sm:block absolute -top-5 -left-6 max-w-[210px] p-3.5 rounded-2xl bg-[#FFFDFB] border border-[#E5D4EA] shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-stone-400'}`} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#261428]">
                    Live Status
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#5A3366]">
                  {storeStatus.statusText}
                </p>
                <p className="text-[11px] text-[#785E80]">
                  {storeStatus.subText}
                </p>
              </div>

              {/* Mini Bakery Quality Card */}
              <div className="hidden sm:block absolute -bottom-5 -right-6 max-w-[190px] p-3.5 rounded-2xl bg-[#FFFDFB] border border-[#E5D4EA] shadow-lg text-right">
                <span className="text-xs font-serif italic text-[#5A3366]">
                  Piravom
                </span>
                <p className="text-xs font-medium text-[#261428]">
                  Neighbourhood Bakery
                </p>
                <p className="text-[11px] text-[#785E80]">
                  Warm welcome everyday
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
