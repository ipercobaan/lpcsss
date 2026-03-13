
import React, { useState, useEffect } from 'react';

interface CalculatorProps {
  onClose: () => void;
  onAction: () => void;
}

const MonetizationCalculator: React.FC<CalculatorProps> = ({ onClose, onAction }) => {
  const [videoCount, setVideoCount] = useState(5);
  const [avgViews, setAvgViews] = useState(50000);
  const [platform, setPlatform] = useState<'tiktok' | 'youtube' | 'reels'>('tiktok');
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

  // Estimates based on standard short-form RPM (Revenue per 1000 views)
  // IDR 300 - 1000 for local market short content
  const rpmRates = {
    tiktok: 450,
    youtube: 800,
    reels: 500
  };

  useEffect(() => {
    // Calculation: (Videos per day * 30 days) * (Avg Views / 1000) * RPM
    const totalViewsMonthly = (videoCount * 30) * avgViews;
    const revenue = (totalViewsMonthly / 1000) * rpmRates[platform];
    setMonthlyRevenue(revenue);

    // Time saved calculation: Manual 2 hours/video vs Blackframe 5 mins/video
    const manualMinutes = videoCount * 30 * 120; // 2 hours
    const blackframeMinutes = videoCount * 30 * 5; // 5 mins
    setHoursSaved(Math.round((manualMinutes - blackframeMinutes) / 60));
  }, [videoCount, avgViews, platform]);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-[#080808] border border-white/10 rounded-[3rem] shadow-[0_0_150px_rgba(59,130,246,0.15)] overflow-hidden animate-scale-up flex flex-col lg:flex-row">
        
        {/* Left: Inputs */}
        <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">
              REVENUE <span className="text-blue-500">ENGINE</span>
            </h2>
            <button onClick={onClose} className="lg:hidden p-2 text-white/30">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>

          <div className="space-y-10">
            {/* Platform Selection */}
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4 block">Target Platform</label>
              <div className="grid grid-cols-3 gap-3">
                {(['tiktok', 'youtube', 'reels'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                      platform === p ? 'bg-blue-600 border-blue-400 text-white' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Frequency */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Produksi Video / Hari</label>
                <span className="text-2xl font-black italic text-white">{videoCount} <span className="text-xs text-blue-500 uppercase">Clips</span></span>
              </div>
              <input 
                type="range" min="1" max="50" step="1"
                value={videoCount}
                onChange={(e) => setVideoCount(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between mt-2 text-[9px] font-bold text-white/20 uppercase">
                <span>Slow Mode</span>
                <span>Mass Engine Active</span>
              </div>
            </div>

            {/* Avg Views */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Rata-rata Views / Video</label>
                <span className="text-2xl font-black italic text-white">{avgViews.toLocaleString()} <span className="text-xs text-blue-500 uppercase">Views</span></span>
              </div>
              <input 
                type="range" min="1000" max="1000000" step="5000"
                value={avgViews}
                onChange={(e) => setAvgViews(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500"
              />
               <div className="flex justify-between mt-2 text-[9px] font-bold text-white/20 uppercase">
                <span>Organic Reach</span>
                <span>Viral Potential</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Results Display */}
        <div className="lg:w-[400px] bg-blue-600 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Background for result */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-8 block italic">Simulasi Profit Bulanan</span>
            
            <div className="mb-12">
               <span className="text-sm font-bold text-blue-100 uppercase opacity-70">Estimasi Revenue:</span>
               <div className="text-5xl lg:text-6xl font-black italic tracking-tighter text-white mt-2">
                 Rp{Math.round(monthlyRevenue).toLocaleString()}
               </div>
               <p className="text-[10px] font-medium text-blue-200 mt-4 leading-relaxed uppercase tracking-wider">
                 *Berdasarkan performa rata-rata RPM {platform} market Indonesia.
               </p>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/10">
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-blue-100">Waktu Dihemat:</span>
                  <span className="text-xl font-black italic text-white">{hoursSaved} JAM / BULAN</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-blue-100">Biaya Editor:</span>
                  <span className="text-xl font-black italic text-white">IDR 0 (AUTOMATED)</span>
               </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <button 
              onClick={() => { onClose(); onAction(); }}
              className="w-full py-6 bg-white text-black font-black uppercase italic tracking-widest rounded-2xl hover:bg-black hover:text-white transition-all active:scale-95 shadow-2xl"
            >
              KUNCI POTENSI INI SEKARANG
            </button>
            <p className="text-[9px] text-center text-blue-200 mt-4 font-bold uppercase tracking-widest">AMBIL LISENSI BLACKFRAME MASTER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationCalculator;
