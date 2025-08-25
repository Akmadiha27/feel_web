"use client";

import Image from "next/image";
import { useState } from "react";

export default function SimpleCarousel({
  images,
  className = "",
  imageClassName = "object-contain",
  heightClass = "h-64 sm:h-80",
}: {
  images: string[];
  className?: string;
  imageClassName?: string;
  heightClass?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <div className={`relative w-full ${heightClass}`}>
          <Image
            src={images[currentIndex]}
            alt={`Highlight ${currentIndex + 1}`}
            fill
            className={imageClassName}
          />
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
        aria-label="Previous slide"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
        aria-label="Next slide"
      >
        ▶
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === idx ? "bg-purple-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
