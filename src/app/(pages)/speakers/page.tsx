import Image from "next/image";
import { speakers } from "@/data";

export default function SpeakersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      {/* Page Heading */}
      <h1 className="text-3xl font-semibold tracking-tight">Speakers</h1>

      {/* Current Speakers Section */}
      <div className="mt-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8 text-center">Current Speakers</h2>
        
        {/* Speakers Grid - responsive columns */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-start justify-items-center mb-16">
          {[
            { src: "/speak/sp1.png", alt: "Speaker 1", name: "Sri Jayesh Ranjan, IAS", designation: "IAS Officer" },
            { src: "/speak/sp2.png", alt: "Speaker 2", name: "Amer ali khan", designation: "Director Siasat Daily" },
            { src: "/speak/sp3.png", alt: "Speaker 3", name: "Piyush Agarwal", designation: "Head BM, Sattva group" },
            { src: "/speak/sp4.png", alt: "Speaker 4", name: "Meraj Faheem", designation: "CEO TGIC" },
            { src: "/speak/sp5.png", alt: "Speaker 5", name: "Kavikrut", designation: "CEO, T Hub" },
            { src: "/speak/sp6.png", alt: "Speaker 6", name: "Sita Pallacholla", designation: "CEO ,WE Hub" },
            { src: "/speak/sp7.png", alt: "Speaker 7", name: "Joginder Tanikella", designation: "CEO , T Works" },
            { src: "/speak/sp8.png", alt: "Speaker 8", name: "Kiran Maverick", designation: "Founder, The August Fest" },
            { src: "/speak/sp9.png", alt: "Speaker 9", name: "Vamshi Muthyapu", designation: "CEO - CSR Summit" },
            { src: "/speak/sp10.png", alt: "Speaker 10", name: "Sudhanshu Bhardwaj", designation: "General Manager, knowledge city" },
            { src: "/speak/sp11.png", alt: "Speaker 11", name: "Mohammed Abdul Mohsi ", designation: "Managing Director, Pista House" },
            { src: "/speak/sp12.png", alt: "Speaker 12", name: "Speaker Name", designation: "Designation" },
            { src: "/speak/sp13.png", alt: "Speaker 13", name: "K M Fasihuddin ", designation: " Director at Madina High School" },
            { src: "/speak/sp14.png", alt: "Speaker 14", name: "Vikas Katragadda", designation: "Co-founder , NandiVentures" },
            //{ src: "/speak/sp15.png", alt: "Speaker 15", name: "Abrar Khan", designation: "Creator , Hyderabad" },
            { src: "/speak/sp16.png", alt: "Speaker 16", name: "Zara Siddiqui", designation: "Counselling Psychologist" },
            { src: "/speak/sp17.png", alt: "Speaker 17", name: "Mohammed Fayaz", designation: "Founder, Triumphs of Talent" },
            { src: "/speak/sp18.png", alt: "Speaker 18", name: "Dr. Mohammed Faisal", designation: "Pulmonologist,Kingston Hospital" },
            { src: "/speak/sp19.png", alt: "Speaker 19", name: "Dr. K Syed Akram ", designation: "Radiation Oncologist " },
            { src: "/speak/sp20.png", alt: "Speaker 20", name: "Rashi Srivastava", designation: "Cheif Digital officer, Qentelli" },
          ].map((speaker, index) => (
            <div key={index} className="w-full max-w-[12rem] text-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-3 sm:mb-4 shadow-lg">
                <Image 
                  src={speaker.src} 
                  alt={speaker.alt} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="space-y-1 px-1">
                <h3 className="text-base sm:text-lg font-bold text-black dark:text-white leading-snug">{speaker.name}</h3>
                <p className="text-xs sm:text-sm text-black/70 dark:text-white/70">{speaker.designation}</p>
              </div>
            </div>
          ))}
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
