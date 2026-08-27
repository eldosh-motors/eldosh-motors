import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Weight, Gauge, Fuel, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { modelsData } from '../../data/models';
import { MotorcycleModel } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

export const ModelRange: React.FC = () => {
  const { language, t } = useLanguage();
  const { openModelDetail, openConsultModal } = useModal();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.models.filterAll },
    { id: 'heavy', label: t.models.filterHeavy },
    { id: 'universal', label: t.models.filterUniversal },
    { id: 'cabin', label: t.models.filterCabin },
    { id: 'agro', label: t.models.filterAgro },
    { id: 'electric', label: t.models.filterElectric }
  ];

  const filteredModels = modelsData.filter((model) => {
    if (selectedFilter === 'all') return true;
    return model.category === selectedFilter;
  });

  return (
    <section id="models" className="py-24 bg-eldosh-dark relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-eldosh-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-eldosh-red">
            <span className="w-2 h-2 rounded-full bg-eldosh-red" />
            <span>{t.models.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {t.models.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t.models.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider rounded-lg transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-eldosh-red text-white shadow-red-glow scale-105'
                  : 'bg-eldosh-graphite text-gray-300 hover:text-white hover:bg-eldosh-charcoal border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredModels.map((model: MotorcycleModel) => (
              <motion.div
                layout
                key={model.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-eldosh-graphite/90 border border-white/10 hover:border-eldosh-red/50 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-card hover:-translate-y-1.5"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative aspect-[16/11] bg-black/40 overflow-hidden cursor-pointer" onClick={() => openModelDetail(model)}>
                  <img
                    src={model.primaryImage}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eldosh-graphite via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {model.isPopular && (
                      <span className="px-2.5 py-1 bg-eldosh-red text-white text-[10px] font-black uppercase rounded tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {t.models.hitBadge}
                      </span>
                    )}
                    {model.isNew && (
                      <span className="px-2.5 py-1 bg-white text-eldosh-dark text-[10px] font-black uppercase rounded tracking-wider shadow-sm">
                        {t.models.newBadge}
                      </span>
                    )}
                  </div>

                  {/* Red bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-eldosh-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3
                      onClick={() => openModelDetail(model)}
                      className="text-xl font-black font-display text-white group-hover:text-eldosh-red transition-colors cursor-pointer tracking-wide"
                    >
                      {model.name}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {model.tagline[language]}
                    </p>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs">
                    <div className="flex items-center space-x-2">
                      <Weight className="w-4 h-4 text-eldosh-red shrink-0" />
                      <div>
                        <span className="text-gray-400 font-bold text-[10px] block uppercase">{t.models.payloadLabel}</span>
                        <span className="font-black text-white">{model.highlightSpecs.payload}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-eldosh-red shrink-0" />
                      <div>
                        <span className="text-gray-400 font-bold text-[10px] block uppercase">{t.models.powerLabel}</span>
                        <span className="font-black text-white">{model.highlightSpecs.power}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="w-4 h-4 text-eldosh-red shrink-0" />
                      <div>
                        <span className="text-gray-400 font-bold text-[10px] block uppercase">{t.models.engineLabel}</span>
                        <span className="font-black text-white truncate max-w-[110px]">{model.highlightSpecs.engine}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="w-4 h-4 text-eldosh-red shrink-0" />
                      <div>
                        <span className="text-gray-400 font-bold text-[10px] block uppercase">{t.models.speedLabel}</span>
                        <span className="font-black text-white">{model.highlightSpecs.speed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => openModelDetail(model)}
                      className="py-2.5 px-3 bg-eldosh-charcoal hover:bg-white/10 text-white text-xs font-black uppercase tracking-wider rounded border border-white/10 transition-colors text-center"
                    >
                      {t.models.viewDetails}
                    </button>
                    <button
                      type="button"
                      onClick={() => openConsultModal(model.name)}
                      className="py-2.5 px-3 bg-eldosh-red hover:bg-eldosh-red-hover text-white text-xs font-black uppercase tracking-wider rounded transition-colors text-center flex items-center justify-center gap-1 group-btn"
                    >
                      <span>{t.nav.requestPrice}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
