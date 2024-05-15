import { products } from "@/lib/data";
import MyCard from "./MyCard";
import { MyPagination } from "./MyPagination";

export default function CardList() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {products.slice(0, 8).map((product) => (
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