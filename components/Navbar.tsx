
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-9 md:top-10 left-0 right-0 z-50 glass-effect border-b border-white/5 mx-auto max-w-7xl md:rounded-full mt-2 transition-all duration-300">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg shadow-xl shadow-white/5 group-hover:scale-110 transition-transform">
              <span className="text-black font-black text-lg italic">B</span>
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">Blackframe <span className="text-white/50">Studio</span></span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Home</a>
            <a href="#features" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Features</a>
            <a href="#bonus" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Bonus</a>
            <a href="#pricing" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors text-white/70">Pricing</a>
            <a 
              href="#pricing"
              className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 italic shadow-lg shadow-white/5"
            >
              Ambil Promo
            </a>
          </div>

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
