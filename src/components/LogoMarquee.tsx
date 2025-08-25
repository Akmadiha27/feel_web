"use client";

export default function LogoMarquee({
  logos,
  speedClass = "animate-logo-scroll-left",
  reverseSpeedClass = "animate-logo-scroll-right",
}: {
  logos: string[];
  speedClass?: string;
  reverseSpeedClass?: string;
}) {
  // Create a seamless loop by duplicating the content
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="space-y-24">
        {/* Row 1 - Left to Right */}
        <div className="relative overflow-hidden">
          <div className={`flex items-center gap-24 ${speedClass}`}>
            {loopLogos.map((src, i) => (
              <img
                key={`r1-${i}`}
                src={src}
                alt={`Partner ${(i % logos.length) + 1}`}
                className="h-28 sm:h-32 md:h-36 w-auto opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>
        </div>
        {/* Row 2 - Right to Left */}
        <div className="relative overflow-hidden">
          <div className={`flex items-center gap-24 ${reverseSpeedClass}`}>
            {loopLogos.map((src, i) => (
              <img
                key={`r2-${i}`}
                src={src}
                alt={`Partner ${(i % logos.length) + 1}`}
                className="h-28 sm:h-32 md:h-36 w-auto opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
