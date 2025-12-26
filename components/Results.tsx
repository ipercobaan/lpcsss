
import React from 'react';

const Results: React.FC = () => {
  const points = [
    { text: "Konten lebih banyak", icon: "📈" },
    { text: "Tayang lebih sering", icon: "✨" },
    { text: "Algoritma aktif", icon: "🔥" },
    { text: "Peluang monetisasi bertambah", icon: "💰" }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic uppercase">HASIL YANG <span className="text-blue-500">MASUK AKAL</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
            "Bukan “cepat kaya”. Ini percepatan peluang."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {points.map((p, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-blue-500/10 transition-all">
              <div className="text-3xl mb-4">{p.icon}</div>
              <div className="flex items-center justify-center gap-2">
                 <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                 <span className="font-bold text-sm tracking-tight">{p.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/20">
          <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase italic">ROI PALING MASUK AKAL</h3>
          <p className="text-xl md:text-2xl font-medium mb-8 text-blue-100">
            Anda tidak membeli software. Anda membeli <span className="text-white font-black underline decoration-blue-300">kapasitas menghasilkan lebih banyak.</span>
          </p>
          <div className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
             Bayar sekali → Hemat waktu setiap hari → Konsistensi konten → Peluang penghasilan berulang.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
