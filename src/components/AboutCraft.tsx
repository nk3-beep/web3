import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, PenLine, Check } from 'lucide-react';

const STORY_BG_URL = "https://lh3.googleusercontent.com/pw/AP1GczN9mYOAngWeZWTm2uvUIEjWtY6eNPwwM3u7rLL0x8FEyR29PNkipiz3rW6TS9HE2XDzvO_VO152oI9FWYw8b1fv_7eKGiabliJexBQpn1K85FWp8zuab71zHT2aAaoGOj-u_ecf0DVl6kW4_bU2ugE=w1648-h928-s-no-gm?authuser=0";

// Three story paragraphs
const P1_PART1 = "Recently opened in Piravom near JMP Medical Centre, ";
const P1_BOLD = "NK Bakery";
const P1_PART3 = " was founded with a welcoming idea: that every neighbour in our community deserves delicious, high-quality bakery favourites baked fresh each day.";

const P2_TEXT = "We bring together traditional Kerala bakery flavours and modern favourites, always focusing on freshness, quality, great taste, and affordable prices.";

const P3_TEXT = "There are no false shortcuts in our kitchen. We bake with real dairy butter, stone-ground flour, and freshly crushed spices, building lasting relationships with the families who visit our counter.";

const P1_FULL = P1_PART1 + P1_BOLD + P1_PART3;

