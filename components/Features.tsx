
import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Gamepad2, PenTool, Layers, Repeat, Palette, Calendar, ArrowUpRight } from 'lucide-react';

const Features: React.FC = () => {
  const featuredTools = [
    {
      title: "AUTO CLIPPER",
      desc: "1 video panjang → 20–40 konten pendek siap upload (TikTok/Shorts/Reels/Fanspage-ready).",
      icon: Scissors,
      color: "blue",
      size: "large",
      image: "https://i.ibb.co.com/S4FFKh5D/Cuplikan-layar-2025-12-26-143713.png"
    },
    {
      title: "STUDIO GAMING",
      desc: "Rekaman panjang → highlight otomatis. Tanpa edit, tanpa replay manual.",
      icon: Gamepad2,
      color: "purple",
      size: "small",
      image: "https://i.ibb.co.com/Z65cgqH7/Cuplikan-layar-2025-12-23-024721.png"
    },
    {
      title: "PASTE EDITOR",
      desc: "Copy teks → langsung jadi video edukasi/berita. Faceless & posting harian = mungkin.",
      icon: PenTool,
      color: "emerald",
      size: "small",
      image: "https://i.ibb.co.com/RTsN3d9d/Cuplikan-layar-2025-12-26-152814.png"
    },
    {
      title: "MASS ENGINE",
      desc: "50 klip + 10 musik → 500+ video unik sekali render. Volume = peluang monetisasi berlipat.",
      icon: Layers,
      color: "orange",
      size: "medium",
      image: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "LOOPER VIDEO",
      desc: "Loop halus → durasi tonton naik → algoritma dorong reach.",
      icon: Repeat,
      color: "pink",
      size: "small",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "127 MASTER LUTs",
      desc: "Visual bioskop → persepsi harga & kualitas naik. Konten bagus = brand dipercaya.",
      icon: Palette,
      color: "cyan",
      size: "small",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "PUBLISH DASH",
      desc: "Upload, jadwal, dan live ke YouTube & Fanspage. Konten tetap jalan walaupun Anda lagi sibuk.",
      icon: Calendar,
      color: "indigo",
      size: "medium",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-yellow-400 font-bold">⭐</span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70 italic">HASIL, BUKAN SEKADAR FITUR</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic leading-none font-display"
          >
            SATU SOFTWARE <br className="md:hidden" />
            <span className="text-blue-500">BANYAK TOOLSNYA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto italic font-medium leading-relaxed"
          >
            Dominasi semua platform dengan ekosistem automasi terlengkap. <br className="hidden md:block" />
            Lupakan langganan bulanan di banyak tempat, semua yang Anda butuhkan ada di sini.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[1000px]">
          {featuredTools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#080808] hover:border-white/20 transition-all duration-500 ${
                tool.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                tool.size === 'medium' ? 'md:col-span-2 md:row-span-1' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={tool.image} 
                  alt={tool.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-${tool.color}-500/10 border border-${tool.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <tool.icon className={`w-6 h-6 text-${tool.color}-500`} />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-3 flex items-center gap-2">
                    {tool.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-sm italic font-medium leading-relaxed max-w-[280px]">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Module v1.0</span>
                  <div className="flex gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${tool.color}-500`}></div>
                    <div className={`w-1.5 h-1.5 rounded-full bg-${tool.color}-500/30`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
