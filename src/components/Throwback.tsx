"use client";

import Image from "next/image";
import { throwbackGallery } from "@/data";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function Throwback() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="throwback" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Throwback</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-black/10 dark:border-white/10" ref={emblaRef}>
          <div className="flex">
            {throwbackGallery.map((item) => (
              <div key={item.id} className="shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 aspect-video relative">
                {item.type === "image" ? (
                  <Image src={item.src} alt="Throwback" fill className="object-cover" />
                ) : (
                  <video src={item.src} controls className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


