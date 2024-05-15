import { getAllProducts, getProductById } from "@/prisma/product";

export default async function handler({ req, res }: { req: any; res: any }) {
  try {
    if (req.method === "GET") {
      if (req.query.id) {
        const product = await getProductById(req.query.id);
        return res.status(200).json(product);
      }
      const products = await getAllProducts();
      return res.status(200).json(products);
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
}
