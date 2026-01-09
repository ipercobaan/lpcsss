
import React, { useState } from 'react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const featuredTools = [
    {
      title: "AUTO CLIPPER",
      desc: "1 video panjang → 20–40 konten pendek siap upload (TikTok/Shorts/Reels/Fanspage-ready).",
      icon: "✂️",
      status: "Analyzing...",
      image: "https://i.ibb.co.com/S4FFKh5D/Cuplikan-layar-2025-12-26-143713.png",
      insight: "32 Clips Found"
    },
    {
      title: "STUDIO GAMING",
      desc: "Rekaman panjang → highlight otomatis. Tanpa edit, tanpa replay manual.",
      icon: "🎮",
      status: "Detecting Moments...",
      image: "https://i.ibb.co.com/Z65cgqH7/Cuplikan-layar-2025-12-23-024721.png",
      insight: "Triple Kill Found"
    },
    {
      title: "PASTE EDITOR",
      desc: "Copy teks → langsung jadi video edukasi/berita. Faceless & posting harian = mungkin.",
      icon: "✍️",
      status: "Synthesizing...",
      image: "https://i.ibb.co.com/RTsN3d9d/Cuplikan-layar-2025-12-26-152814.png",
      insight: "450 Words Ready"
    },
    {
      title: "MASS ENGINE",
      desc: "50 klip + 10 musik → 500+ video unik sekali render. Volume = peluang monetisasi berlipat.",
      icon: "🏭",
      status: "Rendering Bulk...",
      image: "https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?q=80&w=2000&auto=format&fit=crop",
      insight: "Batch: 12/500"
    },
    {
      title: "LOOPER VIDEO",
      desc: "Loop halus → durasi tonton naik → algoritma dorong reach. Algoritma suka yang bertahan lama.",
      icon: "🔄",
      status: "Optimizing...",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
      insight: "Seamless Transition"
    },
    {
      title: "127 MASTER LUTs",
      desc: "Visual bioskop → persepsi harga & kualitas naik. Konten bagus = brand dipercaya.",
      icon: "🎨",
      status: "Grading...",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
      insight: "Arri Alexa Log-C"
    },
    {
      title: "PUBLISH DASH",
      desc: "Upload, jadwal, dan live ke YouTube & Fanspage. Konten tetap jalan walaupun Anda lagi sibuk.",
      icon: "📅",
      status: "Scheduling...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      insight: "14 Posts Queued"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-yellow-400 font-bold">⭐</span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70 italic">HASIL, BUKAN SEKADAR FITUR</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic leading-none">
            SATU SOFTWARE <br className="md:hidden" />
            <span className="text-blue-500">BANYAK TOOLSNYA</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto italic font-medium leading-relaxed">
            Dominasi semua platform dengan ekosistem automasi terlengkap. <br className="hidden md:block" />
            Lupakan langganan bulanan di banyak tempat, semua yang Anda butuhkan ada di sini.
          </p>
        </div>

        {/* Cinematic Dashboard Container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[2rem] md:rounded-[3rem] blur-[60px] md:blur-[100px] opacity-50"></div>
          
          <div className="relative bg-[#080808] border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col lg:h-[800px]">
            
            {/* App Window Chrome */}
            <div className="bg-[#111] border-b border-white/5 px-4 md:px-8 py-3 md:py-5 flex justify-between items-center">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <div className="text-[8px] md:text-[10px] text-white/30 font-black tracking-[0.2em] md:tracking-[0.4em] uppercase italic truncate px-2">
                Blackframe Studio Workspace // Engine v1.0
              </div>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>

            {/* Application Main Layout */}
            <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
              
              {/* Sidebar Menu / Horizontal Scroll on Mobile */}
              <div className="lg:w-80 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0A0A0A] flex lg:flex-col overflow-x-auto lg:overflow-y-auto custom-scrollbar no-scrollbar scroll-smooth">
                <div className="hidden lg:flex px-6 py-4 border-b border-white/5 items-center justify-between">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active Modules</span>
                  <span className="text-[8px] font-bold text-white/20">7 TOTAL</span>
                </div>

                <div className="flex lg:flex-col p-2 md:p-4 lg:p-6 gap-2 min-w-max lg:min-w-0">
                  {featuredTools.map((tool, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveFeature(i)}
                      className={`flex lg:flex-col items-center lg:items-start gap-3 lg:gap-1 px-5 py-3 lg:p-4 rounded-xl md:rounded-2xl text-left transition-all group border whitespace-nowrap lg:whitespace-normal ${
                        activeFeature === i 
                        ? 'bg-blue-600 border-blue-400 shadow-xl shadow-blue-600/10' 
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-lg transition-transform duration-500 ${activeFeature === i ? 'scale-110' : 'group-hover:scale-105'}`}>
                          {tool.icon}
                        </span>
                        <span className={`text-[10px] md:text-[11px] font-black tracking-tight uppercase italic ${
                          activeFeature === i ? 'text-white' : 'text-white/70'
                        }`}>
                          {tool.title}
                        </span>
                      </div>
                      <p className={`hidden lg:block text-[10px] text-blue-100 font-medium leading-tight mt-2 italic opacity-90 transition-opacity ${activeFeature === i ? 'block' : 'hidden'}`}>
                        {tool.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Central Editor Viewport */}
              <div className="flex-1 flex flex-col bg-black relative min-h-[400px] md:min-h-0">
                <div className="px-4 md:px-8 py-3 md:py-5 border-b border-white/5 flex justify-between items-center bg-[#0D0D0D]/80 backdrop-blur-xl sticky top-0 z-10">
                   <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                      <h3 className="text-[9px] md:text-xs font-black uppercase italic tracking-widest text-white/80 truncate">
                        <span className="hidden md:inline">Workspace:</span> <span className="text-blue-500">{featuredTools[activeFeature].title}</span>
                      </h3>
                      <span className="px-2 md:px-3 py-1 bg-blue-500/10 text-blue-400 text-[8px] md:text-[9px] font-black rounded-full uppercase tracking-tighter flex items-center gap-1.5 border border-blue-500/20">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                        {featuredTools[activeFeature].status}
                      </span>
                   </div>
                   <button className="px-4 md:px-6 py-2 bg-white text-black text-[9px] md:text-[10px] font-black uppercase rounded-lg md:rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-95 shrink-0">
                     Run Engine
                   </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 relative overflow-hidden">
                   {/* Main Canvas */}
                   <div className="w-full h-full max-w-5xl rounded-xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] relative group/vid">
                      <img 
                        src={featuredTools[activeFeature].image} 
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out" 
                        alt={featuredTools[activeFeature].title} 
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20"></div>

                      {/* HUD Overlays - Optimized for Mobile */}
                      <div className="absolute top-4 right-4 md:top-10 md:right-10 flex flex-col gap-2 md:gap-3">
                         <div className="hidden sm:block bg-black/60 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl min-w-[120px] md:min-w-[160px]">
                            <span className="text-[8px] md:text-[9px] font-black uppercase text-blue-500 tracking-widest block mb-1 md:mb-2">Metadata</span>
                            <div className="text-[8px] md:text-[10px] font-mono text-white/60 space-y-0.5 md:space-y-1">
                               <div className="flex justify-between"><span>Resolution</span><span>4K HDR</span></div>
                               <div className="flex justify-between"><span>Encoding</span><span>H.265</span></div>
                            </div>
                         </div>
                         <div className="bg-blue-600/90 backdrop-blur-xl border border-blue-400/30 px-3 py-2 md:p-4 rounded-lg md:rounded-2xl shadow-2xl">
                            <span className="text-[9px] md:text-[10px] font-black text-white uppercase italic tracking-tighter">
                              {featuredTools[activeFeature].insight}
                            </span>
                         </div>
                      </div>
                      
                      {/* Player Interface HUD */}
                      <div className="absolute bottom-4 inset-x-4 md:bottom-10 md:inset-x-10 flex flex-col md:flex-row justify-between items-center gap-4">
                         <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                            <button className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform shrink-0">
                               <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </button>
                            <div className="h-1 flex-1 md:w-48 lg:w-80 bg-white/10 rounded-full relative overflow-hidden">
                               <div className="absolute inset-y-0 left-0 w-2/3 bg-blue-500 shadow-[0_0_20px_#3b82f6]"></div>
                            </div>
                         </div>
                         <div className="flex w-full md:w-auto justify-between md:justify-end gap-6 items-center">
                            <div className="text-[9px] md:text-[11px] font-mono font-bold tracking-widest text-white/40 italic">00:45.02 / 01:20.00</div>
                            <div className="hidden md:block w-[1px] h-4 bg-white/10"></div>
                            <button className="hidden md:block text-[10px] font-black uppercase text-white/40 hover:text-white transition-colors tracking-widest">MASTER_RENDER</button>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Timeline Visualizer - Hidden on small mobile */}
                <div className="h-24 md:h-44 bg-[#080808] border-t border-white/5 p-4 md:p-6 hidden sm:block">
                   <div className="flex justify-between items-center mb-4 md:mb-5">
                      <div className="flex gap-4 md:gap-8">
                         <span className="text-[8px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em]">Timeline // Frame Precision</span>
                         <span className="hidden md:inline text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] italic">AI Logic: Enabled</span>
                      </div>
                      <div className="flex gap-2">
                         <button className="hidden lg:block px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Export XML</button>
                         <button className="px-4 md:px-5 py-1.5 md:py-2 bg-blue-600 text-white rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all">Mass Process</button>
                      </div>
                   </div>

                   <div className="h-10 md:h-16 flex gap-1 items-end relative overflow-hidden">
                      <div className="flex-1 bg-white/[0.02] rounded-lg md:rounded-2xl border border-white/5 flex gap-1 p-1 relative overflow-hidden">
                         {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
                           <div key={i} className={`flex-1 rounded-md overflow-hidden relative opacity-10 md:opacity-20 hover:opacity-100 transition-all cursor-pointer ${i === 8 ? 'opacity-80 ring-1 ring-blue-500' : ''}`}>
                              <div className="h-full bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                           </div>
                         ))}
                         <div className="absolute inset-y-0 left-[62%] w-[1.5px] md:w-[2px] bg-blue-400 z-20 shadow-[0_0_20px_rgba(96,165,250,1)]">
                            <div className="absolute -top-1 -left-[2.5px] md:-left-[3px] w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rotate-45"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Recap Quick Bar - Mobile Version */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 md:hidden">
           {featuredTools.map((tool, i) => (
             <button 
              key={i} 
              onClick={() => setActiveFeature(i)}
              className={`w-10 h-10 rounded-xl border transition-all flex items-center justify-center ${
                activeFeature === i ? 'bg-blue-600 border-blue-400 scale-110' : 'bg-white/5 border-white/10'
              }`}
            >
               <span className="text-base">{tool.icon}</span>
             </button>
           ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-12 md:mt-20">
        <p className="text-white/10 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] italic text-center px-4">
          MASTER_RENDER_ENGINE // v1.0_STABLE // PRO_LICENSE_ACTIVE
        </p>
      </div>
    </section>
  );
};

export default Features;
