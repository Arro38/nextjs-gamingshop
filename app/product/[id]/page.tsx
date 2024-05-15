import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/lib/data";
import Image from "next/image";

function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: Product = products[0];
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
          {product.plateform.name}- {product.category.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center gap-4">
          <Image
            src={product.cover}
            alt={product.name}
            width={400}
            height={600}
            className=" object-cover"
          />
          <div className="max-w-md space-y-4">
            <p>{product.description}</p>
            <p className="font-bold">{product.price} €</p>
            <Button>Ajouter au panier</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default ProductPage;
