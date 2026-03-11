
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  onCalcClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onCalcClick }) => {
  return (
    <section id="home" className="relative pt-44 pb-20 lg:pt-56 lg:pb-32 overflow-hidden grid-bg">
      {/* Background Glow - Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-none bg-white/5 border border-white/10 mb-8 animate-fade-in font-mono text-[10px] tracking-[0.2em] text-blue-400 uppercase">
          <span className="w-1.5 h-1.5 bg-blue-500"></span>
          <span>ENGINE STATUS: OPERATIONAL v1.0.4</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight mb-8 leading-[0.9] text-white">
          The <span className="italic">Ultimate</span><br />
          <span className="text-blue-500">Content Engine</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light">
          Lupakan tool AI generik. <span className="text-white font-medium">Blackframe Studio</span> adalah infrastruktur produksi konten profesional. AI Video Editor, Auto Clipper, & Mass Producer dalam satu ekosistem terpadu.
        </p>

        {/* Technical Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto mb-16 animate-fade-in border border-white/10 divide-x divide-white/10">
          <div className="p-8 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">Security Protocol</span>
            <span className="font-serif italic text-2xl text-white">100% Secure</span>
            <span className="font-mono text-[8px] text-blue-500 mt-2">ENCRYPTED_PAYMENT_GATEWAY</span>
          </div>

          <div className="p-8 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">Engine Integrity</span>
            <span className="font-serif italic text-2xl text-white">Verified Build</span>
            <span className="font-mono text-[8px] text-green-500 mt-2">STABILITY_CHECK_PASSED</span>
          </div>

          <div className="p-8 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">Delivery Speed</span>
            <span className="font-serif italic text-2xl text-white">Instant Access</span>
            <span className="font-mono text-[8px] text-amber-500 mt-2">LATENCY_MINIMIZED</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 border border-white/10 max-w-fit mx-auto overflow-hidden">
          <button 
            onClick={onCalcClick}
            className="group px-10 py-6 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95"
          >
            Calculate Potential
          </button>
          <button 
            onClick={onCtaClick}
            className="px-10 py-6 bg-transparent text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all border-l border-white/10"
          >
            Join Founding Members
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
