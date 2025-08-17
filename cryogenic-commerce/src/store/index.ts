import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, CustomerInfo, Address, ProductFilter } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

interface CheckoutStore {
  customerInfo: CustomerInfo | null;
  shippingAddress: Address | null;
  billingAddress: Address | null;
  setCustomerInfo: (info: CustomerInfo) => void;
  setShippingAddress: (address: Address) => void;
  setBillingAddress: (address: Address) => void;
  clearCheckout: () => void;
}

interface ProductStore {
  searchTerm: string;
  filters: ProductFilter;
  sortBy: string;
  setSearchTerm: (term: string) => void;
  setFilters: (filters: Partial<ProductFilter>) => void;
  setSortBy: (sort: string) => void;
  clearFilters: () => void;
}

interface AdminStore {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          return {
            items: [...state.items, { product, quantity }]
          };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.product.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (set) => ({
      customerInfo: null,
      shippingAddress: null,
      billingAddress: null,
      setCustomerInfo: (info) => set({ customerInfo: info }),
      setShippingAddress: (address) => set({ shippingAddress: address }),
      setBillingAddress: (address) => set({ billingAddress: address }),
      clearCheckout: () => set({ 
        customerInfo: null, 
        shippingAddress: null, 
        billingAddress: null 
      })
    }),
    {
      name: 'checkout-storage',
    }
  )
);

export const useProductStore = create<ProductStore>()((set) => ({
  searchTerm: '',
  filters: {
    categories: [],
    priceRange: [0, 200000],
    temperatureRange: [-200, 100],
    pressureRange: [0, 10],
    inStock: false
  },
  sortBy: 'name-asc',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilters: (filters) => set((state) => ({ 
    filters: { ...state.filters, ...filters } 
  })),
  setSortBy: (sort) => set({ sortBy: sort }),
  clearFilters: () => set({
    searchTerm: '',
    filters: {
      categories: [],
      priceRange: [0, 200000],
      temperatureRange: [-200, 100],
      pressureRange: [0, 10],
      inStock: false
    },
    sortBy: 'name-asc'
  })
}));

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (username, password) => {
        // Simple demo authentication
        if (username === 'admin' && password === 'cryotech2024') {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false })
    }),
    {
      name: 'admin-storage',
    }
  )
);