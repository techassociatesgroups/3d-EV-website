

import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PerformanceSection from './components/PerformanceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ConfiguratorSection from './components/ConfiguratorSection';
import ComparisonSection from './components/ComparisonSection';
import FinancingSection from './components/FinancingSection';
import FAQSection from './components/FAQSection';
import PromoSection from './components/PromoSection';
import DealersSection from './components/DealersSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PerformanceSection />
      <TestimonialsSection />
      <ConfiguratorSection />
      <ComparisonSection />
      <FinancingSection />
      <FAQSection />
      <PromoSection />
      <DealersSection />
      <Footer />
    </div>
  );
}

export default App;
