import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroStunning } from './components/HeroStunning';
import { ExpertiseShowcase } from './components/ExpertiseShowcase';
import { PremiumTestimonials } from './components/PremiumTestimonials';
import { ClientLogos } from './components/ClientLogos';
import { About } from './components/About';
import { NetworkSection } from './components/NetworkSection';
import { PremiumContact } from './components/PremiumContact';
import { Footer } from './components/Footer';
import { AboutFirmPage } from './components/AboutFirmPage';
import { FirmPage } from './components/FirmPage';
import { LeadershipPage } from './components/LeadershipPage';
import { InsightsPage } from './components/InsightsPage';
import { SectorExpertisePage } from './components/SectorExpertisePage';

import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('about-firm');

  const renderPage = () => {
    switch (currentPage) {
      case 'about-firm':
        return <AboutFirmPage />;
      case 'firm':
        return <FirmPage />;
      case 'leadership':
        return <LeadershipPage />;
      case 'insights':
        return <InsightsPage />;
      case 'expertise':
        return <SectorExpertisePage />;
      default:
        return (
          <>
            <NetworkSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Toaster />
    </div>
  );
}