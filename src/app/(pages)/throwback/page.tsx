"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

function Carousel({ items }: { items: { src: string; alt: string; type?: "image" | "video" }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((it, idx) => (
          <div key={idx} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_100%] p-2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black/5 dark:bg-white/10">
              {it.type === "video" ? (
                <video src={it.src} className="w-full h-full object-cover" controls />
              ) : (
                <Image src={it.src} alt={it.alt} fill className="object-cover" />
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-black/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-black/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function ThrowbackPage() {
  const carousel1 = [
    { src: "/throwback/t1.svg", alt: "Throwback 1", type: "image" },
    { src: "/throwback/t2.svg", alt: "Throwback 2", type: "image" },
    { src: "/throwback/t3.svg", alt: "Throwback 3", type: "image" },
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Throwback 4", type: "video" },
    { src: "/throwback/t1.svg", alt: "Throwback 5", type: "image" }
  ];
  const carousel2 = [
    { src: "/throwback/t2.svg", alt: "Throwback 6", type: "image" },
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Throwback 7", type: "video" },
    { src: "/throwback/t3.svg", alt: "Throwback 8", type: "image" },
    { src: "/throwback/t1.svg", alt: "Throwback 9", type: "image" },
    { src: "/throwback/t2.svg", alt: "Throwback 10", type: "image" }
  ];
  const carousel3 = [
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Throwback 11", type: "video" },
    { src: "/throwback/t1.svg", alt: "Throwback 12", type: "image" },
    { src: "/throwback/t2.svg", alt: "Throwback 13", type: "image" },
    { src: "/throwback/t3.svg", alt: "Throwback 14", type: "image" },
    { src: "https://www.w3schools.com/html/mov_bbb.mp4", alt: "Throwback 15", type: "video" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Throwback</h1>
      <div className="mt-8 space-y-10">
        <Carousel items={carousel1} />
        <Carousel items={carousel2} />
        <Carousel items={carousel3} />
      </div>
    </div>
  );
}


