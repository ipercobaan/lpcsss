
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderOpen, 
  Palette, 
  Cpu, 
  Mic2, 
  PenTool, 
  Share2, 
  CheckCircle2,
  Zap,
  Activity,
  Terminal,
  Layers
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DetailedFeatures: React.FC = () => {
  const categories = [
    {
      id: "01",
      title: "MEDIA & BASICS",
      icon: <FolderOpen className="w-5 h-5" />,
      color: "blue",
      span: "md:col-span-1",
      items: ["Media Vault - Auto Metadata", "Asset Stok - Jutaan Video/SFX", "Smart Cut - Precision Detection", "History - Infinite Undo", "Markers - YouTube Chapters"]
    },
    {
      id: "02",
      title: "VISUAL & EFFECTS",
      icon: <Palette className="w-5 h-5" />,
      color: "purple",
      span: "md:col-span-1",
      items: ["Color Grading - 1 Click LUTs", "Visual Effects - Cinematic Overlay", "Overlay & Watermark", "Subtitle Engine - Karaoke Style", "Motion Engine - Object Tracking", "Smart Tools - Magic Eraser/AI Upscaler"]
    },
    {
      id: "03",
      title: "AI AUTOMATION",
      icon: <Cpu className="w-5 h-5" />,
      color: "red",
      span: "md:col-span-1 lg:col-span-1",
      items: ["Studio Gaming - Auto Highlight", "Auto Clipper - Viral Content Ready", "Paste Editor - Faceless Video", "Studio Viral - Viral Score Check", "Trend Hunter - Real-time Music/Tags", "Mass Engine - Bulk Rendering", "Content Cleaner - Anti-Duplication"]
    },
    {
      id: "04",
      title: "AUDIO STUDIO",
      icon: <Mic2 className="w-5 h-5" />,
      color: "emerald",
      span: "md:col-span-1",
      items: ["AI Voice - Natural Text-to-Speech", "Voice Cloning - Gandakan Suara", "Suno Music - Royalty Free AI", "Auto Dubbing - Lip-sync (Beta)", "Studio Audio - Noise Removal/EQ"]
    },
    {
      id: "05",
      title: "IDEASI & ASSET GENERATOR",
      icon: <PenTool className="w-5 h-5" />,
      color: "amber",
      span: "md:col-span-1 lg:col-span-1",
      items: ["VEO Generator - Prompt to Video", "Prompt Engine - Auto Refinement", "Faceless Studio - Auto Layout", "Studio Avatar - AI Presenter", "8K Generator - HQ Thumbnails", "UGC Builder - Hook to CTA", "ASMR Studio - 8D Audio"]
    },
    {
      id: "06",
      title: "DISTRIBUSI & EXPORT",
      icon: <Share2 className="w-5 h-5" />,
      color: "indigo",
      span: "md:col-span-1",
      items: ["YouTube Publisher - Auto SEO", "Fake Live Facebook - Auto Replay", "Batch Processor - Mass Rendering", "Export Preset - Multi-Platform"]
    }
  ];

  const colorMap: Record<string, string> = {
    blue: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    purple: "text-purple-400 border-purple-500/20 bg-purple-500/5",
    red: "text-red-400 border-red-500/20 bg-red-500/5",
    emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    amber: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    indigo: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
  };

  return (
    <section id="all-features" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Activity className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">System Capabilities // v1.0</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none">
              SEMUA <span className="text-blue-500">FITUR</span>
            </h2>
            <p className="text-zinc-500 max-w-xl font-medium italic text-lg">
              "Satu engine, ribuan kemungkinan. Setiap fitur dirancang untuk memangkas waktu kerja Anda hingga 90%."
            </p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="text-right">
              <div className="text-5xl font-black text-white/5 italic leading-none">35+ TOOLS</div>
              <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mt-1">Integrated Modules</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-right">
              <div className="text-5xl font-black text-white/5 italic leading-none">100%</div>
              <div className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mt-1">Automation Rate</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "group relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/50 transition-all duration-500 hover:border-white/10 overflow-hidden",
                cat.span
              )}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-2xl border transition-all duration-500 group-hover:scale-110",
                    colorMap[cat.color]
                  )}>
                    {cat.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-0.5">Module {cat.id}</div>
                    <h3 className="text-sm font-black text-white tracking-widest uppercase italic">{cat.title}</h3>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-tighter">Active</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 relative z-10">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mt-0.5 group-hover/item:border-blue-500/50 transition-colors">
                      <CheckCircle2 className="w-2.5 h-2.5 text-zinc-700 group-hover/item:text-blue-500 transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-zinc-500 group-hover/item:text-zinc-300 transition-colors tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500">
                {React.cloneElement(cat.icon as React.ReactElement<{ className?: string }>, { className: "w-32 h-32" })}
              </div>
              
              {/* Hover Glow */}
              <div className={cn(
                "absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)]"
              )}></div>
            </motion.div>
          ))}

          {/* Special CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-white/80" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60 italic">System Status</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 leading-tight">
                SIAP DOMINASI <br /> SEMUA PLATFORM?
              </h3>
              <p className="text-blue-100/70 text-sm font-medium italic mb-8">
                "Jangan biarkan kompetitor mendahului Anda. Gunakan engine yang sama dengan para top creator."
              </p>
            </div>
            
            <div className="relative z-10">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-white text-blue-600 font-black uppercase tracking-widest rounded-2xl hover:bg-blue-50 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-blue-600" />
                Dapatkan Akses
              </button>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Layers className="w-48 h-48 rotate-12" />
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 blur-[80px] rounded-full"></div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "AI MODELS", value: "12+" },
            { label: "ASSET LIBRARY", value: "1M+" },
            { label: "EXPORT PRESETS", value: "50+" },
            { label: "AUTO WORKFLOWS", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors cursor-default">
              <div className="text-3xl font-black text-white mb-1 italic tracking-tighter group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
