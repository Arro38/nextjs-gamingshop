"use client";
import { useFilterStore } from "@/store/filterStore";
import { useOrderStore } from "@/store/orderStore";
import { useEffect } from "react";
import { useStore } from "zustand";

function ResetBasket() {
  // reset zustand : clearProducts and clearFilter

  const { clearProducts } = useStore(useOrderStore, (state) => state);
  const { clearFilter } = useStore(useFilterStore, (state) => state);

  useEffect(() => {
    clearProducts();
    clearFilter();
  }, [clearProducts, clearFilter]);

  return null;
}

export default ResetBasket;
