import CardList from "@/components/CardList";
import Filter from "@/components/Filter/Filter";
import HeroSection from "@/components/HeroSection";
import { getLastSlides } from "@/prisma/slides";

export default async function About() {
  const slides = await getLastSlides(3);
  return (
    <div className="my-6 flex flex-col ">
      <HeroSection slides={slides} />
    </div>
  );
}
