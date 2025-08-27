import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import InterviewSection from './components/InterviewSection';
import ComparisonSection from './components/ComparisonSection';
import StatisticsSection from './components/StatisticsSection';
import VettioAdvantage from './components/VettioAdvantage';
import ToolboxSection from './components/ToolboxSection';
import CommunitySection from './components/CommunitySection';
import PurpleCTASection from './components/PurpleCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TrustedBy />
      <InterviewSection />
      <ComparisonSection />
      <StatisticsSection />
      <VettioAdvantage />
      <ToolboxSection />
      <CommunitySection />
      <PurpleCTASection />
      <Footer />
    </div>
  );
}

export default App;
