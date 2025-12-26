
import React, { useState } from 'react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featuredTools = [
    {
      title: "AUTO CLIPPER",
      desc: "1 video panjang → 20–40 konten pendek siap upload (TikTok/Shorts/Reels/Fanspage-ready).",
      icon: "✂️",
      status: "Analyzing Long Form Video...",
      image: "https://i.ibb.co.com/S4FFKh5D/Cuplikan-layar-2025-12-26-143713.png",
      insight: "Yield: 32 Clips Found"
    },
    {
      title: "STUDIO GAMING INSTANT",
      desc: "Rekaman panjang → highlight otomatis. Tanpa edit, tanpa replay manual.",
      icon: "🎮",
      status: "Detecting Epic Moments...",
      image: "https://i.ibb.co.com/Z65cgqH7/Cuplikan-layar-2025-12-23-024721.png",
      insight: "Highlight: Triple Kill Detected"
    },
    {
      title: "PASTE EDITOR",
      desc: "Copy teks → langsung jadi video edukasi/berita. Faceless & posting harian = mungkin.",
      icon: "✍️",
      status: "Synthesizing Storyboard...",
      image: "https://i.ibb.co.com/RTsN3d9d/Cuplikan-layar-2025-12-26-152814.png",
      insight: "Script: 450 Words Processed"
    },
    {
      title: "MASS ENGINE",
      desc: "50 klip + 10 musik → 500+ video unik sekali render. Volume = peluang monetisasi berlipat.",
      icon: "🏭",
      status: "Bulk Rendering 500+ Variants...",
      image: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=2000&auto=format&fit=crop",
      insight: "Batch: 12/500 Complete"
    },
    {
      title: "LOOPER SEAMLESS VIDEO",
      desc: "Loop halus → durasi tonton naik → algoritma dorong reach. Algoritma suka yang bertahan lama.",
      icon: "🔄",
      status: "Optimizing Loop Transitions...",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
      insight: "Loop: 0.1ms Crossfade"
    },
    {
      title: "127 MASTER LUTs",
      desc: "Visual bioskop → persepsi harga & kualitas naik. Konten bagus = brand dipercaya.",
      icon: "🎨",
      status: "Applying Cinematic Master Grade...",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
      insight: "LUT: Arri Alexa Log-C"
    },
    {
      title: "LIVE & POST DASHBOARD",
      desc: "Upload, jadwal, dan live ke YouTube & Fanspage. Konten tetap jalan walaupun Anda lagi sibuk.",
      icon: "📅",
      status: "Scheduling Multi-Platform...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      insight: "Queue: 14 Posts Scheduled"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-yellow-400 font-bold">⭐</span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70 italic">HASIL, BUKAN SEKADAR FITUR</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
            FITUR <span className="text-blue-500">UNGGULAN</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic font-medium">
            "Dirancang untuk mendominasi algoritma dan mempercepat proses produksi Anda hingga 10x lipat."
          </p>
        </div>

        {/* Cinematic Dashboard Container */}
        <div className="relative group mb-12">
          {/* Decorative Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-[100px] opacity-50"></div>
          
          <div className="relative bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col lg:h-[850px]">
            
            {/* App Window Chrome */}
            <div className="bg-[#111] border-b border-white/5 px-8 py-5 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
              </div>
              <div className="text-[10px] text-white/30 font-black tracking-[0.4em] uppercase italic">
                Blackframe Studio Workspace // Engine v1.0
              </div>
              <div className="flex gap-4">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_100px_#3b82f6]"></div>
              </div>
            </div>

            {/* Application Main Layout */}
            <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
              
              {/* Sidebar Menu: 7 CORE FEATURES */}
              <div className="lg:w-80 border-r border-white/5 bg-[#0A0A0A] p-6 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active Modules</span>
                </div>

                <div className="space-y-1.5">
                  {featuredTools.map((tool, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveFeature(i)}
                      className={`w-full p-4 rounded-2xl text-left transition-all group border ${
                        activeFeature === i 
                        ? 'bg-blue-600 border-blue-400 shadow-xl shadow-blue-600/20 z-10' 
                        : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-1">
                        <span className={`text-xl transition-transform duration-500 ${activeFeature === i ? 'scale-125' : 'group-hover:scale-110'}`}>
                          {tool.icon}
                        </span>
                        <span className={`text-[11px] font-black tracking-tight uppercase italic ${
                          activeFeature === i ? 'text-white' : 'text-white/70'
                        }`}>
                          {tool.title}
                        </span>
                      </div>
                      {activeFeature === i && (
                        <p className="text-[10px] text-blue-100 font-medium leading-tight mt-2 italic opacity-90">
                          {tool.desc}
                        </p>
                      )}
                    </button>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="mt-auto pt-6 border-t border-white/5">
                   <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">System Load</span>
                        <span className="text-[9px] font-bold text-green-400 uppercase">Efficient</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3 animate-pulse"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Central Editor Viewport */}
              <div className="flex-1 flex flex-col bg-black relative">
                <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center bg-[#0D0D0D]/80 backdrop-blur-xl sticky top-0 z-10">
                   <div className="flex items-center gap-4">
                      <h3 className="text-xs font-black uppercase italic tracking-widest text-white/80">
                        Workspace: <span className="text-blue-500">{featuredTools[activeFeature].title}</span>
                      </h3>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[9px] font-black rounded-full uppercase tracking-tighter flex items-center gap-2 border border-blue-500/20">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                        {featuredTools[activeFeature].status}
                      </span>
                   </div>
                   <div className="flex gap-3">
                      <button className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase rounded-xl hover:bg-gray-200 transition-all shadow-lg shadow-white/5">Run Engine</button>
                   </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 relative overflow-hidden">
                   {/* Main Canvas with User-provided Images */}
                   <div className="w-full h-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] relative group/vid">
                      <img 
                        src={featuredTools[activeFeature].image} 
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105" 
                        alt={featuredTools[activeFeature].title} 
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                      {/* HUD Overlays */}
                      <div className="absolute top-10 right-10 flex flex-col gap-3">
                         <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl min-w-[160px]">
                            <span className="text-[9px] font-black uppercase text-blue-500 tracking-widest block mb-2">Metadata</span>
                            <div className="text-[10px] font-mono text-white/60 space-y-1">
                               <div className="flex justify-between"><span>Resolution</span><span>4K HDR</span></div>
                               <div className="flex justify-between"><span>Encoding</span><span>H.265</span></div>
                               <div className="flex justify-between"><span>V-Sync</span><span>Active</span></div>
                            </div>
                         </div>
                         <div className="bg-blue-600/80 backdrop-blur-xl border border-blue-400/30 p-4 rounded-2xl shadow-2xl">
                            <span className="text-[10px] font-black text-white uppercase italic">{featuredTools[activeFeature].insight}</span>
                         </div>
                      </div>
                      
                      {/* Player Interface HUD */}
                      <div className="absolute bottom-10 inset-x-10 flex justify-between items-center">
                         <div className="flex items-center gap-6">
                            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl shadow-white/20 hover:scale-110 transition-transform">
                               <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </button>
                            <div className="h-1 w-48 md:w-80 bg-white/10 rounded-full relative overflow-hidden">
                               <div className="absolute inset-y-0 left-0 w-2/3 bg-blue-500 shadow-[0_0_20px_#3b82f6]"></div>
                            </div>
                         </div>
                         <div className="hidden md:flex gap-6 items-center">
                            <div className="text-[11px] font-mono font-bold tracking-widest text-white/40 italic">00:45.02 / 01:20.00</div>
                            <div className="w-[1px] h-4 bg-white/10"></div>
                            <button className="text-[10px] font-black uppercase text-white/40 hover:text-white transition-colors tracking-widest">MASTER_RENDER</button>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Timeline Visualizer */}
                <div className="h-44 bg-[#080808] border-t border-white/5 p-6 hidden lg:block">
                   <div className="flex justify-between items-center mb-5">
                      <div className="flex gap-8">
                         <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Timeline // Frame Precision</span>
                         <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] italic">AI Logic: Enabled</span>
                      </div>
                      <div className="flex gap-2">
                         <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Export XML</button>
                         <button className="px-5 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all">Mass Process</button>
                      </div>
                   </div>

                   <div className="h-16 flex gap-1 items-end relative overflow-hidden">
                      <div className="flex-1 bg-white/[0.02] rounded-2xl border border-white/5 flex gap-1.5 p-1.5 relative overflow-hidden">
                         {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                           <div key={i} className={`flex-1 rounded-lg overflow-hidden relative opacity-20 hover:opacity-100 transition-all cursor-pointer ${i === 8 ? 'opacity-80 ring-1 ring-blue-500' : ''}`}>
                              <div className="h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                           </div>
                         ))}
                         {/* Scrubber Playhead */}
                         <div className="absolute inset-y-0 left-[62%] w-[2px] bg-blue-400 z-20 shadow-[0_0_20px_rgba(96,165,250,1)]">
                            <div className="absolute -top-1 -left-[3px] w-2 h-2 bg-blue-400 rotate-45"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Recap Quick Bar */}
        <div className="flex flex-wrap justify-center gap-3">
           {featuredTools.map((tool, i) => (
             <button 
              key={i} 
              onClick={() => setActiveFeature(i)}
              className={`px-5 py-3 rounded-2xl border transition-all text-center flex items-center gap-3 group ${
                activeFeature === i ? 'bg-blue-600 border-blue-400 scale-105' : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
               <span className="text-sm group-hover:scale-110 transition-transform">{tool.icon}</span>
               <span className="text-[9px] font-black uppercase tracking-widest text-white/80">{tool.title}</span>
             </button>
           ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] italic">
          MASTER_RENDER_ENGINE // v1.0_STABLE
        </p>
      </div>
    </section>
  );
};

export default Features;
