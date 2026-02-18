import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projects/hero3.jpg"
          alt="Steel structure manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold tracking-wide uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Nigeria&rsquo;s Trusted Steel Manufacturer
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Precision{" "}
            <span className="text-gold">Steel Manufacturing</span>{" "}
            &amp; Construction
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            CFS Naija steel Manufacturing Ltd delivers world-class cold-formed steel
            fabrication, CFS construction, and integrated engineering solutions —
            built with precision, delivered on time.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/20 px-7 py-3.5 text-sm font-bold text-white hover:border-gold hover:text-gold transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
    </section>
  );
}
