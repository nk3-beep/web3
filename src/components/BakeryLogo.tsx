import React, { useState } from 'react';
import { BAKERY_INFO } from '../data/bakeryData';

interface BakeryLogoProps {
  className?: string;
  sizeClass?: string;
  altText?: string;
}

export const BakeryLogo: React.FC<BakeryLogoProps> = ({
  className = "",
  sizeClass = "w-11 h-11",
  altText = "NK Bakery logo"
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div 
        className={`${sizeClass} rounded-full bg-[#5A3366] text-[#FAF7F2] flex items-center justify-center font-serif text-lg font-bold tracking-tight shadow-sm shrink-0 ${className}`}
      >
        NK
      </div>
    );
  }

  return (
    <div 
      className={`${sizeClass} rounded-full overflow-hidden bg-[#FFFDF9] border border-[#E5D4EA] shadow-sm flex items-center justify-center shrink-0 ${className}`}
    >
      <img
        src={BAKERY_INFO.logoUrl}
        alt={altText}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
