
import React from 'react';

const TargetAudience: React.FC = () => {
  const personas = [
    "Creator yang mau monetisasi lebih cepat",
    "Bisnis yang butuh konten harian buat closing",
    "Channel faceless yang mau scale",
    "Agency yang ingin produksi tanpa tambah karyawan",
    "Pelaku iklan, UGC, afiliasi, dropship, & digital product"
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic uppercase">SIAPA YANG HARUS <span className="text-blue-500">PAKAI INI?</span></h2>
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 italic text-gray-400">
               "Kalau tujuan Anda bukan uang dari konten, skip. Kalau iya, kita lanjut."
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-4">
            {personas.map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <span className="font-bold text-gray-200">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
