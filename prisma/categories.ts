import prisma from "./prisma";

//READ
export async function getAllCategories() {
  return await prisma.category.findMany();
}
export async function getCategoryById(id: string) {
  return await prisma.category.findUnique({
    where: { id },
  });
}
