"use client";
import { Product } from "@prisma/client";
import { Button } from "./ui/button";
import { useOrderStore } from "@/store/orderStore";

export function AddBasketButton({ product }: { product: Product }) {
  const addProduct = useOrderStore((state) => state.addProduct);
  const handleClick = () => {
    addProduct(product, 1);
  };
  return <Button onClick={handleClick}>Ajouter au panier</Button>;
}
