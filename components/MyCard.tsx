import { cn } from "@/lib/utils";
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
          className={cn(
            "object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </Link>
    </div>
  );
}

export default MyCard;
