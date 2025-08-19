import Image from "next/image";
import { partners } from "@/data";

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Partners</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 items-center">
        {partners.map((p) => (
          <div key={p.id} className="relative h-24 grayscale opacity-80 hover:opacity-100 transition-opacity">
            <Image src={p.logo} alt={p.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}


