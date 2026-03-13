
import React from 'react';

const PhotoDemo: React.FC = () => {
  const demos = [
    {
      title: "AUTO CLIPPER",
      desc: "Ubah 1 video panjang menjadi 20-40 konten viral secara otomatis.",
      img: "https://i.ibb.co.com/S4FFKh5D/Cuplikan-layar-2025-12-26-143713.png",
      tag: "Viral Generator"
    },
    {
      title: "STUDIO GAMING",
      desc: "Highlight otomatis dari rekaman panjang tanpa edit manual.",
      img: "https://i.ibb.co.com/Z65cgqH7/Cuplikan-layar-2025-12-23-024721.png",
      tag: "Pro Gaming"
    },
    {
      title: "PASTE EDITOR",
      desc: "Copy-paste teks langsung jadi video edukasi atau berita faceless.",
      img: "https://i.ibb.co.com/RTsN3d9d/Cuplikan-layar-2025-12-26-152814.png",
      tag: "Smart Engine"
    }
  ];

  return (
    <section id="demo" className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400">Software Core Preview</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
            INTERFACE <span className="text-blue-500">ASLI</span> ENGINE
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
            "Bukan sekadar konsep. Ini adalah interface mesin yang akan mendominasi konten Anda."
          </p>
        </div>

        <div className="space-y-32">
          {demos.map((demo, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-2/3 relative group">
                {/* Glow Background */}
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Browser/Software Frame */}
                <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black">
                  <div className="bg-[#1a1a1a] border-b border-white/5 px-4 py-3 flex justify-between items-center">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
                      Blackframe Studio // {demo.title}
                    </div>
                    <div className="w-10"></div>
                  </div>
                  <img 
                    src={demo.img} 
                    alt={demo.title} 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>

              <div className="lg:w-1/3 space-y-6">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-blue-400 uppercase tracking-widest italic">
                  {demo.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-black italic tracking-tight uppercase leading-none">
                  {demo.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed italic">
                  {demo.desc}
                </p>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Engine Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoDemo;
