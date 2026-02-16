import Link from "next/link";
import Image from "next/image";
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
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import PartnerCard from "@/components/PartnerCard";
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
    title: "Steel Expertise",
    text: "Over a decade of combined experience in cold-formed steel manufacturing, fabrication, and construction.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    text: "Eco-friendly steel construction methods that reduce waste, lower carbon footprint, and promote recyclability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Rigorous quality control at every stage — from raw material to finished structure — ensuring the highest standards.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    text: "Efficient manufacturing processes and modern fabrication technology guarantee timely project completion.",
  },
  {
    icon: Puzzle,
    title: "Integrated Solutions",
    text: "One partner for design, fabrication, installation, and maintenance — seamless end-to-end steel solutions.",
  },
];

/* ── Partners ── */
const PARTNERS = [
  {
    name: "Dee Divine Solutions",
    desc: "Project management, logistics support, and strategic coordination.",
    image: "/partners/dee-divine.svg",
  },
  {
    name: "Invincible Tech & Integrated Services Ltd",
    desc: "Construction technology, facility management, and integrated building services.",
    image: "/partners/invincible-tech.svg",
  },
];

/* ── Executive Team ── */
const TEAM = [
  {
    name: "Oyeleke Daniel",
    role: "CEO",
    image: "/team/Person1.jpg",
    bio: "With over 10 years of experience in steel manufacturing, Daniel has successfully led projects that increased operational efficiency and market share.",
  },
  {
    name: "Emmanuel C. Bernard",
    role: "COO",
    image: "/team/person2.jpg",
    bio: "An operations expert with 8 years of experience in manufacturing operations, Bernard specializes in optimizing production workflows and implementing cost-saving strategies.",
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
            {/* Left — image block */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                  alt="Naija Steel construction site with steel framework"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/40 flex items-end p-6">
                  <p className="text-white text-lg font-semibold drop-shadow-lg">
                    Building Nigeria&rsquo;s Future in Steel
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
                title="Nigeria's Trusted Steel Manufacturer"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                Naija Steel Manufacturing Ltd is a leading steel manufacturing
                and construction company specializing in cold-formed steel (CFS)
                solutions. From precision fabrication to full-scale building
                construction, we deliver projects that stand the test of time —
                combining modern technology with expert craftsmanship.
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
            subtitle="Comprehensive steel manufacturing, fabrication, and construction services delivered with precision and quality."
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

      {/* ═══════ EXECUTIVE TEAM ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Leadership"
            title="Executive Team"
            subtitle="The experienced leaders driving Naija Steel's vision of excellence in steel manufacturing."
          />

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gold/20 hover:border-gold/40 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_30%] group-hover:scale-125 transition-transform duration-500"
                    sizes="128px"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-lg font-bold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-sm text-steel mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Our Advantage"
            title="Why Choose Naija Steel"
            subtitle="We bring together expertise, precision manufacturing, and commitment to deliver lasting value on every project."
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

      {/* ═══════ PARTNERS ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Strategic Collaboration"
            title="Our Partner Network"
            subtitle="Together with industry leaders, we deliver comprehensive steel manufacturing and construction excellence."
          />

          <div className="grid sm:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
            {PARTNERS.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 rounded-md border-2 border-navy px-6 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              View Our Partnership Network <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ PROCESS & QUALITY ═══════ */}
      <section className="py-20 lg:py-28 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Operational Excellence"
            title="Our Process"
            subtitle="A rigorous, client-centered methodology ensuring excellence at every stage."
            light
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation & Design",
                description:
                  "In-depth understanding of your vision, requirements, and constraints. Expert design feedback and technical feasibility assessment.",
              },
              {
                number: "02",
                title: "Engineering & Planning",
                description:
                  "Structural analysis, detailed engineering drawings, material specifications, and comprehensive project planning with timelines.",
              },
              {
                number: "03",
                title: "Fabrication & Manufacturing",
                description:
                  "Advanced CFS manufacturing, precision fabrication, rigorous quality testing, and on-site logistics coordination.",
              },
              {
                number: "04",
                title: "Installation & Handover",
                description:
                  "Professional on-site installation, final inspections, certification, training, and comprehensive maintenance support.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-gold/20 mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Client Success"
            title="What Our Clients Say"
            subtitle="Real feedback from successful projects across Nigeria."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Segun Adewale",
                company: "Lagos Property Developers Ltd",
                role: "Project Director",
                feedback:
                  "Naija Steel delivered our residential project on time and within budget. Their professionalism and precision fabrication exceeded our expectations.",
                project: "50-Unit Residential Complex",
              },
              {
                name: "Chioma Okafor",
                company: "Federal Ministry of Works",
                role: "Sr. Projects Manager",
                feedback:
                  "The partnership between Naija Steel, Engineering Services, and Dee Divine Solutions provided seamless project execution. Highly recommended for government contracts.",
                project: "Commercial Office Complex",
              },
              {
                name: "Ibrahim Hassan",
                company: "Industrial Manufacturing Group",
                role: "Operations Manager",
                feedback:
                  "Their steel fabrication quality is outstanding. The precision and durability of their structures ensure minimal maintenance over years of operation.",
                project: "25,000 sqm Warehouse Facility",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-steel leading-relaxed mb-6">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-xs text-steel-light uppercase mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-steel mb-2">{testimonial.company}</p>
                  <p className="text-xs font-semibold text-gold">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-light -z-10" />
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gold/10 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&rsquo;s Build Your Vision in Steel
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Partner with Naija Steel Manufacturing Ltd to transform your
            construction and engineering projects. Get in touch today for a
            free consultation and quote.
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
