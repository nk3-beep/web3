import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const TaglineBanner: React.FC = () => {
  return (
    <section 
      aria-label="Bakery Philosophy"
      className="relative py-12 sm:py-16 bg-gradient-to-r from-[#FAF6F2] via-[#F8EEF8] to-[#FAF6F2] overflow-hidden"
    >
      {/* Decorative ambient radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-32 bg-[#EBDCF2]/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Main Tagline Container with Love Symbol on Both Ends */}
          <div className="group relative inline-flex items-center justify-center gap-3 sm:gap-6 px-5 sm:px-10 py-4 sm:py-5 rounded-3xl sm:rounded-full bg-[#FFFDFB]/95 backdrop-blur-sm border border-[#DFC9E4] shadow-[0_4px_24px_rgba(90,51,102,0.08),0_0_20px_rgba(222,204,229,0.35)] hover:shadow-[0_6px_30px_rgba(90,51,102,0.14),0_0_28px_rgba(186,137,196,0.45)] transition-all duration-300 max-w-full">
            
            {/* Left Love Symbol */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="shrink-0"
              aria-hidden="true"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#98396D] fill-[#98396D] drop-shadow-[0_2px_8px_rgba(152,57,109,0.35)]" />
            </motion.div>

            {/* Tagline Statement */}
            <p className="font-serif italic text-base sm:text-xl md:text-2xl text-[#2E1430] font-normal tracking-wide leading-snug">
              Made with care. Chosen with love. Enjoyed by everyone.
            </p>

            {/* Right Love Symbol */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="shrink-0"
              aria-hidden="true"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#98396D] fill-[#98396D] drop-shadow-[0_2px_8px_rgba(152,57,109,0.35)]" />
            </motion.div>

          </div>

          {/* Subtext tribute */}
          <p className="mt-3 text-xs sm:text-sm text-[#73527B] font-light tracking-wide">
            NK Bakery · Freshly baked daily for our Piravom community
          </p>
        </motion.div>
      </div>
    </section>
  );
};
