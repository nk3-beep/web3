import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BAKERY_INFO } from '../data/bakeryData';
import { BakeryLogo } from './BakeryLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MapPin, Phone, Mail, Instagram, Copy, Check, ExternalLink } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('menu');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BAKERY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subjectMap: Record<string, string> = {
    menu: "Daily Specials & Fresh Availability",
    cake: "Custom Celebration Cake Pre-Order",
    bulk: "Party & Event Orders",
    general: "Store Timings & General Inquiry"
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*New Customer Inquiry - NK Bakery, Piravom*\n\n`;
    text += `*Name:* ${formName.trim() || 'Visitor'}\n`;
    if (formPhone.trim()) text += `*Phone:* ${formPhone.trim()}\n`;
    text += `*Topic:* ${subjectMap[formSubject] || formSubject}\n\n`;
    text += `*Message:*\n${formMessage.trim()}\n`;

    const whatsappUrl = `https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry: ${subjectMap[formSubject] || formSubject} - ${formName.trim() || 'Customer'}`;
    let body = `Name: ${formName.trim() || 'Visitor'}\n`;
    if (formPhone.trim()) body += `Phone: ${formPhone.trim()}\n`;
    body += `Topic: ${subjectMap[formSubject] || formSubject}\n\n`;
    body += `Message:\n${formMessage.trim()}\n`;

    const mailtoUrl = `mailto:${BAKERY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A3366] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#5A3366]" />
            <span>Find Us in Piravom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#261428] font-normal tracking-tight">
            Contact &amp; Location
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#61496B] font-light leading-relaxed">
            Have a question about what is currently fresh, store availability, or want to pre-order a cake? Tap any of our clickable contact channels below.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Address Info */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Primary Address Card */}
            <div className="bg-[#FFFDFB] rounded-3xl p-6 sm:p-8 border border-[#E5D4EA] shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0E4F4]">
                <div className="flex items-start gap-3.5">
                  <BakeryLogo sizeClass="w-12 h-12" />
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#261428]">
                      Bakery Counter Address
                    </h3>
                    <p className="text-xs sm:text-sm text-[#553D5F] mt-1 font-medium">
                      {BAKERY_INFO.address}
                    </p>
                    <p className="text-xs text-[#82698C] mt-0.5">
                      {BAKERY_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#DCCBE0] hover:bg-[#F6EEF8] text-xs text-[#4A3254] transition-all cursor-pointer btn-glow-outline"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a
                    href={BAKERY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#5A3366] text-[#FAF7F2] text-xs font-semibold hover:bg-[#462351] transition-all btn-glow-plum"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F3E2F8]" />
                  </a>
                </div>
              </div>

              {/* Clickable Channel Logos without showing raw email or phone string */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Clickable Phone Call Logo */}
                <a
                  href={`tel:${BAKERY_INFO.phoneRaw}`}
                  className="p-4 rounded-2xl bg-[#F8F2FA] border border-[#E6D6EB] hover:border-[#5A3366] hover:bg-[#F2E5F5] transition-all group flex items-center gap-3.5"
                  aria-label="Call bakery counter"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#5A3366] text-[#FAF7F2] group-hover:scale-105 transition-transform flex items-center justify-center shadow-xs shrink-0">
                    <Phone className="w-5 h-5 text-[#F3E2F8]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#261428] group-hover:text-[#5A3366] transition-colors block">
                      Call Us
                    </span>
                    <span className="text-[11px] text-[#785E80] block mt-0.5">
                      Tap to connect instantly
                    </span>
                  </div>
                </a>

                {/* Clickable WhatsApp Logo */}
                <a
                  href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello NK Bakery, I would like to inquire about today's bakes and availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#F8F2FA] border border-[#E6D6EB] hover:border-[#2E7D32] hover:bg-[#EAF5EC] transition-all group flex items-center gap-3.5"
                  aria-label="WhatsApp chat"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2E7D32] text-white group-hover:scale-105 transition-transform flex items-center justify-center shadow-xs shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#261428] group-hover:text-[#2E7D32] transition-colors block">
                      WhatsApp Chat
                    </span>
                    <span className="text-[11px] text-[#785E80] block mt-0.5">
                      Tap to message on WhatsApp
                    </span>
                  </div>
                </a>

                {/* Clickable Email Logo */}
                <a
                  href={`mailto:${BAKERY_INFO.email}?subject=${encodeURIComponent("Bakery Enquiry - NK Bakery Piravom")}`}
                  className="p-4 rounded-2xl bg-[#F8F2FA] border border-[#E6D6EB] hover:border-[#5A3366] hover:bg-[#F2E5F5] transition-all group flex items-center gap-3.5"
                  aria-label="Send email"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#5A3366] text-[#FAF7F2] group-hover:scale-105 transition-transform flex items-center justify-center shadow-xs shrink-0">
                    <Mail className="w-5 h-5 text-[#F3E2F8]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#261428] group-hover:text-[#5A3366] transition-colors block">
                      Email Us
                    </span>
                    <span className="text-[11px] text-[#785E80] block mt-0.5">
                      Tap to write an email
                    </span>
                  </div>
                </a>

                {/* Clickable Instagram Logo */}
                <a
                  href={BAKERY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#F8F2FA] border border-[#E6D6EB] hover:border-[#C13584] hover:bg-[#FAF0F4] transition-all group flex items-center gap-3.5"
                  aria-label="Instagram profile"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white group-hover:scale-105 transition-transform flex items-center justify-center shadow-xs shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#261428] group-hover:text-[#C13584] transition-colors block">
                      Instagram
                    </span>
                    <span className="text-[11px] text-[#785E80] block mt-0.5">
                      Tap to view daily photos
                    </span>
                  </div>
                </a>

              </div>

              {/* Pickup Note Banner */}
              <div className="p-4 rounded-2xl bg-[#F6EEF8] border border-[#E5D4EA] text-xs text-[#5D4267] flex items-center justify-between">
                <div>
                  <strong className="text-[#261428]">Store Pickup:</strong>{' '}
                  All items are prepared for counter takeaway in Piravom. Home delivery is not available.
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Direct Message Form with WhatsApp AND Email buttons */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#FFFDFB] rounded-3xl p-6 sm:p-8 border border-[#E5D4EA] shadow-sm"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#261428] mb-1">
              Send an Enquiry
            </h3>
            <p className="text-xs text-[#735A7C] mb-6">
              Enter your details below, then choose to send directly via WhatsApp or Email.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#482F50] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arun Kumar"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#DCCBE0] text-xs text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#482F50] mb-1">
                  Contact Number (optional)
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 98470 12345"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#DCCBE0] text-xs text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#482F50] mb-1">
                  Topic of Enquiry
                </label>
                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#DCCBE0] text-xs text-[#261428] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30"
                >
                  <option value="menu">Daily Specials &amp; Fresh Availability</option>
                  <option value="cake">Custom Celebration Cake Pre-Order</option>
                  <option value="bulk">Party &amp; Event Orders</option>
                  <option value="general">Store Timings &amp; General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#482F50] mb-1">
                  Message / Special Request *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message, estimated pickup time, or what you'd like to ask..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F2] border border-[#DCCBE0] text-xs text-[#261428] placeholder-[#9D88A5] focus:outline-none focus:ring-2 focus:ring-[#5A3366]/30 resize-none"
                />
              </div>

              {/* Action Buttons: WhatsApp and Email */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#2E7D32] hover:bg-[#256629] text-white text-xs font-semibold transition-all btn-glow-green cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#C8E6C9]" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#5A3366] hover:bg-[#462351] text-[#FAF7F2] text-xs font-semibold transition-all btn-glow-plum cursor-pointer border border-[#5A3366]"
                >
                  <Mail className="w-4 h-4 text-[#F3E2F8]" />
                  <span>Send via Email</span>
                </button>
              </div>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
