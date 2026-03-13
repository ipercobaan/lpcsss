
import React, { useState, useEffect } from 'react';

const activities = [
  "Seseorang dari Jakarta baru saja mengamankan slot Founding Member!",
  "User dari Surabaya baru saja aktifasi lisensi Lifetime.",
  "Slot Founding Member tersisa 78 lagi!",
  "Seseorang dari Bandung baru saja bergabung di Grup Support.",
  "User dari Medan baru saja mengklaim Bonus 50+ Apps.",
  "Pendaftar dari Makassar baru saja divalidasi.",
  "Seseorang dari Semarang baru saja mengamankan Promo Akhir Tahun.",
  "User dari Bali baru saja join Komunitas Blackframe.",
  "Baru saja terjual: 1 Lisensi Founding Member v1.0",
  "Seseorang dari Palembang baru saja join grup mentoring.",
  "User dari Yogyakarta baru saja aktifasi akses Lifetime.",
  "Slot Founding Member tersisa 76 lagi! Amankan sekarang.",
  "Seseorang dari Malang baru saja konsultasi via WhatsApp.",
  "User dari Balikpapan baru saja masuk ke Dashboard Member.",
  "Seseorang dari Tangerang baru saja mengunggah konfirmasi bayar.",
  "User dari Lampung baru saja mengklaim Special Anniversary Pack.",
  "Seseorang dari Manado baru saja join grup diskusi eksklusif.",
  "User dari Bekasi baru saja mendapatkan akses Master Engine.",
  "Baru saja aktif: 1 Lisensi Lifetime oleh User di Pekanbaru.",
  "Seseorang dari Samarinda baru saja mengamankan slot terbatas.",
  "User dari Banjarmasin baru saja bergabung dengan 100+ member lainnya.",
  "Slot Founding Member tersisa 75 lagi! Hampir habis.",
  "Seseorang dari Denpasar baru saja aktifasi lisensi v1.0.",
  "User dari Gorontalo baru saja klaim bonus 127 Master LUTs.",
  "Seseorang dari Jayapura baru saja join sebagai Founding Member.",
  "User dari Batam baru saja divalidasi oleh admin.",
  "Seseorang dari Mataram baru saja mengamankan harga promo 149rb.",
  "User dari Pontianak baru saja aktifasi akses penuh.",
  "Seseorang dari Jambi baru saja masuk ke list prioritas.",
  "Baru saja terjual: Slot Founding Member ke-26."
];

const LiveActivity: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [timeAgo, setTimeAgo] = useState("Baru saja");

  useEffect(() => {
    const showNotification = () => {
      // Pick a random activity
      const randomIdx = Math.floor(Math.random() * activities.length);
      setCurrentText(activities[randomIdx]);
      
      // Randomize "time ago" for realism
      const times = ["Baru saja", "1m yang lalu", "2m yang lalu", "Beberapa detik lalu"];
      setTimeAgo(times[Math.floor(Math.random() * times.length)]);
      
      setIsVisible(true);

      // Hide after 6 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    // Initial delay
    const initialTimer = setTimeout(showNotification, 4000);

    // Set interval for subsequent notifications
    const interval = setInterval(() => {
      showNotification();
    }, 12000); // Show every 12 seconds for faster rotation

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-28 left-4 md:left-8 z-[100] animate-fade-in pointer-events-none">
      <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center gap-4 max-w-[320px] border-l-4 border-l-blue-500">
        <div className="relative shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-500/20">
            B
          </div>
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
        </div>
        <div>
          <div className="flex justify-between items-center gap-3 mb-1">
            <p className="text-[9px] text-blue-400 uppercase font-black tracking-widest leading-tight">Live Community</p>
            <p className="text-[8px] text-white/30 font-bold uppercase">{timeAgo}</p>
          </div>
          <p className="text-[11px] font-bold text-white leading-snug italic tracking-tight">{currentText}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveActivity;
