"use client";
import MyCard from "./MyCard";
import { MyPagination } from "./MyPagination";
import { useStore } from "zustand";
import { useFilterStore } from "@/store/filterStore";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Product } from "@prisma/client";

export default function CardList() {
  const products = useSWR("/api/products", fetcher).data as Product[];
  const { filter } = useStore(useFilterStore, (state) => state);
  const { search, maxPrice, categories, platforms } = filter;

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {products &&
          products
            .filter((product) => {
              if (search) {
                return product.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              }
              return true;
            })
            .filter((product) => {
              if (maxPrice) {
                return product.price <= maxPrice;
              }
              return true;
            })
            .filter((product) => {
              if (categories.length) {
                return categories.some(
                  (category) => product.categoryId == category.id
                );
              }
              return true;
            })
            .filter((product) => {
              if (platforms.length) {
                return platforms.some(
                  (platform) => product.plateformId == platform.id
                );
              }
              return true;
            })
            .slice(0, 8)
            .map((product) => (
              <MyCard
                key={product.id}
                product={product}
                aspectRatio="portrait"
                width={200}
                height={300}
              />
            ))}
      </div>
      <MyPagination />
    </div>
  );
}
