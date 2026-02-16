import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Users, ArrowLeft } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Naija Steel Manufacturing's portfolio of steel construction and fabrication projects across Nigeria.",
};

interface Project {
  title: string;
  id: string;
  category: string;
  location: string;
  description: string;

  image: string;
  scale: string;
  team: string;
}

const PROJECTS: Project[] = [
  // CFS Construction Projects
  {
    title: "Urban Residential Complex - Lekki, Lagos",
    id: "urban-residential-lekki",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description:
      "50-unit high-rise residential complex with CFS framing, energy-efficient design, and modern amenities.",
        image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    scale: "15,000 sqm",
    team: "Naija Steel + Dee Divine Solutions + Invincible Tech",
  },
  {
    title: "Commercial Office Development - VI, Lagos",
    id: "commercial-office-vi",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description:
      "8-story commercial building with complete CFS structural framing and integrated building systems.",
        image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    scale: "12,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },
  {
    title: "Mixed-Use Development - Ikoyi",
    id: "mixed-use-ikoyi",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description:
      "Integrated residential-retail-office development utilizing sustainable CFS construction methods.",
        image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    scale: "25,000 sqm",
    team: "Naija Steel + All Partners",
  },
  {
    title: "Corporate Headquarters - Abuja",
    id: "corporate-headquarters-abuja",
    category: "CFS Building Construction",
    location: "Abuja, Nigeria",
    description:
      "Premium corporate headquarters featuring CFS framing, advanced automation, and executive facilities.",
        image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    scale: "8,500 sqm",
    team: "Naija Steel + Invincible Tech",
  },

  // Steel Fabrication Projects
  {
    title: "Industrial Steel Framework - Port Harcourt",
    id: "industrial-steel-port-harcourt",
    category: "Steel Fabrication & Manufacturing",
    location: "Port Harcourt, Nigeria",
    description:
      "Large-scale industrial structure with precision-fabricated steel members and complex geometry.",
        image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    scale: "18,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },
  {
    title: "Warehouse Complex Fabrication",
    id: "warehouse-complex-fabrication",
    category: "Steel Fabrication & Manufacturing",
    location: "Lagos, Nigeria",
    description:
      "Multiple connected warehouses with optimized steel framing for logistics operations.",
        image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    scale: "22,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },
  {
    title: "Heavy-Duty Steel Structure - Kaduna",
    id: "heavy-duty-steel-kaduna",
    category: "Steel Fabrication & Manufacturing",
    location: "Kaduna, Nigeria",
    description:
      "Custom-designed heavy industrial steel structure with advanced load-bearing capabilities.",
        image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    scale: "8,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },
  {
    title: "Arched Structural System",
    id: "arched-structural-system",
    category: "Steel Fabrication & Manufacturing",
    location: "Lagos, Nigeria",
    description:
      "Complex arched steel framework showcasing advanced fabrication and precision engineering.",
        image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80",
    scale: "6,500 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },

  // Facility & Renovation Projects
  {
    title: "Hotel Renovation & Modernization",
    id: "hotel-renovation",
    category: "Facility Renovation & Upgrade",
    location: "Lagos, Nigeria",
    description:
      "Complete 60-room hotel renovation including structural upgrades and integrated technology systems.",
        image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    scale: "5,000 sqm",
    team: "All Partner Network",
  },
  {
    title: "Educational Institution Remodeling",
    id: "educational-institution-remodeling",
    category: "Facility Renovation & Upgrade",
    location: "Lagos, Nigeria",
    description:
      "Multi-block educational facility renovated with modern classrooms, labs, and administrative spaces.",
        image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    scale: "10,000 sqm",
    team: "Naija Steel + Invincible Tech",
  },
  {
    title: "Healthcare Facility Upgrade",
    id: "healthcare-facility-upgrade",
    category: "Facility Renovation & Upgrade",
    location: "Abuja, Nigeria",
    description:
      "Hospital facility expansion with CFS framing and advanced medical facility infrastructure.",
        image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    scale: "7,500 sqm",
    team: "Naija Steel + All Partners",
  },

  // Specialty Projects
  {
    title: "Agricultural Processing Center",
    id: "agricultural-processing-center",
    category: "Specialty Structures",
    location: "Ogun State, Nigeria",
    description:
      "Agricultural facility with climate-controlled storage and processing areas.",
        image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    scale: "4,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },
  {
    title: "Data Center Infrastructure",
    id: "data-center-infrastructure",
    category: "Specialty Structures",
    location: "Lagos, Nigeria",
    description:
      "Secure data center with advanced environmental controls and redundant systems.",
        image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    scale: "3,500 sqm",
    team: "Naija Steel + Invincible Tech",
  },
  {
    title: "Manufacturing Facility - Phase 2",
    id: "manufacturing-facility-phase-2",
    category: "Specialty Structures",
    location: "Lagos, Nigeria",
    description:
      "Manufacturing facility with production floors, quality control labs, and administrative offices.",
        image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    scale: "12,000 sqm",
    team: "All Partners",
  },
  {
    title: "Retail Commerce Center",
    id: "retail-commerce-center",
    category: "Specialty Structures",
    location: "Lekki, Lagos",
    description:
      "Modern retail and entertainment center with integrated parking and traffic flow systems.",
        image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    scale: "9,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
  },
];

const CATEGORIES = [
  "CFS Building Construction",
  "Steel Fabrication & Manufacturing",
  "Facility Renovation & Upgrade",
  "Specialty Structures",
];

export default function ProjectsPage() {
  return (
    <>
      {/* ═══════ BACK BUTTON ═══════ */}
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

      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Project Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            12+ years of proven excellence across residential, commercial,
            industrial, and specialty steel construction and fabrication
            projects.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "120+" },
              { label: "Total Area Delivered", value: "250K+ sqm" },
              { label: "Active Partnerships", value: "3+" },
              { label: "Client Rate", value: "99%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-gold mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROJECTS BY CATEGORY ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {CATEGORIES.map((category) => {
            const categoryProjects = PROJECTS.filter(
              (p) => p.category === category
            );
            return (
              <div key={category}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-2">
                    {category}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-light rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {categoryProjects.map((project) => (
                    <Link
                      key={project.title}
                      href={`/projects/${project.id}`}
                    >
                      <article className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full cursor-pointer">
                        {/* Thumbnail */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-navy/20" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6 space-y-4">
                          <div>
                            <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                              {project.title}
                            </h3>
                            <p className="text-sm text-steel leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Project details */}
                          <div className="space-y-2 py-4 border-y border-gray-100">
                            <div className="flex items-center gap-2 text-sm text-steel">
                              <MapPin className="h-4 w-4 text-gold" />
                              {project.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-steel">
                              <span className="text-xs font-semibold text-gold uppercase">
                                Scale:
                              </span>
                              {project.scale}
                            </div>
                          </div>

                          {/* Team */}
                          <div className="flex items-start gap-2">
                            <Users className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                            <p className="text-xs text-steel-light">
                              {project.team}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-navy">
            Your Next Steel Project Awaits
          </h2>
          <p className="text-navy/80 max-w-xl mx-auto">
            From conception to completion, our integrated partnership network
            delivers exceptional results. Let&rsquo;s discuss your vision.
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
