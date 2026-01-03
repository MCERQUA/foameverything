'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, ProductSize } from '@/types/product';

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string, size: ProductSize) => void;
  updateQuantity: (productId: string, size: ProductSize, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'foam-everything-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cart from storage');
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = (newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const quantity = newItem.quantity || 1;

    setItems(currentItems => {
      const existingIndex = currentItems.findIndex(
        item => item.productId === newItem.productId && item.size === newItem.size
      );

      if (existingIndex > -1) {
        // Update quantity of existing item
        const updated = [...currentItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      // Add new item
      return [...currentItems, { ...newItem, quantity }];
    });

    // Open cart sidebar when item is added
    setIsOpen(true);
  };

  const removeItem = (productId: string, size: ProductSize) => {
    setItems(currentItems =>
      currentItems.filter(
        item => !(item.productId === productId && item.size === size)
      )
    );
  };

  const updateQuantity = (productId: string, size: ProductSize, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId, size);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
