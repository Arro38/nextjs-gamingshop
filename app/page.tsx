import CardList from "@/components/CardList";
import Filter from "@/components/Filter/Filter";
import HeroSection from "@/components/HeroSection";
import { MyPagination } from "@/components/MyPagination";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* <MyBreadcrumb /> */}
      <div className="flex flex-wrap space-x-4 my-6 justify-center  items-center">
        <Filter max={200} />
        <CardList />
      </div>
    </>
  );
}
