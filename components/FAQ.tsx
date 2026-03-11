
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle, Zap } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Bayarnya beneran sekali doang?",
      a: "Ya. Sekali bayar = akses lifetime. Tanpa biaya bulanan. Tanpa cicilan. Tanpa “kaget invoice”. Update 12 bulan ikut masuk, setelah itu opsional."
    },
    {
      q: "Laptop kentang kuat gak?",
      a: "Bisa. Selama Laptop kamu mampu membuka Google Chrome, berarti Blackframe bisa dijalankan karena sistem berbasis cloud engine yang efisien."
    },
    {
      q: "Butuh API key berbayar?",
      a: "Tidak, memang perlu API tapi hanya API gratis. Dan sekarang sudah tersedia Offline & Remot tanpa api key sama sekali."
    },
    {
      q: "Cocok buat pemula?",
      a: "Cocok banget. Kalau kamu bisa copy-paste link, kamu udah bisa pakai Paste Editor. Fitur lainnya tinggal klik → pilih → selesai."
    },
    {
      q: "Bisa bantu saya dapat uang?",
      a: "Blackframe = alat untuk memperbesar peluang. Hasil tetap tergantung cara kamu pakai, niche, dan strategi. Tapi dengan produksi cepat + konsistensi → peluang penghasilan lebih besar."
    },
    {
      q: "Kalau beli tapi bingung?",
      a: "Ada onboarding via WhatsApp. Konsultasi, panduan fitur relevan, dan rekomendasi workflow agar Anda bisa langsung tancap gas."
    },
    {
      q: "Apakah ada Refund?",
      a: "Tidak ada refund karena ini adalah produk digital versi final dengan akses penuh yang diberikan langsung setelah aktivasi."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
             <HelpCircle className="w-3 h-3 text-blue-400" />
             <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400 italic">Knowledge Base</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter font-display"
          >
            FREQUENTLY ASKED <span className="text-blue-500">QUESTIONS</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-medium italic text-lg"
          >
            "Semua yang perlu Anda ketahui sebelum mengaktifkan engine."
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group rounded-[2rem] transition-all duration-500 border ${
                openIndex === i 
                  ? 'bg-white/[0.05] border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <span className={`text-lg md:text-xl font-black italic uppercase tracking-tight transition-all duration-500 ${openIndex === i ? 'text-blue-400 translate-x-2' : 'text-white'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border ${
                  openIndex === i 
                    ? 'bg-blue-500 border-blue-400 text-white rotate-180 shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-white/5 border-white/10 text-white/40'
                }`}>
                  <ChevronDown className="w-5 h-5" strokeWidth={3} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed font-medium text-lg italic border-t border-white/5 pt-6 mx-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3.5rem] bg-gradient-to-br from-blue-600/10 via-blue-600/5 to-transparent border border-white/10 text-center relative overflow-hidden group"
        >
           {/* Decorative background icon */}
           <MessageCircle className="absolute -right-10 -bottom-10 w-40 h-40 text-blue-500/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
           
           <div className="relative z-10">
             <p className="text-xl font-black italic text-white/80 mb-8 uppercase tracking-tighter">Masih punya pertanyaan spesifik?</p>
             <a 
              href="https://wa.me/6282124335700?text=Halo%20Blackframe%20Studio!%20Saya%20ingin%20tanya%20lebih%20lanjut%20tentang%20engine%20ini."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] italic hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-2xl group/btn"
             >
               <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
               TANYA VIA WHATSAPP
               <Zap className="w-4 h-4 text-blue-500 fill-blue-500" />
             </a>
             <p className="mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Fast Response: 09:00 - 21:00 WIB</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
