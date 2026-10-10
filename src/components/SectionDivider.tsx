import React from 'react';

interface SectionDividerProps {
  /**
   * Visual variation of the floral divider:
   * - 'flourish': Center botanical blossom flanked by delicate scrolls & diamond beads
   * - 'wheat': Organic wheat/grain stalk motif suited for a classic bakery
   * - 'minimal': Subtle tapered line with central petal rosette
   */
  variant?: 'flourish' | 'wheat' | 'minimal';
  /**
   * Optional custom wrapper class
   */
  className?: string;
  /**
   * Background tint under the divider to match adjacent sections seamlessly
   */
  bgClass?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'flourish',
  className = '',
  bgClass = 'bg-[#FAF7F2]',
}) => {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`relative w-full overflow-hidden select-none pointer-events-none py-2 sm:py-3.5 ${bgClass} ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center">
        {/* Left Tapered Filigree Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D6BFDC]/60 to-[#9B64A7]/80" />

        {/* Center Floral / Botanical Ornament */}
        <div className="px-4 sm:px-6 flex items-center gap-2 sm:gap-2.5 text-[#865193]">
          {variant === 'flourish' && (
            <svg
              className="w-16 sm:w-24 h-5 sm:h-6 text-[#7D468A]"
              viewBox="0 0 120 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left delicate scroll vine */}
              <path
                d="M10 12C20 12 24 8 32 8C40 8 42 16 50 12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="16" cy="10" r="1.2" fill="currentColor" opacity="0.75" />
              <path
                d="M28 8C29 5 32 4 35 6C35 9 32 10 28 8Z"
                fill="currentColor"
                opacity="0.85"
              />

              {/* Center Floral Rosette */}
              <g transform="translate(60, 12)">
                {/* Central Petals */}
                <ellipse cx="0" cy="-4.5" rx="1.6" ry="3.2" fill="currentColor" />
                <ellipse cx="0" cy="4.5" rx="1.6" ry="3.2" fill="currentColor" />
                <ellipse cx="-4.5" cy="0" rx="3.2" ry="1.6" fill="currentColor" />
                <ellipse cx="4.5" cy="0" rx="3.2" ry="1.6" fill="currentColor" />
                {/* Diagonal Leaf Accents */}
                <circle cx="-3" cy="-3" r="1" fill="currentColor" opacity="0.7" />
                <circle cx="3" cy="-3" r="1" fill="currentColor" opacity="0.7" />
                <circle cx="-3" cy="3" r="1" fill="currentColor" opacity="0.7" />
                <circle cx="3" cy="3" r="1" fill="currentColor" opacity="0.7" />
                {/* Center Core Dot */}
                <circle cx="0" cy="0" r="1.75" fill="#FAF7F2" stroke="currentColor" strokeWidth="1" />
              </g>

              {/* Right delicate scroll vine */}
              <path
                d="M110 12C100 12 96 8 88 8C80 8 78 16 70 12"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="104" cy="10" r="1.2" fill="currentColor" opacity="0.75" />
              <path
                d="M92 8C91 5 88 4 85 6C85 9 88 10 92 8Z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          )}

          {variant === 'wheat' && (
            <svg
              className="w-16 sm:w-24 h-5 sm:h-6 text-[#7D468A]"
              viewBox="0 0 120 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Wheat Ears */}
              <path d="M22 12H52" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M30 12C32 9 36 9 37 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M30 12C32 15 36 15 37 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M38 12C40 8 44 8 45 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M38 12C40 16 44 16 45 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="20" cy="12" r="1.4" fill="currentColor" opacity="0.8" />

              {/* Center Diamond Blossom */}
              <g transform="translate(60, 12)">
                <path
                  d="M0 -6 L4.5 0 L0 6 L-4.5 0 Z"
                  fill="currentColor"
                  opacity="0.9"
                />
                <circle cx="0" cy="0" r="1.6" fill="#FAF7F2" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="-8" cy="0" r="1.2" fill="currentColor" opacity="0.65" />
                <circle cx="8" cy="0" r="1.2" fill="currentColor" opacity="0.65" />
              </g>

              {/* Right Wheat Ears */}
              <path d="M68 12H98" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M83 12C85 9 89 9 90 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M83 12C85 15 89 15 90 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M75 12C77 8 81 8 82 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M75 12C77 16 81 16 82 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="100" cy="12" r="1.4" fill="currentColor" opacity="0.8" />
            </svg>
          )}

          {variant === 'minimal' && (
            <svg
              className="w-12 sm:w-16 h-4 sm:h-5 text-[#7D468A]"
              viewBox="0 0 80 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="8" y1="10" x2="32" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              {/* Central Petal Rosette */}
              <g transform="translate(40, 10)">
                <circle cx="0" cy="0" r="2.2" fill="currentColor" />
                <path d="M0 -4.5 C-1.5 -2.5 -1.5 2.5 0 4.5 C1.5 2.5 1.5 -2.5 0 -4.5 Z" fill="currentColor" opacity="0.85" />
                <path d="M-4.5 0 C-2.5 -1.5 2.5 -1.5 4.5 0 C2.5 1.5 -2.5 1.5 -4.5 0 Z" fill="currentColor" opacity="0.85" />
                <circle cx="0" cy="0" r="1.1" fill="#FAF7F2" />
              </g>
              <line x1="48" y1="10" x2="72" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          )}
        </div>

        {/* Right Tapered Filigree Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#9B64A7]/80 via-[#D6BFDC]/60 to-transparent" />
      </div>
    </div>
  );
};
