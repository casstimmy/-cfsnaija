import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Wrench,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((item) => item.id === id);

  return {
    title: project ? `${project.title} | Projects` : "Project Not Found",
    description: project?.description ?? "Project details",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Project Not Found</h1>
          <p className="text-steel mb-8">
            We couldn&apos;t find the project you&apos;re looking for.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </section>

      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">
              {project.client}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-gold" />
                  Project Overview
                </h2>
                <p className="text-steel leading-relaxed text-base">
                  {project.fullDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-gold" />
                  Scope of Work
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.scopeOfWork.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-steel leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <Layers className="h-5 w-5 text-gold" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-gold/30 hover:shadow-sm transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green shrink-0" />
                      <span className="text-sm text-navy font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy">Project Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, index) => (
                    <div
                      key={img}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <h3 className="font-bold text-navy text-lg border-b border-gray-200 pb-3">
                  Project Details
                </h3>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Client
                  </p>
                  <p className="text-navy font-semibold text-sm">{project.client}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Location
                  </p>
                  <p className="text-navy font-semibold text-sm">
                    {project.location}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Status
                  </p>
                  <p className="text-sm font-semibold text-navy">{project.status}</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy hover:bg-gold-dark transition-colors shadow-lg shadow-gold/20"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready for Your Next Project?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let&apos;s discuss how our steel construction expertise can bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:border-gold hover:text-gold transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
