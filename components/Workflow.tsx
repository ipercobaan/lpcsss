
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
    <section className="py-24 bg-black relative border-y border-white/5 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-blue-500/10 border border-blue-500/20 mb-6 font-mono text-[10px] uppercase tracking-widest text-blue-400">
             <span className="w-1.5 h-1.5 bg-blue-500"></span>
             <span>Operational Pipeline</span>
          </div>
           <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-white">
            The <span className="italic text-blue-500">Process</span>
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">Systematic content generation from source to distribution.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-white/10 divide-x divide-white/10">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-12 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <span className="font-mono text-[10px] text-blue-500/40 uppercase tracking-[0.3em] mb-8 block">
                Phase {step.num}
              </span>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white leading-tight">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light mb-8">{step.desc}</p>
              
              <div className="h-[1px] w-12 bg-blue-500/30 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
