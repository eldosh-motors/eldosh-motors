import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Search, Navigation, Building, CheckCircle2, PhoneCall } from 'lucide-react';
import { dealersData } from '../../data/dealers';
import { useLanguage } from '../../context/LanguageContext';
import { getImageUrl } from '../../utils/getImageUrl';

// Точные координаты охвата карты Узбекистана
// С учетом реальных пропорций географической карты:
// Долгота (lng): 55.9°E (Запад Каракалпакстана) -> 73.2°E (Восток Андижана/Ферганы)
// Широта (lat): 37.0°N (Юг Термеза/Сурхандарьи) -> 45.6°N (Север Аральского моря/Муйнака)
const UZ_BBOX = {
  lngMin: 55.9,
  lngMax: 73.2,
  latMin: 37.0,
  latMax: 45.6
};

// Функция перевода координат lat/lng в % внутри контейнера карты
function getCoordinatesPercent(lng: number, lat: number) {
  const left = ((lng - UZ_BBOX.lngMin) / (UZ_BBOX.lngMax - UZ_BBOX.lngMin)) * 100;
  const top = (1 - (lat - UZ_BBOX.latMin) / (UZ_BBOX.latMax - UZ_BBOX.latMin)) * 100;
  return { left: `${Math.max(2, Math.min(98, left))}%`, top: `${Math.max(4, Math.min(96, top))}%` };
}

