import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "CIG International Holdings | Partners",
  description:
    "CIG International Holdings - Industrial investment and strategic expansion partner of Naija Steel Manufacturing.",
};

export default function CigInternationalHoldingsPage() {
  return (
    <>
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

      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex items-start gap-6">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-xl overflow-hidden border-2 border-gold/30 shrink-0 bg-white">
              <Image
                src="/partners/cig-international-holdings.svg"
                alt="CIG International Holdings logo"
                fill
                className="object-contain p-2"
                sizes="96px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Strategic Partner
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                CIG International Holdings
              </h1>
              <p className="text-lg text-gray-300">
                Strategic investment and expansion partner supporting large-scale
                steel infrastructure growth and long-term industrial execution.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader
                tag="About CIG International Holdings"
                title="Industrial Growth & Investment Support"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                CIG International Holdings supports growth-focused construction
                and engineering ventures through strategic investment, expansion
                planning, and high-value industrial collaboration. As a partner
                in the Naija Steel ecosystem, CIG contributes to the scale-up of
                manufacturing and project delivery capabilities.
              </p>
              <ul className="space-y-3">
                {[
                  "Industrial investment strategy support",
                  "Infrastructure growth advisory",
                  "Strategic procurement planning",
                  "Partnership and expansion structuring",
                  "Long-term value creation initiatives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-steel">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
              {[
                { label: "Strategic Programs", value: "40+" },
                { label: "Years of Experience", value: "15+" },
                { label: "Regional Footprint", value: "West Africa" },
                { label: "Partnership Focus", value: "Long-term Growth" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center border-b border-gray-200 pb-6 last:border-0"
                >
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

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Explore Strategic Collaboration
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Contact us to discuss how CIG International Holdings and Naija Steel
            can drive your next high-impact project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Discuss Opportunities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
