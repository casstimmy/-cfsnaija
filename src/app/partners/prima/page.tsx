import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Prima | Partners",
  description:
    "Prima - Interior systems and fit-out integration partner of Naija Steel Manufacturing.",
};

export default function PrimaPage() {
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
                src="/partners/PRIMA logo.png"
                alt="Prima logo"
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
                Prima
              </h1>
              <p className="text-lg text-gray-300">
                Interior systems and fit-out integration partner for efficient,
                high-quality project completion and modern finishing standards.
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
                tag="About Prima"
                title="Fit-Out & Interior Systems Excellence"
                centered={false}
              />
              <p className="text-steel leading-relaxed">
                Prima delivers practical expertise in interior systems,
                architectural coordination, and fit-out execution. As part of
                Naija Steel&apos;s partner network, Prima helps ensure projects move
                smoothly from structural completion to high-quality finished
                spaces.
              </p>
              <ul className="space-y-3">
                {[
                  "Interior fit-out coordination",
                  "Partition and ceiling integration support",
                  "Material specification alignment",
                  "Finishing quality assurance",
                  "Schedule-driven execution support",
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
                { label: "Completed Fit-Outs", value: "60+" },
                { label: "Years of Experience", value: "9+" },
                { label: "Core Focus", value: "Interior Systems" },
                { label: "Delivery Strength", value: "Quality & Speed" },
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
            Build Better Finishes With Prima
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Contact us to combine structural strength and premium interior
            execution on your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
