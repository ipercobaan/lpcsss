
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
          <h2 className="text-3xl md:text-5xl font-black mb-4 italic uppercase">BANDINGAN <span className="text-blue-500">LANGSUNG</span></h2>
          <p className="text-gray-500">Ubah cara Anda bekerja hari ini.</p>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 glass-effect">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 text-xs uppercase tracking-widest text-white/40">Kategori</th>
                <th className="p-6 text-xs uppercase tracking-widest text-red-400">Cara Lama</th>
                <th className="p-6 text-xs uppercase tracking-widest text-blue-400 bg-blue-500/10">Blackframe</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-sm font-bold text-gray-400">{row.label}</td>
                  <td className="p-6 text-sm text-gray-500">{row.old}</td>
                  <td className="p-6 text-sm font-black text-white bg-blue-500/5 italic">{row.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
