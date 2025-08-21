import Link from "next/link";
import Hero from "./Hero";
import HomeThrowbackCarousel from "@/components/HomeThrowbackCarousel";
import { agenda, stalls } from "@/data";
import { Users, Mic, Store, Eye } from "lucide-react"; // ✅ Replace emojis with icons

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
              <h2 id="home-about" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">About</h2>
              <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
              FEEL is the flagship annual event by GoodMind Care Foundation and Telangana’s largest mental health awareness initiative. Since its inception in 2021, FEEL has reached 10M+ people online, welcomed over 7,000 attendees, and provided direct support to 15,000+ individuals through assessments and counselling.

Now entering its 5th edition, FEEL has evolved into a movement that creates safe and creative spaces for dialogue on mental health. From art therapy sessions and anonymous counselling to expert panels, open mics, and wellness workshops, the festival champions both expression and healing.

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
  {/* Light gradient background */}
  <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffd5ac,#70c7d9,#9174ea,#efb2d9)] opacity-60" />

  {/* Stats Section */}
  <section 
    className="py-10 pb-0 relative" 
    aria-labelledby="home-stats"
  >
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

  {/* Partner Marquee Section - seamless connection to Stats */}
  <div className="relative">
  <div className="h-[10vh] mt-10 bg-white overflow-hidden -rotate-2 origin-center relative z-10 
                  border-t-1 border-b-1 border-[#70c7d9] shadow-md">
    <div className="marquee flex items-center gap-8 h-full px-4">
      {[
        "Feel",
        "⭐",
        "Hyderabad, India",
        "⭐",
        "Telangana&apos;s Largest Mental Wellness Event",
        "⭐",
        "Feel",
        "⭐",
        "Hyderabad, India",
        "⭐",
        "Telangana&apos;s Largest Mental Wellness Event",
        "⭐",
        "Feel"
      ].map((text, idx) => (
        <span
          key={idx}
          className="text-black/70 dark:text-white/70 font-semibold text-lg whitespace-nowrap"
        >
          {text}
        </span>
      ))}
    </div>
  </div>
</div>
</div>


      <section className="py-10" aria-labelledby="home-agenda">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="home-agenda" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)] mb-4">Agenda</h2>
            <p className="text-black/70 dark:text-white/70">Preview of what&apos;s coming at FEEL</p>
          </div>
          
          {/* Agenda Preview Cards */}
          <div className="grid gap-4 max-w-4xl mx-auto mb-8">
            {agenda.slice(0, 3).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-4 border border-black/10 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#70c7d9] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {item.time}
                  </div>
                  <div className="text-sm text-[#9174ea] font-medium">
                    {item.day}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black/90 dark:text-white/90 mb-2">
                  {item.title}
                </h3>
                {item.speaker && (
                  <div className="text-sm text-[#efb2d9] font-medium">
                    {item.speaker}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Know More Button */}
          <div className="text-center">
            <Link 
              href="/agenda" 
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 font-medium transition-colors"
            >
              Know More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10" aria-labelledby="home-stalls">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-stalls" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Stalls</h2>
            <Link href="/stalls" className="text-sm text-blue-600 hover:text-blue-500">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {stalls.slice(0, 4).map((stall) => {
              return (
                <div key={stall.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/coming-soon.svg" alt="Coming Soon" className="w-14 h-14 rounded-md object-cover border border-black/10 dark:border-white/10" />
                    <div className="flex-1">
                      <div className="font-medium">Coming Soon</div>
                      <p className="text-sm text-black/70 dark:text-white/70 mt-1">Coming Soon</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

                           <section className="py-10" aria-labelledby="home-partners">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="home-partners" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)] mb-8">Partners</h2>
              
              {/* Single image with all partner logos */}
              <div className="max-w-4xl mx-auto mb-8">
                <img 
                  src="/partners/all-partners.svg" 
                  alt="All Partners" 
                  className="w-full h-auto  opacity-80 hover:opacity-100 transition-opacity bg-white rounded-lg p-[2px]" 
                />
              </div>
              
              {/* Know More button */}
              <Link 
                href="/partners" 
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-blue-500 font-medium transition-colors"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      {/* Highlights Grid */}
      <section className="py-10" aria-labelledby="home-highlights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-highlights" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { h: "Primary Focus", d: "Working professionals, students and employee mental wellness" },
              { h: "Healing", d: "Art Therapy & Finger Painting to promote healing through creative expression" },
              { h: "Counselling Booths", d: "Anonymous Counseling Booths for confidential and stigma-free mental health support and guidance." },
              { h: "Panels", d: "Expert Panels featuring psychologists, celebrities, founders, HR leaders" },
              { h: "Stalls", d: "Healthcare-focused stalls, and diverse Pan-India participation from hospitals, startups & health tech brands" },
              { h: "Community", d: "Community Open Mic to encourage emotional expression through stories, poetry, & music" },
            ].map((it, i) => (
              <div key={i} className="rounded-xl p-6 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/30 hover:-translate-y-1 hover:shadow-lg transition ring-1 ring-transparent hover:ring-[var(--color-brand-pink)]">
                <div className="font-semibold">{it.h}</div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-2">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                { type: "youtube", id: "ileqZkXqbAI" }
              ]}
            />
          </div>
        </div>
      </section>

            <section className="py-10" aria-labelledby="home-collaborate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-collaborate" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Collaborate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { h: "Register", d: "Register and join the movement.", href: "https://pages.razorpay.com/pl_QsPAqay3600bdQ/view" },
              { h: "Volunteer", d: "Volunteer and gain experience, click below to apply.", href: "http://bit.ly/4kPKaEJ" },
              { h: "Partner", d: "Partner with us to create impact.", href: "https://docs.google.com/forms/d/e/1FAIpQLSegcmy5lpwL6Irg0hQnbPSV1bn9z3KnvEcIcnjWgBt3uVbAGA/viewform" },
              { h: "Sponsor", d: "Support FEEL as a sponsor.", href: "https://forms.gle/your-sponsor-form" },
            ].map((b, i) => (
              <div key={i} className="relative bg-white/95 dark:bg-gray-800/95 shadow-md rounded-lg p-4 border border-black/10 dark:border-white/10 overflow-hidden hover:border-[#ffd5ac] hover:border-2 transition-all duration-300">
                <div className="font-semibold text-lg">{b.h}</div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">{b.d}</p>
                <a href={b.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm font-medium transition-colors">{b.h}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA Section */}
      <section className="py-10 text-center" aria-labelledby="home-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="home-register" className="text-3xl sm:text-4xl font-bold tracking-tight">Still thinking? Just join us — and truly FEEL it.</h2>
          <h2 id="home-register" className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Register Here</h2>
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-black text-white rounded px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            Register
          </a>
        </div>
      </section>
    </>
  );
}


