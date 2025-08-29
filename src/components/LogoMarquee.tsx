"use client";

export default function LogoMarquee({
  logos,
  speedClass = "animate-logo-scroll-left", // default scroll direction
}: {
  logos: string[];
  speedClass?: string;
}) {
  // Duplicate logos for seamless loop
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative overflow-hidden">
        <div className={`flex items-center gap-24 ${speedClass}`}>
          {loopLogos.map((src, i) => (
            <img
              key={`logo-${i}`}
              src={src}
              alt={`Partner ${(i % logos.length) + 1}`}
              className="h-28 sm:h-32 md:h-36 w-auto opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
