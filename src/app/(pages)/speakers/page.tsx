import Image from "next/image";
import { speakers } from "@/data";

export default function SpeakersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Speakers</h1>
      <div className="mt-8 space-y-4">
        {speakers.map((sp) => (
          <div key={sp.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="w-28 shrink-0">
                <div className="relative w-28 h-28 rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
                  <Image src={sp.image} alt={sp.name} fill className="object-cover" />
                </div>
                <div className="mt-2 font-semibold text-sm text-center">{sp.name}</div>
              </div>
              <div className="flex-1">
                <div className="text-sm text-black/70 dark:text-white/70">
                  {sp.title}
                </div>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                  {/* Placeholder for bio/info if available */}
                  More details about the speaker will be announced soon.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Speakers Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Our Previous Speakers</h2>
        <div className="max-w-4xl mx-auto">
          <img 
            src="/previous-speakers.svg" 
            alt="Previous Speakers" 
            className="w-full h-auto" 
          />
        </div>
      </div>
    </div>
  );
}


