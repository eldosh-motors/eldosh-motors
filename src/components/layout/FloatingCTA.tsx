import React from 'react';
import { Phone, Send, MessageSquareText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

export const FloatingCTA: React.FC = () => {
  const { t } = useLanguage();
  const { openConsultModal } = useModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-eldosh-dark/95 backdrop-blur-lg border-t border-white/10 p-2.5 px-4 lg:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href="tel:+998937200605"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-eldosh-graphite active:bg-eldosh-charcoal border border-white/10 text-white rounded text-xs font-semibold text-center transition-colors"
        >
          <Phone className="w-4 h-4 text-eldosh-red" />
          <span>{t.floatingCTA.call}</span>
        </a>

        {/* Telegram button */}
        <a
          href="https://t.me/ELDOSH_MOTO"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-eldosh-graphite active:bg-eldosh-charcoal border border-white/10 text-white rounded text-xs font-semibold text-center transition-colors"
        >
          <Send className="w-4 h-4 text-blue-400" />
          <span>{t.floatingCTA.telegram}</span>
        </a>

        {/* Consultation CTA button */}
        <button
          type="button"
          onClick={() => openConsultModal()}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 bg-eldosh-red active:bg-eldosh-red-hover text-white rounded text-xs font-bold uppercase tracking-wider text-center shadow-red-glow transition-colors"
        >
          <MessageSquareText className="w-4 h-4" />
          <span>{t.floatingCTA.consult}</span>
        </button>
      </div>
    </div>
  );
};
