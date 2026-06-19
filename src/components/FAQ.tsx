"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What destinations do you cover?",
    a: "We cover all major destinations in Northern India including Kashmir (Srinagar, Gulmarg, Pahalgam, Sonmarg), Leh-Ladakh (Pangong, Nubra Valley), Vaishno Devi, Amritsar (Golden Temple), Himachal Pradesh (Shimla, Manali), and Amarnath Yatra routes.",
  },
  {
    q: "Are hotel and transport included in packages?",
    a: "Yes! All our packages are comprehensive and include hotel accommodation, dedicated vehicle with driver, sightseeing assistance, and 24/7 support. We believe in zero hidden charges — what you see is what you get.",
  },
  {
    q: "How do I book a tour or get pricing?",
    a: "Simply WhatsApp us or call us directly. We provide customized quotes based on your group size, duration, accommodation preference, and specific requirements. Contact us at +91 9419165312 or +91 9906036612.",
  },
  {
    q: "Do you offer Helicopter service for Vaishno Devi?",
    a: "Yes, we assist in arranging helicopter yatra for Vaishno Devi. We coordinate with the official helicopter service providers and help with booking, timing, and transfers to and from the helipad.",
  },
  {
    q: "What vehicles are available for group tours?",
    a: "We have a full fleet: Sedan (4 pax), Ertiga (6 pax), SUV (6 pax), Innova Crysta (7 pax), Tempo Traveller (12 pax), and Luxury Tempo Traveller (12+ pax). All vehicles are AC-equipped and well maintained.",
  },
  {
    q: "Can you customize a tour itinerary?",
    a: "Absolutely! Custom tour planning is one of our specialties. Share your dates, group size, budget, and preferred destinations — we will craft a personalized itinerary just for you.",
  },
  {
    q: "Is Leh-Ladakh accessible throughout the year?",
    a: "Leh-Ladakh by road is best visited between June and September when the mountain passes are open. We help plan the best timing and routes for your Ladakh adventure, including acclimatization stops.",
  },
  {
    q: "How experienced are your drivers?",
    a: "All our drivers have extensive experience navigating mountain roads across Kashmir, Ladakh, and Himachal. They are locally trained, licenced, and know every route, shortcut, and safe stop along the way.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-ivory">
      <div className="container-main mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before booking your North India journey."
          />
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl overflow-hidden card-shadow">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={open === i}
                >
                  <span className="text-sm md:text-base font-heading font-semibold text-midnight group-hover:text-steel transition-colors duration-300">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-midnight/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 text-midnight" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm font-body text-slate leading-relaxed border-t border-midnight/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
