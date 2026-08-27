import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Maximize2, Shield, Fuel, Gauge, Weight, Wrench, ArrowRight } from 'lucide-react';
import { MotorcycleModel } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { FullscreenImageViewer } from './FullscreenImageViewer';
import { getImageUrl } from '../../utils/getImageUrl';

interface ModelDetailModalProps {
  model: MotorcycleModel | null;
  onClose: () => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ model, onClose }) => {
  const { language, t } = useLanguage();
  const { openConsultModal } = useModal();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  if (!model) return null;

  const currentGalleryItem = model.gallery[activeImageIndex] || model.gallery[0];

  const handleOrderClick = () => {
    onClose();
    openConsultModal(model.name);
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10">
          {/* Backdrop click to close */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative bg-eldosh-dark border border-white/15 rounded-xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-eldosh-graphite/80">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-eldosh-red animate-pulse-subtle" />
                <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-wide">
                  {model.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Top Hero Section: Gallery & Quick Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Gallery (7 Cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="relative aspect-[16/10] bg-eldosh-graphite rounded-lg overflow-hidden border border-white/10 group">
                    <img
                      src={getImageUrl(currentGalleryItem.url)}
                      alt={currentGalleryItem.label[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() => setIsFullscreenOpen(true)}
                      className="absolute bottom-3 right-3 p-2.5 bg-black/80 hover:bg-eldosh-red text-white rounded-md text-xs font-black flex items-center gap-1.5 backdrop-blur-sm border border-white/20 transition-all"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span className="hidden sm:inline">{t.models.fullscreenHint}</span>
                    </button>
                    <div className="absolute top-3 left-3 px-3 py-1 bg-eldosh-red text-white text-xs font-black uppercase rounded tracking-wider shadow-sm">
                      {currentGalleryItem.label[language]}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {model.gallery.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-14 rounded overflow-hidden border-2 transition-all shrink-0 ${
                          idx === activeImageIndex
                            ? 'border-eldosh-red scale-105 shadow-red-glow'
                            : 'border-white/15 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={getImageUrl(item.url)} alt={item.label[language]} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Overview & CTA (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-xs uppercase font-black text-eldosh-red tracking-widest block mb-1">
                      {t.models.compareBadge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">
                      {model.name}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1 italic font-medium">
                      {model.tagline[language]}
                    </p>
                    <p className="text-sm text-gray-200 mt-4 leading-relaxed font-normal">
                      {model.description[language]}
                    </p>
                  </div>

                  {/* Quick specs pill grid */}
                  <div className="grid grid-cols-2 gap-2.5 bg-eldosh-graphite/70 border border-white/10 p-3.5 rounded-lg">
                    <div className="flex items-center space-x-2.5">
                      <Weight className="w-5 h-5 text-eldosh-red shrink-0" />
                      <div>
                        <div className="text-[10px] text-eldosh-gray uppercase font-semibold">{t.models.payloadLabel}</div>
                        <div className="text-sm font-bold text-white">{model.highlightSpecs.payload}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Gauge className="w-5 h-5 text-eldosh-red shrink-0" />
                      <div>
                        <div className="text-[10px] text-eldosh-gray uppercase font-semibold">{t.models.powerLabel}</div>
                        <div className="text-sm font-bold text-white">{model.highlightSpecs.power}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Fuel className="w-5 h-5 text-eldosh-red shrink-0" />
                      <div>
                        <div className="text-[10px] text-eldosh-gray uppercase font-semibold">{t.models.engineLabel}</div>
                        <div className="text-sm font-bold text-white">{model.highlightSpecs.engine}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Wrench className="w-5 h-5 text-eldosh-red shrink-0" />
                      <div>
                        <div className="text-[10px] text-eldosh-gray uppercase font-semibold">{t.models.speedLabel}</div>
                        <div className="text-sm font-bold text-white">{model.highlightSpecs.speed}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={handleOrderClick}
                      className="w-full py-3.5 bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 text-white font-bold uppercase tracking-wider text-sm rounded shadow-red-glow transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>{t.specsModal.askManager}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Features Section */}
              <div className="bg-eldosh-graphite/40 border border-white/10 rounded-xl p-5 sm:p-6">
                <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-eldosh-red" />
                  <span>{t.specsModal.advantagesTitle}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {model.keyFeatures[language].map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-eldosh-red shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comprehensive Technical Specification Table */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    {t.specsModal.techTitle}
                  </h4>
                  <span className="text-xs text-eldosh-red font-semibold">ISO 9001:2015</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.engineVolume}:</span>
                    <span className="text-white font-medium text-right">{model.specs.engineVolume}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.engineType}:</span>
                    <span className="text-white font-medium text-right">{model.specs.engineType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.power}:</span>
                    <span className="text-white font-medium text-right">{model.specs.power}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.payload}:</span>
                    <span className="text-white font-bold text-eldosh-red text-right">{model.specs.payload}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.maxSpeed}:</span>
                    <span className="text-white font-medium text-right">{model.specs.maxSpeed}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.fuelConsumption}:</span>
                    <span className="text-white font-medium text-right">{model.specs.fuelConsumption}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.cargoBedSize}:</span>
                    <span className="text-white font-medium text-right">{model.specs.cargoBedSize}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.dimensions}:</span>
                    <span className="text-white font-medium text-right">{model.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.tankCapacity}:</span>
                    <span className="text-white font-medium text-right">{model.specs.tankCapacity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.coolingSystem}:</span>
                    <span className="text-white font-medium text-right">{model.specs.coolingSystem}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.transmission}:</span>
                    <span className="text-white font-medium text-right">{model.specs.transmission}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-eldosh-gray">{t.specsModal.brakeSystem}:</span>
                    <span className="text-white font-medium text-right">{model.specs.brakeSystem}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Fullscreen Lightbox */}
      <FullscreenImageViewer
        isOpen={isFullscreenOpen}
        images={model.gallery}
        currentIndex={activeImageIndex}
        onClose={() => setIsFullscreenOpen(false)}
        onSelectIndex={(idx) => setActiveImageIndex(idx)}
      />
    </>
  );
};
