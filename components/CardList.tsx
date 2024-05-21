"use client";
import MyCard from "./MyCard";
import { MyPagination } from "./MyPagination";
import { useStore } from "zustand";
import { useFilterStore } from "@/store/filterStore";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";

export default function CardList() {
  const products = useSWR("/api/products", fetcher).data as Product[];
  const { filter } = useStore(useFilterStore, (state) => state);
  const { search, maxPrice, categories, platforms } = filter;
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const pageSize = 8;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(filteredProducts.length / pageSize));
    setCurrentPage(1);
  }, [filteredProducts]);

  useEffect(() => {
    if (!products) return;
    setFilteredProducts(
      products
        .filter((product) => {
          if (search) {
            return product.name.toLowerCase().includes(search.toLowerCase());
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
              (category) => product.categoryId == category.id,
            );
          }
          return true;
        })
        .filter((product) => {
          if (platforms.length) {
            return platforms.some(
              (platform) => product.plateformId == platform.id,
            );
          }
          return true;
        }),
    );
  }, [products, search, maxPrice, categories, platforms]);

  return (
    <div className="lg:w-64 lg:flex-auto">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {filteredProducts &&
          filteredProducts
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
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
      <MyPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
