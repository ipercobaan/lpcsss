
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  const WHATSAPP_NUMBER = '6282124335700';
  const message = encodeURIComponent("Halo Blackframe Studio! Saya sedang melihat landing page dan ingin bertanya tentang software engine ini.");

  return (
    <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4 animate-fade-in">
      {/* Tooltip Label */}
      <div className="bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest italic shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 hidden md:block border border-blue-500/20">
        Ada Pertanyaan?
      </div>
      
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all active:scale-95"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
          <span className="text-[10px] font-black text-white">1</span>
        </div>

        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207L6.233 18l2.954-1.022c.887.49 1.841.749 2.844.75h.003c3.181 0 5.769-2.587 5.77-5.767 0-3.18-2.588-5.766-5.773-5.789zm0 10.43c-.911 0-1.808-.247-2.589-.714l-.186-.11-1.925.666.678-1.876-.121-.193c-.513-.819-.784-1.765-.783-2.736 0-2.53 2.06-4.589 4.591-4.589 1.226 0 2.378.477 3.245 1.344s1.343 2.021 1.343 3.247c0 2.531-2.059 4.591-4.593 4.591z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
