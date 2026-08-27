import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, ShieldCheck, Headphones } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

export const CtaBanner: React.FC = () => {
  const { t } = useLanguage();
  const { openConsultModal } = useModal();

  const handleScrollToModels = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#models');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-eldosh-dark relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-eldosh-graphite via-eldosh-charcoal to-eldosh-graphite border border-eldosh-red/40 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Red Watermark Accent */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-eldosh-red/10 blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-eldosh-red/20 border border-eldosh-red/40 text-eldosh-red rounded text-xs font-black uppercase tracking-widest">
              <Headphones className="w-3.5 h-3.5" />
              <span>{t.ctaBanner.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
              {t.ctaBanner.title}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-medium leading-relaxed">
              {t.ctaBanner.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#models"
                onClick={handleScrollToModels}
                className="px-8 py-4 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-black uppercase tracking-wider text-sm rounded shadow-red-glow transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t.ctaBanner.chooseModel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => openConsultModal()}
                className="px-8 py-4 bg-eldosh-dark hover:bg-white/10 active:scale-95 text-white font-black uppercase tracking-wider text-sm rounded border border-white/20 transition-all text-center"
              >
                {t.ctaBanner.contactUs}
              </button>
            </div>

            {/* Hotline info */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-300">
              <div className="flex flex-wrap items-center gap-2">
                <PhoneCall className="w-4 h-4 text-eldosh-red shrink-0" />
                <span className="font-bold">{t.ctaBanner.hotline}</span>
                <a href="tel:+998937200605" className="text-white font-black hover:text-eldosh-red transition-colors text-sm">
                  +998 (93) 720-06-05
                </a>
                <span className="text-gray-500 font-bold hidden sm:inline">•</span>
                <a href="tel:+998933305000" className="text-white font-black hover:text-eldosh-red transition-colors text-sm">
                  +998 (93) 330-50-00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-eldosh-red" />
                <span className="font-bold">{t.ctaBanner.factoryWarranty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