export const DealersSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDealerId, setActiveDealerId] = useState<string>(dealersData[0]?.id || '');
  const [imgError, setImgError] = useState<boolean>(false);

  const regions = [
    { id: 'all', label: language === 'ru' ? 'Все дилеры (17)' : 'Barcha dilerlar (17)' },
    { id: 'Toshkent', label: language === 'ru' ? 'Ташкент' : 'Toshkent' },
    { id: 'Samarqand', label: language === 'ru' ? 'Самарканд' : 'Samarqand' },
    { id: 'Surxondaryo', label: language === 'ru' ? 'Сурхандарья' : 'Surxondaryo' },
    { id: 'Qashqadaryo', label: language === 'ru' ? 'Кашкадарья' : 'Qashqadaryo' },
    { id: "Farg'ona", label: language === 'ru' ? 'Фергана' : "Farg'ona" },
    { id: 'Buxoro', label: language === 'ru' ? 'Бухара' : 'Buxoro' },
    { id: 'Navoiy', label: language === 'ru' ? 'Навои' : 'Navoiy' },
    { id: 'Jizzax', label: language === 'ru' ? 'Джизак' : 'Jizzax' },
    { id: 'Sirdaryo', label: language === 'ru' ? 'Сырдарья' : 'Sirdaryo' },
    { id: 'Xorazm', label: language === 'ru' ? 'Хорезм' : 'Xorazm' },
    { id: "Qoraqalpog'iston", label: language === 'ru' ? 'Каракалпакстан' : "Qoraqalpog'iston" }
  ];

  const standardServices = [
    { ru: 'ПРОДАЖА ТРЁХКОЛЁСНЫХ МОТОЦИКЛОВ', uz: `UCH G'ILDIRAKLI MOTOTSIKLLAR SAVDOSI` },
    { ru: 'ГАРАНТИЙНЫЙ СЕРВИС', uz: 'KAFOLATLI SERVIS XIZMATI' },
    { ru: 'ЗАПАСНЫЕ ЧАСТИ И РАСХОДНЫЕ МАТЕРИАЛЫ', uz: 'EHTIYOT QISMLAR VA SARFLOVCHI MATERIALLAR' },
    { ru: 'ПОСТГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ', uz: 'KAFOLATDAN KEYINGI XIZMAT KO‘RSATISH' },
    { ru: 'ТЕХНИЧЕСКАЯ ПОДДЕРЖКА', uz: 'TEXNIK QO‘LLAB-QUVVATLASH' },
    { ru: 'ОФИЦИАЛЬНЫЕ ДИЛЕРЫ', uz: 'RASMIY DILERLAR' },
    { ru: 'КОНСУЛЬТАЦИЯ И ПОДБОР МОДЕЛИ', uz: 'KONSULTATSIYA VA MODEL TANLASH' }
  ];

  const filteredDealers = dealersData.filter((dealer) => {
    const matchesRegion = selectedRegion === 'all' || dealer.region === selectedRegion;
    const matchesSearch =
      dealer.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.city[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.address[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.phones.some((p) => p.includes(searchQuery));
    return matchesRegion && matchesSearch;
  });

  const activeDealer = dealersData.find((d) => d.id === activeDealerId) || filteredDealers[0] || dealersData[0];

  return (
    <section id="dealers" className="py-24 bg-eldosh-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-eldosh-red">
            <Building className="w-4 h-4" />
            <span>{t.dealers.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {t.dealers.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {t.dealers.subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-eldosh-graphite/80 border border-white/10 rounded-xl p-4 sm:p-5 mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {regions.map((reg) => (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black whitespace-nowrap transition-all uppercase tracking-wider ${
                  selectedRegion === reg.id
                    ? 'bg-eldosh-red text-white shadow-sm'
                    : 'bg-eldosh-dark text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.dealers.searchPlaceholder}
              className="w-full bg-eldosh-dark border border-white/10 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-eldosh-red transition-colors"
            />
          </div>
        </div>

        {/* Main Content: List + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Dealers List */}
          <div className="lg:col-span-5 space-y-3 max-h-[680px] overflow-y-auto pr-1.5 scrollbar-thin">
            {filteredDealers.length === 0 ? (
              <div className="bg-eldosh-graphite border border-white/10 rounded-xl p-8 text-center text-gray-400 text-sm">
                {t.dealers.emptySearch}
              </div>
            ) : (
              filteredDealers.map((dealer) => {
                const isActive = dealer.id === activeDealer.id;
                return (
                  <div
                    key={dealer.id}
                    onClick={() => setActiveDealerId(dealer.id)}
                    className={`bg-eldosh-graphite/90 border rounded-xl p-4 sm:p-5 cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'border-eldosh-red shadow-card ring-1 ring-eldosh-red bg-eldosh-charcoal'
                        : 'border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-eldosh-red text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          {dealer.number}
                        </span>
                        <div>
                          <span className="text-[10px] font-black uppercase text-eldosh-red tracking-wider block">
                            {dealer.city[language]}
                          </span>
                          <h4 className="text-sm sm:text-base font-black text-white mt-0.5 leading-snug">
                            {dealer.name[language]}
                          </h4>
                        </div>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                    </div>

                    <div className="mt-3 space-y-2 text-xs text-gray-300 pl-8">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-eldosh-red shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{dealer.address[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-eldosh-red shrink-0" />
                        <span className="font-medium">{dealer.workingHours[language]}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10 pl-8 flex flex-wrap items-center gap-2">
                      {dealer.phones.map((p, idx) => (
                        <a
                          key={idx}
                          href={`tel:${p.replace(/[^\d+]/g, '')}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-eldosh-dark/80 hover:bg-eldosh-red text-white text-xs font-bold border border-white/10 transition-colors"
                        >
                          <Phone className="w-3 h-3 text-eldosh-red" />
                          <span>{p}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Interactive Uzbekistan Map */}
          <div className="lg:col-span-7 bg-eldosh-graphite/70 border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-eldosh-red text-white text-sm font-black flex items-center justify-center shadow-red-glow">
                  {activeDealer.number}
                </span>
                <div>
                  <span className="text-xs text-gray-400 uppercase font-bold">
                    {t.dealers.showOnMap}
                  </span>
                  <h3 className="text-base sm:text-lg font-black font-display text-white leading-tight">
                    {activeDealer.name[language]}
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 bg-eldosh-red/10 border border-eldosh-red/30 text-eldosh-red rounded text-xs font-black uppercase">
                {activeDealer.region}
              </span>
            </div>

            {/* Uzbekistan Map Visual Container */}
            <div
              className="relative bg-[#0b0c0e] rounded-xl border border-white/10 overflow-hidden w-full select-none"
              style={{ aspectRatio: '16/10' }}
            >
              {/* Exact Geographical Map of Uzbekistan */}
              {!imgError ? (
                <img
                  src={getImageUrl('/uzbekistan-map.png')}
                  alt="Карта Узбекистана"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 w-full h-full object-contain p-2 opacity-85 filter brightness-95 contrast-105 pointer-events-none"
                />
              ) : (
                /* Fallback Stylized SVG */
                <svg viewBox="0 0 1000 650" className="w-full h-full p-4 opacity-40">
                  <path
                    d="M 50,70 L 190,40 L 320,80 L 470,160 L 590,140 L 680,180 L 780,240 L 860,250 L 980,280 L 960,330 L 870,330 L 760,380 L 680,480 L 580,590 L 500,560 L 410,470 L 290,410 L 200,470 L 100,380 L 40,240 Z"
                    fill="#1e1e1e"
                    stroke="#D60000"
                    strokeWidth="2"
                  />
                </svg>
              )}

              {/* Pinpoint Markers on Accurate Map Projection */}
              {dealersData.map((dealer) => {
                const pos = getCoordinatesPercent(dealer.lng, dealer.lat);
                const isActive = dealer.id === activeDealer.id;
                const isFiltered = filteredDealers.some((d) => d.id === dealer.id);

                return (
                  <button
                    key={dealer.id}
                    type="button"
                    onClick={() => setActiveDealerId(dealer.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 group transition-all duration-300"
                    style={{ left: pos.left, top: pos.top }}
                    title={`${dealer.number}. ${dealer.name[language]}`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulsing ring for active pin */}
                      {isActive && (
                        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-eldosh-red opacity-75" />
                      )}

                      {/* Pin Circle */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-black text-[10px] sm:text-xs transition-all shadow-lg ${
                          isActive
                            ? 'bg-eldosh-red text-white ring-2 ring-white scale-125 shadow-red-glow z-30'
                            : isFiltered
                            ? 'bg-[#181818] text-white border-2 border-eldosh-red hover:bg-eldosh-red hover:scale-110'
                            : 'bg-[#222] text-gray-400 border border-gray-600 opacity-40'
                        }`}
                      >
                        {dealer.number}
                      </div>

                      {/* Tooltip on Hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-40">
                        <div className="bg-eldosh-dark/95 border border-white/20 text-white text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap shadow-xl">
                          {dealer.city[language]}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Dealer Info & Actions */}
            <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 uppercase font-black text-[10px] block mb-1.5">
                  {activeDealer.city[language]}
                </span>
                <p className="text-white font-medium text-xs sm:text-sm mb-3">
                  {activeDealer.address[language]}
                </p>
                <div className="space-y-1.5">
                  {standardServices.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-eldosh-red shrink-0" />
                      <span className="font-bold text-[11px] leading-snug uppercase tracking-tight">
                        {srv[language]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-end gap-2">
                {activeDealer.phones.map((phone, pIdx) => (
                  <a
                    key={pIdx}
                    href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                    className="w-full py-2.5 px-4 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-black rounded-xl text-center transition-all shadow-red-glow flex items-center justify-center gap-3"
                  >
                    <PhoneCall className="w-5 h-5 shrink-0" />
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-widest text-white/90 font-bold">
                        {t.dealers.callDealer}
                      </span>
                      <span className="text-xs sm:text-sm font-black tracking-normal whitespace-nowrap text-white">
                        {phone}
                      </span>
                    </div>
                  </a>
                ))}
                <a
                  href={`https://maps.google.com/?q=${activeDealer.lat},${activeDealer.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 bg-eldosh-dark hover:bg-white/10 text-gray-300 font-bold rounded-xl text-center border border-white/10 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Navigation className="w-3.5 h-3.5 text-eldosh-red shrink-0" />
                  <span>{t.dealers.getDirections}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
