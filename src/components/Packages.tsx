"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const packages = [
  {
    title: "Vaishno Devi Darshan",
    duration: "3 Days / 2 Nights",
    destinations: "Katra, Vaishno Devi Bhawan",
    highlights: "Helicopter option, comfortable stay near Katra, dedicated guide assistance",
    image: "/vaishnodevi_darshan.png",
  },
  {
    title: "Vaishno Devi + Kashmir",
    duration: "7 Days / 6 Nights",
    destinations: "Katra, Srinagar, Gulmarg, Pahalgam",
    highlights: "Shikara ride, Gondola experience, Betaab Valley visit, temple darshan",
    image: "/vaishnodevi_kashmir.webp",
  },
  {
    title: "Vaishno Devi + Amritsar",
    duration: "5 Days / 4 Nights",
    destinations: "Katra, Amritsar, Wagah Border",
    highlights: "Golden Temple visit, Wagah Border ceremony, Vaishno Devi darshan",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80",
  },
  {
    title: "Kashmir Complete Tour",
    duration: "6 Days / 5 Nights",
    destinations: "Srinagar, Gulmarg, Pahalgam, Sonmarg",
    highlights: "Houseboat stay, snow activities, Mughal Gardens, Dal Lake cruise",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80",
  },
  {
    title: "Leh-Ladakh Tour",
    duration: "7 Days / 6 Nights",
    destinations: "Leh, Pangong, Nubra Valley, Khardung La",
    highlights: "Pangong Lake camping, Khardung La pass, Nubra sand dunes, monastery visits",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    title: "Amarnath Yatra",
    duration: "5 Days / 4 Nights",
    destinations: "Pahalgam / Baltal, Amarnath Cave",
    highlights: "Complete yatra support, pony/palki arrangements, base camp accommodation",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    title: "Himachal Tour",
    duration: "6 Days / 5 Nights",
    destinations: "Shimla, Manali, Kullu, Rohtang",
    highlights: "Snow point visit, Solang Valley, Mall Road, scenic mountain drives",
    image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?w=800&q=80",
  },
];

const WHATSAPP_URL =
  "https://wa.me/919419196312?text=Hello%20North%20Singh%20Travels%2C%20I%20am%20interested%20in%20booking%20a%20tour%20package.%20Please%20share%20details%20regarding%20pricing%2C%20itinerary%2C%20hotels%2C%20transport%2C%20and%20availability.";

export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-ivory">
      <div className="container-main mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Packages"
            title="Popular Tour Packages"
            description="Handcrafted travel experiences across North India's most breathtaking destinations. Every package includes hotel accommodation, transport, and personal assistance."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 image-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  {/* Duration badge */}
                  <div className="absolute top-4 left-4 bg-gold/90 backdrop-blur-sm text-midnight text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-midnight mb-2 group-hover:text-steel transition-colors duration-300">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-sm font-body text-slate">{pkg.destinations}</span>
                  </div>

                  <p className="text-sm font-body text-slate-light leading-relaxed mb-5 flex-1">
                    {pkg.highlights}
                  </p>

                  <div className="border-t border-midnight/5 pt-4 flex items-center justify-between">
                    <span className="text-xs font-body font-medium text-gold uppercase tracking-wider">
                      Contact us for pricing
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-midnight text-white text-xs font-body font-semibold px-4 py-2 rounded-full hover:bg-steel transition-colors duration-300"
                    >
                      Enquire
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
