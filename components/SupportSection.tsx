
import React from 'react';

const SupportSection: React.FC = () => {
  const WHATSAPP_NUMBER = '6282124335700';

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-12 lg:p-20 rounded-[3rem] bg-white/[0.02] border border-white/10">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Human Support Available</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter leading-none">
              MASIH RAGU? <br />
              <span className="text-blue-500">TANYA APAPUN.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl italic font-medium leading-relaxed">
              Tim spesialis kami siap membantu Anda memahami bagaimana Blackframe Studio bisa mengakselerasi bisnis konten Anda. Tidak ada pertanyaan yang terlalu teknis.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Blackframe%20Studio!%20Saya%20butuh%20bantuan%20dan%20informasi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-6 bg-white text-black text-lg font-black uppercase tracking-widest italic rounded-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-4 group"
            >
              CHAT KONSULTASI GRATIS
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207L6.233 18l2.954-1.022c.887.49 1.841.749 2.844.75h.003c3.181 0 5.769-2.587 5.77-5.767 0-3.18-2.588-5.766-5.773-5.789zm0 10.43c-.911 0-1.808-.247-2.589-.714l-.186-.11-1.925.666.678-1.876-.121-.193c-.513-.819-.784-1.765-.783-2.736 0-2.53 2.06-4.589 4.591-4.589 1.226 0 2.378.477 3.245 1.344s1.343 2.021 1.343 3.247c0 2.531-2.059 4.591-4.593 4.591z"/>
              </svg>
            </a>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white">5-15 MNT</span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Avg Response</span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white">24 / 7</span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Availability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
