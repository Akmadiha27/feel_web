"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { partners } from "@/data";

export default function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="partners" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Partners</h2>
        <div className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {partners.map((p) => (
              <div key={p.id} className="shrink-0 grow-0 basis-40 h-20 relative grayscale opacity-80">
                <Image src={p.logo} alt={p.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


