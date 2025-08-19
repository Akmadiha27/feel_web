import { stalls } from "@/data";
import { Cpu, Heart, Sparkles, Utensils } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-5 w-5" />,
  cpu: <Cpu className="h-5 w-5" />,
  heart: <Heart className="h-5 w-5" />,
  utensils: <Utensils className="h-5 w-5" />,
};

export default function StallsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Stalls</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {stalls.map((stall) => (
          <div key={stall.id} className="rounded-xl p-4 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/30 hover:shadow transition-shadow">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-black/5 dark:bg-white/10">
                {iconMap[stall.icon]}
              </div>
              <div className="font-medium">{stall.name}</div>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70 mt-2">{stall.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


