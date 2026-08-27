import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ModelGalleryItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface FullscreenImageViewerProps {
  isOpen: boolean;
  images: ModelGalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (idx: number) => void;
}

export const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onSelectIndex
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        onSelectIndex((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
          <div className="text-white text-sm sm:text-base font-semibold">
            <span>{currentItem.label[language]}</span>
            <span className="text-eldosh-gray ml-3 text-xs sm:text-sm">
              ({currentIndex + 1} / {images.length})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close fullscreen"
            className="p-2 text-gray-300 hover:text-white bg-white/10 hover:bg-eldosh-red rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Main Image & Navigation Arrows */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
          {images.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-eldosh-red text-white border border-white/20 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <motion.img
            key={currentItem.id}
            src={currentItem.url}
            alt={currentItem.label[language]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-eldosh-red text-white border border-white/20 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Thumbnails */}
        {images.length > 1 && (
          <div
            className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 z-10 max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden border-2 transition-all shrink-0 ${
                  idx === currentIndex
                    ? 'border-eldosh-red scale-105 shadow-red-glow'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={img.label[language]} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
