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
