
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
  onCalcClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onCalcClick }) => {
  return (
    <section id="home" className="relative pt-44 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Blackframe Studio v1.0</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.95] uppercase italic">
          MESIN <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">AUTOMASI</span><br />
          <span className="text-blue-500">KONTEN</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium">
          Hanya Modal Copy-Paste Bisa jadi Puluhan, Bahkan Ratusan Konten Siap Monetisasi untuk <span className="text-white border-b-2 border-blue-500/50">TikTok, YouTube Shorts, & Reels.</span>
        </p>

        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl max-w-xl mx-auto mb-12 backdrop-blur-sm">
           <p className="text-gray-400 italic">"Kalau konten adalah mata uang, <span className="text-white font-bold">Blackframe</span> adalah mesinnya."</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onCalcClick}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black text-lg rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-2xl shadow-white/5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              👉 Hitung Potensi Monetisasi
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207L6.233 18l2.954-1.022c.887.49 1.841.749 2.844.75h.003c3.181 0 5.769-2.587 5.77-5.767 0-3.18-2.588-5.766-5.773-5.789zm0 10.43c-.911 0-1.808-.247-2.589-.714l-.186-.11-1.925.666.678-1.876-.121-.193c-.513-.819-.784-1.765-.783-2.736 0-2.53 2.06-4.589 4.591-4.589 1.226 0 2.378.477 3.245 1.344s1.343 2.021 1.343 3.247c0 2.531-2.059 4.591-4.593 4.591z"/></svg>
            </span>
          </button>
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all"
          >
            Lihat Harga Lisensi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
