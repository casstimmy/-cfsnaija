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

const PROJECT_IMAGE_SETS = {
  marriottIkeja: [
    "/projects/Marriott Hotels Ikeja 1.PNG",
    "/projects/Marriott Hotels Ikeja 2.PNG",
    "/projects/Marriott Hotels Ikeja 3.PNG",
  ],
  millenniumTower: [
    "/projects/Millennium Tower project.jpeg",
    "/projects/Millennium Tower project 1.jpeg",
    "/projects/Millennium Tower project 2.jpeg",
    "/projects/Millennium Tower project 3.jpeg",
  ],
  mixedDevelopments: [
    "/projects/Mixed developments Ogun state.jpeg",
    "/projects/Mixed developments Ogun state 1.jpeg",
  ],
  bananaIslandResidence: [
    "/projects/Banana Island Residence.PNG",
    "/projects/Banana Island Residence 1.jpeg",
    "/projects/Banana Island Residence 2.jpeg",
    "/projects/Banana Island Residence 3.PNG",
    "/projects/Banana Island Residence 4.PNG",
    "/projects/Banana Island Residence 5.jpeg",
  ],
  privateResidence: [
    "/projects/Private Residence 1.jpeg",
    "/projects/Private Residence 2.jpeg",
  ],
} as const;

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
    image: PROJECT_IMAGE_SETS.marriottIkeja[0],
    galleryImages: [...PROJECT_IMAGE_SETS.marriottIkeja],
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
    image: PROJECT_IMAGE_SETS.millenniumTower[0],
    galleryImages: [...PROJECT_IMAGE_SETS.millenniumTower],
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
    image: PROJECT_IMAGE_SETS.mixedDevelopments[0],
    galleryImages: [...PROJECT_IMAGE_SETS.mixedDevelopments],
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
    image: PROJECT_IMAGE_SETS.bananaIslandResidence[0],
    galleryImages: [...PROJECT_IMAGE_SETS.bananaIslandResidence],
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
    image: PROJECT_IMAGE_SETS.privateResidence[0],
    galleryImages: [...PROJECT_IMAGE_SETS.privateResidence],
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
