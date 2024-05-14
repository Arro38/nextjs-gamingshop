"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative mx-8 box-border bg-secondary rounded-md shadow-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className=" p-8">
                  <Link href={_.url}>
                    <AspectRatio ratio={16 / 9} className="">
                      <Image
                        src={_.imageUrl}
                        alt={_.alt}
                        fill
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                    {/* <Image
                      src={_.imageUrl}
                      alt={_.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-md p-4"
                    /> */}
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const slides: {
  url: string;
  imageUrl: string;
  alt: string;
}[] = [
  {
    url: "/jeux/cyberpunk",
    imageUrl: "http://videodrive.fr/textind/s2001.jpg",
    alt: "Cyberpunk",
  },
  {
    url: "/jeux/assassins-creed",
    imageUrl: "http://videodrive.fr/textind/s2002.jpg",
    alt: "Assassins Creed",
  },
];
