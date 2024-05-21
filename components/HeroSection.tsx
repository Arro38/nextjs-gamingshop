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
import { AspectRatio } from "./ui/aspect-ratio";
import { Slide } from "@prisma/client";

export default function HeroSection({ slides }: { slides: Slide[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative mx-8 box-border rounded-md bg-secondary shadow-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative p-8">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={_.cover}
                      alt={_.title}
                      fill
                      className="rounded-md object-cover"
                    />
                    <h2 className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-2xl font-bold text-white">
                      {_.title}
                    </h2>
                  </AspectRatio>
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
