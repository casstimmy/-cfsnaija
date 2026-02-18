export interface ProjectData {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  scopeOfWork: string[];
  keyFeatures: string[];
  status: "Completed" | "Ongoing" | "Upcoming";
}

function buildProjectImages(projectNumber: number, count = 4): string[] {
  const serial = String(projectNumber).padStart(2, "0");
  return Array.from({ length: count }, (_, index) => {
    const shot = String(index).padStart(2, "0");
    return `/projects/project-image${serial}-${shot}.jpg`;
  });
}

export const PROJECTS: ProjectData[] = [
  {
    id: "cfs-lgs-soundproof-wall-partitioning",
    title: "CFS/LGS Soundproof Wall Partitioning",
    client: "Marriott Hotels Ikeja",
    location: "Ikeja, Lagos",
    description:
      "Our team successfully remodeled executive lounges at Marriott Hotel using advanced steel frame and steel profile systems.",
    fullDescription:
      "Our team successfully remodeled executive lounges at the Marriott Hotel utilizing advanced steel frame and steel profile systems, ensuring structural integrity, speed of construction, and adherence to international standards. This landmark project showcases our expertise in innovative construction solutions for high-end hospitality infrastructure.",
    image: buildProjectImages(1)[0],
    galleryImages: buildProjectImages(1),
    scopeOfWork: [
      "Executive lounge remodeling",
      "Steel frame system supply and installation",
      "Steel profile system integration",
      "International-standard quality control",
    ],
    keyFeatures: [
      "Soundproof wall partitioning",
      "Fast construction delivery",
      "High-end hospitality finish",
      "Structural integrity compliance",
    ],
    status: "Completed",
  },
  {
    id: "ikoyi-millennium-tower-remodeling",
    title: "Ikoyi Millennium Tower Remodeling",
    client: "Bank 78",
    location: "Ikoyi, Lagos",
    description:
      "Our team utilized steel stud framing systems for drywall and plasterboard ceiling installations in this upscale project.",
    fullDescription:
      "Our team utilized steel stud framing systems for drywall and plasterboard ceiling installations, ensuring precision, stability, and a flawless finish in this upscale project.",
    image: buildProjectImages(2)[0],
    galleryImages: buildProjectImages(2),
    scopeOfWork: [
      "Remodeling coordination",
      "Steel stud framing installation",
      "Drywall system installation",
      "Plasterboard ceiling installation",
    ],
    keyFeatures: [
      "Precision framing",
      "Stable ceiling systems",
      "Clean interior finish",
      "Upscale commercial execution",
    ],
    status: "Completed",
  },
  {
    id: "mix-development-ogun-state",
    title: "Mix Development Project, Ogun State",
    client: "Christ Embassy Shopping Mall and Suites",
    location: "Ogun State, Nigeria",
    description:
      "This 7-story steel structure project used steel deck and profile systems with steel framing for partitions, ceilings, and roof construction.",
    fullDescription:
      "This project features a 7-story steel structure utilizing steel deck and profile systems for enhanced structural performance. Steel framing was employed for wall partitions, ceilings, and roof construction, ensuring speed, stability, and architectural flexibility.",
    image: buildProjectImages(3)[0],
    galleryImages: buildProjectImages(3),
    scopeOfWork: [
      "7-story structural steel execution",
      "Steel deck and profile system installation",
      "Wall partition framing",
      "Ceiling and roof steel framing",
    ],
    keyFeatures: [
      "7-story steel structure",
      "Enhanced structural performance",
      "Architectural flexibility",
      "Fast-track delivery approach",
    ],
    status: "Completed",
  },
  {
    id: "banana-island-residence-lgs-roof-trusses",
    title: "Banana Island Residence LGS Roof Trusses",
    client: "Private Residence",
    location: "Banana Island, Lagos",
    description:
      "High-performance cold-formed steel roof system with supplied and installed CFS/LGS profiles and omega sections.",
    fullDescription:
      "This project features a high-performance cold-formed steel (CFS) roof system. Our team supplied and installed CFS/LGS profiles and omega sections, expertly assembled to deliver a durable and efficient roofing solution tailored to the project's unique requirements.",
    image: buildProjectImages(4)[0],
    galleryImages: buildProjectImages(4),
    scopeOfWork: [
      "Roof system design support",
      "CFS/LGS profile supply",
      "Omega section supply and installation",
      "Roof assembly and final checks",
    ],
    keyFeatures: [
      "High-performance CFS roofing",
      "Durable truss assembly",
      "Tailored residential solution",
      "Efficient installation sequence",
    ],
    status: "Completed",
  },
  {
    id: "interior-finishing-private-residence",
    title: "Interior Finishing Project - Private Residence",
    client: "Private Residence",
    location: "Lagos, Nigeria",
    description:
      "Supply and installation of non-load-bearing steel framing systems for interior partitions to optimize space and efficiency.",
    fullDescription:
      "Our team supplied and installed non-load-bearing steel framing systems for interior partitions, optimizing space and efficiency. This application highlights the versatility and practicality of steel frame solutions for residential enhancements.",
    image: buildProjectImages(5)[0],
    galleryImages: buildProjectImages(5),
    scopeOfWork: [
      "Interior partition planning",
      "Non-load-bearing framing supply",
      "Steel framing installation",
      "Finishing coordination",
    ],
    keyFeatures: [
      "Space optimization",
      "Efficient partition layout",
      "Residential adaptability",
      "Practical steel-frame application",
    ],
    status: "Completed",
  },
];
