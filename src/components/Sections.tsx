import Link from "next/link";
import Hero from "./Hero";
import { agenda, stalls, partners, throwbackGallery } from "@/data";
import { Users, Mic, Store, Eye } from "lucide-react"; // ✅ Replace emojis with icons

export default function Sections() {
  return (
    <>
      <Hero />
      {/* About Section */}
      <section className="py-16" aria-labelledby="home-about">
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
  <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffd5ac,#70c7d9,#9174ea,#efb2d9)] opacity-20" />

  {/* Stats Section */}
  <section 
    className="py-16 pb-0 relative" 
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
                      bg-white/60 dark:bg-black/30 
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
        "Hyderabad, India",
        "⭐",
        "India's Biggest Startup Festival",
        "⭐",
        "The August Fest",
        "⭐",
        "Hyderabad, India",
        "⭐",
        "India's Biggest Startup Festival",
        "⭐",
        "The August Fest"
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


      <section className="py-16" aria-labelledby="home-agenda">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-agenda" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Agenda</h2>
            <Link href="/agenda" className="text-sm text-blue-600 hover:text-blue-500">View Full Agenda</Link>
          </div>
          <div className="mt-6 space-y-3">
            {agenda.slice(0, 3).map((item, idx) => (
              <div key={idx} className="rounded-md border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/[.03] dark:hover:bg-white/[.06]">
                <div className="text-xs text-black/60 dark:text-white/60">{item.day} • {item.time}</div>
                <div className="font-medium">{item.title}</div>
                {item.speaker && <div className="text-sm text-black/70 dark:text-white/70">{item.speaker}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="home-stalls">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-stalls" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Stalls</h2>
            <Link href="/stalls" className="text-sm text-blue-600 hover:text-blue-500">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {stalls.slice(0, 4).map((stall) => {
              const logo = `/stalls/${stall.id}.png`;
              return (
                <div key={stall.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={stall.name} className="w-14 h-14 rounded-md object-cover border border-black/10 dark:border-white/10" />
                    <div className="flex-1">
                      <div className="font-medium">{stall.name}</div>
                      <p className="text-sm text-black/70 dark:text-white/70 mt-1">{stall.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

                           <section className="py-16" aria-labelledby="home-partners">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="home-partners" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)] mb-8">Partners</h2>
              
              {/* Single image with all partner logos */}
              <div className="max-w-4xl mx-auto mb-8">
                <img 
                  src="/partners/all-partners.svg" 
                  alt="All Partners" 
                  className="w-full h-auto  opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              
              {/* Know More button */}
              <Link 
                href="/partners" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 font-medium transition-colors"
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
      <section className="py-16" aria-labelledby="home-highlights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-highlights" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { h: "Mindblown Speakers", d: "Hear from leaders and experts driving mental wellness forward." },
              { h: "Exciting Stalls", d: "Explore products, services, and interactive experiences." },
              { h: "Interactive Games", d: "Engaging activities designed to uplift and connect." },
              { h: "Workshops", d: "Hands-on sessions for habits, mindfulness, and growth." },
              { h: "Community Spaces", d: "Meet like‑minded people and build supportive networks." },
              { h: "Live Performances", d: "Art, music, and movement to energize the crowd." },
            ].map((it, i) => (
              <div key={i} className="rounded-xl p-6 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30 hover:-translate-y-1 hover:shadow-lg transition ring-1 ring-transparent hover:ring-[var(--color-brand-pink)]">
                <div className="font-semibold">{it.h}</div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-2">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="home-throwback">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-throwback" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Throwback</h2>
            <Link href="/throwback" className="text-sm text-blue-600 hover:text-blue-500">See More</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {throwbackGallery.filter((t) => t.type === "image").slice(0, 3).map((t) => (
              <div key={t.id} className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.src} alt="Throwback" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="py-16" aria-labelledby="home-collaborate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-collaborate" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Collaborate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { h: "Register", d: "Register and join the movement.", href: "https://pages.razorpay.com/pl_QsPAqay3600bdQ/view" },
              { h: "Volunteer", d: "Volunteer and gain experience, click below to apply.", href: "http://bit.ly/4kPKaEJ" },
              { h: "Partner", d: "Partner with us to create impact.", href: "https://docs.google.com/forms/d/e/1FAIpQLSegcmy5lpwL6Irg0hQnbPSV1bn9z3KnvEcIcnjWgBt3uVbAGA/viewform" },
              { h: "Sponsor", d: "Support FEEL as a sponsor.", href: "https://forms.gle/your-sponsor-form" },
            ].map((b, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border border-black/10 dark:border-white/10">
                <div className="font-semibold">{b.h}</div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">{b.d}</p>
                <a href={b.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 text-sm font-medium">{b.h}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA Section */}
      <section className="py-20 text-center" aria-labelledby="home-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-register" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Register Here</h2>
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-indigo-600 text-white rounded px-6 py-3 hover:bg-indigo-700"
          >
            Register
          </a>
        </div>
      </section>
    </>
  );
}


