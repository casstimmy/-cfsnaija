import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Users, Calendar, AlertCircle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  image: string;
  scale: string;
  team: string;
  fullDescription?: string;
  completionDate?: string;
  challenges?: string;
  results?: string;
}

// Project data
const PROJECTS: Project[] = [
  {
    id: "urban-residential-lekki",
    title: "Urban Residential Complex - Lekki, Lagos",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description: "50-unit high-rise residential complex with CFS framing, energy-efficient design, and modern amenities.",
    status: "Completed",
    image: "/projects/project-1.jpg",
    scale: "15,000 sqm",
    team: "Naija Steel + Engineering Services + Invincible Tech",
    fullDescription: "A premier 50-unit high-rise residential complex showcasing advanced CFS (Cold-Formed Steel) framing technology. This project demonstrates our commitment to delivering modern, energy-efficient, and sustainable residential solutions.",
    completionDate: "2023",
    challenges: "Complex structural requirements with tight construction timeline in an urban environment.",
    results: "Delivered 2 months ahead of schedule with zero safety incidents and 100% structural compliance.",
  },
  {
    id: "commercial-office-vi",
    title: "Commercial Office Development - VI, Lagos",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description: "8-story commercial building with complete CFS structural framing and integrated building systems.",
    status: "Completed",
    image: "/projects/project-3.jpg",
    scale: "12,000 sqm",
    team: "Naija Steel + Dee Divine + Engineering Services",
    fullDescription: "An 8-story premium commercial building in Victoria Island featuring cutting-edge CFS structural framing and fully integrated building management systems.",
    completionDate: "2023",
    challenges: "High-rise construction in high-traffic urban location with stringent quality requirements.",
    results: "Achieved LEED certification and exceeded client expectations on both timeline and budget.",
  },
  {
    id: "mixed-use-ikoyi",
    title: "Mixed-Use Development - Ikoyi",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description: "Integrated residential-retail-office development utilizing sustainable CFS construction methods.",
    status: "Ongoing",
    image: "/projects/project-1.jpg",
    scale: "25,000 sqm",
    team: "Naija Steel + All Partners",
    fullDescription: "A comprehensive mixed-use development combining residential, retail, and office spaces using innovative and sustainable CFS construction methods.",
    completionDate: "Q4 2026",
    challenges: "Coordinating multiple functional areas and ensuring seamless integration.",
    results: "On track for delivery with highest safety standards maintained.",
  },
  {
    id: "corporate-headquarters-abuja",
    title: "Corporate Headquarters - Abuja",
    category: "CFS Building Construction",
    location: "Abuja, Nigeria",
    description: "Premium corporate headquarters featuring CFS framing, advanced automation, and executive facilities.",
    status: "Ongoing",
    image: "/projects/project-2.jpg",
    scale: "8,500 sqm",
    team: "Naija Steel + Invincible Tech",
    fullDescription: "A state-of-the-art corporate headquarters in Nigeria's capital featuring advanced CFS structural systems and integrated smart building technologies.",
    completionDate: "Q2 2026",
    challenges: "Integrating cutting-edge automation systems with structural steel requirements.",
    results: "Creating a benchmark for modern corporate infrastructure in Nigeria.",
  },
  {
    id: "industrial-steel-port-harcourt",
    title: "Industrial Steel Framework - Port Harcourt",
    category: "Steel Fabrication & Manufacturing",
    location: "Port Harcourt, Nigeria",
    description: "Large-scale industrial structure with precision-fabricated steel members and complex geometry.",
    status: "Completed",
    image: "/projects/project-2.jpg",
    scale: "18,000 sqm",
    team: "Naija Steel + Engineering Services",
    fullDescription: "A massive industrial steel framework featuring precision-fabricated members and complex geometric configurations for advanced manufacturing operations.",
    completionDate: "2023",
    challenges: "Precision fabrication under strict tolerance requirements and complex assembly coordination.",
    results: "Delivered to exacting standards with zero structural defects.",
  },
  {
    id: "warehouse-complex-fabrication",
    title: "Warehouse Complex Fabrication",
    category: "Steel Fabrication & Manufacturing",
    location: "Lagos, Nigeria",
    description: "Multiple connected warehouses with optimized steel framing for logistics operations.",
    status: "Completed",
    image: "/projects/project-3.jpg",
    scale: "22,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "A multi-warehouse complex with interconnected spaces optimized for logistics and supply chain operations using advanced steel fabrication techniques.",
    completionDate: "2023",
    challenges: "Designing efficient layout while maintaining structural integrity across multiple buildings.",
    results: "Created a highly functional facility that improved client's logistics efficiency by 35%.",
  },
  {
    id: "heavy-duty-steel-kaduna",
    title: "Heavy-Duty Steel Structure - Kaduna",
    category: "Steel Fabrication & Manufacturing",
    location: "Kaduna, Nigeria",
    description: "Custom-designed heavy industrial steel structure with advanced load-bearing capabilities.",
    status: "Completed",
    image: "/projects/project-1.jpg",
    scale: "8,000 sqm",
    team: "Naija Steel + Engineering Services",
    fullDescription: "A custom-designed heavy industrial steel structure engineered to handle extreme loads and demanding operational conditions.",
    completionDate: "2023",
    challenges: "Engineering and fabricating structures for extreme load conditions.",
    results: "Successfully certified for the highest industrial load ratings.",
  },
  {
    id: "arched-structural-system",
    title: "Arched Structural System",
    category: "Steel Fabrication & Manufacturing",
    location: "Lagos, Nigeria",
    description: "Complex arched steel framework showcasing advanced fabrication and precision engineering.",
    status: "Ongoing",
    image: "/projects/project-2.jpg",
    scale: "6,500 sqm",
    team: "Naija Steel + Engineering Services",
    fullDescription: "An innovative arched steel design showcasing advanced fabrication techniques and precision engineering capabilities.",
    completionDate: "Q3 2026",
    challenges: "Fabricating complex curved sections with precise tolerances.",
    results: "Establishing new benchmarks for advanced steel fabrication in Nigeria.",
  },
  {
    id: "hotel-renovation",
    title: "Hotel Renovation & Modernization",
    category: "Facility Renovation & Upgrade",
    location: "Lagos, Nigeria",
    description: "Complete 60-room hotel renovation including structural upgrades and integrated technology systems.",
    status: "Completed",
    image: "/projects/project-3.jpg",
    scale: "5,000 sqm",
    team: "All Partner Network",
    fullDescription: "A comprehensive renovation of a 60-room hotel facility including structural upgrades, modern amenities, and integrated smart building systems.",
    completionDate: "2022",
    challenges: "Conducting renovations while maintaining hotel operations.",
    results: "Successfully modernized the facility, increasing booking rates by 45%.",
  },
  {
    id: "educational-institution-remodeling",
    title: "Educational Institution Remodeling",
    category: "Facility Renovation & Upgrade",
    location: "Lagos, Nigeria",
    description: "Multi-block educational facility renovated with modern classrooms, labs, and administrative spaces.",
    status: "Completed",
    image: "/projects/project-1.jpg",
    scale: "10,000 sqm",
    team: "Naija Steel + Invincible Tech",
    fullDescription: "A multi-year educational facility renovation creating state-of-the-art learning environments with modern infrastructure.",
    completionDate: "2023",
    challenges: "Phased renovation without disrupting academic calendar.",
    results: "Created award-winning educational infrastructure.",
  },
  {
    id: "healthcare-facility-upgrade",
    title: "Healthcare Facility Upgrade",
    category: "Facility Renovation & Upgrade",
    location: "Abuja, Nigeria",
    description: "Hospital facility expansion with CFS framing and advanced medical facility infrastructure.",
    status: "Ongoing",
    image: "/projects/project-2.jpg",
    scale: "7,500 sqm",
    team: "Naija Steel + All Partners",
    fullDescription: "A modern healthcare facility expansion featuring advanced medical infrastructure and CFS structural systems.",
    completionDate: "Q1 2026",
    challenges: "Meeting strict healthcare facility standards and codes.",
    results: "Advancing healthcare infrastructure in the region.",
  },
  {
    id: "agricultural-processing-center",
    title: "Agricultural Processing Center",
    category: "Specialty Structures",
    location: "Ogun State, Nigeria",
    description: "Agricultural facility with climate-controlled storage and processing areas.",
    status: "Completed",
    image: "/projects/project-3.jpg",
    scale: "4,000 sqm",
    team: "Naija Steel + Engineering Services",
    fullDescription: "A specialized agricultural processing facility featuring climate-controlled environments and advanced storage systems.",
    completionDate: "2023",
    challenges: "Designing for optimal climate control while maintaining structural integrity.",
    results: "Facility increased agricultural output and reduced post-harvest loss by 40%.",
  },
  {
    id: "data-center-infrastructure",
    title: "Data Center Infrastructure",
    category: "Specialty Structures",
    location: "Lagos, Nigeria",
    description: "Secure data center with advanced environmental controls and redundant systems.",
    status: "Completed",
    image: "/projects/project-1.jpg",
    scale: "3,500 sqm",
    team: "Naija Steel + Invincible Tech",
    fullDescription: "A high-security data center featuring sophisticated environmental control systems and redundant infrastructure.",
    completionDate: "2023",
    challenges: "Integrating complex technical systems with structural requirements.",
    results: "Certified for tier-4 data center standards.",
  },
  {
    id: "manufacturing-facility-phase-2",
    title: "Manufacturing Facility - Phase 2",
    category: "Specialty Structures",
    location: "Lagos, Nigeria",
    description: "Manufacturing facility with production floors, quality control labs, and administrative offices.",
    status: "Ongoing",
    image: "/projects/project-2.jpg",
    scale: "12,000 sqm",
    team: "All Partners",
    fullDescription: "The second phase of a comprehensive manufacturing facility expansion.",
    completionDate: "Q3 2026",
    challenges: "Phased construction without disrupting existing operations.",
    results: "Increasing production capacity by 60%.",
  },
  {
    id: "retail-commerce-center",
    title: "Retail Commerce Center",
    category: "Specialty Structures",
    location: "Lekki, Lagos",
    description: "Modern retail and entertainment center with integrated parking and traffic flow systems.",
    status: "Completed",
    image: "/projects/project-3.jpg",
    scale: "9,000 sqm",
    team: "Naija Steel + Dee Divine",
    fullDescription: "A modern retail and entertainment center featuring innovative design and integrated transportation systems.",
    completionDate: "2023",
    challenges: "Handling complex traffic flow requirements in a busy commercial area.",
    results: "Became a landmark retail destination with high tenant satisfaction.",
  },
];

