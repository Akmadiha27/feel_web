import { agenda } from "@/data";

export default function AgendaPage() {
  // Group agenda items by day
  const agendaByDay = agenda.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, typeof agenda>);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Event Agenda</h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Join us for an immersive experience filled with inspiring talks, interactive workshops, and meaningful connections.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(agendaByDay).map(([day, items]) => (
          <div key={day} className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight inline-block border-b-2 border-[#ffd5ac] pb-2">
                {day}
              </h2>
            </div>
            
            <div className="grid gap-4 max-w-4xl mx-auto">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-6 border border-black/10 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-[#70c7d9] text-white text-sm font-semibold px-3 py-1 rounded-full">
                          {item.time}
                        </div>
                        {item.speaker && (
                          <div className="text-sm text-[#9174ea] font-medium">
                            {item.speaker}
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-black/90 dark:text-white/90 mb-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-black/70 dark:text-white/70">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#ffd5ac]/20 via-[#70c7d9]/20 to-[#9174ea]/20 rounded-xl p-8 border border-[#ffd5ac]/30">
          <h3 className="text-xl font-semibold mb-3">Event Details</h3>
          <p className="text-black/70 dark:text-white/70 mb-4">
            All sessions include interactive elements and Q&A opportunities. 
            Stay tuned for additional workshops and activities!
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ffd5ac] rounded-full"></div>
              <span>Interactive Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#70c7d9] rounded-full"></div>
              <span>Networking Breaks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#9174ea] rounded-full"></div>
              <span>Workshops</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


