import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Invinvincible Tech And Integrated Services Ltd — our vision, mission, values, and approach to smart, sustainable engineering.",
};

const CORE_VALUES: { icon: typeof Target; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Transparency and honesty in every engagement, building trust that lasts beyond the project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Embracing modern technology and creative problem-solving to push the boundaries of construction.",
  },
  {
    icon: Heart,
    title: "Excellence",
    text: "An unwavering commitment to the highest standards of workmanship and service delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We work as an extension of your team, aligning our expertise with your goals for shared success.",
  },
  {
    icon: Target,
    title: "Sustainability",
    text: "Prioritizing eco-friendly materials and processes that minimize environmental impact.",
  },
  {
    icon: Eye,
    title: "Accountability",
    text: "Taking ownership of outcomes and delivering on our promises — every project, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Engineering excellence with an integrated approach to modern construction.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ COMPANY OVERVIEW ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <SectionHeader
              tag="Our Story"
              title="Company Overview"
            />
            <div className="text-steel leading-relaxed space-y-4 text-left">
              <p>
                Invinvincible Tech And Integrated Services Ltd is a
                multidisciplinary engineering and construction firm dedicated to
                delivering smart, sustainable, and integrated building solutions.
                Founded with a vision to modernize the construction landscape,
                we specialize in cold-formed steel (CFS) building technology,
                facility management, and a comprehensive range of engineering
                services.
              </p>
              <p>
                Our team combines deep industry expertise with cutting-edge
                technology to serve clients across residential, commercial, and
                industrial sectors. We take pride in our ability to handle
                projects from concept to completion — ensuring quality,
                efficiency, and value at every stage.
              </p>
              <p>
                Headquartered in Nigeria, we are committed to raising the
                standard of construction through innovation, professionalism,
                and a relentless focus on client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VISION & MISSION ═══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Vision</h3>
              </div>
              <p className="text-steel leading-relaxed">
                To be the leading integrated engineering and construction
                services company in Africa, recognized for innovation,
                sustainability, and excellence in delivering world-class
                infrastructure and building solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Mission</h3>
              </div>
              <p className="text-steel leading-relaxed">
                To deliver smart, sustainable, and cost-effective engineering
                solutions through advanced cold-formed steel technology,
                skilled craftsmanship, and a commitment to client satisfaction —
                transforming the way structures are built, maintained, and
                managed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CORE VALUES ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="What Drives Us"
            title="Core Values"
            subtitle="The principles that guide every decision, every project, and every relationship."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((v) => (
              <div
                key={v.title}
                className="group p-6 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OUR APPROACH ═══════ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <SectionHeader
              tag="How We Work"
              title="Our Approach"
              subtitle="A systematic, client-centered methodology that ensures every project exceeds expectations."
            />

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                {
                  step: "01",
                  title: "Consult & Plan",
                  text: "We start by understanding your vision, requirements, and constraints — then develop a tailored project plan.",
                },
                {
                  step: "02",
                  title: "Design & Engineer",
                  text: "Our engineering team creates precise designs using modern tools, ensuring structural integrity and efficiency.",
                },
                {
                  step: "03",
                  title: "Fabricate & Build",
                  text: "State-of-the-art fabrication and skilled installation teams bring your project to life with meticulous quality control.",
                },
                {
                  step: "04",
                  title: "Deliver & Maintain",
                  text: "We hand over on schedule and offer ongoing facility management to protect your investment long-term.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-white p-6 rounded-xl border border-gray-200 space-y-3"
                >
                  <span className="text-3xl font-extrabold text-gold/30">
                    {s.step}
                  </span>
                  <h4 className="font-bold text-navy">{s.title}</h4>
                  <p className="text-sm text-steel leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let&rsquo;s discuss your next project and how our integrated
            approach can deliver exceptional results.
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
