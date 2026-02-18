import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, MapPin, Building2 } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "12+ years of proven excellence across residential, commercial, industrial, and specialty steel construction and fabrication projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </section>

      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Project Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            12+ years of proven excellence across residential, commercial,
            industrial, and specialty steel construction and fabrication
            projects.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <article className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-navy/20" />
                  </div>

                  <div className="flex flex-col flex-1 p-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                        {project.client}
                      </p>
                      <h2 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-steel leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2 py-4 border-y border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-steel">
                        <MapPin className="h-4 w-4 text-gold" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-steel">
                        <Building2 className="h-4 w-4 text-gold" />
                        {project.status}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-gold">
                      View Project <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-navy">
            Your Next Steel Project Awaits
          </h2>
          <p className="text-navy/80 max-w-xl mx-auto">
            From conception to completion, our integrated partnership network
            delivers exceptional results. Let&apos;s discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-8 py-3.5 text-sm font-bold text-white hover:bg-navy-dark transition-colors"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
