import CardList from "@/components/CardList";
import Filter from "@/components/Filter/Filter";
import { getAllCategories } from "@/prisma/categories";
import { getAllPlatforms } from "@/prisma/platform";

export default async function Home() {
  const categories = await getAllCategories();
  const plateforms = await getAllPlatforms();
  return (
    <div className="my-6 flex flex-col flex-wrap space-x-3 lg:flex-row">
      <Filter categories={categories} plateforms={plateforms} />
      <CardList />
    </div>
  );
}
