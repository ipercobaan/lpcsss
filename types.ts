
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  isPopular?: boolean;
}

export interface PaymentMethod {
  id: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  logoUrl: string;
  note?: string;
  qrisImageUrl?: string;
}

export type PaymentStatus = 'idle' | 'pending' | 'completed';
