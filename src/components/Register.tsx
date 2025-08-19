import Link from "next/link";

export default function Register() {
  return (
    <section id="register" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-8 bg-gradient-to-br from-black/5 to-transparent dark:from-white/10">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to join FEEL?</h2>
          <p className="text-black/70 dark:text-white/70 mt-1">Secure your spot. Limited seats available.</p>
          <Link
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view" target="_blank" rel="noopener noreferrer"
            className="inline-block mt-6 rounded-full px-6 py-3 bg-black text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-90"
          >
            Go to Registration
          </Link>
        </div>
      </div>
    </section>
  );
}


