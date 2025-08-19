import { agenda } from "@/data";

export default function AgendaPage() {
  const days = Array.from(new Set(agenda.map((i) => i.day)));
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Agenda</h1>
      <div className="mt-8 space-y-6">
        {days.map((day) => (
          <div key={day} className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
            <div className="px-4 py-3 font-medium bg-black/5 dark:bg-white/10">{day}</div>
            <div className="p-4 space-y-3">
              {agenda.filter((i) => i.day === day).map((item, idx) => (
                <div key={idx} className="rounded-md border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/[.03] dark:hover:bg-white/[.06]">
                  <div className="text-xs text-black/60 dark:text-white/60">{item.time}</div>
                  <div className="font-medium">{item.title}</div>
                  {item.speaker && <div className="text-sm text-black/70 dark:text-white/70">{item.speaker}</div>}
                  {item.description && <p className="text-sm text-black/70 dark:text-white/70 mt-1">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


