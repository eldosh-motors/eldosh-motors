import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Zap, Shield, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getImageUrl } from '../../utils/getImageUrl';

const stats = [
  { value: '20+', label: { ru: 'Лет на рынке', uz: 'Yillik tajriba' } },
  { value: '10+', label: { ru: 'Моделей техники', uz: 'Model texnika' } },
  { value: '17', label: { ru: 'Дилеров по Узбекистану', uz: `Diler butun O'zbekiston` } },
  { value: '1500', label: { ru: 'кг грузоподъёмность', uz: `kg yuk ko'tarish` } },
];

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-eldosh-dark relative border-t border-white/5 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-eldosh-red/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/2 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-eldosh-red/20 border border-eldosh-red/40 text-eldosh-red rounded text-xs font-black uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>{language === 'ru' ? 'О КОМПАНИИ' : 'KOMPANIYA HAQIDA'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
              {language === 'ru' ? 'ELDOSH MOTORS' : 'ELDOSH MOTORS'}
              <span className="block text-eldosh-red">{language === 'ru' ? '— С 2005 ГОДА' : '— 2005 YILDAN'}</span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              {language === 'ru'
                ? 'Eldosh Motors — современное предприятие, специализирующееся на производстве трёхколёсных мотоциклов. Компания работает с 2005 года, то есть уже более 20 лет, выпуская надёжные и качественные мотоциклы.'
                : `Eldosh Motors — uch g'ildirakli mototsikllar ishlab chiqarishga ixtisoslashgan zamonaviy korxona. Kompaniya 2005 yildan beri, ya'ni 20 yildan ortiq faoliyat yuritib, ishonchli va sifatli mototsikllar chiqarmoqda.`}
            </p>

            <p className="text-base text-gray-300 leading-relaxed">
              {language === 'ru'
                ? 'Наша продукция адаптирована к условиям Узбекистана и отличается прочностью, экономичностью и долгим сроком службы. Команда Eldosh Motors состоит из опытных специалистов. Наша цель — предоставить каждому клиенту удобную, мощную и надёжную технику.'
                : `Mahsulotlarimiz O'zbekiston sharoitiga moslashtirilgan bo'lib, mustahkamligi, tejamkorligi va uzoq xizmat muddati bilan ajralib turadi. Eldosh Motors jamoasi tajribali mutaxassislardan iborat. Maqsadimiz — har bir mijozga qulay, kuchli va ishonchli texnika taqdim etish.`}
            </p>

            {/* Highlight */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-eldosh-graphite border border-eldosh-red/30">
              <CheckCircle2 className="w-5 h-5 text-eldosh-red mt-0.5 shrink-0" />
              <p className="text-sm font-bold text-white">
                {language === 'ru'
                  ? '20 лет опыта, качество, сила и доверие — гордость Eldosh Motors!'
                  : `20 yillik tajriba, sifat, kuch va ishonch — Eldosh Motors'ning faxri!`}
              </p>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { ru: 'Собственное производство', uz: `O'z ishlab chiqarish` },
                { ru: 'Гарантия 2 месяца', uz: '2 oy kafolat' },
                { ru: '10 моделей', uz: '10 ta model' },
                { ru: 'Сертифицировано', uz: 'Sertifikatlangan' },
              ].map((chip, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-eldosh-charcoal border border-white/10 text-gray-300 text-xs font-semibold rounded-full"
                >
                  {language === 'ru' ? chip.ru : chip.uz}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-eldosh-graphite border border-white/8 hover:border-eldosh-red/40 transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-display font-black text-eldosh-red mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider group-hover:text-gray-200 transition-colors">
                    {language === 'ru' ? s.label.ru : s.label.uz}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={getImageUrl('/ELDOSH-EL-200-CC.png')}
                alt="ELDOSH MOTORS — производство"
                className="w-full h-56 object-cover object-center"
              />
              <div className="bg-eldosh-graphite px-5 py-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-eldosh-red shrink-0" />
                <span className="text-xs text-gray-300 font-semibold">
                  {language === 'ru'
                    ? 'г. Самарканд, ул. Гагарина, 36 • Пн–Пт 09:00–18:00'
                    : `Samarqand sh., Gagarin ko'ch., 36 • Du–Ju 09:00–18:00`}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
