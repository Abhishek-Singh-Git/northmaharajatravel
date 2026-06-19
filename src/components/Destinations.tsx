"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const destinations = [
  {
    name: "Srinagar",
    tagline: "Venice of the East",
    description: "Houseboats on Dal Lake, Mughal Gardens, and vibrant floating markets",
    image: "/srinagar.png",
  },
  {
    name: "Gulmarg",
    tagline: "Meadow of Flowers",
    description: "Asia's highest gondola, pristine ski slopes, and snow-covered peaks",
    image: "/gulmarg.png",
  },
  {
    name: "Pahalgam",
    tagline: "Valley of Shepherds",
    description: "Betaab Valley, Aru Valley, Chandanwari, and scenic Lidder River",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80",
  },
  {
    name: "Sonmarg",
    tagline: "Meadow of Gold",
    description: "Thajiwas Glacier, alpine lakes, and gateway to Ladakh",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    name: "Leh-Ladakh",
    tagline: "Land of High Passes",
    description: "Pangong Lake, Nubra Valley, ancient monasteries, and Khardung La",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    name: "Amritsar",
    tagline: "The Holy City",
    description: "Golden Temple, Jallianwala Bagh, and the Wagah Border ceremony",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80",
  },
  {
    name: "Shimla",
    tagline: "Queen of Hills",
    description: "Colonial architecture, Mall Road, and panoramic Himalayan views",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800&q=80",
  },
  {
    name: "Manali",
    tagline: "Adventure Capital",
    description: "Rohtang Pass, Solang Valley, river rafting, and old Manali charm",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-white">
      <div className="container-main mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Explore"
            title="Stunning Destinations"
            description="From the serene lakes of Kashmir to the rugged passes of Ladakh — explore the most beautiful corners of Northern India."
          />
        </FadeIn>

        {/* Bento grid layout */}
        <div className="grid grid-flow-row-dense grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] min-[480px]:auto-rows-[200px] md:auto-rows-[240px]">
          {destinations.map((dest, i) => {
            const isSrinagar = i === 0;
            const isLadakh = i === 4;

            const gridClasses = isSrinagar
              ? "min-[480px]:col-span-2 min-[480px]:row-span-2"
              : isLadakh
              ? "min-[480px]:col-span-2 min-[480px]:row-span-1"
              : "";

            return (
              <FadeIn
                key={dest.name}
                delay={i * 0.08}
                className={gridClasses}
              >
                <div className="group relative h-full rounded-2xl overflow-hidden cursor-pointer">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent group-hover:from-midnight/90 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                    <span className="text-[10px] font-body font-semibold text-gold uppercase tracking-[0.2em] mb-1">
                      {dest.tagline}
                    </span>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-xs font-body text-white/60 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                      {dest.description}
                    </p>
                  </div>

                  {/* Hover corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/60 rounded-tr-lg transition-all duration-500" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
