import prisma from "./prisma";

// CRUD

// READ

export async function getAllProducts() {
  return await prisma.product.findMany();
}

export async function getProductById(id: string) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

// get last 5 products
export async function getLastProducts() {
  return await prisma.product.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });
}
