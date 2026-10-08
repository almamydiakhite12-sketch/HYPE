import React from 'react';

interface HypeLogoProps {
  className?: string;
  size?: number;
  variant?: 'circle' | 'horizontal' | 'badge';
  withBorder?: boolean;
}

export const HypeLogo: React.FC<HypeLogoProps> = ({
  className = '',
  size = 56,
  variant = 'circle',
  withBorder = true,
}) => {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div 
          className="relative rounded-full bg-black flex items-center justify-center border border-white/20 shrink-0"
          style={{ width: size, height: size }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full p-0.5" fill="none">
            <circle cx="100" cy="100" r="92" stroke="#ffffff" strokeWidth="3" />
            <text
              x="100"
              y="112"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="Syne, 'Plus Jakarta Sans', sans-serif"
              fontWeight="900"
              fontSize="46"
              letterSpacing="2"
            >
              HYPE
            </text>
            <text
              x="162"
              y="86"
              textAnchor="start"
              fill="#ffffff"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="11"
            >
              TM
            </text>
            <text
              x="100"
              y="138"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="10.5"
              letterSpacing="2.8"
            >
              SPORT COMMUNICATION
            </text>
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-display font-black tracking-tight text-white text-lg leading-none">HYPE</span>
            <span className="text-[9px] font-bold text-neutral-400">™</span>
          </div>
          <span className="text-[9px] tracking-[0.22em] font-semibold text-neutral-300 uppercase leading-tight mt-0.5">
            SPORT COMMUNICATION
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="HYPE Sport Communication Logo"
    >
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full drop-shadow-md select-none overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Dark Disk - centered at 120, 120 */}
        <circle cx="120" cy="120" r="118" fill="#09090b" />
        
        {/* Crisp White Outer Ring - centered at 120, 120 */}
        {withBorder && (
          <circle
            cx="120"
            cy="120"
            r="110"
            stroke="#ffffff"
            strokeWidth="3"
            strokeOpacity="0.95"
          />
        )}

        {/* HYPE Main Wordmark - Perfectly centered horizontally at x="120" */}
        <text
          x="120"
          y="126"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Syne, 'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="56"
          letterSpacing="2.5"
        >
          HYPE
        </text>

        {/* Trademark TM positioned right at the top right of E without shifting HYPE */}
        <text
          x="195"
          y="95"
          textAnchor="start"
          fill="#ffffff"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="13"
        >
          TM
        </text>

        {/* Subtitle SPORT COMMUNICATION - Perfectly centered at x="120" */}
        <text
          x="120"
          y="156"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="12.5"
          letterSpacing="3.5"
        >
          SPORT COMMUNICATION
        </text>
      </svg>
    </div>
  );
};
