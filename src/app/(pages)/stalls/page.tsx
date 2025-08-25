"use client";
import { useState } from "react";
import Image from "next/image";
import { stalls } from "@/data";

export default function StallsPage() {
  const images = [
    "/carausal/stalls/s1.jpg",
    "/carausal/stalls/s5.jpg",
    "/carausal/stalls/s3.jpg",
    "/carausal/stalls/s6.jpg",
    "/carausal/stalls/s4.jpg",
    "/carausal/stalls/s2.jpg",
    "/carausal/speakers/s10.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Stalls</h1>

      {/* Coming Soon Box */}
      <div className="max-w-4xl mx-auto mt-8 mb-8">
        <div className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-12 border border-black/10 dark:border-white/10 text-center">
          <div className="text-6xl mb-4">🛍️</div>
          <h3 className="text-2xl font-bold text-black/90 dark:text-white/90 mb-4">
            Coming Soon
          </h3>
          <p className="text-lg text-black/70 dark:text-white/70">
            Get ready to experience our upcoming Interactive Stalls! Don’t miss
            your chance — book your stall today!
          </p>
        </div>
      </div>

      {/* Book Your Stall Button Section */}
      {/* <section className="py-12 text-center" aria-labelledby="home-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="https://forms.gle/fmbtFu886Ju3rxS28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-8 py-4 transition-colors text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Book Your Stall Now
          </a>
        </div>
      </section> */}

      {/* Carousel Section */}
      <div className="mt-10 relative max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-lg ">
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src={images[currentIndex]}
              alt={`Stall Highlight ${currentIndex + 1}`}
              fill
              className="object-contain "
            />
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === idx ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Final Register CTA Section */}
      <section
        className="py-16 text-center bg-gradient-to-r from-[#ffd5ac]/20 via-[#70c7d9]/20 to-[#9174ea]/20 mt-16"
        aria-labelledby="final-register"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="final-register"
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Your Business Deserves the Spotlight
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
          Book Your Stall Before It’s Gone!
          </h3>
          <a
            href="https://forms.gle/fmbtFu886Ju3rxS28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-8 py-4 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Stall Now
          </a>
        </div>
      </section>
    </div>
  );
}
