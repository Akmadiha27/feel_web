"use client";

import { useState } from "react";

export default function Collaborate() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/collaborate", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("Thanks! We'll get back to you soon.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="collaborate" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Collaborate</h2>
        <p className="text-black/70 dark:text-white/70 mt-1">Partner with us or volunteer. Reach out!</p>
        <form action={onSubmit} className="mt-6 grid gap-4 max-w-xl">
          <input name="name" type="text" required placeholder="Your name" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" />
          <input name="email" type="email" required placeholder="Your email" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" />
          <textarea name="message" required placeholder="Your message" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 h-28" />
          <div className="flex gap-3 items-center">
            <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium disabled:opacity-60">
              {loading ? "Sending..." : "Send"}
            </button>
            <a href="mailto:hello@feel.events" className="text-sm underline">or email us</a>
          </div>
          {status && <div className="text-sm text-black/70 dark:text-white/70">{status}</div>}
        </form>
      </div>
    </section>
  );
}


