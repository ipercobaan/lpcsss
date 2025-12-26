
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Features from './components/Features';
import PhotoDemo from './components/PhotoDemo';
import VideoDemo from './components/VideoDemo';
import DetailedFeatures from './components/DetailedFeatures';
import TargetAudience from './components/TargetAudience';
import Comparison from './components/Comparison';
import Results from './components/Results';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import PaymentModal from './components/PaymentModal';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero onCtaClick={scrollToPricing} />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <PhotoDemo />
        <VideoDemo />
        <DetailedFeatures />
        <TargetAudience />
        <Comparison />
        <Results />
        <Pricing onBuyClick={handleBuyNow} />
        <FAQ />
      </main>

      {isModalOpen && selectedProduct && (
        <PaymentModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;
