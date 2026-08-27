import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { Logo } from '../common/Logo';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { openConsultModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: language === 'ru' ? 'О НАС' : 'BIZ HAQDA' },
    { href: '#models', label: language === 'ru' ? 'МОДЕЛИ' : 'MODELLAR' },
    { href: '#calculator', label: language === 'ru' ? 'КАЛЬКУЛЯТОР' : 'KALKULYATOR' },
    { href: '#dealers', label: language === 'ru' ? 'ДИЛЕРЫ' : 'DILERLAR' },
    { href: '#why-eldosh', label: language === 'ru' ? 'СЕРВИС' : 'SERVIS' },
    { href: '#technology', label: language === 'ru' ? 'ЗАПЧАСТИ' : 'QISMLAR' },
    { href: '#business', label: language === 'ru' ? 'АКЦИИ' : 'AKSIYALAR' },
    { href: '#news', label: language === 'ru' ? 'НОВОСТИ' : 'YANGILIKLAR' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacts', label: language === 'ru' ? 'КОНТАКТЫ' : 'ALOQA' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>      {/* Top Main Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#111111] py-2.5 sm:py-3 border-b border-white/10 shadow-2xl'
            : 'bg-[#111111]/95 backdrop-blur-md py-3 sm:py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {/* Left: Official Logo */}
            <a
              href="#"
              className="focus:outline-none shrink-0"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Logo variant="header" />
            </a>

            {/* Center: Desktop Navigation in ONE Row */}
            <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5 flex-nowrap shrink">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-1.5 2xl:px-2.5 py-1 text-[11px] 2xl:text-xs font-black text-gray-200 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 relative group uppercase tracking-wider whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1.5 right-1.5 h-0.5 bg-eldosh-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* Right: Language Switcher & Consultation CTA */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
              {/* Language Switcher */}
              <div className="flex items-center bg-eldosh-graphite border border-white/10 rounded p-0.5 text-[11px] font-black shrink-0">
                <button
                  type="button"
                  onClick={() => setLanguage('ru')}
                  className={`px-2 py-1 rounded transition-all ${
                    language === 'ru'
                      ? 'bg-eldosh-red text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  RU
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('uz')}
                  className={`px-2 py-1 rounded transition-all ${
                    language === 'uz'
                      ? 'bg-eldosh-red text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  UZ
                </button>
              </div>

              {/* Desktop Consultation Button */}
              <button
                type="button"
                onClick={() => openConsultModal()}
                className="hidden sm:inline-flex items-center justify-center px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-black text-white uppercase tracking-wider bg-eldosh-red hover:bg-eldosh-red-hover active:scale-95 transition-all duration-200 rounded shadow-red-glow whitespace-nowrap shrink-0"
              >
                <span>{t.nav.consultationCTA}</span>
              </button>

              {/* Hamburger Button for Mobile & Tablets under 1280px (xl) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-gray-200 hover:text-white hover:bg-white/10 rounded focus:outline-none xl:hidden shrink-0"
                aria-label="Menyu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-eldosh-red" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Drawer Navigation for Mobile & Tablets */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-eldosh-dark/98 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 xl:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-3 mt-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                  className="flex items-center justify-between py-3.5 px-4 text-base sm:text-lg font-black text-white border-b border-white/10 active:bg-white/5 rounded uppercase tracking-wide"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 text-eldosh-red" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-6 space-y-4">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultModal();
                }}
                className="w-full py-4 bg-eldosh-red text-white font-black uppercase tracking-wider rounded text-center shadow-red-glow text-sm"
              >
                {t.nav.consultationCTA}
              </button>

              <a
                href="tel:+998937200605"
                className="flex items-center justify-center space-x-2 py-3 bg-eldosh-graphite border border-white/10 text-white font-bold rounded text-center text-sm"
              >
                <Phone className="w-4 h-4 text-eldosh-red" />
                <span>+998 (93) 720-06-05</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
