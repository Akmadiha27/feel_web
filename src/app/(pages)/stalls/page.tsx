import Image from "next/image";
import { stalls } from "@/data";

export default function StallsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Stalls</h1>
      <div className="mt-8 space-y-4">
        {stalls.map((stall) => {
          const logo = `/stalls/${stall.id}.png`;
          return (
            <div key={stall.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden border border-black/10 dark:border-white/10 shrink-0">
                  <Image src={logo} alt={stall.name} fill className="object-cover" />
                </div>
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
  );
}


