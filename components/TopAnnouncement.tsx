
import React from 'react';

const TopAnnouncement: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 py-2 z-[70] shadow-lg shadow-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <p className="text-[10px] md:text-xs font-black text-black uppercase tracking-[0.15em] italic">
          SLOT FOUNDING MEMBER v1.0: <span className="bg-black text-white px-2 py-0.5 rounded ml-1 tracking-tighter">81 / 100 TERISI</span>
        </p>
      </div>
    </div>
  );
};

export default TopAnnouncement;
