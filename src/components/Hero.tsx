import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Construction site with steel structure"
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
            Integrated Engineering Solutions
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Smart. Sustainable.{" "}
            <span className="text-gold">Integrated Engineering</span>{" "}
            Solutions.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            From cold-formed steel construction to facility management,
            Invinvincible Tech delivers end-to-end engineering services that
            transform your vision into reality — on time, on budget, and built
            to last.
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
