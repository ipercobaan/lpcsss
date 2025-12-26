
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">SOLUSI YANG TERJADI DI <span className="text-blue-500">BLACKFRAME</span></h2>
          <p className="text-gray-500">Semua dari 1 dashboard. Tanpa tim tambahan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Kurangi Waktu Ngedit 90%", desc: "Bebaskan waktu Anda untuk hal-hal strategis lainnya.", icon: "⏳" },
            { title: "Naikkan Frekuensi Tayang 10x", desc: "Volume adalah raja. Dominasi feed followers Anda setiap jam.", icon: "🚀" },
            { title: "Buka Lebih Banyak Pintu Penghasilan", desc: "Monetisasi lebih banyak akun tanpa kelelahan.", icon: "💸" }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-center hover:border-blue-500/50 transition-all">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
