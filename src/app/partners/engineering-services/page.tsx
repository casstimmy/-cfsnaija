import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Engineering Services | Partners",
  description:
    "Engineering Services - Structural design and site engineering partner of Naija Steel Manufacturing Ltd.",
};

export default function EngineeringServicesPage() {
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
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Strategic Partner
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Engineering Services
            </h1>
            <p className="text-lg text-gray-300">
              Specialist structural design, site engineering, and construction
              supervision ensuring every steel structure meets the highest
              technical standards.
            </p>
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
                tag="About Engineering Services"
                title="Technical Excellence in Steel"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                With over 15 years of experience, Engineering Services is the
                technical backbone of our partnership. They provide comprehensive
                structural design, site engineering supervision, and quality
                assurance for every Naija Steel project. Their expertise ensures
                compliance with international standards and client specifications.
              </p>
              <ul className="space-y-3">
                {[
                  "150+ projects with flawless execution",
                  "Expert structural design & analysis",
                  "ISO-certified quality assurance",
                  "On-site engineering supervision",
                  "Compliance with international codes",
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
                { label: "Projects Supervised", value: "150+", icon: "🏗️" },
                { label: "Years of Experience", value: "15+", icon: "⏱️" },
                { label: "Licensed Engineers", value: "30+", icon: "👨‍🔬" },
                { label: "Defect Rate", value: "<1%", icon: "✅" },
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
            title="Our Engineering Solutions"
            subtitle="Comprehensive technical expertise for steel manufacturing and construction projects."
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Structural Design",
                desc: "Advanced structural analysis and design using cutting-edge CAD and simulation software.",
              },
              {
                title: "Site Engineering",
                desc: "On-site technical oversight ensuring structural integrity and compliance with design specifications.",
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous testing, inspections, and certifications ensuring highest material and workmanship standards.",
              },
              {
                title: "Technical Consulting",
                desc: "Expert consultation on material selection, fabrication methods, and construction techniques.",
              },
              {
                title: "Compliance & Standards",
                desc: "Ensuring adherence to international building codes and Nigerian construction standards.",
              },
              {
                title: "Problem Solving",
                desc: "Custom engineering solutions for complex structural challenges and unique project requirements.",
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
            Engineer Your Next Structural Solution
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Contact our team to discuss your steel construction project and how
            our engineering expertise can ensure its success.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Request Engineering Support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
