
import React, { useState, useRef } from 'react';
import { Product, PaymentMethod } from '../types';
import { PAYMENT_METHODS } from '../constants';

interface PaymentModalProps {
  product: Product;
  onClose: () => void;
}

// User-provided API Key for ImgBB
const IMGBB_API_KEY = 'd20dca4a84431fd910d7baf486afcd8d';
const WHATSAPP_NUMBER = '6282124335700';

const PaymentModal: React.FC<PaymentModalProps> = ({ product, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [copied, setCopied] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setReceiptUrl(data.data.url);
      } else {
        alert('Gagal mengupload gambar. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Terjadi kesalahan saat mengupload. Coba file yang lebih kecil.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirm = () => {
    if (!selectedMethod) return;
    
    const message = encodeURIComponent(
      `Halo Blackframe Studio! Saya ingin konfirmasi pembayaran Special Akhir Tahun.\n\n` +
      `👤 Nama: ${userName || 'Customer'}\n` +
      `📦 Produk: ${product.name}\n` +
      `💰 Total: IDR ${product.price.toLocaleString()}\n` +
      `💳 Metode: ${selectedMethod.bankName}\n` +
      `🖼️ Bukti Bayar: ${receiptUrl || 'Terlampir di chat'}\n\n` +
      `Mohon segera aktifkan akses engine saya. Terima kasih!`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[3rem] shadow-[0_0_100px_rgba(59,130,246,0.1)] overflow-hidden animate-scale-up">
        
        <div className="p-8 border-b border-white/5 bg-white/5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-black tracking-tighter mb-1 uppercase italic">
                CHECKOUT <span className="text-blue-500">ENGINE</span>
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full border border-red-500/30">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black uppercase text-red-400">Special Akhir Tahun</span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 mb-8">
            <h4 className="font-black text-xl mb-2 italic tracking-tight">{product.name}</h4>
            <div className="flex justify-between items-center">
               <span className="text-xs text-white/30 line-through">IDR {product.originalPrice?.toLocaleString()}</span>
               <span className="text-3xl font-black text-white">IDR {product.price.toLocaleString()}</span>
            </div>
          </div>

          {!selectedMethod ? (
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4 block">1. Masukkan Nama Lengkap</label>
                <input 
                  type="text" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Nama Lengkap Anda"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-all font-bold text-lg"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4 block">2. Pilih Metode Pembayaran</label>
                <div className="grid gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method)}
                      className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all text-left group"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-10 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                          <img src={method.logoUrl} alt={method.bankName} className="max-h-full max-w-full object-contain" />
                        </div>
                        <span className="font-black italic text-lg uppercase">{method.bankName}</span>
                      </div>
                      <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in space-y-8">
              <button onClick={() => setSelectedMethod(null)} className="text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                Ganti Metode
              </button>
              
              <div className="p-8 rounded-[2.5rem] border border-white/10 bg-white/5">
                {selectedMethod.qrisImageUrl ? (
                  <div className="flex flex-col items-center gap-6">
                    <div className="bg-white p-4 rounded-3xl shadow-2xl">
                      <img 
                        src={selectedMethod.qrisImageUrl} 
                        alt="QRIS Code" 
                        className="w-full max-w-[280px] h-auto object-contain rounded-xl"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-black uppercase text-white mb-1">PINDAI KODE QRIS</p>
                      <p className="text-[10px] text-white/40 font-bold tracking-widest uppercase">Mendukung Semua Bank & E-Wallet</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                       <label className="text-[9px] text-white/40 uppercase font-black tracking-widest block mb-2">Nama Pemilik</label>
                       <p className="text-xl font-black uppercase text-white">{selectedMethod.accountHolder}</p>
                    </div>
                    <div>
                       <label className="text-[9px] text-white/40 uppercase font-black tracking-widest block mb-2">Nomor Rekening</label>
                       <div className="flex items-center justify-between gap-4 p-5 bg-black/40 rounded-2xl border border-white/5">
                          <p className="text-2xl font-black text-blue-400 font-mono">{selectedMethod.accountNumber}</p>
                          <button onClick={() => handleCopy(selectedMethod.accountNumber)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                            {copied ? 'Copied!' : 'Salin'}
                          </button>
                       </div>
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block">3. Upload Bukti Transfer</label>
                <div onClick={() => !isUploading && fileInputRef.current?.click()} className={`relative p-10 border-2 border-dashed rounded-[2.5rem] transition-all cursor-pointer flex flex-col items-center justify-center gap-4 ${receiptUrl ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 bg-white/5 hover:border-blue-500/50'}`}>
                  <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                  {isUploading ? (
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : receiptUrl ? (
                    <span className="text-[10px] font-black uppercase text-green-400 text-center">BUKTI TERUPLOAD!<br/><span className="text-[8px] opacity-60">Klik untuk ganti</span></span>
                  ) : (
                    <span className="text-[10px] font-black uppercase text-white/40 text-center">Klik untuk upload bukti bayar</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 bg-black/50 border-t border-white/5">
          <button 
            disabled={!selectedMethod || !userName || isUploading}
            onClick={handleConfirm}
            className={`w-full py-7 rounded-[2rem] font-black uppercase italic text-xl flex items-center justify-center gap-3 transition-all ${selectedMethod && userName && !isUploading ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-500 active:scale-95' : 'bg-white/5 text-white/10 cursor-not-allowed'}`}
          >
            {isUploading ? 'MENGUPLOAD...' : 'KONFIRMASI VIA WHATSAPP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
