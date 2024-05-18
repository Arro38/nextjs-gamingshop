import { Product } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface OrderState {
  products: { product: Product; quantity: number }[];
  addProduct: (product: Product, quantity: number) => void;
  removeProduct: (productId: string) => void;
  clearProducts: () => void;
}

export const useOrderStore = create(
  persist<OrderState>(
    (set, get) => ({
      products: [],
      addProduct: (product, quantity) => {
        const products = get().products;
        const productIndex = products.findIndex(
          (p) => p.product.id === product.id
        );
        if (productIndex === -1) {
          set({ products: [...products, { product, quantity }] });
        } else {
          products[productIndex].quantity += quantity;
          set({ products });
        }
      },
      removeProduct: (productId) => {
        const products = get().products;
        const productIndex = products.findIndex(
          (p) => p.product.id === productId
        );
        if (productIndex !== -1) {
          products.splice(productIndex, 1);
          set({ products });
        }
      },
      clearProducts: () => set({ products: [] }),
    }),
    {
      name: "order-storage",
    }
  )
);
