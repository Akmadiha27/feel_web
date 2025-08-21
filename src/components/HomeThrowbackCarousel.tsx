"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export type CarouselItem =
  | { type: "youtube"; id: string; title?: string }
  | { type: "image"; src: string; alt: string };

export default function HomeThrowbackCarousel({ items }: { items: CarouselItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const iframesRef = useRef<HTMLIFrameElement[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  // Try to set 2x playback rate on all YouTube iframes using the postMessage API
  useEffect(() => {
    const applyPlaybackRate = () => {
      iframesRef.current.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "setPlaybackRate", args: [2] }),
            "*"
          );
        } catch {}
      });
    };

    const timer = setInterval(applyPlaybackRate, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10" ref={emblaRef}>
      <div className="flex">
        {items.map((item, idx) => (
          <div key={idx} className="min-w-0 flex-[0_0_100%] p-2">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black/5 dark:bg-white/10">
              {item.type === "youtube" ? (
                <iframe
                  ref={(el) => {
                    if (el) iframesRef.current[idx] = el;
                  }}
                  title={item.title || `Video ${idx + 1}`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=1&loop=1&playlist=${item.id}&controls=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                />
              ) : (
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-black/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-black transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
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


