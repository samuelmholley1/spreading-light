export type ShirtColor = 'navy' | 'black';
export type BleachColor = 'pastel-orange' | 'vibrant-tan';
export type DesignCategory = 'pop-culture' | 'cannabis-nature' | 'abstract' | 'custom';
export type ShirtSize = 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: DesignCategory;
  price: number;
  images: {
    main: string;
    gallery: string[];
  };
  availableSizes: ShirtSize[];
  availableShirtColors: ShirtColor[];
  bleachColor: BleachColor;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export interface CartItem {
  productId: string;
  size: ShirtSize;
  shirtColor: ShirtColor;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shipping: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}
