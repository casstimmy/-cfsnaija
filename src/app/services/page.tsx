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

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive cold form steel frames manufacturing, fabrication, and construction services delivered with precision and built to last.",
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

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

const CFSNAIJA_SERVICES: ServiceItem[] = [
  {
    icon: "Factory",
    title: "Cold Form Steel Frames Manufacturing",
    description:
      "Advanced cold-formed steel frames manufacturing using automated roll-forming machines, delivering structural components with unmatched precision and consistency.",
  },
  {
    icon: "Building2",
    title: "CFS Building Construction",
    description:
      "Sustainable, eco-friendly building construction using state-of-the-art cold-formed steel technology for residential, commercial, and industrial projects.",
  },
  {
    icon: "Layers",
    title: "Structural Steel Solutions",
    description:
      "Custom structural steel design, fabrication, and erection for buildings, warehouses, and industrial facilities of all scales.",
  },
];

const ITIS_SERVICES: ServiceItem[] = [
  {
    icon: "PanelTop",
    title: "Aluminum & Glass Fabrication",
    description:
      "Precision aluminum and glass fabrication for facades, windows, doors, partitions, and architectural elements.",
  },
  {
    icon: "HardHat",
    title: "Site Engineering & Supervision",
    description:
      "On-site engineering oversight and project supervision to ensure quality standards and timeline adherence on every build.",
  },
  {
    icon: "Wrench",
    title: "Plumbing & Electrical",
    description:
      "Complete plumbing and electrical installations, maintenance, and upgrades for commercial and residential properties.",
  },
  {
    icon: "Hammer",
    title: "Facility Remodeling",
    description:
      "Expert remodeling services that transform existing spaces into modern, functional environments tailored to your needs.",
  },
  {
    icon: "Paintbrush",
    title: "Interior & Exterior Finishing",
    description:
      "Professional interior and exterior finishing that blends aesthetics with durability for lasting impressions.",
  },
  {
    icon: "LayoutGrid",
    title: "Gypsum Board Installation",
    description:
      "Professional gypsum board installation for walls and ceilings, delivering smooth finishes and sound insulation.",
  },
  {
    icon: "Columns3",
    title: "Drywall Installation",
    description:
      "Expert drywall installation, taping, and finishing for commercial and residential interiors with flawless results.",
  },
  {
    icon: "Grid3x3",
    title: "Suspended Ceiling Technology",
    description:
      "Modern suspended ceiling solutions including acoustic tiles, metal panels, and decorative ceiling systems.",
  },
  {
    icon: "Settings",
    title: "Facility Management & Maintenance",
    description:
      "Comprehensive facility management covering preventive maintenance, repairs, and operational support services.",
  },
  {
    icon: "Plug",
    title: "Home Appliances Installation",
    description:
      "Professional installation of home appliances including HVAC systems, water heaters, and kitchen equipment.",
  },
  {
    icon: "Cog",
    title: "Contech Services",
    description:
      "Construction technology services integrating digital tools, BIM, and smart systems for next-generation building projects.",
  },
];

function ServiceGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((svc) => {
        const Icon = ICON_MAP[svc.icon] ?? Cog;
        return (
          <article
            key={svc.title}
            className="group relative bg-white rounded-xl border border-gray-200 p-7 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-1 rounded-t-xl bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy">{svc.title}</h3>
              <p className="text-sm text-steel leading-relaxed">{svc.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive cold form steel frames manufacturing, fabrication, and
            construction services - delivered with precision and built to last.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="WHAT WE OFFER"
            title="CFSNAIJA STEEL MANUFACTURING LTD."
            subtitle="End-to-End Engineering Solutions"
          />

          <p className="text-center max-w-3xl mx-auto text-steel">
            From design and fabrication to installation and maintenance - we
            cover every phase of your project.
          </p>

          <ServiceGrid services={CFSNAIJA_SERVICES} />

          <div className="pt-8 border-t border-gray-200">
            <SectionHeader
              centered={false}
              title="INVINCIBLE TEC AND INTEGRATED SERVICES LTD. (ITIS)"
            />
          </div>

          <ServiceGrid services={ITIS_SERVICES} />
        </div>
      </section>

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
