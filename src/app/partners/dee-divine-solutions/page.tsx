import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Dee Divine Solutions | Partners",
  description:
    "Dee Divine Solutions - Strategic project management and logistics partner of Naija Steel Manufacturing Ltd.",
};

export default function DeeDivineSolutionsPage() {
  return (
    <>
      {/* ═══════ BACK BUTTON ═══════ */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Partners
          </Link>
        </div>
      </section>

      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex items-start gap-6">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden border-2 border-gold/30 shrink-0 bg-navy-dark">
              <Image
                src="/partners/dee-divine.svg"
                alt="Dee Divine Solutions logo"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div>
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Strategic Partner
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Dee Divine Solutions
            </h1>
            <p className="text-lg text-gray-300">
              Expert project management and logistics coordination ensuring seamless
              execution of complex steel manufacturing and construction projects.
            </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ OVERVIEW ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader
                tag="About Dee Divine Solutions"
                title="Project Management Excellence"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                Dee Divine Solutions brings over 12 years of expertise in managing
                complex construction and manufacturing projects across Nigeria. As
                Naija Steel's strategic logistics and project management partner,
                they ensure every project— from material sourcing to final delivery—
                is executed with precision and professionalism.
              </p>
              <ul className="space-y-3">
                {[
                  "100+ successfully completed projects",
                  "Proven supply chain optimization",
                  "Real-time site coordination & monitoring",
                  "Cost-effective material sourcing",
                  "On-time delivery guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-steel">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats box */}
            <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
              {[
                { label: "Projects Completed", value: "100+", icon: "📊" },
                { label: "Years of Experience", value: "12+", icon: "⏱️" },
                { label: "Team Members", value: "50+", icon: "👥" },
                { label: "Client Satisfaction", value: "99%", icon: "⭐" },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-b border-gray-200 pb-6 last:border-0">
                  <p className="text-sm font-semibold text-steel-light uppercase mb-2">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-navy">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Core Competencies"
            title="Our Services"
            subtitle="End-to-end project management and logistics solutions tailored to steel manufacturing and construction projects."
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Project Management",
                desc: "Comprehensive project planning, scheduling, and execution oversight across all phases of construction.",
              },
              {
                title: "Supply Chain Logistics",
                desc: "Optimized material sourcing, inventory management, and efficient delivery coordination.",
              },
              {
                title: "Site Coordination",
                desc: "On-site supervision, resource allocation, and real-time project monitoring.",
              },
              {
                title: "Cost Optimization",
                desc: "Strategic procurement and cost management ensuring maximum value delivery.",
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous quality checks and compliance monitoring throughout project execution.",
              },
              {
                title: "Stakeholder Communication",
                desc: "Transparent and regular communication with all project stakeholders.",
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-navy mb-2">{svc.title}</h3>
                <p className="text-sm text-steel">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Leverage Our Partnership
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Contact us to discuss how Naija Steel, Dee Divine Solutions, and
            our partner network can deliver your next steel construction project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
