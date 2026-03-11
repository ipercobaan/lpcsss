
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-none shadow-2xl group-hover:bg-blue-600 transition-colors">
              <span className="text-black group-hover:text-white font-serif font-bold text-xl italic">B</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-tight uppercase text-white">Blackframe <span className="text-white/40 font-light italic">Studio</span></span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-10">
            <a href="#home" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-blue-500 transition-colors text-white/60">01. Home</a>
            <a href="#features" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-blue-500 transition-colors text-white/60">02. Features</a>
            <a href="#bonus" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-blue-500 transition-colors text-white/60">03. Bonus</a>
            <a href="#pricing" className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-blue-500 transition-colors text-white/60">04. Pricing</a>
            <a 
              href="#pricing"
              className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all active:scale-95"
            >
              Get Access
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
