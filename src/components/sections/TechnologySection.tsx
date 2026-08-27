import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TechnologySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeHotspotIndex, setActiveHotspotIndex] = useState<number>(0);

  const hotspots = [
    {
      id: 'engine',
      x: 48,
      y: 58,
      ...t.tech.hotspots[0]
    },
    {
      id: 'frame',
      x: 70,
      y: 50,
      ...t.tech.hotspots[1]
    },
    {
      id: 'suspension',
      x: 82,
      y: 68,
      ...t.tech.hotspots[2]
    },
    {
      id: 'brakes',
      x: 25,
      y: 72,
      ...t.tech.hotspots[3]
    },
    {
      id: 'transmission',
      x: 42,
      y: 65,
      ...t.tech.hotspots[4]
    },
    {
      id: 'optics',
      x: 18,
      y: 38,
      ...t.tech.hotspots[5]
    }
  ];

  const currentHotspot = hotspots[activeHotspotIndex] || hotspots[0];

  return (
    <section id="technology" className="py-24 bg-eldosh-dark relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-eldosh-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-eldosh-red">
            <Cpu className="w-4 h-4" />
            <span>{t.tech.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {t.tech.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t.tech.subtitle}
          </p>
        </div>

        {/* Cinematic Interactive Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase with Hotspots (8 Cols) */}
          <div className="lg:col-span-8 relative bg-eldosh-graphite/60 border border-white/10 rounded-2xl p-4 sm:p-8 overflow-hidden">
            {/* Tag */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 bg-eldosh-dark/90 border border-white/15 text-xs font-black text-white rounded backdrop-blur-sm uppercase">
              {t.tech.interactiveBadge}
            </div>

            {/* Tricycle Technical Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=85"
                alt="ELDOSH"
                className="w-full h-full object-contain filter contrast-110 drop-shadow-2xl"
              />

              {/* Pulsing Hotspots on image */}
              {hotspots.map((hs, idx) => (
                <button
                  key={hs.id}
                  type="button"
                  onClick={() => setActiveHotspotIndex(idx)}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group/hs focus:outline-none transition-transform ${
                    idx === activeHotspotIndex ? 'scale-125' : 'hover:scale-110'
                  }`}
                  aria-label={hs.title}
                >
                  <span className="relative flex h-7 w-7 sm:h-8 sm:w-8">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        idx === activeHotspotIndex ? 'bg-eldosh-red' : 'bg-white/60'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-7 w-7 sm:h-8 sm:w-8 items-center justify-center text-[11px] font-black border-2 transition-colors ${
                        idx === activeHotspotIndex
                          ? 'bg-eldosh-red border-white text-white shadow-red-glow'
                          : 'bg-eldosh-dark border-eldosh-red text-white hover:bg-eldosh-red'
                      }`}
                    >
                      {idx + 1}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Hotspot selector pills */}
            <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 z-20 relative">
              {hotspots.map((hs, idx) => (
                <button
                  key={hs.id}
                  type="button"
                  onClick={() => setActiveHotspotIndex(idx)}
                  className={`px-3.5 py-1.5 rounded text-xs font-black whitespace-nowrap transition-all uppercase ${
                    idx === activeHotspotIndex
                      ? 'bg-eldosh-red text-white shadow-sm'
                      : 'bg-eldosh-dark/80 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  0{idx + 1}. {hs.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hotspot Inspector Details (4 Cols) */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHotspot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-eldosh-graphite border border-eldosh-red/30 rounded-xl p-6 sm:p-8 shadow-card space-y-5"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-black text-eldosh-red uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    {language === 'ru' ? `УЗЕЛ № 0${activeHotspotIndex + 1}` : `TUGUN № 0${activeHotspotIndex + 1}`}
                  </span>
                  <span className="text-[11px] font-bold bg-white/10 px-2.5 py-1 rounded text-gray-200 uppercase">
                    ELDOSH
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black font-display text-white leading-snug uppercase">
                  {currentHotspot.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {currentHotspot.desc}
                </p>

                <div className="p-4 bg-eldosh-dark/90 rounded-lg border border-white/10 text-xs">
                  <div className="text-gray-400 font-bold uppercase mb-1">
                    {language === 'ru' ? 'Спецификация компонента:' : 'Komponent xususiyati:'}
                  </div>
                  <div className="font-black text-eldosh-red text-sm">
                    {currentHotspot.spec}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-eldosh-red shrink-0" />
                    <span>{language === 'ru' ? 'Протестировано на стенде 50 000 км' : 'Stendda 50 000 km sinovdan o‘tgan'}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
