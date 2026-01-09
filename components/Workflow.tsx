
import React from 'react';

const Workflow: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "AMBIL SUMBER",
      desc: "Cukup paste link video YouTube atau masukkan teks ide Anda ke dalam dashboard.",
      icon: "🔗"
    },
    {
      num: "02",
      title: "MESIN BEKERJA",
      desc: "Biarkan AI Engine melakukan pemotongan, editing, dan pemberian subtitle secara otomatis.",
      icon: "⚙️"
    },
    {
      num: "03",
      title: "PANTAU & CUAN",
      desc: "Konten siap upload massal. Anda hanya perlu memantau grafik views & income naik.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">
            3 LANGKAH <span className="text-blue-500">DOMINASI</span> PASAR
          </h2>
          <p className="text-gray-500 font-medium italic">"Software kami bekerja, Anda yang pegang kendali penuh."</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
              <span className="absolute -top-6 -left-4 text-7xl font-black text-white/5 italic group-hover:text-blue-500/10 transition-colors">
                {step.num}
              </span>
              <div className="text-5xl mb-6 relative z-10">{step.icon}</div>
              <h3 className="text-xl font-black mb-4 uppercase italic tracking-tight relative z-10">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-blue-500/20 text-4xl">
                   ➜
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
