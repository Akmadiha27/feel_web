"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Using plain img to avoid Next/Image errors with missing placeholder assets.

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-center bg-cover" style={{ backgroundImage: "url('/background.jpg')" }} />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="pt-24 sm:pt-28 md:pt-32 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            FEEL
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 flex justify-center"
          >
            <img src="/hero-image.png" alt="FEEL Logo" className="w-36 sm:w-44 md:w-56 h-auto mx-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Telangana's Largest Mental Wellness Event
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors w-[min(240px,90%)] sm:w-auto"
            >
              Register Now
            </Link>
            <Link
              href="https://forms.gle/YOUR_COLLABORATE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-colors w-[min(240px,90%)] sm:w-auto"
            >
              Collaborate
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSegcmy5lpwL6Irg0hQnbPSV1bn9z3KnvEcIcnjWgBt3uVbAGA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-yellow-500 text-black text-sm font-medium hover:bg-yellow-400 transition-colors w-[min(240px,90%)] sm:w-auto"
            >
              Partner
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


