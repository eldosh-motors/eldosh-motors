import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../../data/stats';
import { useLanguage } from '../../context/LanguageContext';

const Counter: React.FC<{ target: number; prefix?: string; suffix?: string }> = ({ target, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(target % 1 !== 0 ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const QuickStats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="bg-eldosh-graphite/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl py-4 sm:py-5 px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {statsData.map((stat, idx) => {
            const label = (t.stats as Record<string, string>)[stat.labelKey] || stat.labelKey;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`flex flex-col justify-center ${idx > 0 ? 'pt-3 sm:pt-0 lg:pl-4' : ''}`}
              >
                <div className="text-xl sm:text-2xl lg:text-[26px] font-display font-black text-white tracking-tight flex items-baseline whitespace-nowrap">
                  <Counter target={stat.valueNumber} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-bold mt-0.5 tracking-tight whitespace-nowrap leading-tight">
                  {label}
                </div>
                <div className="w-5 h-0.5 bg-eldosh-red mt-1.5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
