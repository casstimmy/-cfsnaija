import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Naija Steel Manufacturing's portfolio of steel construction and fabrication projects across Nigeria.",
};

interface Project {
  title: string;
  category: string;
  description: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: "Residential CFS Steel Framed Building",
    category: "CFS Construction",
    description:
      "A precision-engineered residential building constructed entirely with cold-formed steel framing, featuring modern landscaping and sustainable design elements.",
    status: "Completed",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Arched Steel Structure Fabrication",
    category: "Steel Fabrication",
    description:
      "Large-scale arched steel structural fabrication showcasing our advanced manufacturing capabilities for complex architectural steel designs.",
    status: "Completed",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Multi-Building Commercial Complex",
    category: "Commercial Construction",
    description:
      "Full-scale commercial complex construction using cold-formed steel technology, featuring multiple multi-story buildings with CFS framing and panel cladding.",
    status: "Ongoing",
    image: "/projects/project-3.jpg",
  },
  {
    title: "Industrial Warehouse Facility",
    category: "Industrial Steel",
    description:
      "Design, fabrication, and erection of a large industrial warehouse using cold-formed steel structural members for maximum durability.",
    status: "Completed",
    image: "/projects/project-2.jpg",
  },
  {
    title: "Residential Housing Estate",
    category: "CFS Construction",
    description:
      "A multi-unit residential housing estate built with cold-formed steel, featuring modern finishes and energy-efficient design throughout.",
    status: "Ongoing",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Steel Roof Truss Manufacturing",
    category: "Steel Manufacturing",
    description:
      "Custom steel roof truss manufacturing and installation for residential and commercial buildings across Nigeria.",
    status: "Completed",
    image: "/projects/project-3.jpg",
  },
];

const STATUS_STYLES: Record<Project["status"], string> = {
  Completed: "bg-green/10 text-green",
  Ongoing: "bg-gold/10 text-gold-dark",
  Upcoming: "bg-navy/10 text-navy",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of the steel manufacturing and construction projects that
            define our commitment to quality and precision.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ PROJECTS GRID ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="Portfolio"
            title="Featured Work"
            subtitle="From residential steel-framed buildings to large-scale commercial complexes, every project reflects our dedication to steel manufacturing excellence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gold/5 hover:border-gold/30 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy/20" />
                  {/* Status badge */}
                  <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${
                      STATUS_STYLES[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-navy">
                    {project.title}
                  </h3>
                  <p className="text-sm text-steel leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Share your requirements and let our team craft a steel solution that
            fits your goals, timeline, and budget.
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
