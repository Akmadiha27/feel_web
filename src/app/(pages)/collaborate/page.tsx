export default function CollaboratePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Collaborate</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {[
          { h: "Register", d: "Register and join the movement.", href: "https://pages.razorpay.com/pl_QsPAqay3600bdQ/view" },
          { h: "Volunteer", d: "Volunteer and gain experience, click below to apply.", href: "http://bit.ly/4kPKaEJ" },
          { h: "Partner", d: "Partner with us to create impact.", href: "https://docs.google.com/forms/d/e/1FAIpQLSegcmy5lpwL6Irg0hQnbPSV1bn9z3KnvEcIcnjWgBt3uVbAGA/viewform" },
          { h: "Sponsor", d: "Support FEEL as a sponsor.", href: "https://forms.gle/your-sponsor-form" },
        ].map((b, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border border-black/10 dark:border-white/10">
            <div className="font-semibold">{b.h}</div>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">{b.d}</p>
            <a href={b.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 text-sm font-medium">{b.h}</a>
          </div>
        ))}
      </div>
    </div>
  );
}


