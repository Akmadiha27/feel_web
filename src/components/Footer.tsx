import Link from "next/link";
import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-16 mt-16 relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* FEEL Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/hero-image.png" alt="FEEL Logo" className="w-12 h-12 object-contain" />
              <div className="text-xl font-bold tracking-wide">FEEL</div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Telangana&apos;s largest mental health awareness initiative.
            </p>
          </div>

          {/* Instagram & Contact Section */}
          <div className="space-y-6">
            {/* Instagram Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-white/80" />
                <span className="font-semibold text-white/90">Follow Us</span>
              </div>
              <Link 
                href="https://www.instagram.com/feelbygoodmind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <span className="text-sm">@feelbygoodmind</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Contact Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="font-semibold text-white/90">Contact</span>
              </div>
              <div className="text-sm text-white/70">+91 9014731917</div>
            </div>
          </div>

          {/* Goodmind Section */}
          <div className="space-y-4">
            <div className="font-semibold text-white/90">Powered By</div>
            <Link 
              href="https://goodmind.app" 
              target="_blank"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-lg font-medium">goodmind.app</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Mental wellness platform driving positive change through technology and community.
            </p>
          </div>
        </div>

        {/* Bottom Border & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} FEEL. All rights reserved. | Crafted with ❤️ for mental wellness
          </div>
        </div>
      </div>
    </footer>
  );
}


