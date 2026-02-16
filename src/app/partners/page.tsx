import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet our strategic partners working alongside Naija Steel Manufacturing to deliver comprehensive steel and engineering solutions across Nigeria.",
};

const PARTNERS = [
  {
    name: "Dee Divine Solutions",
    slug: "dee-divine-solutions",
    logo: "/partners/dee-divine.svg",
    focus: "Project Management & Logistics",
    description:
      "Strategic partner specializing in comprehensive project management, supply chain optimization, and logistics coordination across Nigeria.",
    services: [
      "Project Management",
      "Supply Chain Logistics",
      "Material Sourcing",
      "Site Coordination",
    ],
    projects: "100+",
    experience: "12+ years",
  },
  {
    name: "Invincible Tech & Integrated Services Ltd",
    slug: "invincible-tech",
    logo: "/partners/invincible-tech.svg",
    focus: "Construction Technology & Facility Management",
    description:
      "Building technology partner offering facility management, construction tech integration, and integrated building services.",
    services: [
      "Construction Technology",
      "Facility Management",
      "Building Automation",
      "Maintenance Services",
    ],
    projects: "80+",
    experience: "10+ years",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Partners
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strategic collaborations that drive excellence in steel manufacturing
            and comprehensive construction solutions.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ PARTNERS GRID ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Strategic Partners"
            title="Our Collaborative Network"
            subtitle="Together, we deliver end-to-end steel manufacturing and construction solutions of the highest caliber."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {PARTNERS.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-gold/40 transition-all duration-300"
              >
                {/* Accent bar */}
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Logo */}
                <div className="relative h-16 w-16 rounded-lg overflow-hidden mb-6 border-2 border-gray-200 group-hover:border-gold/40 transition-colors">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                      {partner.focus}
                    </p>
                    <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">
                      {partner.name}
                    </h3>
                  </div>

                  <p className="text-sm text-steel leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100">
                    <div>
                      <p className="text-xs font-semibold text-steel-light uppercase">Projects</p>
                      <p className="text-lg font-bold text-navy">{partner.projects}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-steel-light uppercase">Experience</p>
                      <p className="text-lg font-bold text-navy">{partner.experience}</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-steel-light uppercase">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {partner.services.slice(0, 2).map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-full bg-navy/5 text-navy"
                        >
                          {s}
                        </span>
                      ))}
                      <span className="text-xs px-2.5 py-1 rounded-full bg-navy/5 text-navy">
                        +{partner.services.length - 2} more
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-gold group-hover:text-gold-dark transition-colors pt-2">
                    Learn More <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY PARTNER ═══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Collaborative Excellence"
            title="Why We Partner"
            subtitle="Our strategic partnerships amplify our capabilities and deliver superior value."
          />

          <div className="grid md:grid-cols-4 gap-8 pt-12">
            {[
              {
                title: "Complementary Expertise",
                text: "Each partner brings specialized knowledge in their domain, creating a comprehensive service ecosystem.",
              },
              {
                title: "Shared Values",
                text: "We align on quality, professionalism, sustainability, and customer-centric innovation.",
              },
              {
                title: "Seamless Integration",
                text: "Our coordinated approach ensures smooth project execution from start to finish.",
              },
              {
                title: "Proven Track Record",
                text: "Combined experience of 300+ successful projects across Nigeria and beyond.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-steel">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Partner for Your Next Project?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Our integrated network is ready to deliver comprehensive steel
            manufacturing and construction solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
