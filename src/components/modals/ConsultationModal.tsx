import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, User, MapPin, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { modelsData } from '../../data/models';

export const ConsultationModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { isConsultModalOpen, selectedModelForConsult, closeConsultModal } = useModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [region, setRegion] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedModelForConsult) {
      setSelectedModel(selectedModelForConsult);
    } else {
      setSelectedModel(modelsData[0]?.name || '');
    }
  }, [selectedModelForConsult, isConsultModalOpen]);

  useEffect(() => {
    if (!isConsultModalOpen) {
      // Reset form after closing animation
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setErrorMsg('');
        setName('');
        setPhone('');
        setComment('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isConsultModalOpen]);

  if (!isConsultModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg(language === 'ru' ? 'Пожалуйста, укажите ваше имя' : 'Iltimos, ismingizni kiriting');
      return;
    }
    if (!phone.trim() || phone.length < 7) {
      setErrorMsg(language === 'ru' ? 'Пожалуйста, введите корректный номер телефона' : 'Iltimos, to‘g‘ri telefon raqamingizni kiriting');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable API lead processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <div className="fixed inset-0" onClick={closeConsultModal} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-eldosh-dark border border-white/15 rounded-2xl shadow-2xl w-full max-w-lg z-10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-eldosh-graphite/90">
            <div className="flex items-center space-x-3">
              <img src="/logo-badge.png" alt="ELDOSH" className="h-7 w-auto object-contain" />
              <h3 className="text-base sm:text-lg font-black font-display text-white tracking-wide uppercase">
                {t.modal.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={closeConsultModal}
              aria-label="Close dialog"
              className="p-1 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 bg-eldosh-red/10 border-2 border-eldosh-red text-eldosh-red rounded-full flex items-center justify-center mx-auto shadow-red-glow">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  {t.modal.successTitle}
                </h4>
                <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
                  {t.modal.successDesc}
                </p>
                <div className="bg-eldosh-graphite/80 border border-white/10 p-3.5 rounded-lg text-xs text-left text-gray-400 space-y-1 mt-4">
                  <div><strong className="text-white">{t.modal.nameLabel}:</strong> {name}</div>
                  <div><strong className="text-white">{t.modal.phoneLabel}:</strong> {phone}</div>
                  <div><strong className="text-white">{t.modal.modelLabel}:</strong> {selectedModel}</div>
                </div>
                <button
                  type="button"
                  onClick={closeConsultModal}
                  className="w-full mt-6 py-3 bg-eldosh-graphite hover:bg-white/10 text-white font-semibold rounded text-sm transition-colors"
                >
                  {t.modal.closeBtn}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {t.modal.subtitle}
                </p>

                {errorMsg && (
                  <div className="p-3 bg-red-950/60 border border-eldosh-red text-red-200 text-xs rounded">
                    {errorMsg}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    {t.modal.nameLabel} <span className="text-eldosh-red">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.modal.namePlaceholder}
                      className="w-full bg-eldosh-graphite border border-white/10 focus:border-eldosh-red focus:ring-1 focus:ring-eldosh-red rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    {t.modal.phoneLabel} <span className="text-eldosh-red">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.modal.phonePlaceholder}
                      className="w-full bg-eldosh-graphite border border-white/10 focus:border-eldosh-red focus:ring-1 focus:ring-eldosh-red rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Model Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    {t.modal.modelLabel}
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-eldosh-graphite border border-white/10 focus:border-eldosh-red focus:ring-1 focus:ring-eldosh-red rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    {modelsData.map((m) => (
                      <option key={m.id} value={m.name} className="bg-eldosh-graphite text-white">
                        {m.name} ({m.highlightSpecs.payload})
                      </option>
                    ))}
                    <option value="Общая консультация" className="bg-eldosh-graphite text-white">
                      {language === 'ru' ? '— Общая консультация / Подбор модели —' : '— Umumiy konsultatsiya / Model tanlash —'}
                    </option>
                  </select>
                </div>

                {/* Region */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    {t.modal.regionLabel}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      placeholder={t.modal.regionPlaceholder}
                      className="w-full bg-eldosh-graphite border border-white/10 focus:border-eldosh-red focus:ring-1 focus:ring-eldosh-red rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Comment */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                    {t.modal.commentLabel}
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <textarea
                      rows={2}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={t.modal.commentPlaceholder}
                      className="w-full bg-eldosh-graphite border border-white/10 focus:border-eldosh-red focus:ring-1 focus:ring-eldosh-red rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-bold uppercase tracking-wider text-sm rounded shadow-red-glow transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.modal.submitting}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{t.modal.submitBtn}</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-eldosh-gray text-center pt-1">
                  {t.modal.agreement}
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
