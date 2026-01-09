
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
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase italic">BIARKAN MESIN BEKERJA, ANDA PANTAU HASILNYA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.95] uppercase italic">
          MESIN <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">AUTOMASI</span><br />
          <span className="text-blue-500">CUAN KONTEN</span>
        </h1>
        
        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium italic">
          Gak perlu langganan banyak tool mahal. <span className="text-white font-bold">Blackframe Studio</span> adalah <span className="text-blue-400 font-black">All-in-One Content Engine</span> yang menggabungkan AI Video Editor, Auto Clipper, & Mass Producer dalam satu dashboard. Ciptakan ratusan konten viral tanpa lelah, tanpa editor, & tanpa pusing!
        </p>

        {/* Enhanced Premium Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto mb-16 animate-fade-in px-4">
          <div className="group relative flex-1 md:flex-none p-5 md:px-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <span className="text-white font-black text-lg md:text-xl italic tracking-tighter">100% SECURE</span>
              </div>
              <span className="text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">Verified Payment Engine</span>
            </div>
          </div>

          <div className="group relative flex-1 md:flex-none p-5 md:px-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500">
            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-white font-black text-lg md:text-xl italic tracking-tighter uppercase">Verified Engine</span>
              </div>
              <span className="text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">Cloud Stability v1.0</span>
            </div>
          </div>

          <div className="group relative flex-1 md:flex-none p-5 md:px-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500">
            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span className="text-white font-black text-lg md:text-xl italic tracking-tighter uppercase">INSTANT</span>
              </div>
              <span className="text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">Immediate Delivery Access</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onCalcClick}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black text-lg rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-2xl shadow-white/5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              👉 Hitung Potensi Monetisasi
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207L6.233 18l2.954-1.022c.887.49 1.841.749 2.844.75h.003c3.181 0 5.769-2.587 5.77-5.767 0-3.18-2.588-5.766-5.773-5.789zm0 10.43c-.911 0-1.808-.247-2.589-.714l-.186-.11-1.925.666.678-1.876-.121-.193c-.513-.819-.784-1.765-.783-2.736 0-2.53 2.06-4.589 4.591-4.589 1.226 0 2.378.477 3.245 1.344s1.343 2.021 1.343 3.247c0 2.531-2.059 4.591-4.593 4.591z"/></svg>
            </span>
          </button>
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all italic uppercase tracking-tighter"
          >
            Ambil Slot Founding Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