export const AboutCraft: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger strictly once when entering the viewport
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  // Typing progress state
  const [p1Length, setP1Length] = useState(0);
  const [p2Length, setP2Length] = useState(0);
  const [p3Length, setP3Length] = useState(0);
  const [activeParagraph, setActiveParagraph] = useState<1 | 2 | 3 | null>(null);
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Fast skip to complete
  const handleSkipTyping = () => {
    setP1Length(P1_FULL.length);
    setP2Length(P2_TEXT.length);
    setP3Length(P3_TEXT.length);
    setActiveParagraph(null);
    setIsTypingDone(true);
  };

  useEffect(() => {
    // Only start once visible in the viewport
    if (!isInView || isTypingDone) return;

    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleSkipTyping();
      return;
    }

    let isMounted = true;
    let timerId: ReturnType<typeof setTimeout>;

    // Initial brief breath before writing begins
    timerId = setTimeout(() => {
      if (!isMounted) return;
      setActiveParagraph(1);

      // Typing speed helper with natural micro-pauses at punctuation
      const getCharDelay = (char: string) => {
        if (char === '.' || char === '!' || char === ':') return 140;
        if (char === ',') return 90;
        return 16; // smooth, realistic typing speed
      };

      // Type Paragraph 1
      let i = 0;
      const typeP1 = () => {
        if (!isMounted) return;
        if (i < P1_FULL.length) {
          i++;
          setP1Length(i);
          const char = P1_FULL[i - 1];
          timerId = setTimeout(typeP1, getCharDelay(char));
        } else {
          // Pause before moving to Paragraph 2
          timerId = setTimeout(() => {
            if (!isMounted) return;
            setActiveParagraph(2);
            let j = 0;
            const typeP2 = () => {
              if (!isMounted) return;
              if (j < P2_TEXT.length) {
                j++;
                setP2Length(j);
                const char = P2_TEXT[j - 1];
                timerId = setTimeout(typeP2, getCharDelay(char));
              } else {
                // Pause before moving to Paragraph 3
                timerId = setTimeout(() => {
                  if (!isMounted) return;
                  setActiveParagraph(3);
                  let k = 0;
                  const typeP3 = () => {
                    if (!isMounted) return;
                    if (k < P3_TEXT.length) {
                      k++;
                      setP3Length(k);
                      const char = P3_TEXT[k - 1];
                      timerId = setTimeout(typeP3, getCharDelay(char));
                    } else {
                      // Finished all 3 paragraphs
                      timerId = setTimeout(() => {
                        if (!isMounted) return;
                        setActiveParagraph(null);
                        setIsTypingDone(true);
                      }, 400);
                    }
                  };
                  typeP3();
                }, 260);
              }
            };
            typeP2();
          }, 260);
        }
      };

      typeP1();
    }, 320);

    return () => {
      isMounted = false;
      clearTimeout(timerId);
    };
  }, [isInView, isTypingDone]);

  // Render Paragraph 1 with bold "NK Bakery" as it's typed
  const renderP1 = () => {
    if (p1Length === 0) return null;

    const p1Part1Limit = P1_PART1.length;
    const p1BoldLimit = p1Part1Limit + P1_BOLD.length;

    const part1Typed = P1_FULL.slice(0, Math.min(p1Length, p1Part1Limit));
    const boldTyped = p1Length > p1Part1Limit 
      ? P1_FULL.slice(p1Part1Limit, Math.min(p1Length, p1BoldLimit))
      : '';
    const part3Typed = p1Length > p1BoldLimit 
      ? P1_FULL.slice(p1BoldLimit, p1Length)
      : '';

    return (
      <>
        <span>{part1Typed}</span>
        {boldTyped && <strong className="font-semibold text-[#261428]">{boldTyped}</strong>}
        <span>{part3Typed}</span>
      </>
    );
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden"
    >
      {/* 
        Full-Section Photographic Background:
        - Visible across the section so the appetizing food shines.
        - Preserves vivid clarity, natural lighting and colors.
        - Only a localized, smooth cream overlay exists directly beneath the text on the right
          so the background image remains visible across all other parts while ensuring 100% crisp readability.
      */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <div 
          className="w-full h-full bg-cover bg-left sm:bg-left-center"
          style={{
            backgroundImage: `url("${STORY_BG_URL}")`,
          }}
        />
        {/*
          Localized, gentle atmospheric veil:
          Leaves the left and outer areas fully transparent and crystal-clear.
          Gradually creates a soft warm ivory reading cushion only where the text block sits.
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF7F2]/40 to-[#FAF7F2]/95 lg:from-transparent lg:via-[#FAF7F2]/30 lg:to-[#FAF7F2]/95" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Spacer Column on Desktop: allows the left photograph to remain unobstructed and fully visible */}
          <div className="hidden lg:block lg:col-span-5 min-h-[440px]" aria-hidden="true" />

          {/* Right Column: Story & Craft Content with Framer Motion typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 lg:pl-6 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2]/80 lg:bg-[#FAF7F2]/85 backdrop-blur-[6px] border border-[#E8DAED]/60 shadow-[0_4px_24px_rgba(90,51,102,0.05)]"
          >
            {/* Header with status badge & quick skip button */}
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A3366]">
                {activeParagraph !== null ? (
                  <motion.div 
                    animate={{ rotate: [-6, 6, -6] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="inline-flex items-center gap-1.5 text-[#5A3366]"
                  >
                    <PenLine className="w-3.5 h-3.5 text-[#5A3366]" />
                    <span className="text-[#5A3366]">Writing Our Story &amp; Craft…</span>
                  </motion.div>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#5A3366]" />
                    <span>About Us · Our Story &amp; Craft</span>
                  </>
                )}
              </div>

              {/* Fast reveal button if user wants to skip typing */}
              {activeParagraph !== null && (
                <button
                  type="button"
                  onClick={handleSkipTyping}
                  className="text-[11px] font-medium text-[#5A3366] hover:text-[#38233E] hover:underline transition-colors px-2 py-0.5 rounded-full bg-[#5A3366]/5 border border-[#5A3366]/10"
                >
                  Show all
                </button>
              )}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#261428] font-normal tracking-tight leading-tight">
              Good food brings people together.
            </h2>

            {/* The 3 Paragraphs with realistic typing animation */}
            <div className="space-y-4 text-sm sm:text-base text-[#38233E] leading-relaxed font-light min-h-[220px]">
              {/* Paragraph 1 */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: p1Length > 0 ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="tracking-wide"
              >
                {renderP1()}
                {activeParagraph === 1 && (
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.65, ease: "linear" }}
                    className="inline-block w-[2px] h-[1.15em] ml-0.5 bg-[#5A3366] align-middle rounded-full shadow-[0_0_6px_rgba(90,51,102,0.4)]"
                    aria-hidden="true"
                  />
                )}
              </motion.p>
              
              {/* Paragraph 2 */}
              {(p2Length > 0 || activeParagraph === 2 || isTypingDone) && (
                <motion.p 
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="tracking-wide"
                >
                  <span>{P2_TEXT.slice(0, p2Length)}</span>
                  {activeParagraph === 2 && (
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.65, ease: "linear" }}
                      className="inline-block w-[2px] h-[1.15em] ml-0.5 bg-[#5A3366] align-middle rounded-full shadow-[0_0_6px_rgba(90,51,102,0.4)]"
                      aria-hidden="true"
                    />
                  )}
                </motion.p>
              )}
              
              {/* Paragraph 3 */}
              {(p3Length > 0 || activeParagraph === 3 || isTypingDone) && (
                <motion.p 
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="tracking-wide"
                >
                  <span>{P3_TEXT.slice(0, p3Length)}</span>
                  {activeParagraph === 3 && (
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.65, ease: "linear" }}
                      className="inline-block w-[2px] h-[1.15em] ml-0.5 bg-[#5A3366] align-middle rounded-full shadow-[0_0_6px_rgba(90,51,102,0.4)]"
                      aria-hidden="true"
                    />
                  )}
                </motion.p>
              )}

              {/* Subtle completion indicator */}
              {isTypingDone && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="pt-2 flex items-center gap-1.5 text-xs text-[#5A3366]/80 font-medium"
                >
                  <Check className="w-3.5 h-3.5 text-[#5A3366]" />
                  <span>Freshly prepared every day with honest ingredients.</span>
                </motion.div>
              )}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};


