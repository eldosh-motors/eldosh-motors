import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const TelegramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

interface FaqItem {
  number: string;
  question: { ru: string; uz: string };
  answer: { ru: React.ReactNode; uz: React.ReactNode };
}

const faqItems: FaqItem[] = [
  {
    number: '01',
    question: {
      ru: 'Есть ли гарантия на мотоциклы Eldosh Motors?',
      uz: `Eldosh Motors mototsikllariga kafolat bormi?`,
    },
    answer: {
      ru: (
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Да, на все наши мотоциклы предоставляется заводская гарантия <strong className="text-white font-black">2 месяца или 2 000 км</strong>. В течение гарантийного срока любые производственные неисправности устраняются бесплатно.
        </p>
      ),
      uz: (
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Ha, barcha mototsikllarimizga <strong className="text-white font-black">2 oy yoki 2 000 km</strong> rasmiy zavod kafolati beriladi. Kafolat muddati davomida ishlab chiqarish nuqsonlari mutlaqo bepul bartaraf etiladi.
        </p>
      ),
    },
  },
  {
    number: '02',
    question: {
      ru: 'Как можно произвести оплату и есть ли рассрочка?',
      uz: `Qanday to'lov usullari mavjud va bo'lib to'lash bormi?`,
    },
    answer: {
      ru: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p>Вы можете выбрать любой удобный для вас способ оплаты:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-eldosh-red font-black">✓</span> <span>Наличный расчёт</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-eldosh-red font-black">✓</span> <span>Банковской картой (Uzcard / Humo)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-eldosh-red font-black">✓</span> <span>Банковское перечисление</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-amber-200">
              <span className="text-amber-400 font-black">★</span> <span>Рассрочка через махаллю (помощник хокима)</span>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p>Siz o'zingiz uchun qulay bo'lgan har qanday to'lov turini tanlashingiz mumkin:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-eldosh-red font-black">✓</span> <span>Naqd pul orqali</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-eldosh-red font-black">✓</span> <span>Bank kartalari (Uzcard / Humo)</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="text-eldosh-red font-black">✓</span> <span>Bank o'tkazmasi (hisob raqam)</span>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-amber-200">
              <span className="text-amber-400 font-black">★</span> <span>Mahalla orqali bo'lib to'lash (hokim yordamchisi)</span>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    number: '03',
    question: {
      ru: 'Есть ли услуга доставки техники?',
      uz: `Yetkazib berish xizmati bormi?`,
    },
    answer: {
      ru: (
        <div className="space-y-2 text-sm sm:text-base text-gray-300">
          <p>Прямой бесплатной заводской доставки в данный момент нет.</p>
          <p>Однако у нас действует <strong className="text-white">сеть официальных дилеров во всех областях Узбекистана</strong>. По городу Самарканд и в регионы отправка осуществляется надёжной транспортной службой (стоимость рассчитывается индивидуально в зависимости от расстояния). Менеджер назовёт точную сумму при подтверждении заказа.</p>
        </div>
      ),
      uz: (
        <div className="space-y-2 text-sm sm:text-base text-gray-300">
          <p>Hozirgi vaqtda bepul yetkazib berish xizmati mavjud emas.</p>
          <p>Biroq, bizning <strong className="text-white">O'zbekistonning barcha viloyatlarida rasmiy dilerlik markazlarimiz</strong> faoliyat yuritmoqda. Samarqand shahri va barcha hududlarga yuk yetkazib berish transport xizmatlari orqali amalga oshiriladi (narxi masofaga qarab belgilanadi).</p>
        </div>
      ),
    },
  },
  {
    number: '04',
    question: {
      ru: 'Как осуществляется оформление документов и регистрация?',
      uz: `Hujjatlarni rasmiylashtirish va ro'yxatdan o'tkazish qanday kechadi?`,
    },
    answer: {
      ru: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p>При покупке каждого мотоцикла предоставляется полный юридический пакет документов для постановки на учёт в ГАИ (СБДД):</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-bold text-white">📄 Счёт-справка</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-bold text-white">📄 Счёт-фактура</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-bold text-white">📄 Официальный договор</span>
          </div>
          <p className="text-xs text-gray-400">Наши менеджеры всегда готовы проконсультировать и помочь вам на всех этапах регистрации.</p>
        </div>
      ),
      uz: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p>Har bir mototsikl xaridi bilan YHXB (DYHXX) da ro'yxatdan o'tkazish uchun barcha rasmiy hujjatlar to'plami taqdim etiladi:</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-bold text-white">📄 Hisob-ma'lumotnoma</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-bold text-white">📄 Hisob-faktura</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-bold text-white">📄 Rasmiy shartnoma</span>
          </div>
          <p className="text-xs text-gray-400">Menejerlarimiz ro'yxatdan o'tkazish jarayonida har tomonlama ko'mak berishadi.</p>
        </div>
      ),
    },
  },
  {
    number: '05',
    question: {
      ru: 'Какие модели мотоциклов производит завод?',
      uz: `Zavodda qanday modellar ishlab chiqariladi?`,
    },
    answer: {
      ru: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-300">
          <p className="font-bold text-white">Линейка коммерческих и грузовых мотоциклов ELDOSH:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-eldosh-red block">ELDOSH EL 200 CC</strong>
              <span>Флагман с водяным охлаждением и пониженной передачей</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH EL-200 M CC</strong>
              <span>Надёжная и экономичная классическая модель</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH EL-200 CC (Закрытый кузов)</strong>
              <span>Для всепогодной и защищённой перевозки грузов</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH EL-300</strong>
              <span>Тяжёлая серия с повышенной грузоподъёмностью</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-emerald-400 block">ELDOSH Электрический</strong>
              <span>Экологичный, бесшумный и супер-экономичный</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">Спецтехника ELDOSH</strong>
              <span>Санитарные, ПУСРМ, поливочные и термокузова</span>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="space-y-3 text-xs sm:text-sm text-gray-300">
          <p className="font-bold text-white">ELDOSH tijoriy va yuk mototsikllari qatori:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-eldosh-red block">ELDOSH EL 200 CC</strong>
              <span>Suv sovutgichli va pastlatuvchi uzatmali flagman</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH EL-200 M CC</strong>
              <span>Ishonchli va tejamkor klassik model</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH EL-200 CC (Yopiq kuzov)</strong>
              <span>Har qanday ob-havoda xavfsiz yuk tashish</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH EL-300</strong>
              <span>Katta yuklar uchun yuqori quvvatli seriya</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-emerald-400 block">ELDOSH Elektrik</strong>
              <span>Ekologik, shovqinsiz va juda tejamkor</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <strong className="text-white block">ELDOSH Maxsus texnika</strong>
              <span>Sanitariya, PUSRM, sug'orish va termokuzovlar</span>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    number: '06',
    question: {
      ru: 'Где находится завод и какой график работы?',
      uz: `Zavod qayerda joylashgan va ish tartibi qanday?`,
    },
    answer: {
      ru: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <p className="flex items-center gap-2 text-white font-bold">
              <span className="text-eldosh-red">📍</span> г. Самарканд, ул. Гагарина, 36
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <span className="text-eldosh-red">🕐</span> Понедельник – Пятница, с 09:00 до 18:00
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold">
              <a href="tel:+998937200605" className="text-eldosh-red hover:underline">+998 (93) 720-06-05</a>
              <a href="tel:+998933305000" className="text-eldosh-red hover:underline">+998 (93) 330-50-00</a>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <p className="flex items-center gap-2 text-white font-bold">
              <span className="text-eldosh-red">📍</span> Samarqand shahri, Gagarin ko'chasi, 36
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <span className="text-eldosh-red">🕐</span> Dushanba – Juma, soat 09:00 dan 18:00 gacha
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold">
              <a href="tel:+998937200605" className="text-eldosh-red hover:underline">+998 (93) 720-06-05</a>
              <a href="tel:+998933305000" className="text-eldosh-red hover:underline">+998 (93) 330-50-00</a>
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    number: '07',
    question: {
      ru: 'Как связаться с отделом продаж и консультантами?',
      uz: `Sotuv bo'limi va maslahatchilar bilan qanday bog'lanish mumkin?`,
    },
    answer: {
      ru: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p>Свяжитесь с нами любым удобным каналом:</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+998937200605" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold text-xs transition-all flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-eldosh-red" />
              <span>+998 (93) 720-06-05</span>
            </a>
            <a href="tel:+998933305000" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold text-xs transition-all flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-eldosh-red" />
              <span>+998 (93) 330-50-00</span>
            </a>
            <a href="https://t.me/NPOELXOLDING" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 border border-[#229ED9]/50 rounded-xl text-[#54b9eb] hover:text-white font-bold text-xs transition-all flex items-center gap-2">
              <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
              <span>Telegram: @NPOELXOLDING</span>
            </a>
          </div>
        </div>
      ),
      uz: (
        <div className="space-y-3 text-sm sm:text-base text-gray-300">
          <p>Biz bilan istalgan qulay aloqa vositasi orqali bog'lanishingiz mumkin:</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+998937200605" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold text-xs transition-all flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-eldosh-red" />
              <span>+998 (93) 720-06-05</span>
            </a>
            <a href="tel:+998933305000" className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold text-xs transition-all flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-eldosh-red" />
              <span>+998 (93) 330-50-00</span>
            </a>
            <a href="https://t.me/NPOELXOLDING" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 border border-[#229ED9]/50 rounded-xl text-[#54b9eb] hover:text-white font-bold text-xs transition-all flex items-center gap-2">
              <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
              <span>Telegram: @NPOELXOLDING</span>
            </a>
          </div>
        </div>
      ),
    },
  },
  {
    number: '08',
    question: {
      ru: 'Можно ли пройти бесплатный тест-драйв мотоцикла?',
      uz: `Bepul test-drayvdan o'tish imkoni bormi?`,
    },
    answer: {
      ru: (
        <div className="space-y-2 text-sm sm:text-base text-gray-300">
          <p>🛞 <strong className="text-white font-black">Да, конечно!</strong> Вы можете вживую осмотреть и протестировать ходовые качества любой модели прямо на территории завода Eldosh Motors в Самарканде.</p>
          <p className="text-xs text-gray-400 flex items-center gap-1.5 flex-wrap">
            <span>Для организации тест-драйва напишите в Telegram:</span>
            <a href="https://t.me/NPOELXOLDING" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#54b9eb] hover:underline font-bold">
              <TelegramIcon className="w-3.5 h-3.5 text-[#229ED9]" />
              <span>@NPOELXOLDING</span>
            </a>
            <span>(Пн–Пт, 09:00–18:00).</span>
          </p>
        </div>
      ),
      uz: (
        <div className="space-y-2 text-sm sm:text-base text-gray-300">
          <p>🛞 <strong className="text-white font-black">Albatta!</strong> Siz Samarqanddagi Eldosh Motors zavodida barcha modellarni ko'rishingiz va sinab haydab ko'rishingiz mumkin.</p>
          <p className="text-xs text-gray-400 flex items-center gap-1.5 flex-wrap">
            <span>Test-drayvga yozilish uchun Telegram orqali murojaat qiling:</span>
            <a href="https://t.me/NPOELXOLDING" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#54b9eb] hover:underline font-bold">
              <TelegramIcon className="w-3.5 h-3.5 text-[#229ED9]" />
              <span>@NPOELXOLDING</span>
            </a>
            <span>(Du–Ju, 09:00–18:00).</span>
          </p>
        </div>
      ),
    },
  },
  {
    number: '09',
    question: {
      ru: 'Сколько дней занимает изготовление или подготовка заказа?',
      uz: `Buyurtma tayyorlash necha kun vaqt oladi?`,
    },
    answer: {
      ru: (
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          📦 Если выбранной комплектации или цвета нет в наличии на складе готовой продукции, подготовка и сборка занимает всего <strong className="text-white font-black">от 3 до 7 рабочих дней</strong>. Точный срок уточняет персональный менеджер.
        </p>
      ),
      uz: (
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          📦 Agar kerakli model omborda tayyor holatda bo'lmasa, buyurtmani yig'ish va tayyorlash <strong className="text-white font-black">3 kundan 7 ish kunigacha</strong> vaqt oladi. Aniq muddat menejer tomonidan aytiladi.
        </p>
      ),
    },
  },
];

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0d0e12] relative border-t border-white/5 overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-eldosh-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-eldosh-red/15 border border-eldosh-red/30 text-eldosh-red rounded-full text-xs font-black uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'ru' ? 'ОТВЕТЫ НА ВОПРОСЫ' : `SAVOLLARGA JAVOBLAR`}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase">
            {language === 'ru' ? 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ' : `KO'P BERILADIGAN SAVOLLAR`}
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto font-medium">
            {language === 'ru'
              ? 'Вся актуальная информация о гарантии, доставке, оплате, моделях и оформлении техники ELDOSH.'
              : `ELDOSH texnikasi kafolati, yetkazib berish, to'lov va xarid jarayoni bo'yicha to'liq ma'lumotlar.`}
          </p>
        </div>

        {/* Premium Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-r from-[#17181e] to-[#131418] border-eldosh-red/40 shadow-xl shadow-eldosh-red/5'
                    : 'bg-[#14151a]/90 hover:bg-[#181920] border-white/6 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none group"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    {/* Number Badge */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-display font-black text-xs sm:text-sm shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-eldosh-red text-white shadow-red-glow scale-105'
                          : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white border border-white/5'
                      }`}
                    >
                      {item.number}
                    </div>

                    <span className={`text-sm sm:text-base font-bold tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-white font-black' : 'text-gray-200 group-hover:text-white'
                    }`}>
                      {language === 'ru' ? item.question.ru : item.question.uz}
                    </span>
                  </div>

                  {/* Toggle Arrow */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-eldosh-red/20 text-eldosh-red rotate-180' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm border-t border-white/5">
                        <div className="pt-3 pl-13 sm:pl-15">
                          {language === 'ru' ? item.answer.ru : item.answer.uz}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#17181f] via-[#14151a] to-[#17181f] border border-white/10 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-eldosh-red/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-eldosh-red/20 border border-eldosh-red/40 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <MessageCircle className="w-6 h-6 text-eldosh-red" />
            </div>
            <div>
              <p className="text-base font-black text-white">
                {language === 'ru' ? 'Не нашли ответ на свой вопрос?' : `Savolingizga javob topa olmadingizmi?`}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                {language === 'ru' ? 'Напишите нам в Telegram — ответим оперативно и проконсультируем!' : `Telegramda yozing — zudlik bilan to'liq ma'lumot beramiz!`}
              </p>
            </div>
          </div>

          <a
            href="https://t.me/NPOELXOLDING"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 w-full sm:w-auto px-7 py-3.5 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-red-glow transition-all duration-200 text-center relative z-10 flex items-center justify-center gap-2"
          >
            <TelegramIcon className="w-4 h-4 text-white" />
            <span>{language === 'ru' ? 'Написать в Telegram' : 'Telegramga yozish'}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
