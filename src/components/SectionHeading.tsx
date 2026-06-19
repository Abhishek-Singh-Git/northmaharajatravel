"use client";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-10 sm:mb-14 md:mb-16">
      <span
        className={`inline-block text-xs font-body font-semibold uppercase tracking-[0.25em] mb-3 ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold leading-tight mb-3 sm:mb-4 ${
          light ? "text-white" : "text-midnight"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-body font-light leading-relaxed ${
            light ? "text-white/65" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <span className={`w-8 h-[2px] ${light ? "bg-white/20" : "bg-midnight/10"}`} />
        <span className="w-2 h-2 rounded-full bg-gold" />
        <span className={`w-8 h-[2px] ${light ? "bg-white/20" : "bg-midnight/10"}`} />
      </div>
    </div>
  );
}
