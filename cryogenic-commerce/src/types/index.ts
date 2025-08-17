export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  images: string[];
  specifications: ProductSpecification[];
  inStock: boolean;
  stockQuantity: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
  unit?: string;
}

export type ProductCategory = 
  | 'storage-tanks'
  | 'dewars'
  | 'transfer-systems'
  | 'valves-fittings'
  | 'safety-equipment'
  | 'instrumentation'
  | 'accessories';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  customerInfo: CustomerInfo;
  shippingAddress: Address;
  billingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ProductFilter {
  categories: ProductCategory[];
  priceRange: [number, number];
  temperatureRange: [number, number];
  pressureRange: [number, number];
  inStock: boolean;
}

export interface SortOption {
  label: string;
  value: string;
  direction: 'asc' | 'desc';
}