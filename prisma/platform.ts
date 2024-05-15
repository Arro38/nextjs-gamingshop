import prisma from "./prisma";

//READ all plateformsasp

export async function getAllPlatforms() {
  return await prisma.plateform.findMany();
}
export async function getPlatformById(id: string) {
  return await prisma.plateform.findUnique({
    where: { id },
  });
}
