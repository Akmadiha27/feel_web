import Image from "next/image";
import { speakers } from "@/data";

export default function Speakers() {
  return (
    <section id="speakers" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Speakers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {speakers.map((sp) => (
            <div key={sp.id} className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30">
              <div className="aspect-square relative">
                <Image src={sp.image} alt={sp.name} fill className="object-cover" />
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
  );
}


