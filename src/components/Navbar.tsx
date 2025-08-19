"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Sun, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/agenda", label: "Agenda" },
  { href: "/stalls", label: "Stalls" },
  { href: "/partners", label: "Partners" },
  { href: "/throwback", label: "Throwback" },
  { href: "/collaborate", label: "Collaborate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight text-lg">
          FEEL
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view" target="_blank" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-500">
            Register <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 hidden dark:block" />
            <Moon className="h-4 w-4 dark:hidden" />
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 hidden dark:block" />
            <Moon className="h-5 w-5 dark:hidden" />
          </button>
          <button aria-label="Open menu" className="p-2" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm">
                {item.label}
              </Link>
            ))}
            <Link href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view" target="_blank" onClick={() => setOpen(false)} className="text-sm text-blue-600">
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


