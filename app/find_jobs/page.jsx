"use client"

import Header from '../../componets/find_jobs/Header';
import HeroSection from '../../componets/find_jobs/HeroSection';
import TrustedBy from '../../componets/find_jobs/TrustedBy.jsx';
import InterviewSection from '../../componets/find_jobs/InterviewSection';
import ComparisonSection from '../../componets/find_jobs/ComparisonSection';
import StatisticsSection from '../../componets/find_jobs/StatisticsSection';
import VettioAdvantage from '../../componets/find_jobs/VettioAdvantage';
import ToolboxSection from '../../componets/find_jobs/ToolboxSection';
import CommunitySection from '../../componets/find_jobs/CommunitySection';
import PurpleCTASection from '../../componets/find_jobs/PurpleCTASection';
import Footer from '../../componets/find_jobs/Footer';

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


