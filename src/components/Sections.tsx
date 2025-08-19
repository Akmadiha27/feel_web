import Link from "next/link";
import Hero from "./Hero";
import { agenda, stalls, partners, throwbackGallery } from "@/data";

export default function Sections() {
  return (
    <>
      <Hero />
      {/* About Section */}
      <section className="py-16" aria-labelledby="home-about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/feel-about.jpg"
                alt="About FEEL"
                className="w-full h-auto rounded-xl border border-black/10 dark:border-white/10"
              />
            </div>
            <div>
              <h2 id="home-about" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">About</h2>
              <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
                Goodminds is a mental wellness app helping individuals build healthy habits and access supportive resources.
                FEEL brings that mission to life as Telangana&apos;s largest experiential festival for learning and well-being.
              </p>
              <p className="mt-3 text-black/70 dark:text-white/70 leading-relaxed">
                Join us to explore inspiring talks, interactive stalls, and community-driven experiences that prioritize mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10" aria-labelledby="home-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="home-stats" className="sr-only">Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ n: "10000+", l: "Previous Participants" }, { n: "30+", l: "Speakers" }, { n: "100+", l: "Stalls" }, { n: "1M+", l: "Impressions" }].
              map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30 text-center hover:-translate-y-0.5 hover:shadow transition ring-1 ring-transparent hover:ring-[var(--color-brand-sky)]"
                >
                  <div className="text-3xl font-bold tracking-tight">{s.n}</div>
                  <div className="text-sm mt-1 text-black/70 dark:text-white/70">{s.l}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Partner Marquee Section */}
      <section className="py-8" aria-labelledby="home-partner-marquee">
        <div className="mx-auto max-w-7xl px-0">
          <h2 id="home-partner-marquee" className="sr-only">Partner Marquee</h2>
          <div className="relative overflow-hidden">
            <div className="rotate-2 origin-center">
              <div className="h-[10vh] bg-white/70 dark:bg-black/40 border-y border-black/10 dark:border-white/10 backdrop-blur overflow-hidden">
                <div className="marquee flex items-center gap-10 h-full">
                  {["/partners/p1.svg","/partners/p2.svg","/partners/p3.svg","/partners/p4.svg","/partners/p5.svg"].concat(["/partners/p1.svg","/partners/p2.svg","/partners/p3.svg","/partners/p4.svg","/partners/p5.svg"]).map((src, idx) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={idx} src={src} alt="Partner" className="h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {stalls.slice(0, 4).map((stall) => (
              <div key={stall.id} className="rounded-xl p-4 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30 hover:shadow transition-shadow">
                <div className="font-medium">{stall.name}</div>
                <p className="text-sm text-black/70 dark:text-white/70 mt-1">{stall.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="home-partners">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-partners" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Partners</h2>
            <Link href="/partners" className="text-sm text-blue-600 hover:text-blue-500">See All Partners</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 items-center">
            {partners.slice(0, 4).map((p) => (
              <div key={p.id} className="relative h-16 grayscale opacity-80 hover:opacity-100 transition-opacity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
              </div>
            ))}
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
          <div className="flex items-end justify-between">
            <h2 id="home-collaborate" className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[var(--color-brand-sand)]">Collaborate</h2>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Register
              </Link>
              <Link
                href="http://bit.ly/4kPKaEJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium bg-green-600 hover:bg-green-500 transition-colors"
              >
                Volunteer
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSegcmy5lpwL6Irg0hQnbPSV1bn9z3KnvEcIcnjWgBt3uVbAGA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors"
              >
                Partner
              </Link>
              <Link
                href="https://forms.gle/your-sponsor-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium bg-yellow-600 hover:bg-yellow-500 transition-colors"
              >
                Sponsor
              </Link>
            </div>
          </div>
          <p className="text-black/70 dark:text-white/70 mt-3 max-w-3xl">Partner with FEEL, volunteer, or collaborate on initiatives. We welcome organizations and individuals passionate about mental wellness.</p>
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


