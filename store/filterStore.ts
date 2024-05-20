import { Category, Plateform } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FilterState {
  filter: {
    search: string;
    maxPrice: number;
    categories: Category[];
    platforms: Plateform[];
  };
  clearFilter: () => void;
  setSearch: (search: string) => void;
  setMaxPrice: (maxPrice: number) => void;
  setCategories: (categories: Category[]) => void;
  setPlatforms: (platforms: Plateform[]) => void;
}

export const useFilterStore = create(
  persist<FilterState>(
    (set, get) => ({
      filter: {
        search: "",
        maxPrice: 1000,
        categories: [],
        platforms: [],
      },
      clearFilter: () =>
        set({
          filter: {
            search: "",
            maxPrice: 1000,
            categories: [],
            platforms: [],
          },
        }),
      setSearch: (search: string) =>
        set((state) => ({ filter: { ...state.filter, search } })),
      setMaxPrice: (maxPrice: number) =>
        set((state) => ({ filter: { ...state.filter, maxPrice } })),
      setCategories: (categories: Category[]) =>
        set((state) => ({ filter: { ...state.filter, categories } })),
      setPlatforms: (platforms: Plateform[]) =>
        set((state) => ({ filter: { ...state.filter, platforms } })),
    }),
    {
      name: "filter-storage",
    }
  )
);
