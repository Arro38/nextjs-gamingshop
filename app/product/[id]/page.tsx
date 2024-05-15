import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { getCategoryById } from "@/prisma/categories";
import { getPlatformById } from "@/prisma/platform";
import { getProductById } from "@/prisma/product";
import Image from "next/image";

async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }
  const category = await getCategoryById(product.categoryId);
  const plateform = await getPlatformById(product.plateformId);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
          {plateform?.name}- {category?.name}
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
