import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { WEEKLY_HOURS, BAKERY_INFO } from '../data/bakeryData';
import { getStoreStatus, StoreStatus } from '../utils/storeHours';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Clock, Phone, MapPin, Calendar, AlertCircle } from 'lucide-react';

export const StoreHours: React.FC = () => {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hours" className="py-16 sm:py-24 bg-[#F8F1FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A3366] mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Plan Your Visit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#261428] font-normal tracking-tight">
            Store Hours &amp; Timings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#61496B] font-light leading-relaxed">
            Monday to Saturday from 8:00 AM to 8:30 PM, near JMP Medical Centre, Piravom. Sunday is our weekly holiday.
          </p>
        </motion.div>

        {/* Two Column Layout: Live Status Card + Weekly Hours Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Status & Visit Essentials */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Live Status Highlight Card */}
            <div className="bg-[#FFFDFB] rounded-3xl p-6 sm:p-8 border border-[#E5D4EA] shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0E4F4]">
                <div className="flex items-center gap-2.5">
                  <span className={`w-3 h-3 rounded-full ${status.isOpen ? (status.isClosingSoon ? 'bg-amber-500 animate-pulse' : 'bg-emerald-600') : 'bg-stone-400'}`} />
                  <span className="font-serif text-xl sm:text-2xl font-medium text-[#261428]">
                    {status.statusText}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#5A3366] bg-[#F5EEF8] px-3 py-1 rounded-full border border-[#E8D9EC]">
                  {status.currentDayName}
                </span>
              </div>

              <div className="py-6 space-y-3">
                <p className="text-base text-[#523B5C] leading-relaxed">
                  {status.subText}
                </p>
                <div className="text-xs text-[#70557A] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#5A3366]" />
                  <span>Today's counter schedule: <strong className="text-[#261428] font-semibold">{status.todayHoursText}</strong></span>
                </div>
              </div>

              {/* Quick Actions without raw number */}
              <div className="pt-4 border-t border-[#F0E4F4] flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BAKERY_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#5A3366] text-[#FAF7F2] text-xs font-semibold hover:bg-[#462351] transition-all btn-glow-plum"
                  aria-label="Call bakery"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F3E2F8]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BAKERY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#FFFDFB] text-[#261428] border border-[#DECCE5] text-xs font-medium hover:bg-[#F8F1FA] transition-all btn-glow-outline"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#5A3366]" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`https://wa.me/${BAKERY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello NK Bakery, I'd like to check today's counter availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#F5EEF8] text-[#5A3366] border border-[#DECCE5] hover:bg-[#EBDCF2] transition-all inline-flex items-center justify-center btn-glow-secondary"
                  title="WhatsApp Chat"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#2E7D32]" />
                </a>
              </div>
            </div>

            {/* Note on Sunday holiday */}
            <div className="bg-[#FAF6F2] rounded-3xl p-6 border border-[#E5D4EA]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A3366] mb-1">
                <Calendar className="w-4 h-4 text-[#5A3366]" />
                <span>Sunday Holiday</span>
              </div>
              <p className="text-xs text-[#63496C] leading-relaxed font-light">
                NK Bakery remains closed on Sundays so our bakers can rest and prepare fresh sourdough and batches for the new week.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Weekly Schedule Breakdown Table */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#FFFDFB] rounded-3xl p-6 sm:p-8 border border-[#E5D4EA] shadow-sm"
          >
            
            <div className="flex items-center justify-between pb-5 border-b border-[#F0E4F4] mb-6">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#261428]">
                  Weekly Counter Schedule
                </h3>
                <p className="text-xs text-[#735A7C] mt-0.5">
                  Monday to Saturday: 8:00 AM – 8:30 PM · Sunday: Holiday
                </p>
              </div>
              <Calendar className="w-5 h-5 text-[#5A3366]" />
            </div>

            <div className="divide-y divide-[#F2E8F6]">
              {WEEKLY_HOURS.map((item) => {
                const isToday = item.day === status.currentDayName;
                
                return (
                  <div
                    key={item.day}
                    className={`py-3.5 px-3.5 flex items-center justify-between rounded-xl transition-colors ${
                      isToday ? 'bg-[#F5EEF8] font-semibold' : 'hover:bg-[#FAF6FC]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs sm:text-sm ${isToday ? 'text-[#261428] font-semibold' : 'text-[#503956]'}`}>
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#5A3366] bg-[#FFFDFB] px-2 py-0.5 rounded-full border border-[#DECCE5]">
                          Today
                        </span>
                      )}
                    </div>

                    <div className="text-right">
                      {item.isClosed ? (
                        <span className="text-xs sm:text-sm font-semibold text-[#8C3F58]">
                          Holiday (Closed)
                        </span>
                      ) : (
                        <span className={`text-xs sm:text-sm font-medium ${isToday ? 'text-[#261428]' : 'text-[#64496D]'}`}>
                          8:00 AM – 8:30 PM
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#F8F1FA] border border-[#E8DAED] flex items-center gap-3 text-xs text-[#63496C]">
              <AlertCircle className="w-4 h-4 text-[#5A3366] shrink-0" />
              <span>
                Need to confirm batch availability or order a celebration cake? Tap our WhatsApp or Call buttons anytime.
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
