import React from 'react';
import { Phone, MapPin, Clock, Send, Instagram, Youtube, Facebook, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { modelsData } from '../../data/models';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { openConsultModal, openModelDetail } = useModal();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'Telegram Kanal',
      url: 'https://t.me/ELDOSH_MOTO',
      icon: Send
    },
    {
      name: 'Telegram Guruh',
      url: 'https://t.me/ELDOSH_MOTORS',
      icon: Send
    },
    {
      name: 'Telegram Bot',
      url: 'https://t.me/ELDOSH_MOTORS_bot',
      icon: Send
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eldosh_motors/',
      icon: Instagram
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ElDOSHMotors',
      icon: Youtube
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/EldoshMotors',
      icon: Facebook
    },
    {
      name: 'Multisilka',
      url: 'https://eldoshmotors.tilda.ws/',
      icon: Globe
    }
  ];

  return (
    <footer id="contacts" className="bg-eldosh-dark border-t border-white/10 pt-16 pb-28 lg:pb-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-300 bg-eldosh-graphite/60 border border-white/5 p-3 rounded max-w-sm">
              <ShieldCheck className="w-5 h-5 text-eldosh-red shrink-0" />
              <span className="font-semibold">{t.footer.madeForWork}</span>
            </div>

            {/* Official Social Links */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-black uppercase text-gray-400 tracking-wider block">
                Мы в соцсетях и мессенджерах
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      title={item.name}
                      aria-label={item.name}
                      className="w-9 h-9 rounded bg-eldosh-graphite border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-eldosh-red hover:border-eldosh-red transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Models Quicklinks */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase text-xs tracking-wider border-b border-white/10 pb-2">
              {t.footer.modelsTitle}
            </h4>
            <ul className="space-y-2.5">
              {modelsData.map((model) => (
                <li key={model.id}>
                  <button
                    type="button"
                    onClick={() => openModelDetail(model)}
                    className="text-left text-gray-400 hover:text-white transition-colors duration-150 text-xs sm:text-sm font-bold block"
                  >
                    {model.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Info */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase text-xs tracking-wider border-b border-white/10 pb-2">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <a
                  href="#why-eldosh"
                  onClick={(e) => handleSmoothScroll(e, '#why-eldosh')}
                  className="hover:text-white transition-colors duration-150"
                >
                  {t.nav.whyEldosh}
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  onClick={(e) => handleSmoothScroll(e, '#technology')}
                  className="hover:text-white transition-colors duration-150"
                >
                  {t.nav.tech}
                </a>
              </li>
              <li>
                <a
                  href="#business"
                  onClick={(e) => handleSmoothScroll(e, '#business')}
                  className="hover:text-white transition-colors duration-150"
                >
                  {t.nav.business}
                </a>
              </li>
              <li>
                <a
                  href="#dealers"
                  onClick={(e) => handleSmoothScroll(e, '#dealers')}
                  className="hover:text-white transition-colors duration-150"
                >
                  {t.nav.dealers}
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  onClick={(e) => handleSmoothScroll(e, '#news')}
                  className="hover:text-white transition-colors duration-150"
                >
                  {t.nav.news}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Support */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase text-xs tracking-wider border-b border-white/10 pb-2">
              {t.footer.contactsTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-eldosh-red shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium">{t.footer.address}</span>
              </div>
              <div className="flex flex-col space-y-1.5 pl-6 relative">
                <Phone className="w-4 h-4 text-eldosh-red absolute left-0 top-1 shrink-0" />
                <a href="tel:+998937200605" className="text-white hover:text-eldosh-red font-black transition-colors">
                  {t.footer.phone}
                </a>
                <a href="tel:+998933305000" className="text-white hover:text-eldosh-red font-black transition-colors">
                  {t.footer.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-eldosh-red shrink-0" />
                <span className="font-bold text-gray-300">{t.footer.workHours}</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openConsultModal()}
                  className="w-full py-2.5 bg-eldosh-graphite hover:bg-eldosh-red hover:text-white border border-white/10 text-xs font-black uppercase tracking-wider rounded transition-all duration-200 text-center shadow-sm"
                >
                  {t.nav.consultationCTA}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} ELDOSH MOTORS. {t.footer.copyright}</p>
          <div className="flex items-center space-x-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
