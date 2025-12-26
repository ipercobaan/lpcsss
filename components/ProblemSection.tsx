
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    { label: "Waktu kerja habis di timeline", emoji: "⏳" },
    { label: "Biaya editor makin tinggi", emoji: "💸" },
    { label: "Konsistensi tayang gagal tercapai", emoji: "📉" },
    { label: "Algoritma tidak mengenal akun pasif", emoji: "🧱" }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase italic">
              MASALAH BESAR DI <br/>
              <span className="text-red-500">ERA SOSIAL MEDIA</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Produksi konten manual bukan lagi pilihan jika Anda ingin menang di algoritma hari ini. Anda akan tertinggal oleh volume kompetitor.
            </p>
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
               <p className="text-red-400 font-bold italic">
                 ➡️ Hasilnya? Trafik rendah → Reach turun → Peluang menghasilkan ikut turun.
               </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {problems.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl glass-effect border-red-500/10 flex items-center gap-4 group hover:bg-red-500/5 transition-all">
                <span className="text-3xl group-hover:scale-125 transition-transform">{p.emoji}</span>
                <span className="font-bold text-sm text-gray-200">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
