
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface PricingProps {
  onBuyClick: (product: Product) => void;
}

const Pricing: React.FC<PricingProps> = ({ onBuyClick }) => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-black">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
             <span className="text-[10px] font-black tracking-[0.2em] uppercase text-red-400 italic">Promo Berakhir 3 Januari</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase italic tracking-tighter">
            SPECIAL <span className="text-blue-500">AKHIR TAHUN</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic font-medium">
            "Dapatkan akses penuh ke engine Blackframe Studio dengan harga khusus tahun baru."
          </p>
        </div>
        
        <div className="flex justify-center">
          {PRODUCTS.map((p) => (
            <div 
              key={p.id} 
              className="relative w-full max-w-xl p-8 md:p-12 rounded-[3rem] flex flex-col bg-white text-black shadow-[0_0_100px_rgba(255,0,0,0.2)] transition-transform hover:scale-[1.02] duration-500 border-4 border-red-600"
            >
              {/* Founding Member Seal */}
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-4 border-white shadow-2xl flex flex-col items-center justify-center p-4 rotate-12 z-30">
                 <span className="text-[8px] font-black text-black/60 uppercase tracking-widest mb-1">Eksklusif</span>
                 <span className="text-[11px] font-black text-black leading-none text-center uppercase italic">Founding Member</span>
                 <div className="mt-1 flex gap-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-[8px]">⭐</span>)}
                 </div>
              </div>

              <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-8 py-3 bg-red-600 text-white text-sm font-black tracking-widest uppercase rounded-full shadow-2xl animate-bounce whitespace-nowrap z-20">
                TERBATAS 26 ORANG SAJA
              </div>
              
              <div className="mb-8 text-center mt-6">
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter italic text-zinc-800 leading-tight">
                  LIFETIME ACCESS ENGINE
                </h3>
                
                {/* Scarcity Progress Bar */}
                <div className="max-w-xs mx-auto mb-8 bg-zinc-50 p-4 rounded-3xl border border-zinc-100">
                   <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-black uppercase text-red-600 italic">Slot Founding Member!</span>
                      <span className="text-[10px] font-black uppercase text-zinc-400 italic">21/26 Terisi</span>
                   </div>
                   <div className="h-3 bg-zinc-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-[80%] animate-pulse rounded-full"></div>
                   </div>
                </div>
              </div>
              
              <div className="mb-12 text-center">
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl text-gray-400 line-through font-bold">
                      IDR 2.500.000
                    </span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-black rounded uppercase tracking-tighter">Save 94%</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-8xl font-black italic tracking-tighter text-black">
                      149<span className="text-2xl font-black uppercase ml-1">K</span>
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col items-center">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1 rounded-full">
                      LISENSI LIFETIME (SEKALI BAYAR)
                    </span>
                    <p className="text-[10px] font-bold text-zinc-400 mt-3 uppercase italic tracking-tighter">
                      Penawaran Berakhir 3 Januari 2025
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-center text-sm font-bold text-zinc-700">
                    <div className={`w-5 h-5 mr-3 rounded-full flex items-center justify-center flex-shrink-0 ${f.includes('Founding') || f.includes('Priority') ? 'bg-amber-500 text-white' : 'bg-black text-white'}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className={f.includes('Founding') || f.includes('Priority') ? 'text-amber-600 font-black italic underline decoration-amber-200' : ''}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onBuyClick(p)}
                className="w-full py-7 bg-black text-white text-xl font-black uppercase tracking-widest rounded-[2rem] hover:bg-red-600 transition-all active:scale-95 shadow-2xl shadow-black/20 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  AMBIL PROMO SEKARANG
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>
              
              <p className="mt-6 text-[10px] text-center text-black/30 font-bold uppercase tracking-[0.3em] italic">
                GARANSI AKSES SELAMANYA • TRANSAKSI 100% AMAN
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
