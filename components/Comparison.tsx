
import React from 'react';

const Comparison: React.FC = () => {
  const data = [
    { label: "Metode", old: "Edit manual, satu per satu", new: "Otomatis, massal, sekali klik" },
    { label: "Output", old: "3–5 konten/minggu", new: "20–50 konten/hari" },
    { label: "Ketergantungan", old: "Bergantung editor", new: "Sistem jalan sendiri" },
    { label: "Konsistensi", old: "Konsistensi susah", new: "Konsistensi jadi standar" },
    { label: "Algoritma", old: "Algoritma acuh", new: "Algoritma kenal ritme Anda" }
  ];

  return (
    <section className="py-24 bg-black relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Head-to-Head</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 italic uppercase">BANDINGAN <span className="text-blue-500">LANGSUNG</span></h2>
          <p className="text-gray-500 font-medium italic">Ubah cara Anda bekerja dan dominasi market sekarang.</p>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex lg:hidden justify-center items-center gap-2 mb-4 animate-pulse">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Geser untuk detail</span>
        </div>

        <div className="overflow-x-auto custom-scrollbar rounded-[2rem] md:rounded-[2.5rem] border border-white/10 glass-effect">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-black">Kategori</th>
                <th className="p-6 text-[10px] md:text-xs uppercase tracking-widest text-red-500/70 font-black">Cara Lama</th>
                <th className="p-6 text-[10px] md:text-xs uppercase tracking-widest text-blue-400 bg-blue-500/10 font-black italic">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Blackframe Engine
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                  <td className="p-6 text-xs md:text-sm font-black text-gray-400 uppercase italic tracking-tight">{row.label}</td>
                  <td className="p-6 text-xs md:text-sm text-gray-500 font-medium">{row.old}</td>
                  <td className="p-6 text-xs md:text-sm font-black text-white bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-all italic">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {row.new}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 italic">
            COMPETITIVE_ADVANTAGE_MODULE // v1.0
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
