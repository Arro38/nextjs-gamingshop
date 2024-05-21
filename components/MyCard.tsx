import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MyCard({
  product,
  width,
  height,
  aspectRatio,
}: {
  product: Product;
  width: number;
  height: number;
  aspectRatio: "portrait" | "square";
}) {
  return (
    <div className="overflow-hidden rounded-md">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.cover}
          alt={product.name}
          width={width}
          height={height}
          priority={true}
          className={cn(
            "object-cover transition-all hover:scale-105",
            // aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          )}
        />
        <span className="mt-2 line-clamp-2 max-w-24 font-semibold">
          {product.name.trim()}
        </span>
      </Link>
    </div>
  );
}

export default MyCard;
