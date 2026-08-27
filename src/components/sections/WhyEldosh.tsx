import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingDown, Weight, Wrench, PackageCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const WhyEldosh: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    ShieldCheck,
    TrendingDown,
    Weight,
    Wrench,
    PackageCheck,
    MapPin
  ];

  return (
    <section id="why-eldosh" className="py-24 bg-eldosh-graphite/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-eldosh-red">
            <span className="w-2 h-2 rounded-full bg-eldosh-red" />
            <span>{t.why.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {t.why.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t.why.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.why.items.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-eldosh-graphite/90 border border-white/10 hover:border-eldosh-red/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-card hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 font-display font-black text-5xl text-white/5 group-hover:text-eldosh-red/10 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-eldosh-dark border border-white/10 flex items-center justify-center text-eldosh-red group-hover:bg-eldosh-red group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black font-display text-white uppercase tracking-wide group-hover:text-eldosh-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-eldosh-red/40 group-hover:w-16 group-hover:bg-eldosh-red transition-all duration-300 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
