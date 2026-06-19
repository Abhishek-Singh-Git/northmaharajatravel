"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80"
          alt="Kashmir Dal Lake panoramic view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 to-transparent" />
      </div>

      {/* Content — give breathing room from stats at bottom */}
      <div className="relative z-10 container-main mx-auto px-5 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-10 sm:pb-16 md:pb-44">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 mb-5 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] sm:text-xs font-body font-medium text-white/90 tracking-wide uppercase">
              30 Years of Trusted Travel
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[1.85rem] min-[380px]:text-[2.25rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6"
          >
            Discover <span className="text-gold-gradient">Kashmir</span>,<br />
            Vaishno Devi & <span className="text-gold-gradient whitespace-nowrap">Leh-Ladakh</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[15px] sm:text-lg md:text-xl text-white/75 font-body font-light max-w-xl mb-7 sm:mb-10 leading-relaxed"
          >
            Affordable luxury travel experiences with complete hotel, transport,
            and tour assistance.
          </motion.p>

          {/* CTAs — stack on small mobile, row on larger */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-midnight font-heading font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Your Trip
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-heading font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Contact Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating stats — pinned at bottom, non-overlapping */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative md:absolute md:bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10 mt-8 md:mt-0"
      >
        <div className="container-main mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 max-w-3xl">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "10K+", label: "Happy Travelers" },
              { value: "50+", label: "Tour Packages" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] md:text-xs text-white/70 font-body font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-body text-white/50 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
