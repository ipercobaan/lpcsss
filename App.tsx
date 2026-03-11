
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import TopAnnouncement from './components/TopAnnouncement';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Features from './components/Features';
import PhotoDemo from './components/PhotoDemo';
import VideoDemo from './components/VideoDemo';
import DetailedFeatures from './components/DetailedFeatures';
import TargetAudience from './components/TargetAudience';
import Comparison from './components/Comparison';
import Results from './components/Results';
import BonusSection from './components/BonusSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import MonetizationCalculator from './components/MonetizationCalculator';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LiveActivity from './components/LiveActivity';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100] shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        style={{ scaleX }}
      />

      <TopAnnouncement />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero 
          onCtaClick={scrollToPricing} 
          onCalcClick={() => setIsCalculatorOpen(true)} 
        />
        <Workflow />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <PhotoDemo />
        <VideoDemo />
        <DetailedFeatures />
        <TargetAudience />
        <Comparison />
        <Results />
        <BonusSection />
        <Pricing onBuyClick={handleBuyNow} />
        <FAQ />
        <SupportSection />
      </motion.main>

      <Footer />
      <FloatingWhatsApp />
      <LiveActivity />

      <AnimatePresence>
        {isCalculatorOpen && (
          <MonetizationCalculator 
            onClose={() => setIsCalculatorOpen(false)} 
            onAction={scrollToPricing} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <PaymentModal 
            product={selectedProduct} 
            onClose={closeModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
