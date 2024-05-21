import { ContactUs } from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import { getLastSlides } from "@/prisma/slides";
import Head from "next/head";

export default async function About() {
  const slides = await getLastSlides(3);
  return (
    <div className="my-6 flex flex-col ">
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <HeroSection slides={slides} />
      <ContactUs />
    </div>
  );
}
