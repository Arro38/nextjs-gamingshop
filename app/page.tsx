import CardList from "@/components/CardList";
import Filter from "@/components/Filter/Filter";
import HeroSection from "@/components/HeroSection";
import { getAllCategories } from "@/prisma/categories";
import { getAllPlatforms } from "@/prisma/platform";

export default async function Home() {
  const categories = await getAllCategories();
  const plateforms = await getAllPlatforms();
  return (
    <>
      <HeroSection />
      <div className="flex flex-wrap space-x-4 my-6  items-center">
        <Filter categories={categories} plateforms={plateforms} />
        <CardList />
      </div>
    </>
  );
}
