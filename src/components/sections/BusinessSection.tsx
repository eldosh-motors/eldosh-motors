import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Store, Sprout, HardHat, Building2, Briefcase, ArrowRight, DollarSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

export const BusinessSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { openConsultModal } = useModal();

  const sectorIcons: Record<string, React.ElementType> = {
    delivery: Truck,
    retail: Store,
    agriculture: Sprout,
    construction: HardHat,
    municipal: Building2,
    'small-biz': Briefcase
  };

  return (
    <section id="business" className="py-24 bg-eldosh-graphite/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-eldosh-red">
            <Briefcase className="w-4 h-4" />
            <span>{t.business.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {t.business.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t.business.subtitle}
          </p>
        </div>

        {/* Sectors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {t.business.sectors.map((sector, idx) => {
            const Icon = sectorIcons[sector.id] || Briefcase;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-eldosh-graphite/90 border border-white/10 hover:border-eldosh-red/40 rounded-xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-eldosh-dark border border-white/10 flex items-center justify-center text-eldosh-red group-hover:bg-eldosh-red group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black text-gray-300 uppercase bg-white/10 px-2.5 py-1 rounded tracking-wider">
                      {language === 'ru' ? 'ВЫГОДА' : 'FOYDA'}
                    </span>
                  </div>

                  <h3 className="text-lg font-black font-display text-white group-hover:text-eldosh-red transition-colors tracking-wide">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {sector.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400">
                    <DollarSign className="w-4 h-4 text-eldosh-red shrink-0" />
                    <span>{sector.roi}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openConsultModal(language === 'ru' ? `Для сферы: ${sector.title}` : `Soha uchun: ${sector.title}`)}
                    className="p-2 text-gray-300 hover:text-white hover:bg-eldosh-red rounded-lg transition-colors"
                    aria-label="Tanlash"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-gradient-to-r from-eldosh-charcoal via-eldosh-graphite to-eldosh-charcoal border border-eldosh-red/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-display text-white uppercase tracking-wide">
              {t.business.corporateTitle}
            </h3>
            <p className="text-sm text-gray-300 max-w-xl font-normal leading-relaxed">
              {t.business.corporateDesc}
            </p>
          </div>
          <button
            type="button"
            onClick={() => openConsultModal(language === 'ru' ? 'Корпоративный автопарк' : 'Korporativ avtopark')}
            className="px-8 py-4 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-black uppercase tracking-wider text-sm rounded shadow-red-glow transition-all whitespace-nowrap"
          >
            {t.business.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
