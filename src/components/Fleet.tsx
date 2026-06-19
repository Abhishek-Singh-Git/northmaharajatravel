"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const vehicles = [
  {
    name: "Sedan",
    capacity: "4 Passengers",
    features: "AC, comfortable seating, ideal for couples",
    image: "/sedan.png",
  },
  {
    name: "SUV",
    capacity: "6 Passengers",
    features: "4x4, perfect for mountain terrain, spacious",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
  },
  {
    name: "Innova",
    capacity: "7 Passengers",
    features: "Premium comfort, family-friendly, AC",
    image: "/innova.png",
  },
  {
    name: "Ertiga",
    capacity: "6 Passengers",
    features: "Budget-friendly, comfortable, fuel efficient",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
  },
  {
    name: "Tempo Traveller",
    capacity: "12 Passengers",
    features: "Push-back seats, perfect for groups, AC",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
  },
  {
    name: "Luxury Tempo Traveller",
    capacity: "12+ Passengers",
    features: "Premium seating, entertainment, extra luggage space",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  },
];

export default function Fleet() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="fleet" className="section-padding bg-ivory">
      <div className="container-main mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Fleet"
            title="Travel in Comfort"
            description="A fleet of well-maintained vehicles for every group size, from intimate couples to large families."
          />
        </FadeIn>

        {/* Slider controls */}
        <div className="relative">
          <div className="hidden md:flex absolute -top-20 right-0 gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-midnight/15 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-midnight transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-midnight/15 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-midnight transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Cards slider */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {vehicles.map((vehicle, i) => (
              <FadeIn key={vehicle.name} delay={i * 0.1} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start">
                <div className="group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="320px"
                    />
                    <div className="absolute bottom-3 right-3 bg-midnight/80 backdrop-blur-sm text-white text-xs font-body font-medium px-3 py-1 rounded-full">
                      {vehicle.capacity}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-bold text-midnight mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm font-body text-slate leading-relaxed">
                      {vehicle.features}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
