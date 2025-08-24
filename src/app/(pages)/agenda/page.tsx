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
      {/* Agenda page temporarily commented out */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Event Agenda</h1>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          This page is temporarily unavailable. Please check back later.
        </p>
      </div>
      
      {/* Original content commented out
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
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/90 dark:bg-gray-800/90 shadow-md rounded-lg p-12 border border-black/10 dark:border-white/10 text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-black/90 dark:text-white/90 mb-4">Coming Soon</h3>
                <p className="text-lg text-black/70 dark:text-white/70">
                  Our exciting agenda for {day} will be announced soon. Stay tuned for an amazing lineup of events, speakers, and activities!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">Event Highlights</h2>
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[
                "/hero-image.png", "/about-feel.svg", "/goodmind.png", "/globe.svg",
                "/file.svg", "/window.svg", "/coming-soon.svg"
              ].map((image, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-32 bg-white rounded-lg p-3 border border-gray-200 shadow-md">
                  <img 
                    src={image} 
                    alt={`Event Highlight ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
      */}

      {/* Final Register CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-[#ffd5ac]/20 via-[#70c7d9]/20 to-[#9174ea]/20 mt-16" aria-labelledby="final-register">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="final-register" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Still thinking? Just join us — and truly FEEL it.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
            Register Here
          </h3>
          <a
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  bg-purple-600 hover:bg-purple-800  text-white rounded px-8 py-4  transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}


