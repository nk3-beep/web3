import React, { useState } from 'react';
import { BAKERY_INFO, CAKE_FLAVORS, CAKE_SIZES } from '../data/bakeryData';
import { useOrderTray } from '../context/OrderTrayContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X, CakeSlice } from 'lucide-react';

export const CustomCakeModal: React.FC = () => {
  const { isCustomCakeModalOpen, closeCustomCakeModal } = useOrderTray();

  const [flavor, setFlavor] = useState(CAKE_FLAVORS[0]);
  const [size, setSize] = useState(CAKE_SIZES[1]); // Default 1.0 kg
  const [dietary, setDietary] = useState<'regular' | 'eggless'>('regular'); // Default to Regular (Classic with egg)
  const [cakeMessage, setCakeMessage] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('04:00 PM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isCustomCakeModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `*New Custom Celebration Cake Pre-Order - NK Bakery, Piravom*\n\n`;
    text += `*Customer:* ${customerName.trim() || 'Valued Customer'}\n`;
    if (customerPhone.trim()) text += `*Phone:* ${customerPhone.trim()}\n`;
    text += `*Cake Flavour:* ${flavor}\n`;
    text += `*Weight / Size:* ${size}\n`;
    text += `*Dietary Preference:* ${dietary === 'regular' ? 'Classic (With Egg)' : '100% Eggless'}\n`;
    if (cakeMessage.trim()) text += `*Inscription Message:* "${cakeMessage.trim()}"\n`;
    text += `*Requested Pickup Date:* ${pickupDate || 'Tomorrow'}\n`;
    text += `*Pickup Time:* ${pickupTime}\n`;
    if (specialInstructions.trim()) {
      text += `*Special Instructions:* ${specialInstructions.trim()}\n`;
    }
    text += `\n_Please confirm availability and quote for this custom cake. Thank you!_`;

    const whatsappUrl = `https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeCustomCakeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col rounded-3xl border border-[#D8C4DF] shadow-2xl bg-[#FFFDFB] overflow-hidden text-[#261428]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Custom Cake Image Banner */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-[#351C3B]">
          <img
            src={BAKERY_INFO.customCakeBgUrl}
            alt="Custom celebration cake at NK Bakery"
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#200F24]/90 via-[#200F24]/50 to-[#200F24]/30" />

          {/* Close Button on Header */}
          <button
            onClick={closeCustomCakeModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/65 text-white transition-all cursor-pointer backdrop-blur-xs shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title on Image Banner */}
          <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-7 sm:right-7 text-white">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#E8CDF2] mb-1">
              <CakeSlice className="w-3.5 h-3.5 text-[#E8CDF2]" />
              <span>Celebration Orders · NK Bakery Piravom</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white drop-shadow-xs">
              Custom Celebration Cake Pre-Order
            </h3>
            <p className="text-xs text-[#EADAF0] mt-0.5 line-clamp-1 font-light">
              Handcrafted with real dairy cream and quality ingredients. Order 24 hours in advance.
            </p>
          </div>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Flavor Selection */}
            <div>
              <label className="block font-semibold text-[#452D4E] mb-1.5">
                Select Cake Flavour *
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] font-medium focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
              >
                {CAKE_FLAVORS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Size & Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#452D4E] mb-1.5">
                  Weight / Size *
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] font-medium focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
                >
                  {CAKE_SIZES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Dietary Preference - Defaulted to Classic (With Egg) */}
              <div>
                <label className="block font-semibold text-[#452D4E] mb-1.5">
                  Dietary Preference *
                </label>
                <div className="flex items-center gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={() => setDietary('regular')}
                    className={`flex-1 py-2 px-3 rounded-lg border text-center transition-all cursor-pointer shadow-2xs ${
                      dietary === 'regular'
                        ? 'bg-[#5A3366] text-[#FAF7F2] border-[#5A3366] font-semibold'
                        : 'bg-[#FAF6F2] text-[#5C4563] border-[#D5C2DC] hover:bg-[#F5EDF7]'
                    }`}
                  >
                    Classic (With Egg)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDietary('eggless')}
                    className={`flex-1 py-2 px-3 rounded-lg border text-center transition-all cursor-pointer shadow-2xs ${
                      dietary === 'eggless'
                        ? 'bg-[#5A3366] text-[#FAF7F2] border-[#5A3366] font-semibold'
                        : 'bg-[#FAF6F2] text-[#5C4563] border-[#D5C2DC] hover:bg-[#F5EDF7]'
                    }`}
                  >
                    100% Eggless
                  </button>
                </div>
              </div>
            </div>

            {/* Message on Cake */}
            <div>
              <label className="block font-semibold text-[#452D4E] mb-1.5">
                Custom Message on Cake (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Happy 25th Anniversary Amma &amp; Acha!"
                value={cakeMessage}
                onChange={(e) => setCakeMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
              />
            </div>

            {/* Pickup Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#452D4E] mb-1.5">
                  Requested Pickup Date *
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#452D4E] mb-1.5">
                  Pickup Time *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 05:00 PM"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
                />
              </div>
            </div>

            {/* Customer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#452D4E] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Nair"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#452D4E] mb-1.5">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98470 12345"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 shadow-2xs"
                />
              </div>
            </div>

            {/* Special design / allergen instructions */}
            <div>
              <label className="block font-semibold text-[#452D4E] mb-1.5">
                Theme / Design / Specific Requests
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Less sweet, extra chocolate flakes, floral accents, double tier..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-[#FAF6F2] border border-[#D5C2DC] text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 resize-none shadow-2xs"
              />
            </div>

            {/* Notice */}
            <div className="p-3 rounded-xl bg-[#F6EEF8] border border-[#DFC9E4] text-[11px] text-[#63496C]">
              <strong>Note:</strong> Custom orders are finalized directly on WhatsApp with our head baker. You will receive immediate pricing and pickup confirmation.
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#5A3366] text-[#FAF7F2] font-semibold text-xs hover:bg-[#462351] transition-all btn-glow-plum cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#7DE29C]" />
                <span>Send Custom Cake Order to WhatsApp</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
