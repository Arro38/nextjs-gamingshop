import { ContactUs } from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import { getLastSlides } from "@/prisma/slides";

export default async function About() {
  const slides = await getLastSlides(3);
  return (
    <div className="my-6 flex flex-col">
      <HeroSection slides={slides} />
      <div className="my-4 flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col md:w-1/2 ">
          <h2 className="text-4xl font-bold text-primary">Qui sommes-nous ?</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptatum, quas, quia, quod doloremque quibusdam iusto dolorum
            dolorem ad quae atque. Quisquam, voluptates. Quisquam, voluptates.
            Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi voluptatum, quas, quia, quod doloremque
            quibusdam iusto dolorum dolorem ad quae atque. Quisquam, voluptates.
            Quisquam, voluptates. Quisquam, voluptates. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi voluptatum, quas, quia,
            quod doloremque quibusdam iusto dolorum dolorem ad quae atque.
            Quisquam, voluptates. Quisquam, voluptates. Quisquam, voluptates.
          </p>
        </div>

        <ContactUs />
      </div>
    </div>
  );
}
