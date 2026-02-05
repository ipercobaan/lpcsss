
import React from 'react';

const BonusSection: React.FC = () => {
  const allBonuses = [
    "Ai Twin Studio App", "Curve Goddess’s App", "Faith Ai App", "Coloring Ever After App",
    "Haus Of Nails App", "Pedi Generator App", "Stock Photo Room App", "Ai Twin Runway App",
    "Blush Babes App", "Skool Module App", "Ai Portrait App", "Naughty Or Nice App",
    "Luxe Lens Ai App", "Self Care Studios App", "Material Girl App", "The Baddie Forecast App",
    "Modesty App", "Solevè Studios App", "Candy Cane Camera", "The Hair Bar App",
    "Social Dolls App", "Lights - Camera Fashion App", "Faceless Era App", "Bodied App",
    "Her Purpose App", "Velvet Skin Studios App", "Twinfluencers App", "Authorly App",
    "Luxe Ai Dolls App", "Baddie Flyer Studio App", "Lens UGC App", "Luxury Ai Twin Generator",
    "Funtastic Words", "Her Daily Threads", "Identical Twin App",
    "The Course Creators App", "It Girl Reminders", "My Fab Life App",
    "The Prompt Locker", "High Fashion App", "Boss Babe Book Builder",
    "Girl Boss Ai Studio", "Twin in App", "Exclusive Graphics", "Just For Men"
  ];

  const humanizzerFeatures = [
    { title: "AI Agent Realistis", desc: "Agen AI yang berbicara & berekspresi layaknya manusia sungguhan." },
    { title: "Voice Cloning", desc: "Gunakan suara Anda sendiri atau pilih dari library suara natural." },
    { title: "Interaksi Tatap Muka", desc: "Video call, audio call, dan chat teks secara real-time." },
    { title: "Dukungan Multibahasa", desc: "Deteksi lokasi otomatis & komunikasi dalam berbagai bahasa." },
    { title: "Knowledge Training", desc: "Latih AI via URL, PDF, atau YouTube agar paham produk Anda." },
    { title: "No-Code Builder", desc: "Tanpa koding, siapa pun bisa membangun agen AI profesional." },
    { title: "60+ Template", desc: "Template siap pakai untuk berbagai industri dan niche bisnis." },
    { title: "Embed Anywhere", desc: "Pasang di website, portal member, atau aplikasi dengan mudah." },
    { title: "Marketing & Lead", desc: "Formulir canggih, survei, dan popup untuk koleksi data leads." },
    { title: "Analitik Real-Time", desc: "Pantau keterlibatan dan konversi pengguna secara langsung." }
  ];

  const useCases = [
    "Layanan Pelanggan (CS) 24/7 Tanpa Henti",
    "Sales Profesional Untuk Menutup Penjualan",
    "Brand Ambassador (Kloning Diri Anda Sendiri)",
    "Agensi Pembuatan AI (Buka Jasa Untuk Klien)",
    "Edukasi & Pelatihan Interaktif Untuk Coach",
    "Pengumpulan Feedback & Review Otomatis"
  ];

  // Split into 3 rows for diversity
  const row1 = allBonuses.slice(0, 15);
  const row2 = allBonuses.slice(15, 30);
  const row3 = allBonuses.slice(30);

  const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => (
    <div className="flex overflow-hidden py-2 select-none">
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {[...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className="mx-3 px-6 py-4 rounded-2xl bg-[#0A0A0A] border border-white/5 whitespace-nowrap group hover:border-blue-500/40 hover:bg-blue-600/5 transition-all cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
              <span className="text-sm font-black text-white/70 group-hover:text-white uppercase italic tracking-tight">
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="bonus" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400 italic">Special Bonus Unlocked</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase italic leading-tight">
          EKOSISTEM <span className="text-blue-500">50+ BONUS</span> APPS
        </h2>
        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto italic font-medium">
          Dapatkan akses instan ke seluruh library AI Apps kami untuk mendominasi pasar konten & marketing.
        </p>
      </div>

      {/* Featured: HUMANIZZER */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="relative group p-6 md:p-12 rounded-[3rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            {/* Video Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-video bg-black">
                <video 
                  src="https://cdn.oppyotest.com/launches/humanizzer/special-1/step1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <span className="text-[10px] font-black uppercase text-white tracking-widest italic bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    Humanizzer Engine Preview
                  </span>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {useCases.map((use, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                    <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-[10px] font-black uppercase tracking-tight text-white/60 italic">{use}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block mb-2">Exclusive Integration</span>
                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
                  HUMANIZZER <span className="text-blue-500">AI AGENT</span>
                </h3>
                <p className="text-gray-400 text-sm md:text-base italic leading-relaxed">
                  Lupakan chatbot kaku. Humanizzer memungkinkan Anda menciptakan agen AI yang berbicara, berekspresi, dan merespons layaknya manusia sungguhan untuk CS, Sales, dan Branding.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {humanizzerFeatures.map((feat, i) => (
                  <div key={i} className="group/item">
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-1 group-hover/item:text-blue-400 transition-colors italic">
                      {feat.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-tight font-medium uppercase italic">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="px-3 py-1 bg-green-500/10 rounded-lg border border-green-500/20">
                     <span className="text-[9px] font-black text-green-400 uppercase italic">Commercial License Included</span>
                   </div>
                </div>
                <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">HMNZR_V1.0_SYNCED</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="relative pause-on-hover">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse={true} />
        <MarqueeRow items={row3} />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tight">
              TOTAL VALUE: <span className="text-blue-500">IDR 15.000.000+</span>
            </p>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1 italic">DAPATKAN SEMUA GRATIS DALAM PAKET LIFETIME BLACKFRAME</p>
          </div>
          <div className="h-px w-20 bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-4">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                    {i === 4 ? '+47' : ''}
                  </div>
                ))}
             </div>
             <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">50+ Apps Ready to Sync</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
