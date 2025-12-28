
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

  // Split into 3 rows for diversity
  const row1 = allBonuses.slice(0, 15);
  const row2 = allBonuses.slice(15, 30);
  const row3 = allBonuses.slice(30);

  const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => (
    <div className="flex overflow-hidden py-2 select-none">
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {/* Duplicate items for seamless loop */}
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
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400">Master Bundle Unlocked</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic leading-tight">
          EKOSISTEM <span className="text-blue-500">50+ BONUS</span> APPS
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto italic">
          "Dapatkan akses instan ke seluruh library AI Apps kami untuk mendominasi pasar konten."
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative pause-on-hover">
        {/* Faders for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse={true} />
        <MarqueeRow items={row3} />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="text-2xl font-black text-white uppercase italic tracking-tight">
              TOTAL VALUE: <span className="text-blue-500">IDR 15.000.000+</span>
            </p>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">SEMUA TERMASUK DALAM LISENSI BLACKFRAME</p>
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
