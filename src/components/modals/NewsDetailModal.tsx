import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { NewsArticle } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

interface NewsDetailModalProps {
  news: NewsArticle | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose }) => {
  const { language, t } = useLanguage();
  const { openConsultModal } = useModal();

  if (!news) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative bg-eldosh-dark border border-white/15 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col z-10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-eldosh-graphite/80">
            <div className="flex items-center space-x-2 text-xs font-semibold text-eldosh-red uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>{news.category[language]}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-xs text-eldosh-gray">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-eldosh-red" />
                {news.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-eldosh-red" />
                {news.readTime[language]}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-display text-white leading-snug">
              {news.title[language]}
            </h2>

            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-white/10 bg-eldosh-graphite">
              <img src={news.image} alt={news.title[language]} className="w-full h-full object-cover" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              {news.content[language].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* CTA in news */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                ← {t.news.backToNews}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openConsultModal();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-eldosh-red hover:bg-eldosh-red-hover text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.nav.consultationCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