const STATUS_STYLES: Record<string, string> = {
  Completed: "bg-green/10 text-green",
  Ongoing: "bg-gold/10 text-gold-dark",
  Upcoming: "bg-navy/10 text-navy",
};

export const metadata: Metadata = {
  title: "Project Details",
  description: "Explore detailed information about Naija Steel Manufacturing's project portfolio.",
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Project Not Found</h1>
          <p className="text-steel mb-8">We couldn't find the project you're looking for.</p>
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
      {/* Back button */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end">
          <div className="w-full p-8 sm:p-12">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                STATUS_STYLES[project.status]
              }`}
            >
              {project.status}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy">Project Overview</h2>
                <p className="text-steel leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-gold" />
                    Challenges
                  </h3>
                  <p className="text-steel leading-relaxed">{project.challenges}</p>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-navy">Results & Impact</h3>
                  <p className="text-steel leading-relaxed">{project.results}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info Cards */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    Category
                  </p>
                  <p className="text-navy font-semibold">{project.category}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Location
                  </p>
                  <p className="text-navy font-semibold">{project.location}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                    Scale
                  </p>
                  <p className="text-navy font-semibold">{project.scale}</p>
                </div>
                {project.completionDate && (
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      Completion
                    </p>
                    <p className="text-navy font-semibold">{project.completionDate}</p>
                  </div>
                )}
              </div>

              {/* Team */}
              <div className="bg-navy p-6 rounded-xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  Project Team
                </p>
                <p className="text-sm text-gray-300">{project.team}</p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="block w-full text-center rounded-lg bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-dark transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready for Your Next Project?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let's discuss how Naija Steel's expertise can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3 text-sm font-bold text-navy hover:bg-gold-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
