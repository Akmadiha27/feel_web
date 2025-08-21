"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/background-video.mp4" // <-- replace with your video file name
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <img
              src="/hero-image.png"
              alt="FEEL Logo"
              className="w-100 sm:w-120 md:w-140 h-auto mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex flex-col items-center"
          >
                          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-wide max-w-6xl mx-auto leading-relaxed">
              Telangana&apos;s Largest Mental Wellness Event
            </h1>
            
             {/* Dynamic dotted line for tagline - matches text width */}
             <div className="mt-2 border-t-2 border-dotted border-white/70" style={{width: "min(100%, 100rem)"}}></div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 flex flex-col items-center"
          >
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium">
              <p className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 leading-relaxed">
                <span className="font-bold">19th September 2025</span>
                <span className="text-white/70 font-light">|</span>
                <span className="font-semibold">Sattva Knowledge City</span>
                <span className="text-white/70 font-light">|</span>
                <span className="font-semibold">Hyderabad</span>
                <span className="text-white/70 font-light">|</span>
                <span className="font-bold">9 AM Onwards</span>
              </p>
            </div>
            
            {/* Dynamic dotted line for event details */}
            <div className="mt-2 border-t-2 border-dotted border-white/70" style={{width: "min(100%, 100rem)"}}></div>
          </motion.div>

          {/* Call to Action Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-6"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wide mb-6">
              Join the Movement • Transform Lives • Make Impact
            </h2>
          </motion.div> */}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6"
          >
            <Link
              href="https://pages.razorpay.com/pl_QsPAqay3600bdQ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center 
                         w-52 h-14 
                         rounded-tl-3xl rounded-br-3xl 
                         bg-gray-100/10
                         text-white text-base font-semibold tracking-wide
                         hover:bg-black hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30
                         active:bg-blue-700
                         transition-all duration-300 ease-out
                         border-2 border-white/50 "
            >
              <span>Register Now</span>
            </Link>

            <Link
              href="http://bit.ly/4kPKaEJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center 
                         w-52 h-14 
                         rounded-tl-3xl rounded-br-3xl 
                          bg-gray-100/10
                         text-white text-base font-bold tracking-wide
                         hover:bg-black  hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30
                         active:bg-green-700
                         transition-all duration-300 ease-out
                         border-2 border-white/50 "
            >
              <span>Volunteer</span>
            </Link>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSegcmy5lpwL6Irg0hQnbPSV1bn9z3KnvEcIcnjWgBt3uVbAGA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center 
                         w-52 h-14 
                         rounded-tl-3xl rounded-br-3xl 
                         bg-gray-100/10
                         text-white text-base font-bold tracking-wide
                         hover:bg-black   hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30
                         active:bg-yellow-600
                         transition-all duration-300 ease-out
                         border-2 border-white/50 "
            >
              <span>Partner</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
