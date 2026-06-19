"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const galleryItems = [
  {
    category: "Kashmir",
    caption: "Dal Lake, Srinagar",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    category: "Gulmarg",
    caption: "Gondola Gulmarg",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80",
    span: "",
  },
  {
    category: "Leh-Ladakh",
    caption: "Pangong Tso Lake",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    span: "",
  },
  {
    category: "Vaishno Devi",
    caption: "Vaishno Devi Bhawan",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    span: "",
  },
  {
    category: "Golden Temple",
    caption: "Harmandir Sahib, Amritsar",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&q=80",
    span: "",
  },
  {
    category: "Sonmarg",
    caption: "Thajiwas Glacier",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    span: "col-span-2",
  },
  {
    category: "Pahalgam",
    caption: "Betaab Valley",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&q=80",
    span: "",
  },
  {
    category: "Snow",
    caption: "Himalayan Snow Landscapes",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=600&q=80",
    span: "",
  },
  {
    category: "Leh-Ladakh",
    caption: "Khardung La Pass",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=900&q=80",
    span: "col-span-2",
  },
  {
    category: "Helicopter",
    caption: "Helicopter Yatra",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&q=80",
    span: "",
  },
];

const categories = ["All", "Kashmir", "Gulmarg", "Pahalgam", "Leh-Ladakh", "Vaishno Devi", "Golden Temple", "Sonmarg", "Snow", "Helicopter"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<null | { image: string; caption: string }>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the Mountains"
            description="A visual journey through Kashmir's valleys, Ladakh's plateaus, and the sacred pilgrim trails."
          />
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={0.1}>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center mb-8 sm:mb-10 scrollbar-none" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 whitespace-nowrap text-xs font-body font-semibold px-4 py-1.5 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-midnight text-white border-midnight"
                    : "bg-transparent text-slate border-midnight/15 hover:border-midnight/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[200px]">
          {filtered.map((item, i) => (
            <FadeIn key={`${item.caption}-${i}`} delay={i * 0.07} className={item.span}>
              <div
                className="group relative h-full rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setLightbox({ image: item.image, caption: item.caption })}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/40 transition-all duration-500" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-white text-xs font-body font-semibold">{item.caption}</p>
                  <span className="text-gold text-[10px] font-body uppercase tracking-wider">{item.category}</span>
                </div>
                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] md:h-[75vh]">
                <Image
                  src={lightbox.image}
                  alt={lightbox.caption}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="bg-midnight/80 text-center py-3 px-4">
                <p className="text-white text-sm font-body">{lightbox.caption}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
