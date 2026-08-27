import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getImageUrl } from '../../utils/getImageUrl';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'compact';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'header'
}) => {
  const { language } = useLanguage();
  const [loadFailed, setLoadFailed] = useState(false);

  const isFooter = variant === 'footer';
  const isCompact = variant === 'compact';

  const heightClass = isCompact
    ? 'h-8 sm:h-9'
    : isFooter
    ? 'h-12 sm:h-14'
    : 'h-10 sm:h-12';

  return (
    <div className={`flex items-center group cursor-pointer select-none shrink-0 ${className}`}>
      {/* If full banner image loads successfully, show it directly */}
      {!loadFailed ? (
        <img
          src={getImageUrl('/logo-full.png')}
          alt="ELDOSH MOTORS"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (img.src.indexOf('logo.png') === -1) {
              img.src = getImageUrl('/logo.png');
            } else {
              setLoadFailed(true);
            }
          }}
          className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(214,0,0,0.35)]`}
        />
      ) : (
        /* Dynamic Replica matching media_1787749718811.png exactly */
        <div className="flex items-center gap-3">
          <div className="relative shrink-0 flex items-center justify-center">
            <img
              src="/logo-badge.png"
              alt="ELDOSH"
              className={`${isCompact ? 'h-8' : isFooter ? 'h-12' : 'h-10'} w-auto object-contain`}
              onError={(e) => {
                // If badge is also loading, render vector SVG
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-baseline tracking-tight">
              <span className={`font-display font-black text-white leading-none ${
                isCompact ? 'text-lg' : isFooter ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              }`}>
                ELDOSH
              </span>
              <span className={`font-display font-black text-eldosh-red ml-1.5 leading-none ${
                isCompact ? 'text-lg' : isFooter ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              }`}>
                MOTORS
              </span>
            </div>
            <span className="text-[9px] tracking-[0.24em] text-gray-400 font-extrabold uppercase mt-1 leading-none">
              {language === 'ru' ? 'КОММЕРЧЕСКИЙ ТРАНСПОРТ' : 'TIJORAT TRANSPORTI'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
