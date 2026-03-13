
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Sparkles } from 'lucide-react';

const PhotoDemo: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <section id="demo" className="py-24 bg-black overflow-hidden border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400">Engine Output Preview</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic font-display"
          >
            HASIL <span className="text-blue-500">CINEMATIC</span> ENGINE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto italic"
          >
            "Lihat perbedaan kualitas antara video mentah dengan hasil polesan Blackframe Studio Engine."
          </motion.p>
        </div>

        {/* Interactive Slider */}
        <div className="relative max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.1)] group cursor-ew-resize"
             ref={containerRef}
             onMouseMove={handleMove}
             onTouchMove={handleMove}>
          
          {/* After Image (Full) */}
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white/50 z-10"
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop&sat=-100&contrast=80" 
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: `${10000 / sliderPos}%` }}
            />
            <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Raw Footage</span>
            </div>
          </div>

          {/* After Label */}
          <div className="absolute top-8 right-8 bg-blue-600/80 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-400/30 z-20">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Blackframe Render</span>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute inset-y-0 z-30 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-black/20 rounded-full"></div>
                <div className="w-1 h-4 bg-black/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { icon: ShieldCheck, title: "Color Grading", desc: "127+ Master LUTs untuk visual kelas dunia." },
            { icon: Zap, title: "Fast Rendering", desc: "Optimasi GPU untuk render 10x lebih cepat." },
            { icon: Sparkles, title: "AI Upscaling", desc: "Tingkatkan resolusi video buram menjadi 4K." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group"
            >
              <item.icon className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black italic uppercase tracking-tighter text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm italic font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoDemo;
