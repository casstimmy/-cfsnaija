import type { LucideIcon } from "lucide-react";

export interface ServiceDefinition {
  icon: string; // lucide icon name for dynamic usage
  title: string;
  description: string;
}

export const SERVICES: ServiceDefinition[] = [
  {
    icon: "Building2",
    title: "CFS Smart Building Construction",
    description:
      "Sustainable, eco-friendly building construction using state-of-the-art cold-formed steel technology for residential and commercial projects.",
  },
  {
    icon: "PanelTop",
    title: "Aluminum & Glass Fabrication",
    description:
      "Precision aluminum and glass fabrication for facades, windows, doors, partitions, and architectural elements.",
  },
  {
    icon: "Wrench",
    title: "Plumbing & Electrical",
    description:
      "Complete plumbing and electrical installations, maintenance, and upgrades for commercial and residential properties.",
  },
  {
    icon: "Factory",
    title: "Cold Form Steel (CFS) Fabrication",
    description:
      "Advanced CFS fabrication using automated roll-forming machines, delivering structural components with unmatched precision.",
  },
  {
    icon: "Hammer",
    title: "Facility Remodeling",
    description:
      "Expert remodeling services that transform existing spaces into modern, functional environments tailored to your needs.",
  },
  {
    icon: "Paintbrush",
    title: "Interior & Exterior Decor",
    description:
      "Professional interior and exterior finishing that blends aesthetics with durability for lasting impressions.",
  },
  {
    icon: "HardHat",
    title: "Site Engineering & Supervision",
    description:
      "On-site engineering oversight and project supervision to ensure quality standards and timeline adherence.",
  },
  {
    icon: "LayoutGrid",
    title: "Gypsum Board Installation",
    description:
      "Professional gypsum board installation for walls and ceilings, delivering smooth finishes and sound insulation.",
  },
  {
    icon: "Layers",
    title: "Cement Board Installation",
    description:
      "High-performance cement board systems for moisture-resistant and fire-rated wall and ceiling assemblies.",
  },
  {
    icon: "Columns3",
    title: "Drywall Installation",
    description:
      "Expert drywall installation, taping, and finishing for commercial and residential interiors with flawless results.",
  },
  {
    icon: "Plug",
    title: "Home Appliances Installation",
    description:
      "Professional installation of home appliances including HVAC systems, water heaters, and kitchen equipment.",
  },
  {
    icon: "Grid3x3",
    title: "Suspended Ceiling Technology",
    description:
      "Modern suspended ceiling solutions including acoustic tiles, metal panels, and decorative ceiling systems.",
  },
  {
    icon: "Settings",
    title: "Facility Management & Maintenance",
    description:
      "Comprehensive facility management covering preventive maintenance, repairs, and operational support services.",
  },
  {
    icon: "Cog",
    title: "Contech Services",
    description:
      "Construction technology services integrating digital tools, BIM, and smart systems for next-generation building projects.",
  },
];
