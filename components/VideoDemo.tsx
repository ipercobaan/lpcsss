
import React, { useState } from 'react';

const VideoDemo: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoId = "zW_I0kKzHSc";
  const siParam = "rVSwg8Q-StSCHkKA";

  const handleStart = () => {
    setHasStarted(true);
  };

  /**
   * Menggunakan URL embed standar dengan parameter yang diberikan pengguna.
   * Player akan dimuat langsung di dalam frame tanpa tombol eksternal.
   */
  const embedUrl = `https://www.youtube.com/embed/${videoId}?si=${siParam}&autoplay=1&modestbranding=1&rel=0`;

  return (
    <section id="video-demo" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400 italic">Production Output</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
            DEMO VIDEO <span className="text-blue-500">HASILNYA</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic font-medium">
            "Saksikan kualitas visual premium yang dihasilkan secara otomatis oleh engine kami."
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          {/* Decorative frame effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-black rounded-[2.2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10 aspect-video">
            {hasStarted ? (
              <div className="w-full h-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div 
                className="w-full h-full relative cursor-pointer group" 
                onClick={handleStart}
              >
                {/* Thumbnail dengan overlay cinematic */}
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                
                {/* Play Button Premium */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-0 bg-white rounded-full shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform"></div>
                    <svg className="w-8 h-8 text-black ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Status HUD Info */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none opacity-60">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] block">Status: Online</span>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] italic">Engine: Blackframe Studio v1.0</span>
                  </div>
                  <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">
                    Click to Play Preview
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Preview Info */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] italic">
              MASTER_RENDER_ENGINE // v1.0_STABLE
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Format: 4K HDR 60FPS // Audio: Mastered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
