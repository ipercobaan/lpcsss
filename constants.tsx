
import { Product, PaymentMethod } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'lifetime-master-blackframe',
    name: 'Blackframe Studio - Special Akhir Tahun',
    description: 'Engine Pembuatan Video Otomatis. Akses Lifetime Tanpa Biaya Langganan.',
    price: 149000,
    originalPrice: 2500000,
    features: [
      'Akses Semua Fitur AI Automation',
      'Live atau Post Youtube & Facebook',
      'Paste Editor & Auto Clipper',
      'Lisensi Lifetime (Sekali Bayar)',
      'Update Gratis Selamanya',
      'Grup Support Eksklusif'
    ],
    isPopular: true
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'qris',
    bankName: 'QRIS (All Payment)',
    accountHolder: 'BLACKFRAME STUDIO',
    accountNumber: 'SCAN_QR_CODE',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg',
    qrisImageUrl: 'https://i.ibb.co.com/B2Vgqxm1/d7b2e0d8-b042-43d1-84cd-dd3747aa1d28.jpg'
  },
  {
    id: 'bca',
    bankName: 'Bank BCA',
    accountHolder: 'FAISAL',
    accountNumber: '2781940820',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png'
  },
  {
    id: 'dana',
    bankName: 'DANA',
    accountHolder: 'FAISAL',
    accountNumber: '0895703068960',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1200px-Logo_dana_blue.svg.png'
  },
  {
    id: 'gopay',
    bankName: 'GOPAY',
    accountHolder: 'FAISAL',
    accountNumber: '0895703068960',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png'
  }
];
