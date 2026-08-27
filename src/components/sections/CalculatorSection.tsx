import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Percent, ShieldCheck, CheckCircle2, PhoneCall, Sparkles, Building2, Calendar, FileSpreadsheet, FileText, ChevronDown, ChevronUp, Printer, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

interface ScheduleRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

export const CalculatorSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { openConsultModal } = useModal();

  // Price of motorcycle
  const [price, setPrice] = useState<number>(25000000);
  // Initial payment percent (0% to 90%)
  const [initialPercent, setInitialPercent] = useState<number>(20);
  // Loan term in months (12, 24, 36, 48, 60)
  const [termMonths, setTermMonths] = useState<number>(12);
  // Toggle schedule view
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  // Fixed preferential interest rate: 17.5% per annum
  const annualRate = 17.5;
  // Preferential grace period: 6 months (ЛЬГОТНЫЙ ПЕРИОД)
  const gracePeriodMonths = 6;

  // Calculation formulas
  const initialPayment = useMemo(() => Math.round(price * (initialPercent / 100)), [price, initialPercent]);
  const loanAmount = useMemo(() => price - initialPayment, [price, initialPayment]);

  // Monthly interest payment during grace period (первые 6 месяцев только проценты)
  const monthlyGraceInterest = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyRate = annualRate / 12 / 100;
    return Math.round(loanAmount * monthlyRate);
  }, [loanAmount, annualRate]);

  // Monthly principal + interest payment after grace period (оставшиеся месяцы)
  const remainingMonthsAfterGrace = useMemo(() => {
    return Math.max(1, termMonths - gracePeriodMonths);
  }, [termMonths, gracePeriodMonths]);

  const monthlyPaymentAfterGrace = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyRate = annualRate / 12 / 100;
    const payment = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, remainingMonthsAfterGrace))) / (Math.pow(1 + monthlyRate, remainingMonthsAfterGrace) - 1);
    return Math.round(payment);
  }, [loanAmount, annualRate, remainingMonthsAfterGrace]);

  // Standard annuity monthly payment (для сравнения)
  const monthlyPayment = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyRate = annualRate / 12 / 100;
    const payment = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    return Math.round(payment);
  }, [loanAmount, annualRate, termMonths]);

  // Total payment with grace period
  const totalPayment = useMemo(() => {
    return initialPayment + (monthlyGraceInterest * gracePeriodMonths) + (monthlyPaymentAfterGrace * remainingMonthsAfterGrace);
  }, [initialPayment, monthlyGraceInterest, gracePeriodMonths, monthlyPaymentAfterGrace, remainingMonthsAfterGrace]);

  // Generate complete amortization schedule table with 6 months grace period
  const scheduleRows = useMemo<ScheduleRow[]>(() => {
    if (loanAmount <= 0) return [];
    const monthlyRate = annualRate / 12 / 100;
    const rows: ScheduleRow[] = [];
    let balance = loanAmount;

    for (let m = 1; m <= termMonths; m++) {
      if (m <= gracePeriodMonths) {
        // Льготные 6 месяцев: выплачиваются только проценты, основной долг не уменьшается
        const interest = Math.round(balance * monthlyRate);
        rows.push({
          month: m,
          payment: interest,
          principal: 0,
          interest,
          remainingBalance: balance
        });
      } else {
        // После 6 месяцев: аннуитет по остатку срока
        const interest = Math.round(balance * monthlyRate);
        const principal = Math.min(balance, monthlyPaymentAfterGrace - interest);
        balance = Math.max(0, balance - principal);

        rows.push({
          month: m,
          payment: principal + interest,
          principal,
          interest,
          remainingBalance: balance
        });
      }
    }

    return rows;
  }, [loanAmount, annualRate, termMonths, gracePeriodMonths, monthlyPaymentAfterGrace]);

  const formatPrice = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (language === 'ru' ? ' сум' : " so'm");
  };

  // Export to Excel CSV
  const handleDownloadExcel = () => {
    let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';
    csvContent += language === 'ru'
      ? `ELDOSH MOTORS - График погашения льготного кредита (17.5%, Льготный период 6 месяцев)\n`
      : `ELDOSH MOTORS - Imtiyozli kredit to'lov grafigi (17.5%, 6 oylik imtiyozli davr)\n`;
    csvContent += language === 'ru'
      ? `Стоимость техники:;${price} сум\nПервоначальный взнос:;${initialPayment} сум (${initialPercent}%)\nСумма кредита:;${loanAmount} сум\nСрок:;${termMonths} месяцев\nЛьготный период:;6 месяцев (только проценты)\nПлатеж в льготный период (1-6 мес):;${monthlyGraceInterest} сум\nПлатеж после льготного периода (с 7 мес):;${monthlyPaymentAfterGrace} сум\n\n`
      : `Texnika narxi:;${price} so'm\nBoshlang'ich to'lov:;${initialPayment} so'm (${initialPercent}%)\nKredit summasi:;${loanAmount} so'm\nMuddati:;${termMonths} oy\nImtiyozli davr:;6 oy (faqat foizlar)\nImtiyozli davr to'lovi (1-6 oy):;${monthlyGraceInterest} so'm\nAsosiy to'lov (7-oydan):;${monthlyPaymentAfterGrace} so'm\n\n`;

    csvContent += language === 'ru'
      ? `Месяц;Ежемесячный платёж;Основной долг;Проценты (17.5%);Остаток долга;Примечание\n`
      : `Oy;Oylik to'lov;Asosiy qarz;Foizlar (17.5%);Qarz qoldig'i;Izoh\n`;

    scheduleRows.forEach((r) => {
      const note = r.month <= gracePeriodMonths
        ? (language === 'ru' ? 'Льготный период (только %)' : 'Imtiyozli davr (faqat %)')
        : (language === 'ru' ? 'Основной платёж' : "Asosiy to'lov");
      csvContent += `${r.month};${r.payment};${r.principal};${r.interest};${r.remainingBalance};${note}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ELDOSH_Kredit_Grafik_17.5_6oy_lgota.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export / Print PDF View
  const handleDownloadPdf = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ELDOSH MOTORS - ${language === 'ru' ? 'График платежей (Льгота 6 месяцев)' : "To'lov grafigi (6 oy imtiyoz)"}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #111; }
          .header { border-bottom: 2px solid #D60000; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
          .logo { font-size: 24px; font-weight: 900; color: #111; }
          .logo span { color: #D60000; }
          .title { font-size: 18px; font-weight: bold; margin-bottom: 15px; }
          .badge { display: inline-block; background: #e8f5e9; color: #2e7d32; border: 1px solid #c8e6c9; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 11px; }
          .summary { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 15px; margin-bottom: 25px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 13px; }
          .summary div { padding: 4px 0; }
          .summary strong { color: #D60000; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; }
          th { background: #111; color: #fff; padding: 8px 10px; text-align: left; }
          td { border-bottom: 1px solid #dee2e6; padding: 6px 10px; }
          .grace-row { background: #fff8e1; }
          .footer { margin-top: 30px; font-size: 11px; color: #777; text-align: center; border-top: 1px solid #ddd; padding-top: 15px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">ELDOSH <span>MOTORS</span></div>
          <div style="font-size: 12px; color: #555;">+998 (93) 720-06-05 • +998 (93) 330-50-00</div>
        </div>

        <div class="title">
          ${language === 'ru' ? 'Официальный график погашения льготного кредита' : "Imtiyozli kredit to'lovlarining rasmiy grafigi"}
          <span class="badge">17.5% ГОДОВЫХ • ЛЬГОТА 6 МЕСЯЦЕВ</span>
        </div>

        <div class="summary">
          <div><strong>${language === 'ru' ? 'Стоимость техники:' : 'Texnika narxi:'}</strong> ${formatPrice(price)}</div>
          <div><strong>${language === 'ru' ? 'Срок кредита:' : 'Kredit muddati:'}</strong> ${termMonths} ${language === 'ru' ? 'месяцев' : 'oy'} (${termMonths / 12} ${language === 'ru' ? 'г.' : 'yil'})</div>
          <div><strong>${language === 'ru' ? 'Первоначальный взнос:' : "Boshlang'ich to'lov:"}</strong> ${formatPrice(initialPayment)} (${initialPercent}%)</div>
          <div><strong>${language === 'ru' ? 'Льготный период:' : 'Imtiyozli davr:'}</strong> 6 ${language === 'ru' ? 'месяцев' : 'oy'}</div>
          <div><strong>${language === 'ru' ? 'Платёж в льготный период (1–6 мес):' : "Imtiyozli davr to'lovi (1–6 oy):"}</strong> ${formatPrice(monthlyGraceInterest)}</div>
          <div><strong>${language === 'ru' ? 'Платёж после льготы (с 7 мес):' : "Asosiy oylik to'lov (7-oydan):"}</strong> ${formatPrice(monthlyPaymentAfterGrace)}</div>
          <div><strong>${language === 'ru' ? 'Сумма кредита:' : 'Kredit summasi:'}</strong> ${formatPrice(loanAmount)}</div>
          <div><strong>${language === 'ru' ? 'Годовая ставка:' : 'Yillik foiz stavkasi:'}</strong> 17.5%</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>№ ${language === 'ru' ? 'Месяц' : 'Oy'}</th>
              <th>${language === 'ru' ? 'Ежемесячный платёж' : "Oylik to'lov"}</th>
              <th>${language === 'ru' ? 'Основной долг' : 'Asosiy qarz'}</th>
              <th>${language === 'ru' ? 'Проценты (17.5%)' : 'Foizlar (17.5%)'}</th>
              <th>${language === 'ru' ? 'Остаток долга' : "Qarz qoldig'i"}</th>
              <th>${language === 'ru' ? 'Статус' : 'Holat'}</th>
            </tr>
          </thead>
          <tbody>
            ${scheduleRows
              .map(
                (r) => `
              <tr class="${r.month <= gracePeriodMonths ? 'grace-row' : ''}">
                <td>${r.month}</td>
                <td><strong>${formatPrice(r.payment)}</strong></td>
                <td>${formatPrice(r.principal)}</td>
                <td>${formatPrice(r.interest)}</td>
                <td>${formatPrice(r.remainingBalance)}</td>
                <td>${r.month <= gracePeriodMonths ? (language === 'ru' ? 'Льготный период' : 'Imtiyozli davr') : (language === 'ru' ? 'Основной платёж' : "Asosiy to'lov")}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>

        <div class="footer">
          © ${new Date().getFullYear()} ELDOSH MOTORS. ${language === 'ru' ? 'Расчёт носит официальный ориентировочный характер для банков-партнёров.' : "Hisob-kitob hamkor banklar uchun rasmiy mo‘ljallangan."}
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <section id="calculator" className="py-20 bg-[#0d0e11] relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eldosh-red/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-eldosh-red/20 border border-eldosh-red/40 text-eldosh-red rounded text-xs font-black uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>{language === 'ru' ? 'ФИНАНСИРОВАНИЕ И КРЕДИТ' : 'MOLIYALASHTIRISH VA KREDIT'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight uppercase whitespace-nowrap">
            {language === 'ru' ? 'КРЕДИТНЫЙ И ЛИЗИНГОВЫЙ КАЛЬКУЛЯТОР' : 'KREDIT VA LIZING KALKULYATORI'}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {language === 'ru'
              ? 'Государственная льготная программа: ставка 17.5% годовых и льготный период 6 месяцев (в первые 6 месяцев погашаются только проценты).'
              : 'Davlat imtiyozli dasturi: yillik 17.5% stavka va 6 oylik imtiyozli davr (dastlabki 6 oyda faqat foizlar to‘lanadi).'}
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 bg-eldosh-graphite/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Program Badge with 17.5% and 6 Months Grace */}
            <div className="p-4 rounded-xl bg-eldosh-charcoal border border-eldosh-red/60 ring-1 ring-eldosh-red/40 text-white space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-black text-white uppercase tracking-wider">
                    {language === 'ru' ? 'Государственная льготная программа' : 'Davlat imtiyozli dasturi'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded text-xs font-black">
                    17.5% ГОДОВЫХ
                  </span>
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-xs font-black">
                    ЛЬГОТА 6 МЕС.
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {language === 'ru'
                  ? 'Специальная субсидированная ставка 17.5% с льготным периодом 6 месяцев (первые полгода без выплаты основного долга) для самозанятых, фермеров и дехкан Узбекистана.'
                  : `O'zbekiston bo'yicha o'zini o'zi band qilganlar va fermerlar uchun 17.5% stavka va 6 oylik imtiyozli davr (dastlabki 6 oyda asosiy qarz to'lanmaydi).`}
              </p>
            </div>

            {/* Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase text-gray-400 tracking-wider">
                  {language === 'ru' ? 'Стоимость мототранспорта' : 'Mototransport narxi'}
                </span>
                <span className="text-base sm:text-lg font-black text-white">
                  {formatPrice(price)}
                </span>
              </div>
              <input
                type="range"
                min="18000000"
                max="100000000"
                step="500000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-eldosh-dark rounded-lg appearance-none cursor-pointer accent-eldosh-red"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>18 000 000</span>
                <span>50 000 000</span>
                <span>100 000 000</span>
              </div>
            </div>

            {/* Initial Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase text-gray-400 tracking-wider">
                  {language === 'ru' ? 'Первоначальный взнос' : `Boshlang'ich to'lov`} ({initialPercent}%)
                </span>
                <span className="text-base sm:text-lg font-black text-white">
                  {formatPrice(initialPayment)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="1"
                value={initialPercent}
                onChange={(e) => setInitialPercent(Number(e.target.value))}
                className="w-full h-2 bg-eldosh-dark rounded-lg appearance-none cursor-pointer accent-eldosh-red"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>0% (Без взноса)</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>90%</span>
              </div>
            </div>

            {/* Loan Term Selector */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-gray-400 tracking-wider block">
                {language === 'ru' ? 'Срок кредитования (от 1 года до 5 лет)' : 'Kredit muddati (1 yildan 5 yilgacha)'}
              </span>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { months: 12, label: language === 'ru' ? '1 год' : '1 yil' },
                  { months: 24, label: language === 'ru' ? '2 года' : '2 yil' },
                  { months: 36, label: language === 'ru' ? '3 года' : '3 yil' },
                  { months: 48, label: language === 'ru' ? '4 года' : '4 yil' },
                  { months: 60, label: language === 'ru' ? '5 лет' : '5 yil' }
                ].map((item) => (
                  <button
                    key={item.months}
                    type="button"
                    onClick={() => setTermMonths(item.months)}
                    className={`py-2.5 rounded-lg text-xs font-black transition-all ${
                      termMonths === item.months
                        ? 'bg-eldosh-red text-white shadow-red-glow'
                        : 'bg-eldosh-dark text-gray-300 border border-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Calculation Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-eldosh-graphite to-eldosh-charcoal border border-eldosh-red/40 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[11px] font-black uppercase text-eldosh-red tracking-widest block mb-1">
                {language === 'ru' ? 'ИТОГОВЫЙ РАСЧЁТ' : 'YAKUNIY HISOBLASH'}
              </span>

              {/* Grace period payment */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-3">
                <div className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{language === 'ru' ? 'Первые 6 месяцев (Льготный период):' : 'Dastlabki 6 oy (Imtiyozli davr):'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                  {formatPrice(monthlyGraceInterest)}
                  <span className="text-xs text-gray-400 font-bold ml-1">/{language === 'ru' ? 'мес.' : 'oy'}</span>
                </div>
                <span className="text-[10px] text-gray-400 block mt-0.5">
                  {language === 'ru' ? 'Погашаются только проценты' : `Faqat foizlar to'lanadi`}
                </span>
              </div>

              {/* After grace period payment */}
              <div className="text-xs text-gray-300 mt-2">
                {language === 'ru' ? `Платёж после льготы (с 7 по ${termMonths} месяц):` : `Imtiyozdan keyingi to'lov (7-oydan boshlab):`}
              </div>
              <div className="text-2xl sm:text-3xl font-display font-black text-white mt-0.5">
                {formatPrice(monthlyPaymentAfterGrace)}
                <span className="text-xs text-gray-400 font-bold ml-1">/{language === 'ru' ? 'мес.' : 'oy'}</span>
              </div>
            </div>

            {/* Breakdown lines */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">{language === 'ru' ? 'Сумма кредита:' : 'Kredit summasi:'}</span>
                <span className="text-white font-bold">{formatPrice(loanAmount)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">{language === 'ru' ? 'Первоначальный взнос:' : `Boshlang'ich to'lov:`}</span>
                <span className="text-white font-bold">{formatPrice(initialPayment)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">{language === 'ru' ? 'Льготный период:' : 'Imtiyozli davr:'}</span>
                <span className="text-amber-300 font-black">6 {language === 'ru' ? 'месяцев' : 'oy'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">{language === 'ru' ? 'Процентная ставка:' : 'Foiz stavkasi:'}</span>
                <span className="text-emerald-400 font-black">17.5% {language === 'ru' ? 'годовых' : 'yillik'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-400">{language === 'ru' ? 'Общий срок:' : 'Umumiy muddat:'}</span>
                <span className="text-white font-bold">{termMonths / 12} {language === 'ru' ? (termMonths === 12 ? 'год' : termMonths === 60 ? 'лет' : 'года') : 'yil'} ({termMonths} {language === 'ru' ? 'мес.' : 'oy'})</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">{language === 'ru' ? 'Общая сумма с процентами:' : `Foizlar bilan umumiy to'lov:`}</span>
                <span className="text-white font-black">{formatPrice(totalPayment)}</span>
              </div>
            </div>

            {/* Export & Schedule Toggle Buttons */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowSchedule(!showSchedule)}
                className="w-full py-2.5 bg-eldosh-dark hover:bg-white/10 text-gray-200 border border-white/15 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4 text-eldosh-red" />
                <span>{showSchedule ? (language === 'ru' ? 'Скрыть график платежей' : "Grafikni yashirish") : (language === 'ru' ? 'Показать подробный график' : "To'liq grafikni ko'rish")}</span>
                {showSchedule ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleDownloadExcel}
                  className="py-2.5 px-3 bg-[#1e293b] hover:bg-[#334155] text-emerald-400 border border-emerald-500/30 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  title="Скачать график в Excel (.csv)"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>Excel (.CSV)</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="py-2.5 px-3 bg-[#1e293b] hover:bg-[#334155] text-rose-400 border border-rose-500/30 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                  title="Скачать или распечатать PDF"
                >
                  <Printer className="w-4 h-4 text-rose-400" />
                  <span>PDF / Печать</span>
                </button>
              </div>
            </div>

            {/* Warning Notice */}
            <div className="mt-1 p-4 rounded-xl bg-amber-500/10 border border-amber-400/40 flex gap-3">
              <span className="text-xl shrink-0 mt-0.5">⚠️</span>
              <div className="space-y-1">
                <p className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  {language === 'ru' ? 'ВНИМАНИЕ!' : 'DIQQAT!'}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {language === 'ru'
                    ? `Для уточнения точного графика обращайтесь в банк.`
                    : `Aniq to'lov jadvalini aniqlash uchun bankga murojaat qiling.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Amortization Schedule Table with Grace Period Distinction */}
        <AnimatePresence>
          {showSchedule && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 bg-eldosh-graphite/90 border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-eldosh-red" />
                    <span>{language === 'ru' ? 'Подробный помесячный график выплат (Льгота 6 месяцев)' : "Oylik to'lovlarning to'liq grafigi (6 oy imtiyoz)"}</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {language === 'ru' ? `Срок: ${termMonths} месяцев • 17.5% годовых • Первые 6 месяцев без выплаты основного долга` : `Muddati: ${termMonths} oy • Yillik 17.5% • Dastlabki 6 oyda faqat foizlar`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadExcel}
                    className="py-2 px-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Excel</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="py-2 px-3 bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <Printer className="w-4 h-4" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="overflow-x-auto max-h-[440px] scrollbar-thin">
                <table className="w-full text-left text-xs">
                  <thead className="bg-eldosh-dark text-gray-300 uppercase font-black tracking-wider text-[11px] sticky top-0 z-10 border-b border-white/10">
                    <tr>
                      <th className="py-3 px-4">№ {language === 'ru' ? 'Месяц' : 'Oy'}</th>
                      <th className="py-3 px-4">{language === 'ru' ? 'Ежемесячный платёж' : "Oylik to'lov"}</th>
                      <th className="py-3 px-4">{language === 'ru' ? 'Основной долг' : 'Asosiy qarz'}</th>
                      <th className="py-3 px-4">{language === 'ru' ? 'Проценты (17.5%)' : 'Foizlar (17.5%)'}</th>
                      <th className="py-3 px-4">{language === 'ru' ? 'Остаток долга' : "Qarz qoldig'i"}</th>
                      <th className="py-3 px-4">{language === 'ru' ? 'Период' : 'Davr'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    {scheduleRows.map((row) => (
                      <tr key={row.month} className={`hover:bg-white/5 transition-colors ${row.month <= gracePeriodMonths ? 'bg-amber-500/5' : ''}`}>
                        <td className="py-2.5 px-4 font-bold text-white">#{row.month}</td>
                        <td className="py-2.5 px-4 font-black text-white">{formatPrice(row.payment)}</td>
                        <td className="py-2.5 px-4 text-emerald-400 font-medium">
                          {row.month <= gracePeriodMonths ? (language === 'ru' ? '0 сум (Льгота)' : "0 so'm (Imtiyoz)") : formatPrice(row.principal)}
                        </td>
                        <td className="py-2.5 px-4 text-rose-300 font-medium">{formatPrice(row.interest)}</td>
                        <td className="py-2.5 px-4 text-gray-400">{formatPrice(row.remainingBalance)}</td>
                        <td className="py-2.5 px-4">
                          {row.month <= gracePeriodMonths ? (
                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded text-[10px] font-black">
                              {language === 'ru' ? 'ЛЬГОТА 6 МЕС.' : '6 OY IMTIYOZ'}
                            </span>
                          ) : (
                            <span className="text-[10px] text-gray-400 font-semibold">
                              {language === 'ru' ? 'Основной платёж' : "Asosiy to'lov"}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
