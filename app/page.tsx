import CardList from "@/components/CardList";
import Filter from "@/components/Filter/Filter";
import MyToast from "@/components/MyToast";
import ResetBasket from "@/components/ResetBasket";
import { getAllCategories } from "@/prisma/categories";
import { getAllPlatforms } from "@/prisma/platform";
import { createStripeSession } from "@/prisma/stripe_sessions";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const categories = await getAllCategories();
  const plateforms = await getAllPlatforms();
  const { status, sessionId } = searchParams;

  let showToast = false;
  let paied = false;

  if (sessionId && status) {
    paied = status === "success";
    showToast = await createStripeSession({ sessionId, paied });
  }
  return (
    <div className="my-6 flex flex-col flex-wrap space-x-3 lg:flex-row">
      <Filter categories={categories} plateforms={plateforms} />
      <CardList />
      {showToast &&
        (paied ? (
          <>
            <ResetBasket />
            <MyToast
              description="Votre commande a été payé avec succés"
              title="Paiement réussi"
            />
          </>
        ) : (
          <MyToast
            description="Votre commande a échoué"
            title="Paiement échoué"
            destructive={true}
          />
        ))}
    </div>
  );
}
