import Link from "next/link";
import Hero from "./Hero";
import { speakers, agenda, stalls, partners, throwbackGallery } from "@/data";

export default function Sections() {
  return (
    <>
      <Hero />
      <section className="py-16" aria-labelledby="home-speakers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-speakers" className="text-2xl font-semibold tracking-tight">Speakers</h2>
            <Link href="/speakers" className="text-sm text-blue-600 hover:text-blue-500">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {speakers.slice(0, 3).map((sp) => (
              <div key={sp.id} className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30 hover:shadow transition-shadow">
                <div className="aspect-[4/3] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sp.image} alt={sp.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="font-medium">{sp.name}</div>
                  <div className="text-xs text-black/60 dark:text-white/60">{sp.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="home-agenda">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-agenda" className="text-2xl font-semibold tracking-tight">Agenda</h2>
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
            <h2 id="home-stalls" className="text-2xl font-semibold tracking-tight">Stalls</h2>
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
            <h2 id="home-partners" className="text-2xl font-semibold tracking-tight">Partners</h2>
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

      <section className="py-16" aria-labelledby="home-throwback">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 id="home-throwback" className="text-2xl font-semibold tracking-tight">Throwback</h2>
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
            <h2 id="home-collaborate" className="text-2xl font-semibold tracking-tight">Collaborate</h2>
            <Link href="/collaborate" className="text-sm text-blue-600 hover:text-blue-500">Go to Form</Link>
          </div>
          <p className="text-black/70 dark:text-white/70 mt-3 max-w-3xl">Partner with FEEL, volunteer, or collaborate on initiatives. We welcome organizations and individuals passionate about mental wellness.</p>
        </div>
      </section>
    </>
  );
}


