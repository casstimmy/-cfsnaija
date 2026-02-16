import Link from "next/link";
import {
  Building2,
  PanelTop,
  Wrench,
  Factory,
  Hammer,
  Paintbrush,
  HardHat,
  LayoutGrid,
  Layers,
  Columns3,
  Plug,
  Grid3x3,
  Settings,
  Cog,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Medal,
  Clock,
  Puzzle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services-data";

/* ── Icon map for data-driven rendering ── */
const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  PanelTop,
  Wrench,
  Factory,
  Hammer,
  Paintbrush,
  HardHat,
  LayoutGrid,
  Layers,
  Columns3,
  Plug,
  Grid3x3,
  Settings,
  Cog,
};

/* ── Why Choose Us data ── */
const STRENGTHS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Medal,
    title: "Industry Expertise",
    text: "Decades of combined experience in CFS construction and integrated engineering services.",
  },
  {
    icon: Leaf,
    title: "Sustainable Construction",
    text: "Eco-friendly materials and methods that reduce waste and minimize environmental impact.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Craftsmanship",
    text: "Rigorous quality control at every stage ensures structures built to the highest standards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "Efficient project management and modern fabrication technology guarantee timely completion.",
  },
  {
    icon: Puzzle,
    title: "Integrated Solutions",
    text: "One partner for design, fabrication, installation, and maintenance — seamless end-to-end service.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <Hero />

      {/* ═══════ ABOUT PREVIEW ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — decorative block */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-light overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-gold/20 text-gold">
                    <Building2 className="h-10 w-10" />
                  </div>
                  <p className="text-white text-lg font-semibold">
                    Building the Future, Today
                  </p>
                </div>
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-gold/20 -z-10" />
            </div>

            {/* Right — copy */}
            <div className="space-y-6">
              <SectionHeader
                tag="Who We Are"
                title="Engineering Excellence, Integrated Delivery"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                Invinvincible Tech And Integrated Services Ltd is a
                forward-thinking engineering and construction company
                specializing in cold-formed steel solutions, facility
                management, and a comprehensive suite of building services. We
                combine modern technology with hands-on craftsmanship to deliver
                projects that stand the test of time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="What We Do"
            title="Our Services"
            subtitle="Comprehensive engineering and construction services delivered with precision, quality, and sustainability."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((svc) => (
              <ServiceCard
                key={svc.title}
                icon={ICON_MAP[svc.icon] ?? Cog}
                title={svc.title}
                description={svc.description}
              />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Our Advantage"
            title="Why Choose Invinvincible Tech"
            subtitle="We bring together expertise, technology, and commitment to deliver lasting value on every project."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {STRENGTHS.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{s.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA BANNER ═══════ */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-light -z-10" />
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gold/10 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&rsquo;s Build Your Vision
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Partner with us to transform your construction and engineering
            projects. Get in touch today for a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
