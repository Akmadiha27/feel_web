import Image from "next/image";

const stallsPhotos = [
  { src: "/throwback/t1.svg", alt: "Stall photo 1" },
  { src: "/throwback/t2.svg", alt: "Stall photo 2" },
  { src: "/throwback/t3.svg", alt: "Stall photo 3" },
];

const groupPhotos = [
  { src: "/speakers/s1.svg", alt: "Group photo 1" },
  { src: "/speakers/s2.svg", alt: "Group photo 2" },
  { src: "/speakers/s3.svg", alt: "Group photo 3" },
];

const speakersPhotos = [
  { src: "/speakers/s1.svg", alt: "Speaker session 1" },
  { src: "/speakers/s4.svg", alt: "Speaker session 2" },
  { src: "/speakers/s2.svg", alt: "Speaker session 3" },
];

const gamesPhotos = [
  { src: "/throwback/t2.svg", alt: "Games photo 1" },
  { src: "/throwback/t1.svg", alt: "Games photo 2" },
  { src: "/throwback/t3.svg", alt: "Games photo 3" },
];

const interactionsPhotos = [
  { src: "/speakers/s3.svg", alt: "Audience engagement 1" },
  { src: "/speakers/s2.svg", alt: "Audience engagement 2" },
  { src: "/speakers/s1.svg", alt: "Audience engagement 3" },
];

const reviews = [
  { quote: "An inspiring and refreshing experience!", author: "Priya K." },
  { quote: "Well-organized and deeply impactful sessions.", author: "Arun M." },
  { quote: "Loved the stalls and community vibe!", author: "Zara L." },
];

export default function ThrowbackPage() {
  const navItems = [
    { href: "#stalls", label: "Jump to Stalls" },
    { href: "#group", label: "Jump to Group" },
    { href: "#speakers", label: "Jump to Speakers" },
    { href: "#games", label: "Jump to Games" },
    { href: "#interactions", label: "Jump to Interactions" },
    { href: "#reviews", label: "Jump to Reviews" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/[.04] dark:hover:bg-white/[.06]"
          >
            {item.label}
          </a>
        ))}
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">Throwback</h1>

      {/* Stalls */}
      <section id="stalls" className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Stalls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {stallsPhotos.map((p, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Group */}
      <section id="group" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Group</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {groupPhotos.map((p, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {speakersPhotos.map((p, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Games */}
      <section id="games" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {gamesPhotos.map((p, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Interactions */}
      <section id="interactions" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Interactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {interactionsPhotos.map((p, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/30">
              <p className="italic">“{r.quote}”</p>
              <div className="mt-3 text-sm text-black/70 dark:text-white/70">— {r.author}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


