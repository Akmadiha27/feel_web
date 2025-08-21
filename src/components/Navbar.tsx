"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/agenda", label: "Agenda" },
  { href: "/stalls", label: "Stalls" },
  { href: "/partners", label: "Partners" },
  // { href: "/throwback", label: "Throwback" },
  { href: "/collaborate", label: "Collaborate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/20 backdrop-blur bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight text-lg text-white">
          FEEL
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-white">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm px-1.5 py-1 border-b-2 transition-colors ${
                  isActive ? "text-white font-semibold border-white" : "text-white/80 border-transparent hover:text-white hover:border-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
            target="_blank"
            className="inline-flex items-center gap-1 text-sm rounded-md px-2 py-1 transition-colors text-white"
          >
            <span className="animate-brand-text">Register</span> <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2 text-white">
          <button aria-label="Open menu" className="p-2" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20 bg-black/90 backdrop-blur text-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm pb-1 border-b transition-colors ${
                    isActive ? "text-white font-semibold border-white" : "border-transparent text-white/80 hover:text-white hover:border-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
              target="_blank"
              onClick={() => setOpen(false)}
              className="text-sm rounded px-2 py-1 transition-colors text-white"
            >
              <span className="animate-brand-text">Register</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


