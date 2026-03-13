
import React, { useState } from 'react';

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
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">
            FREQUENTLY ASKED <span className="text-blue-500">QUESTIONS</span>
          </h2>
          <p className="text-gray-500 font-medium italic">Semua yang perlu Anda ketahui sebelum bergabung.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-3xl transition-all duration-300 ${
                openIndex === i ? 'bg-white/5 border-blue-500/50' : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold italic uppercase tracking-tight transition-colors ${openIndex === i ? 'text-blue-400' : 'text-white'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-blue-500 text-white rotate-180' : 'bg-white/5 text-white/40'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 text-center">
           <p className="text-sm font-bold text-gray-300 mb-6">Masih punya pertanyaan lain?</p>
           <a 
            href="https://wa.me/6282124335700?text=Halo%20Blackframe%20Studio!%20Saya%20ingin%20tanya%20lebih%20lanjut%20tentang%20engine%20ini."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest italic hover:bg-blue-500 hover:text-white transition-all active:scale-95"
           >
             TANYA VIA WHATSAPP
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207L6.233 18l2.954-1.022c.887.49 1.841.749 2.844.75h.003c3.181 0 5.769-2.587 5.77-5.767 0-3.18-2.588-5.766-5.773-5.789zm0 10.43c-.911 0-1.808-.247-2.589-.714l-.186-.11-1.925.666.678-1.876-.121-.193c-.513-.819-.784-1.765-.783-2.736 0-2.53 2.06-4.589 4.591-4.589 1.226 0 2.378.477 3.245 1.344s1.343 2.021 1.343 3.247c0 2.531-2.059 4.591-4.593 4.591z"/></svg>
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
