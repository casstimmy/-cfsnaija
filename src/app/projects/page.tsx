import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of completed and ongoing construction and engineering projects.",
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
    title: "Residential CFS Housing Estate",
    category: "CFS Construction",
    description:
      "A 20-unit residential housing estate built entirely with cold-formed steel technology, featuring modern finishes and energy-efficient design.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Office Complex",
    category: "Aluminum & Glass",
    description:
      "Full aluminum and glass curtain-wall fabrication and installation for a 5-story commercial office building in Lagos.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Industrial Warehouse Facility",
    category: "CFS Fabrication",
    description:
      "Design, fabrication, and erection of a 2,000 sqm industrial warehouse using cold-formed steel structural members.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hotel Renovation & Remodeling",
    category: "Facility Remodeling",
    description:
      "Complete interior remodeling of a 60-room hotel including drywall, suspended ceilings, plumbing, and electrical upgrades.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smart School Complex",
    category: "CFS Construction",
    description:
      "Multi-block smart school facility with CFS structure, gypsum board partitions, and modern suspended ceiling systems.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Headquarters Fit-Out",
    category: "Interior Decor",
    description:
      "Premium interior fit-out for a corporate headquarters featuring custom joinery, glass partitions, and decorative ceilings.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare Clinic Build-Out",
    category: "Integrated Services",
    description:
      "Turn-key clinic construction including structural work, MEP systems, drywall, and medical equipment installation.",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mixed-Use Development",
    category: "CFS Construction",
    description:
      "A mixed-use residential and retail development utilizing sustainable CFS framing and modern facade systems.",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
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
            A showcase of the projects that define our commitment to quality and
            innovation.
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
            subtitle="From residential estates to commercial complexes, every project reflects our dedication to engineering excellence."
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

          {/* Note */}
          <p className="text-center text-sm text-steel">
            Project images and detailed case studies will be added as they become available.
          </p>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Share your requirements and let our team craft a solution that fits
            your goals, timeline, and budget.
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
