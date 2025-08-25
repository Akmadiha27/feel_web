import Link from "next/link";
import Hero from "./Hero";
import HomeThrowbackCarousel from "@/components/HomeThrowbackCarousel";
import { agenda, stalls } from "@/data";
import { Users, Mic, Store, Eye, Heart, Palette, MessageCircle, Users2, Shield } from "lucide-react";
import SimpleCarousel from "@/components/SimpleCarousel";
import LogoMarquee from "@/components/LogoMarquee";

export default function Sections() {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-10" aria-labelledby="home-about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative p-[4px] rounded-xl animate-border">
              <div className="bg-white rounded-xl p-[6px]">
                <img
                  src="/about-feel.svg"
                  alt="About FEEL"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            <div>
              <h2
                id="home-about"
                className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]"
              >
                About
              </h2>
              <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                FEEL is the flagship annual event by GoodMind Care Foundation and Telangana&apos;s largest mental health awareness initiative. Since its inception in 2021, FEEL has reached 10M+ people online, welcomed over 7,000 attendees, and provided direct support to 15,000+ individuals through assessments and counselling.
                <br /><br />
                Now entering its 5th edition, FEEL has evolved into a movement that creates safe and creative spaces for dialogue on mental health. From art therapy sessions and anonymous counselling to expert panels, open mics, and wellness workshops, the festival champions both expression and healing.
                <br /><br />
                By normalizing conversations on mental health and encouraging early help-seeking behavior, FEEL continues to drive meaningful change among students, professionals, and community leaders, making mental well-being a shared priority for all.
              </p>
              <p className="mt-3 text-black/70 dark:text-white/70 leading-relaxed">
                Join us to explore inspiring talks, interactive stalls, and community-driven experiences that prioritize mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wrapper with gradient background for both sections */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffd5ac,#70c7d9,#9174ea,#efb2d9)] opacity-60" />

        {/* Stats Section */}
        <section className="py-10 pb-10 relative" aria-labelledby="home-stats">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <h2 id="home-stats" className="sr-only">Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "10000+", l: "Previous Participants", i: <Users className="w-7 h-7 text-[#70c7d9]" /> },
                { n: "30+", l: "Speakers", i: <Mic className="w-7 h-7 text-[#9174ea]" /> },
                { n: "100+", l: "Stalls", i: <Store className="w-7 h-7 text-[#ffd5ac]" /> },
                { n: "3M+", l: "Impressions", i: <Eye className="w-7 h-7 text-[#efb2d9]" /> },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 border border-black/10 dark:border-white/10 
                            bg-white/90 dark:bg-black/30 
                            text-center hover:-translate-y-1 hover:shadow-xl transition 
                            ring-1 ring-transparent hover:ring-[#70c7d9]/40"
                >
                  <div className="flex justify-center mb-2">{s.i}</div>
                  <div className="text-3xl font-bold tracking-tight">{s.n}</div>
                  <div className="text-base mt-1 text-black/70 dark:text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      {/* Highlights Section */}
      <section className="py-10" aria-labelledby="home-highlights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-highlights" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)] mb-8">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { h: "Wellness Focus", d: "Working professionals, students and employee mental wellness", icon: <Heart className="w-8 h-8 text-[#efb2d9]" /> },
              { h: "Art Therapy", d: "Art Therapy & Finger Painting to promote healing through creative expression", icon: <Palette className="w-8 h-8 text-[#9174ea]" /> },
              { h: "Counselling", d: "Anonymous Counseling Booths for confidential and stigma-free mental health support and guidance.", icon: <Shield className="w-8 h-8 text-[#70c7d9]" /> },
              { h: "Expert Panels", d: "Expert Panels featuring psychologists, celebrities, founders, HR leaders", icon: <Users2 className="w-8 h-8 text-[#ffd5ac]" /> },
              { h: "Interactive Stalls", d: "Healthcare-focused stalls, and diverse Pan-India participation from hospitals, startups & health tech brands", icon: <Store className="w-8 h-8 text-[#9174ea]" /> },
              { h: "Community Open Mic", d: "Community Open Mic to encourage emotional expression through stories, poetry, & music", icon: <MessageCircle className="w-8 h-8 text-[#efb2d9]" /> },
            ].map((it, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border border-black/10 dark:border-white/10 
                           bg-white/80 dark:bg-black/30 
                           hover:-translate-y-1 hover:shadow-lg transition 
                           ring-1 ring-transparent hover:ring-[var(--color-brand-pink)]"
              >
                <div className="flex justify-center mb-4">{it.icon}</div>
                <div className="font-semibold text-center">{it.h}</div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-2 text-center">{it.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-8 py-4 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Throwback Section */}
      <section className="py-10" aria-labelledby="home-throwback">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-throwback" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Throwback</h2>
            <Link href="/throwback" className="text-sm text-blue-600 hover:text-blue-500">See More</Link>
          </div>
          <div className="mt-6">
            <HomeThrowbackCarousel
              items={[
                { type: "youtube", id: "LnbhFWGKYaM" },
                { type: "youtube", id: "3tcQA7wRqtY" },
                { type: "youtube", id: "ileqZkXqbAI" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Register Now Section */}
      <section className="py-0 text-center" aria-labelledby="home-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-8 py-4 transition-colors text-lg font-semibold"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Stalls Section */}
      <section className="py-10 pb-0" aria-labelledby="home-stalls">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 id="home-stalls" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Stalls</h2>
            <Link href="/stalls" className="text-sm text-purple-600 hover:text-purple-800">View All</Link>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-12 border border-black/10 dark:border-white/10 text-center">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold text-black/90 dark:text-white/90 mb-4">Coming Soon</h3>
              <p className="text-lg text-black/70 dark:text-white/70">
                Get ready to experience our upcoming Interactive Stalls! Don’t miss your chance — book your stall today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Stall Now */}
      <section className="py-0 text-center" aria-labelledby="home-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="https://forms.gle/fmbtFu886Ju3rxS28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-800 text-white rounded px-8 py-4 transition-colors text-lg font-semibold"
          >
            Book Your Stall Now
          </a>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10" aria-labelledby="home-partners">
        <div className="max-w-full px-0">
        <h2
          id="home-partners"
          className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)] mb-8 mx-auto text-center"
        >
          Partners
        </h2>


          {/* Full-width logo marquee */}
          <LogoMarquee
            logos={[
              "/partners/p1.png", "/partners/p2.png", "/partners/p3.png", "/partners/p4.png",
              "/partners/p5.png", "/partners/p6.png", "/partners/p7.jpeg", "/partners/p8.png",
              "/partners/p9.png", "/partners/p10.png", "/partners/p11.png", "/partners/p12.jpeg",
              "/partners/p13.jpeg", "/partners/p14.png", "/partners/p15.jpeg", "/partners/p16.jpeg",
              "/partners/p17.png", "/partners/p18.png", "/partners/p19.png", "/partners/p20.jpeg",
              "/partners/p21.png",
            ]}
            //speed={20} // reduce speed (default is usually 40–50, so 20 is ~2x slower)
          />

          {/* Centered button */}
          <div className="flex justify-center mt-8">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-800 font-medium transition-colors"
            >
              Know More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* Volunteer Section */}
      <section className="py-10" aria-labelledby="home-volunteer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-volunteer" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)] mb-6">Volunteer</h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-12 border border-black/10 dark:border-white/10 text-center">
              <div className="font-bold text-2xl mb-3">Volunteer and gain experience</div>
              <p className="text-lg text-black/70 dark:text-white/70 mb-6">
                Join our team of dedicated volunteers and help us create an impactful mental health awareness event. 
                Gain valuable experience while making a difference in the community.
              </p>
              <a
                href="http://bit.ly/4kPKaEJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-800 text-sm font-medium transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-10" aria-labelledby="home-highlights-carousel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-highlights-carousel" className="text-2xl font-semibold tracking-tight mb-8 text-center">Event Highlights</h2>
          <div className="mt-2 relative max-w-3xl mx-auto">
            <SimpleCarousel
              images={[
                "/carausal/stalls/s1.jpg", "/carausal/stalls/s5.jpg", "/carausal/stalls/s3.jpg",
                "/carausal/stalls/s6.jpg", "/carausal/stalls/s4.jpg", "/carausal/stalls/s2.jpg",
                "/carausal/speakers/s10.JPG", "/carausal/group/g6.JPG", "/carausal/group/g5.JPG",
                "/carausal/group/g4.JPG", "/carausal/group/g1.jpg", "/carausal/group/g2.jpg",
                "/carausal/group/g3.jpg", "/carausal/group/g7.jpg", "/carausal/group/g8.jpg",
                "/carausal/audience/a1.JPG", "/carausal/audience/a3.JPG", "/carausal/audience/a15.JPG",
                "/carausal/audience/a13.JPG",
              ]}
              imageClassName="object-contain"
              heightClass="h-64 sm:h-80"
            />
          </div>
        </div>
      </section>

      {/* Final Register CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-[#ffd5ac]/20 via-[#70c7d9]/20 to-[#9174ea]/20" aria-labelledby="final-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="final-register" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Still thinking? Just join us — and truly FEEL it.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            Register Here
          </h3>
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white rounded px-8 py-4 hover:bg-purple-800 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}
