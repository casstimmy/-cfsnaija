import type { Metadata } from "next";
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Naija Steel Manufacturing's full range of services — steel fabrication, CFS construction, structural steel, and integrated engineering solutions.",
};

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

export default function ServicesPage() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive steel manufacturing, fabrication, and construction
            services — delivered with precision and built to last.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="What We Offer"
            title="End-to-End Engineering Solutions"
            subtitle="From design and fabrication to installation and maintenance — we cover every phase of your project."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon] ?? Cog;
              return (
                <article
                  key={svc.title}
                  className="group relative bg-white rounded-xl border border-gray-200 p-7 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-xl bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-steel leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Our team is standing by to discuss your project requirements and
            provide a tailored proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
