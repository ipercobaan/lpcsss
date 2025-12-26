
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg shadow-xl shadow-white/5 group-hover:scale-110 transition-transform">
              <span className="text-black font-black text-xl italic">B</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Blackframe <span className="text-white/50">Studio</span></span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Home</a>
            <a href="#features" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Features</a>
            <a href="#demo" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Demo</a>
            <a href="#pricing" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Pricing</a>
            <a href="#faq" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">FAQ</a>
            <a 
              href="#pricing"
              className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 italic"
            >
              Ambil Promo
            </a>
          </div>

          {/* Mobile Menu Icon (Placeholder for functionality) */}
          <div className="lg:hidden">
            <button className="p-2 text-white/70">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;