"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const WHATSAPP_URL =
  "https://wa.me/919419165312?text=Hello%20North%20Singh%20Travels%2C%20I%20am%20interested%20in%20booking%20a%20tour%20package.%20Please%20share%20details%20regarding%20pricing%2C%20itinerary%2C%20hotels%2C%20transport%2C%20and%20availability.";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only: redirect to WhatsApp with form data
    const msg = encodeURIComponent(
      `Hello North Singh Travels,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDestination: ${form.destination}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919419165312?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-midnight">
      <div className="container-main mx-auto">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact Us"
            title="Plan Your Dream Trip"
            description="Reach out via WhatsApp, call, or fill the form. We typically respond within minutes."
            light
          />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Contact info */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Info cards */}
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "Phone Numbers",
                  lines: ["+91 9419165312", "+91 9906036612", "+91 9205065312"],
                  href: "tel:+919419165312",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  lines: ["maharajatravelsraj@gmail.com"],
                  href: "mailto:maharajatravelsraj@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  label: "Instagram",
                  lines: ["@north_singh_travels"],
                  href: "https://www.instagram.com/north_singh_travels",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 sm:gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 sm:p-5 hover:bg-white/[0.08] hover:border-gold/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-white/40 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm font-body text-white/80 group-hover:text-white transition-colors duration-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </a>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-heading font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/35 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp Now
              </a>

              {/* Google Maps */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08]" style={{ height: 200 }}>
                <iframe
                  src="https://maps.google.com/maps?q=North+Singh+Travels+Katra+Jammu&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="North Maharaja Travels location"
                />
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="left" delay={0.15}>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-5 sm:p-7 md:p-8">
              <h3 className="text-xl font-heading font-bold text-white mb-1">Send an Enquiry</h3>
              <p className="text-sm font-body text-white/50 mb-6">
                Fill in your details and we&apos;ll get back to you shortly via WhatsApp.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-white font-heading font-semibold text-lg">Message Sent!</p>
                  <p className="text-white/50 text-sm font-body text-center">
                    We&apos;ve opened WhatsApp with your message. Our team will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-body font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={(form as Record<string, string>)[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3 text-sm font-body text-white placeholder-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-body font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                      Destination Interest
                    </label>
                    <select
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3 text-sm font-body text-white focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-midnight">Select destination...</option>
                      <option value="Kashmir" className="bg-midnight">Kashmir</option>
                      <option value="Vaishno Devi" className="bg-midnight">Vaishno Devi</option>
                      <option value="Leh-Ladakh" className="bg-midnight">Leh-Ladakh</option>
                      <option value="Amritsar" className="bg-midnight">Amritsar</option>
                      <option value="Himachal Pradesh" className="bg-midnight">Himachal Pradesh</option>
                      <option value="Amarnath Yatra" className="bg-midnight">Amarnath Yatra</option>
                      <option value="Custom" className="bg-midnight">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Group size, travel dates, special requirements..."
                      rows={4}
                      className="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3 text-sm font-body text-white placeholder-white/25 focus:outline-none focus:border-gold/50 focus:bg-white/[0.08] transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-gold-dark text-midnight font-heading font-bold py-3.5 rounded-xl hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5 transition-all duration-300 text-sm"
                  >
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
