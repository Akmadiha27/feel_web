"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(id);
  }, [emblaApi]);

  // Define each partner individually
  const partnerImages = [
    { src: "/partners/p1.png", alt: "THUB" },
    { src: "/partners/p2.png", alt: "TGIC" },
    { src: "/partners/p3.png", alt: "WE HUB" },
    { src: "/partners/p4.png", alt: "Focus Solutions" },
    { src: "/partners/p5.png", alt: "Crazy RC" },
    { src: "/partners/p6.png", alt: "Lakhotia College of Design" },
    { src: "/partners/p7.jpeg", alt: "Jauhari Jewellers" },
    { src: "/partners/p8.png", alt: "Explus" },
    { src: "/partners/p9.png", alt: "Meanbuy" },
    { src: "/partners/p10.png", alt: "Hairstory" },
    { src: "/partners/p11.png", alt: "SDIF" },
    { src: "/partners/p12.jpeg", alt: "Global Shapers Community Hyderabad" },
    { src: "/partners/p13.jpeg", alt: "KGN" },
    { src: "/partners/p14.png", alt: "Xerox" },
    { src: "/partners/p15.jpeg", alt: "The Hacking School" },
    { src: "/partners/p16.jpeg", alt: "Intellixaa" },
    { src: "/partners/p17.png", alt: "Bioreform" },
    { src: "/partners/p18.png", alt: "SuperAccountant" },
    { src: "/partners/p19.png", alt: "Mughal Constructions" },
    { src: "/partners/p20.jpeg", alt: "Pista House" },
    { src: "/partners/p21.png", alt: "Code For India Foundation Edventure Park" },
  ];

  return (
    <section id="partners" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Partners</h2>
        <div className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {partnerImages.map((partner, index) => (
              <div
                key={index}
                className="shrink-0 grow-0 basis-96 h-72 relative grayscale opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}