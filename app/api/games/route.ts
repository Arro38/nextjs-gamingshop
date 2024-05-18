import { getAllProducts, getProductById } from "@/prisma/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (id) {
      const product = await getProductById(id);
      return NextResponse.json(product, { status: 200 });
    }
    const products = await getAllProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
