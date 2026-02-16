import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Invincible Tech & Integrated Services | Partners",
  description:
    "Invincible Tech & Integrated Services Ltd - Construction technology and facility management partner of Naija Steel Manufacturing.",
};

export default function InvincibleTechPage() {
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
                src="/partners/invincible-tech.jpeg"
                alt="Invincible Tech logo"
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
              Invincible Tech &amp; Integrated Services Ltd
            </h1>
            <p className="text-lg text-gray-300">
              Cutting-edge construction technology, integrated facility management,
              and building automation solutions for modern steel structures.
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
                tag="About Invincible Tech"
                title="Technology-Driven Facility Management"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                Invincible Tech & Integrated Services Ltd brings innovation and
                technology expertise to the construction ecosystem. With 10+ years
                of experience, they specialize in building automation, facility
                management, and integrated construction technology—ensuring that
                Naija Steel buildings perform optimally throughout their lifecycle.
              </p>
              <ul className="space-y-3">
                {[
                  "80+ tech-integrated projects",
                  "Smart building automation systems",
                  "Comprehensive facility management",
                  "Preventive maintenance programs",
                  "Energy-efficient solutions",
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
                { label: "Buildings Managed", value: "80+", icon: "🏢" },
                { label: "Years of Experience", value: "10+", icon: "⏱️" },
                { label: "Tech Specialists", value: "25+", icon: "💻" },
                { label: "Client Retention", value: "95%", icon: "🤝" },
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
            title="Our Technology Solutions"
            subtitle="Comprehensive facility management and construction technology services."
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Building Automation",
                desc: "IoT and smart systems for HVAC, lighting, security, and energy management.",
              },
              {
                title: "Facility Management",
                desc: "Comprehensive maintenance, cleaning, security, and operational support services.",
              },
              {
                title: "Energy Management",
                desc: "Optimization strategies to reduce energy consumption and operational costs.",
              },
              {
                title: "Preventive Maintenance",
                desc: "Scheduled maintenance programs ensuring maximum building asset longevity.",
              },
              {
                title: "Construction Tech",
                desc: "BIM, project management software, and digital construction documentation.",
              },
              {
                title: "Long-term Support",
                desc: "Post-construction support and ongoing facility optimization.",
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
            Build Smart. Manage Efficiently.
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Contact us to integrate modern technology and facility management
            into your steel construction project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Schedule a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
