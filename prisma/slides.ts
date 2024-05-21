import prisma from "./prisma";

//READ all plateformsasp

// export async function getAllPlatforms() {
//   return await prisma.plateform.findMany();
// }
// export async function getPlatformById(id: string) {
//   return await prisma.plateform.findUnique({
//     where: { id },
//   });
// }

export async function getLastSlides(numberOfSlides: number) {
  return await prisma.slide.findMany({
    take: numberOfSlides,
    orderBy: {
      createdAt: "desc",
    },
  });
}
