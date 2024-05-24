import prisma from "./prisma";

export async function createStripeSession({
  sessionId,
  paied,
}: {
  sessionId: string;
  paied: boolean;
}) {
  const session = await prisma.stripeSession.findFirst({
    where: {
      sessionId,
    },
  });
  if (session) {
    return false;
  }

  await prisma.stripeSession.create({
    data: {
      sessionId,
      paied,
    },
  });
  return true;
}
