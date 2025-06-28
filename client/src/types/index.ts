
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  benefits: string[];
  ingredients?: string[];
  usage?: string;
  stock: number;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  concernDetails: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  consultations: ConsultationHistory[];
  orders: OrderHistory[];
}

export interface ConsultationHistory {
  id: string;
  date: string;
  time: string;
  doctorName: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface OrderHistory {
  id: string;
  date: string;
  products: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  trackingId?: string;
}