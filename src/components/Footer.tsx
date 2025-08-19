import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">FEEL</div>
          <p className="text-sm text-black/60 dark:text-white/60 mt-2">
            Festival of Experiential Events & Learning.
          </p>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Contact</div>
          <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4" /> +1 (000) 123-456</div>
          <Link href="mailto:hello@feel.events" className="flex items-center gap-2 text-sm hover:underline"><Mail className="h-4 w-4" /> hello@feel.events</Link>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Follow</div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Instagram" className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"><Instagram className="h-4 w-4" /></Link>
            <Link href="#" aria-label="Facebook" className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"><Facebook className="h-4 w-4" /></Link>
            <Link href="#" aria-label="YouTube" className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"><Youtube className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-black/60 dark:text-white/60 mt-6">© {new Date().getFullYear()} FEEL. All rights reserved.</div>
    </footer>
  );
}


