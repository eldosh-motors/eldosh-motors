import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ModalProvider, useModal } from './context/ModalContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';
import { Hero } from './components/sections/Hero';
import { QuickStats } from './components/sections/QuickStats';
import { AboutSection } from './components/sections/AboutSection';
import { CalculatorSection } from './components/sections/CalculatorSection';
import { ModelRange } from './components/sections/ModelRange';
import { WhyEldosh } from './components/sections/WhyEldosh';
import { TechnologySection } from './components/sections/TechnologySection';
import { BusinessSection } from './components/sections/BusinessSection';
import { DealersSection } from './components/sections/DealersSection';
import { FaqSection } from './components/sections/FaqSection';
import { NewsSection } from './components/sections/NewsSection';
import { CtaBanner } from './components/sections/CtaBanner';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { ModelDetailModal } from './components/modals/ModelDetailModal';
import { NewsDetailModal } from './components/modals/NewsDetailModal';

const MainLayout: React.FC = () => {
  const { selectedModelDetail, closeModelDetail, selectedNewsDetail, closeNewsDetail } = useModal();

  return (
    <div className="min-h-screen bg-eldosh-dark text-white flex flex-col relative selection:bg-eldosh-red selection:text-white">
      {/* Fixed Luxury Automotive Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <QuickStats />
        <AboutSection />
        <ModelRange />
        <WhyEldosh />
        <TechnologySection />
        <BusinessSection />
        <CalculatorSection />
        <DealersSection />
        <NewsSection />
        <FaqSection />
        <CtaBanner />
      </main>

      {/* Corporate Automotive Footer */}
      <Footer />

      {/* Mobile Floating CTA Bar (Call, Telegram, Consultation) */}
      <FloatingCTA />

      {/* Interactive Global Modals */}
      <ConsultationModal />
      <ModelDetailModal model={selectedModelDetail} onClose={closeModelDetail} />
      <NewsDetailModal news={selectedNewsDetail} onClose={closeNewsDetail} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ModalProvider>
        <MainLayout />
      </ModalProvider>
    </LanguageProvider>
  );
};

export default App;
