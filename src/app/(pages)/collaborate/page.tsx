"use client";
import { useState } from "react";
import Image from "next/image";

export default function VolunteerPage() {
  const images = [
    "/carausal/group/g6.JPG",
    "/carausal/group/g5.JPG",
    "/carausal/group/g4.JPG",
    "/carausal/group/g1.jpg",
    "/carausal/group/g2.jpg",
    "/carausal/group/g3.jpg",
    "/carausal/group/g7.jpg",
    "/carausal/group/g8.jpg",
    "/carausal/audience/a1.JPG",
    "/carausal/audience/a3.JPG",
    "/carausal/audience/a15.JPG",
    "/carausal/audience/a13.JPG",
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
      {/* Volunteer page content commented out */}
      {/* <div className="mt-8 max-w-4xl mx-auto">
        <div className="bg-white/95 dark:bg-gray-800/95 shadow-md rounded-lg p-8 border border-black/10 dark:border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Volunteer Team</h2>
            <p className="text-lg text-black/70 dark:text-white/70">
              Help us create an impactful mental health awareness event while
              gaining valuable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Event Support",
                desc: "Help with event coordination, registration, and participant support during FEEL.",
              },
              {
                title: "Community Outreach",
                desc: "Assist with social media, marketing, and community engagement activities.",
              },
              {
                title: "Logistics",
                desc: "Support with venue setup, materials preparation, and event day operations.",
              },
              {
                title: "Content Creation",
                desc: "Help create engaging content for social media, newsletters, and promotional materials.",
              },
            ].map((role, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 213, 172, 0.1), rgba(112, 199, 217, 0.1), rgba(145, 116, 234, 0.1), rgba(239, 178, 217, 0.1))",
                }}
              >
                <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                <p className="text-black/70 dark:text-white/70">{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="http://bit.ly/4kPKaEJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Apply to Volunteer
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 relative max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-lg">
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src={images[currentIndex]}
              alt={`Stall Highlight ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
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
            />
          ))}
        </div>
      </div>

      <section
        className="py-16 text-center mt-16"
        aria-labelledby="final-register"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 213, 172, 0.15), rgba(112, 199, 217, 0.15), rgba(145, 116, 234, 0.15), rgba(239, 178, 217, 0.15))",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="final-register"
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Still thinking? Just join us — and truly FEEL it.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            Register Here
          </h3>
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-8 py-4 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </section> */}
      
      {/* Page temporarily unavailable message */}
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Page Coming Soon</h1>
        <p className="text-lg text-gray-600">This page is temporarily unavailable.</p>
      </div>
    </div>
  );
}
