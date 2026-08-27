import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { getImageUrl } from '../../utils/getImageUrl';

const slides = [
  {
    img: '/ELDOSH-EL-200-CC.png',
    model: 'ELDOSH EL-200 CC',
    tag: { ru: 'Флагманская модель', uz: 'Asosiy model' },
  },
  {
    img: '/ELDOSH-EL-200-M-CC.png',
    model: 'ELDOSH EL-200 M CC',
    tag: { ru: 'Новинка 2026', uz: 'Yangilik 2026' },
  },
  {
    img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1600&q=80',
    model: 'ELDOSH EL 200 PRO CABIN',
    tag: { ru: 'Закрытая кабина', uz: 'Yopiq kabina' },
  },
  {
    img: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1600&q=80',
    model: 'ELDOSH EL 150 AGRO MAX',
    tag: { ru: 'Агро серия', uz: 'Agro seriyasi' },
  },
  {
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80',
    model: 'ELDOSH EL-ECO ELECTRIC',
    tag: { ru: '100% Электро', uz: '100% Elektr' },
  },
];

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const { openConsultModal } = useModal();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleScrollToModels = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#models');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-eldosh-dark pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-24">

      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={getImageUrl(slides[current].img)}
            alt={slides[current].model}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? '8%' : '-8%', opacity: 0, scale: 1.04 }),
              center: { x: 0, opacity: 1, scale: 1.05 },
              exit: (d: number) => ({ x: d > 0 ? '-8%' : '8%', opacity: 0, scale: 1.0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70 filter contrast-105 brightness-95"
          />
        </AnimatePresence>

        {/* Vignette — lighter so image is visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-eldosh-dark/90 via-eldosh-dark/40 to-eldosh-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-eldosh-dark/85 via-eldosh-dark/40 to-transparent" />
      </div>

      {/* Decorative Red Laser Line */}
      <div className="absolute top-1/3 right-0 w-96 h-[1px] bg-gradient-to-l from-eldosh-red to-transparent opacity-60 pointer-events-none hidden lg:block" />


      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl lg:max-w-5xl space-y-6">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-eldosh-graphite/95 border border-white/15 text-xs font-black uppercase tracking-widest text-gray-200 backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-eldosh-red animate-ping" />
            <span className="text-white">{t.hero.badge}</span>
          </motion.div>

          {/* Main Heavy Heading - smaller sizes */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-0.5 sm:space-y-1"
          >
            <div className="font-display font-black text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase tracking-tight text-white leading-[1.1] break-normal">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 block mt-0.5">
                {t.hero.titleLine2}
              </span>
              <span className="text-eldosh-red block mt-0.5 text-glow">
                {t.hero.titleLine3}
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl font-medium leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a
              href="#models"
              onClick={handleScrollToModels}
              className="px-8 py-4 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-black uppercase tracking-wider text-sm rounded shadow-red-glow transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>{t.hero.exploreBtn}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => openConsultModal()}
              className="px-8 py-4 bg-eldosh-graphite hover:bg-white/10 active:scale-95 text-white font-black uppercase tracking-wider text-sm rounded border border-white/20 backdrop-blur-sm transition-all duration-200 text-center"
            >
              {t.hero.consultBtn}
            </button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6 flex flex-wrap items-center gap-6 text-xs font-bold text-gray-300 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-eldosh-red" />
              <span>{language === 'ru' ? 'Официальная гарантия 2 месяца или 2 000 км' : '2 oy yoki 2 000 km rasmiy kafolat'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-eldosh-red" />
              <span>{language === 'ru' ? 'Сертифицированное производство' : 'Sertifikatlangan ishlab chiqarish'}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls — arrows + dots + model label (bottom-right) */}
      <div className="absolute bottom-10 right-4 sm:right-8 lg:right-12 z-20 flex flex-col items-end gap-3">

        {/* Current model label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-end"
          >
            <span className="text-[10px] uppercase tracking-widest text-eldosh-red font-black">
              {slides[current].tag[language]}
            </span>
            <span className="text-sm sm:text-base font-black text-white uppercase tracking-wide whitespace-nowrap">
              {slides[current].model}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Left / Right Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label={language === 'ru' ? 'Предыдущий' : 'Oldingi'}
            className="w-11 h-11 rounded-full bg-black/50 hover:bg-eldosh-red border border-white/25 hover:border-eldosh-red flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm active:scale-90 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label={language === 'ru' ? 'Следующий' : 'Keyingisi'}
            className="w-11 h-11 rounded-full bg-black/50 hover:bg-eldosh-red border border-white/25 hover:border-eldosh-red flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm active:scale-90 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-6 h-2 bg-eldosh-red'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Слайд ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 cursor-pointer hidden md:flex"
        onClick={handleScrollToModels}
      >
        <span className="text-[11px] uppercase tracking-widest text-gray-300 font-bold">
          {t.hero.scrollDown}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-2.5 bg-eldosh-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
