import Image from "next/image";
import { speakers } from "@/data";

export default function SpeakersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      {/* Page Heading */}
      <h1 className="text-3xl font-semibold tracking-tight">Speakers</h1>

      {/* Coming Soon Section */}
      <div className="max-w-4xl mx-auto mb-8 mt-8">
        <div className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-12 border border-black/10 dark:border-white/10 text-center">
          <div className="text-6xl mb-4">🎤</div>
          <h3 className="text-2xl font-bold text-black/90 dark:text-white/90 mb-4">
            Coming Soon
          </h3>
          <p className="text-lg text-black/70 dark:text-white/70 mb-6">
          Get inspired by the best — leaders, innovators, and change-makers.
          </p>
          {/* <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-6 py-3 transition-colors text-md font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Book Your Stall
          </a> */}
        </div>
      </div>

      {/* Speakers Carousel Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
          Previous Speakers
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-slow">
              {[
                "/speakers/1.svg", "/speakers/2.svg", "/speakers/3.svg",
                "/speakers/4.svg", "/speakers/5.svg", "/speakers/6.svg",
                "/speakers/7.svg", "/speakers/8.svg", "/speakers/9.svg",
                "/speakers/10.svg", "/speakers/11.svg", "/speakers/12.svg",
                "/speakers/13.svg", "/speakers/14.svg", "/speakers/15.svg",
                "/speakers/16.svg", "/speakers/17.svg", "/speakers/18.svg",
              ].map((speaker, index) => (
                <div key={index} className="flex-shrink-0 h-50">
                  <img
                    src={speaker}
                    alt={`Speaker ${index + 1}`}
                    className="h-56 w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Register CTA Section */}
      <section
        className="py-10 text-center bg-gradient-to-r from-[#ffd5ac]/20 via-[#70c7d9]/20 to-[#9174ea]/20 mt-16"
        aria-labelledby="final-register"
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
      </section>
    </div>
  );
}
