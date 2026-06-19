"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Excellent Kashmir trip management and comfortable taxi service. From houseboat stay to Gulmarg Gondola, every detail was perfectly arranged. Highly recommend North Maharaja Travels!",
    initials: "RK",
    color: "bg-steel",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Very smooth Vaishno Devi tour with hotel and pickup facilities. The driver was professional and knew all the routes. Made the pilgrimage experience truly peaceful and memorable.",
    initials: "PS",
    color: "bg-gold",
  },
  {
    name: "Ankit Verma",
    location: "Jaipur",
    rating: 5,
    text: "Affordable prices and professional drivers. Booked Leh-Ladakh tour for our group of 10. The Tempo Traveller was well maintained and the route planning was exceptional.",
    initials: "AV",
    color: "bg-midnight",
  },
  {
    name: "Sunita Mehta",
    location: "Pune",
    rating: 5,
    text: "Our family trip to Kashmir was absolutely magical. The team handled everything — hotels, sightseeing, meals. Children loved the shikara ride on Dal Lake. Will book again!",
    initials: "SM",
    color: "bg-steel",
  },
  {
    name: "Mohammed Iqbal",
    location: "Hyderabad",
    rating: 5,
    text: "Booked Amritsar + Vaishno Devi package. Golden Temple experience was divine and the driver guided us beautifully throughout. 30 years of experience clearly shows in their service.",
    initials: "MI",
    color: "bg-gold",
  },
  {
    name: "Deepak Nair",
    location: "Bengaluru",
    rating: 5,
    text: "Himachal tour with North Maharaja was a dream. Rohtang Pass, Solang Valley — all covered smoothly despite the mountain roads. Great value for money and zero hidden charges.",
    initials: "DN",
    color: "bg-midnight",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  // Show 3 at a time on desktop
  const visible = [
    testimonials[active % testimonials.length],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Travelers Say"
            description="Real experiences from real travelers who trusted us with their most precious journeys."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="bg-white rounded-2xl p-7 card-shadow flex flex-col gap-4 transition-all duration-500"
              >
                <StarRating count={t.rating} />
                <p className="text-sm font-body text-slate leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-midnight/5">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-heading font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-heading font-semibold text-midnight">{t.name}</div>
                    <div className="text-xs font-body text-slate">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl p-6 card-shadow">
              <StarRating count={testimonials[active].rating} />
              <p className="text-sm font-body text-slate leading-relaxed mt-4 mb-5">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-midnight/5">
                <div className={`w-10 h-10 rounded-full ${testimonials[active].color} flex items-center justify-center text-white text-sm font-heading font-bold`}>
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-midnight">{testimonials[active].name}</div>
                  <div className="text-xs font-body text-slate">{testimonials[active].location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-midnight/15 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-midnight/20 hover:bg-midnight/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-midnight/15 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
