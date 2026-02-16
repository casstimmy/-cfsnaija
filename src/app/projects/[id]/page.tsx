import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Ruler,
  Target,
  TrendingUp,
  Building2,
  Layers,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/* ── Project interface ── */
interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  image: string;
  galleryImages: string[];
  scale: string;
  team: string;
  fullDescription: string;
  completionDate: string;
  challenges: string[];
  results: string[];
  scopeOfWork: string[];
  keyFeatures: string[];
  clientSector: string;
}

/* ── Full project data ── */
const PROJECTS: Project[] = [
  {
    id: "urban-residential-lekki",
    title: "Urban Residential Complex - Lekki, Lagos",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description: "50-unit high-rise residential complex with CFS framing, energy-efficient design, and modern amenities.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    ],
    scale: "15,000 sqm",
    team: "Naija Steel + Dee Divine Solutions + Invincible Tech",
    fullDescription: "A landmark 50-unit residential complex in the prestigious Lekki area of Lagos, built entirely using cold-formed steel (CFS) framing. This project showcases Naija Steel's capability in delivering high-rise residential construction with modern design aesthetics, energy-efficient insulation systems, and premium finishing. The development features smart home integration, rooftop recreational facilities, and underground parking — all supported by precision-engineered CFS structural systems.",
    completionDate: "2023",
    challenges: ["Complex multi-story CFS framing requiring precise load calculations", "Tight urban construction site with limited staging area", "Integration of smart building systems within CFS framework", "Meeting stringent residential building codes and fire safety regulations"],
    results: ["Delivered 3 months ahead of schedule with zero safety incidents", "30% reduction in construction waste compared to traditional methods", "Energy efficiency rating 40% above standard residential buildings", "100% unit occupancy within 6 months of completion"],
    scopeOfWork: ["Structural design and engineering analysis", "CFS frame manufacturing and fabrication", "On-site installation and assembly", "Electrical and plumbing integration", "Interior finishing and handover"],
    keyFeatures: ["Cold-formed steel structural framing", "Energy-efficient insulation system", "Smart home integration", "Rooftop recreational area", "Underground parking facility", "Fire-rated wall assemblies"],
    clientSector: "Residential Real Estate",
  },
  {
    id: "commercial-office-vi",
    title: "Commercial Office Development - VI, Lagos",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description: "8-story commercial building with complete CFS structural framing and integrated building systems.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    ],
    scale: "12,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "An 8-story Grade-A commercial office building in Victoria Island, Lagos — one of Nigeria's premier business districts. The building features full CFS structural framing with open-plan floor plates designed for maximum flexibility. State-of-the-art building management systems, high-speed elevator banks, and a curtain wall facade create a landmark commercial property.",
    completionDate: "2022",
    challenges: ["Designing open floor plates with minimal column interference using CFS", "High-wind load considerations for tall CFS structure", "Coordinating MEP systems within CFS wall cavities", "Achieving Grade-A office specifications with steel construction"],
    results: ["First fully CFS-framed commercial high-rise in Victoria Island", "Construction cost 25% lower than conventional concrete construction", "LEED Silver equivalent sustainability rating achieved", "Fully leased before construction completion"],
    scopeOfWork: ["Architectural coordination and structural engineering", "CFS frame design, fabrication, and installation", "Curtain wall system integration", "Building management system installation", "Final inspection and certification"],
    keyFeatures: ["Open-plan CFS floor plates", "Curtain wall glass facade", "High-speed elevator systems", "Central HVAC integration", "Backup power systems", "Rooftop helipad structure"],
    clientSector: "Commercial Real Estate",
  },
  {
    id: "mixed-use-ikoyi",
    title: "Mixed-Use Development - Ikoyi",
    category: "CFS Building Construction",
    location: "Lagos, Nigeria",
    description: "Integrated residential-retail-office development utilizing sustainable CFS construction methods.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80",
    ],
    scale: "25,000 sqm",
    team: "Naija Steel + All Partners",
    fullDescription: "The largest CFS mixed-use development in Nigeria, combining luxury residential units, premium retail spaces, and flexible office floors. This flagship project exemplifies the collaborative strength of Naija Steel's full partner network, with Dee Divine Solutions managing logistics and Invincible Tech providing smart building automation.",
    completionDate: "Q4 2025",
    challenges: ["Coordinating three different use types within one structural system", "Managing the largest CFS construction project in Nigeria to date", "Integrating sustainable design with premium quality expectations", "Complex phased construction to allow partial early occupancy"],
    results: ["On track for Q4 2025 completion — currently 70% complete", "Pre-sales of residential units exceeded 80% before topping-out", "Expected to reduce carbon footprint by 35% vs. concrete equivalent", "Setting new benchmark for mixed-use CFS construction in Africa"],
    scopeOfWork: ["Master planning and mixed-use structural engineering", "Full CFS frame manufacturing for all building types", "Phased installation across residential, retail, and office zones", "Smart building system integration by Invincible Tech", "Project logistics management by Dee Divine Solutions"],
    keyFeatures: ["Integrated residential, retail & office spaces", "Sustainable CFS construction throughout", "Smart building automation system", "Green rooftop gardens", "Dedicated parking structures", "Community amenity spaces"],
    clientSector: "Mixed-Use Development",
  },
  {
    id: "corporate-headquarters-abuja",
    title: "Corporate Headquarters - Abuja",
    category: "CFS Building Construction",
    location: "Abuja, Nigeria",
    description: "Premium corporate headquarters featuring CFS framing, advanced automation, and executive facilities.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80",
    ],
    scale: "8,500 sqm",
    team: "Naija Steel + Invincible Tech",
    fullDescription: "A prestigious corporate headquarters in Abuja's central business district, designed to reflect the client's brand identity through modern architecture and innovative CFS construction. The facility features executive office suites, a boardroom floor, employee wellness center, and state-of-the-art conference facilities.",
    completionDate: "Q2 2026",
    challenges: ["Achieving premium architectural finishes with CFS structural system", "Integrating comprehensive building automation in a corporate environment", "Meeting executive-grade acoustic isolation requirements", "Navigating Abuja's strict planning and zoning regulations"],
    results: ["Construction progressing on schedule — currently 45% complete", "Structural frame installation completed in record time", "Smart building systems integration underway with Invincible Tech", "Expected to achieve highest green building rating in Abuja"],
    scopeOfWork: ["Corporate facility design and CFS engineering", "Precision CFS frame fabrication and installation", "Executive interior structural support systems", "Building automation and IoT integration", "Landscaping structural elements"],
    keyFeatures: ["Executive office suites with CFS framing", "Full building automation system", "Employee wellness center", "Conference and boardroom floor", "Energy-efficient HVAC design", "Secure executive parking"],
    clientSector: "Corporate",
  },
  {
    id: "industrial-steel-port-harcourt",
    title: "Industrial Steel Framework - Port Harcourt",
    category: "Steel Fabrication & Manufacturing",
    location: "Port Harcourt, Nigeria",
    description: "Large-scale industrial structure with precision-fabricated steel members and complex geometry.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    ],
    scale: "18,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "A massive industrial steel framework project in Port Harcourt's industrial zone, designed to house heavy manufacturing equipment and crane systems. The project required precision fabrication of over 2,000 structural steel members with complex geometries.",
    completionDate: "2023",
    challenges: ["Fabricating 2,000+ structural members with tight dimensional tolerances", "Heavy crane loads requiring specialized beam designs", "Corrosion protection for humid Port Harcourt climate", "Coordinating logistics for oversized steel members"],
    results: ["All structural members passed first-time quality inspection", "Installation completed 6 weeks ahead of schedule", "Structure certified for 50-ton overhead crane operations", "Zero rework required — fabrication precision exceeded 99.5%"],
    scopeOfWork: ["Detailed structural steel engineering and shop drawings", "Fabrication of portal frames, purlins, and girts", "Crane beam manufacturing and installation", "Surface treatment and corrosion protection", "On-site erection and bolting"],
    keyFeatures: ["Heavy-duty portal frame structure", "50-ton crane beam capacity", "Mezzanine office floors", "Advanced corrosion protection coating", "Large-span clear heights", "Integrated drainage systems"],
    clientSector: "Industrial Manufacturing",
  },
  {
    id: "warehouse-complex-fabrication",
    title: "Warehouse Complex Fabrication",
    category: "Steel Fabrication & Manufacturing",
    location: "Lagos, Nigeria",
    description: "Multiple connected warehouses with optimized steel framing for logistics operations.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
    ],
    scale: "22,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "A multi-warehouse logistics complex featuring five interconnected warehouse buildings with shared loading docks and internal circulation. Each warehouse was designed with optimized clear spans to maximize usable floor area for pallet racking and forklift operations.",
    completionDate: "2023",
    challenges: ["Designing efficient interconnected layouts across five buildings", "Maintaining structural integrity at connection points between warehouses", "Optimizing clear-span configurations for logistics operations", "Managing the supply chain for 22,000 sqm of steel components"],
    results: ["Improved client's logistics efficiency by 35%", "22,000 sqm delivered in a single 9-month construction phase", "Clear spans of 30m achieved without intermediate columns", "Awarded 'Best Industrial Project' by Lagos State construction board"],
    scopeOfWork: ["Master layout planning and structural analysis", "Primary and secondary steel fabrication", "Roofing and cladding system installation", "Loading dock and connection structures", "Fire safety systems integration"],
    keyFeatures: ["Five interconnected warehouse units", "30m clear-span capability", "Shared loading dock facilities", "Natural ventilation design", "Heavy-duty floor slab integration", "Fire-rated compartmentation"],
    clientSector: "Logistics & Supply Chain",
  },
  {
    id: "heavy-duty-steel-kaduna",
    title: "Heavy-Duty Steel Structure - Kaduna",
    category: "Steel Fabrication & Manufacturing",
    location: "Kaduna, Nigeria",
    description: "Custom-designed heavy industrial steel structure with advanced load-bearing capabilities.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
    ],
    scale: "8,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "A specialized heavy-duty steel structure in Kaduna engineered for extreme operational loads and demanding industrial conditions. The project involved fabricating extra-heavy steel sections capable of supporting processing equipment weighing up to 100 tons.",
    completionDate: "2023",
    challenges: ["Engineering structures to support 100-ton point loads", "Designing connections for extreme fatigue and vibration loads", "Transporting heavy fabricated sections to the Kaduna site", "Achieving tight timeline despite complex engineering requirements"],
    results: ["Successfully certified for highest industrial load ratings", "Zero structural deficiencies identified in independent audit", "Completed within budget despite heavy-duty specifications", "Structure performing 15% above designed load capacity"],
    scopeOfWork: ["Finite element structural analysis", "Heavy-section steel fabrication", "Connection design and welding", "Transportation and logistics to Kaduna", "On-site erection with heavy-lift cranes"],
    keyFeatures: ["100-ton point load capacity", "Heavy-duty welded connections", "Vibration-dampening design", "Seismic-resistant framing", "Anti-corrosion treatment system", "Integrated equipment platforms"],
    clientSector: "Heavy Industry",
  },
  {
    id: "arched-structural-system",
    title: "Arched Structural System",
    category: "Steel Fabrication & Manufacturing",
    location: "Lagos, Nigeria",
    description: "Complex arched steel framework showcasing advanced fabrication and precision engineering.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    ],
    scale: "6,500 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "An innovative arched steel structure that pushes the boundaries of steel fabrication in Nigeria. The project features complex curved sections fabricated with precision CNC bending and custom jigs, creating dramatic architectural spans up to 45 meters.",
    completionDate: "Q3 2026",
    challenges: ["Fabricating complex curved sections with sub-millimeter tolerances", "Developing custom jigs and bending templates for unique arch profiles", "Ensuring structural integrity across complex geometric transitions", "Managing the aesthetics of exposed structural steel connections"],
    results: ["Successfully fabricated first set of 45m arched spans", "Precision tolerances consistently achieved within 0.5mm", "Establishing new fabrication capabilities for the Nigerian market", "Generating industry recognition for advanced steel fabrication"],
    scopeOfWork: ["Parametric structural design and analysis", "Custom jig development for curved sections", "CNC precision fabrication of arch members", "Assembly and trial erection at factory", "On-site installation with specialized rigging"],
    keyFeatures: ["45m clear-span arched structure", "CNC precision-bent steel members", "Architecturally exposed structural steel", "Complex geometric connection details", "Integrated lighting system within structure", "Drainage and weather protection systems"],
    clientSector: "Architectural & Civic",
  },
  {
    id: "hotel-renovation",
    title: "Hotel Renovation & Modernization",
    category: "Facility Renovation & Upgrade",
    location: "Lagos, Nigeria",
    description: "Complete 60-room hotel renovation including structural upgrades and integrated technology systems.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80",
    ],
    scale: "5,000 sqm",
    team: "All Partner Network",
    fullDescription: "A comprehensive renovation of a 60-room hotel, transforming an aging property into a modern boutique hotel with contemporary design and smart building systems. The project involved structural upgrades using lightweight CFS framing, complete MEP system replacement, and the addition of a rooftop bar and spa.",
    completionDate: "2022",
    challenges: ["Conducting major renovations while maintaining partial hotel operations", "Structural upgrades without compromising existing building integrity", "Coordinating multiple trades in occupied building environment", "Meeting tight 8-month renovation timeline"],
    results: ["Booking rates increased by 45% within first quarter post-renovation", "Hotel rating upgraded from 3-star to 4-star equivalent", "Energy costs reduced by 30% through smart building systems", "Guest satisfaction scores improved from 3.2 to 4.7 out of 5"],
    scopeOfWork: ["Structural assessment and CFS upgrade design", "Room layout reconfiguration and structural support", "Complete MEP system replacement", "Smart building automation installation", "Interior finishing and brand design implementation"],
    keyFeatures: ["Lightweight CFS structural upgrades", "Smart room control systems", "Energy-efficient HVAC replacement", "New rooftop bar and spa addition", "Modern fire safety systems", "Acoustic isolation between rooms"],
    clientSector: "Hospitality",
  },
  {
    id: "educational-institution-remodeling",
    title: "Educational Institution Remodeling",
    category: "Facility Renovation & Upgrade",
    location: "Lagos, Nigeria",
    description: "Multi-block educational facility renovated with modern classrooms, labs, and administrative spaces.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80",
    ],
    scale: "10,000 sqm",
    team: "Naija Steel + Invincible Tech",
    fullDescription: "A multi-phase educational facility renovation transforming aging classroom blocks into state-of-the-art learning environments. The project covered 6 building blocks including classrooms, science laboratories, a library, and administrative offices.",
    completionDate: "2023",
    challenges: ["Phased renovation across 6 blocks without disrupting the academic calendar", "Structural reinforcement of aging concrete buildings with CFS systems", "Integrating modern technology infrastructure into older building fabric", "Working around strict educational facility safety regulations"],
    results: ["Created award-winning educational infrastructure", "Student enrollment increased by 25% following renovation", "Teacher satisfaction improved by 60% with modern facilities", "Building energy consumption reduced by 35% through smart systems"],
    scopeOfWork: ["Building condition assessment across all 6 blocks", "CFS structural reinforcement and partition systems", "Laboratory and classroom layout redesign", "Smart classroom technology installation", "Campus building management system deployment"],
    keyFeatures: ["CFS structural reinforcement system", "Smart classroom technology", "Modern science laboratories", "Campus-wide building management", "Accessible design compliance", "Energy-efficient lighting system"],
    clientSector: "Education",
  },
  {
    id: "healthcare-facility-upgrade",
    title: "Healthcare Facility Upgrade",
    category: "Facility Renovation & Upgrade",
    location: "Abuja, Nigeria",
    description: "Hospital facility expansion with CFS framing and advanced medical facility infrastructure.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80",
      "https://images.unsplash.com/photo-1519494026894-ae92ec1e4235?w=600&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    ],
    scale: "7,500 sqm",
    team: "Naija Steel + All Partners",
    fullDescription: "A critical healthcare facility expansion adding new surgical suites, an ICU wing, and outpatient clinic spaces. The project uses CFS framing chosen for its speed of construction, cleanliness during installation, and ability to meet stringent healthcare building codes.",
    completionDate: "Q1 2026",
    challenges: ["Meeting strict healthcare facility building codes and standards", "Constructing adjacent to an active hospital without disruption", "Specialized MEP requirements for surgical and ICU environments", "Infection control during construction in a medical setting"],
    results: ["New surgical suite structural frame completed ahead of schedule", "Zero construction-related incidents affecting hospital operations", "Healthcare infrastructure capacity increasing by 40% upon completion", "Expected to advance regional healthcare standards significantly"],
    scopeOfWork: ["Healthcare facility structural engineering", "CFS frame design meeting medical facility codes", "Clean-room compatible construction methodology", "Medical gas and HVAC system structural support", "Infection control barrier construction management"],
    keyFeatures: ["Healthcare-grade CFS construction", "Surgical suite structural support", "ICU-standard environmental controls", "Medical gas system infrastructure", "Emergency power system housing", "Patient accessibility throughout"],
    clientSector: "Healthcare",
  },
  {
    id: "agricultural-processing-center",
    title: "Agricultural Processing Center",
    category: "Specialty Structures",
    location: "Ogun State, Nigeria",
    description: "Agricultural facility with climate-controlled storage and processing areas.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    ],
    scale: "4,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "A specialized agricultural processing facility designed with climate-controlled environments for crop processing, grading, and storage. The steel structure features insulated panel systems, controlled atmosphere storage rooms, and processing lines.",
    completionDate: "2023",
    challenges: ["Designing for optimal climate control while maintaining structural integrity", "Integrating specialized agricultural processing equipment", "Meeting food-safety standards in structural design and materials", "Managing construction in a rural location with limited infrastructure"],
    results: ["Agricultural output increased and post-harvest loss reduced by 40%", "Facility processes 500 tons of produce per month", "Climate control maintains optimal conditions year-round", "Created 120 direct employment opportunities in the region"],
    scopeOfWork: ["Agricultural facility structural design", "Steel frame fabrication with insulation integration", "Climate control system structural support", "Processing line foundations and equipment mounting", "Cold storage room construction"],
    keyFeatures: ["Climate-controlled storage chambers", "Insulated panel wall systems", "Heavy-duty processing floor", "Loading and distribution bay", "Waste management integration", "Solar panel roof mounting system"],
    clientSector: "Agriculture & Food Processing",
  },
  {
    id: "data-center-infrastructure",
    title: "Data Center Infrastructure",
    category: "Specialty Structures",
    location: "Lagos, Nigeria",
    description: "Secure data center with advanced environmental controls and redundant systems.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    ],
    scale: "3,500 sqm",
    team: "Naija Steel + Invincible Tech",
    fullDescription: "A high-security Tier-3 data center featuring precision-engineered steel structural systems designed to support dense server rack configurations, massive cooling infrastructure, and redundant power systems.",
    completionDate: "2023",
    challenges: ["Meeting Tier-3 data center structural and environmental standards", "Integrating complex cooling, power, and fire suppression systems", "Designing for extreme floor loading from dense server racks", "Achieving required vibration isolation for sensitive equipment"],
    results: ["Certified for Tier-3+ data center operational standards", "PUE (Power Usage Effectiveness) rating of 1.4 — industry leading", "Zero unplanned downtime since commissioning", "Facility supporting 500+ enterprise clients"],
    scopeOfWork: ["Data center structural engineering to Tier-3 standards", "Steel frame and raised floor system construction", "Environmental control system infrastructure", "Redundant power system structural support", "Fire suppression and security system integration"],
    keyFeatures: ["Tier-3 certified steel structure", "Raised floor system for cable management", "Redundant cooling infrastructure", "N+1 power system configuration", "Advanced fire suppression system", "Biometric security perimeter"],
    clientSector: "Technology & Data",
  },
  {
    id: "manufacturing-facility-phase-2",
    title: "Manufacturing Facility - Phase 2",
    category: "Specialty Structures",
    location: "Lagos, Nigeria",
    description: "Manufacturing facility with production floors, quality control labs, and administrative offices.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    ],
    scale: "12,000 sqm",
    team: "All Partners",
    fullDescription: "The second phase of a major manufacturing facility expansion, adding new production halls, quality control laboratories, and modern administrative offices. This phase increases the client's production capacity by 60%.",
    completionDate: "Q3 2026",
    challenges: ["Phased construction without disrupting existing Phase 1 operations", "Integrating new structures with existing facility infrastructure", "Designing for automated material handling and robotic systems", "Meeting pharma-grade clean room standards in QC laboratory areas"],
    results: ["Phase 2 structural frame 55% complete and on schedule", "Expected to increase production capacity by 60%", "New lean layout to improve operational efficiency by 25%", "Creating 200+ new manufacturing jobs upon completion"],
    scopeOfWork: ["Phase 2 facility master planning and engineering", "Production hall steel frame fabrication and erection", "QC laboratory clean-room structural systems", "Administrative block CFS construction", "Integration tunnels connecting Phase 1 and Phase 2"],
    keyFeatures: ["Automated material handling support structures", "Clean-room grade QC laboratory spaces", "Heavy-duty production floor systems", "Integration with Phase 1 facility", "Modern administrative offices with CFS", "Employee welfare and amenity spaces"],
    clientSector: "Manufacturing",
  },
  {
    id: "retail-commerce-center",
    title: "Retail Commerce Center",
    category: "Specialty Structures",
    location: "Lekki, Lagos",
    description: "Modern retail and entertainment center with integrated parking and traffic flow systems.",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    ],
    scale: "9,000 sqm",
    team: "Naija Steel + Dee Divine Solutions",
    fullDescription: "A vibrant retail and entertainment center in Lekki featuring innovative architectural design, integrated multi-level parking, and intelligent traffic flow systems. The steel structure enables large open retail floor plates and dramatic double-height entrance atriums.",
    completionDate: "2023",
    challenges: ["Handling complex traffic flow requirements in busy Lekki corridor", "Designing flexible retail spaces with minimal structural interference", "Creating dramatic architectural spaces with exposed steel features", "Managing multiple retail tenant fit-out coordination"],
    results: ["Became a landmark retail destination with 95% tenant occupancy", "High tenant satisfaction with flexible steel-framed retail units", "Traffic management system reduced congestion by 40%", "Footfall exceeded projections by 30% in first year of operation"],
    scopeOfWork: ["Architectural steel engineering and design coordination", "Retail unit steel frame fabrication and installation", "Multi-level parking structure construction", "Atrium and feature steel element fabrication", "Traffic management infrastructure"],
    keyFeatures: ["Large-span retail floor plates", "Double-height entrance atriums", "Multi-level integrated parking", "Flexible tenant fit-out capability", "Architecturally exposed steel features", "Smart traffic flow management system"],
    clientSector: "Retail & Entertainment",
  },
];

/* ── Static params for SSG ── */
export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  return {
    title: project ? `${project.title} | Naija Steel Manufacturing` : "Project Not Found",
    description: project?.description ?? "Project details",
  };
}

const STATUS_STYLES: Record<string, string> = {
  Completed: "bg-green/10 text-green border-green/20",
  Ongoing: "bg-gold/10 text-gold-dark border-gold/20",
  Upcoming: "bg-navy/10 text-navy border-navy/20",
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Project Not Found</h1>
          <p className="text-steel mb-8">We couldn&rsquo;t find the project you&rsquo;re looking for.</p>
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const related = PROJECTS.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* ═══════ BACK BUTTON ═══════ */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* ═══════ HERO IMAGE ═══════ */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent flex items-end">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${STATUS_STYLES[project.status]}`}>{project.status}</span>
              <span className="text-xs font-medium text-gray-300 px-3 py-1 rounded-full border border-white/20">{project.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* ═══════ PROJECT DETAILS GRID ═══════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* ── Main Content ── */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-gold" />
                  Project Overview
                </h2>
                <p className="text-steel leading-relaxed text-base">{project.fullDescription}</p>
              </div>

              {/* Scope of Work */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-gold" />
                  Scope of Work
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.scopeOfWork.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-steel leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy flex items-center gap-2">
                  <Layers className="h-5 w-5 text-gold" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-gold/30 hover:shadow-sm transition-all">
                      <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-sm text-navy font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Results */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-navy/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-gold" />
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-steel leading-relaxed">
                        <span className="text-gold font-bold mt-0.5">{String(i + 1).padStart(2, "0")}.</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gold/5 p-6 rounded-xl space-y-4">
                  <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Results &amp; Impact
                  </h3>
                  <ul className="space-y-3">
                    {project.results.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-steel leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-green shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gallery */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy">Project Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                      <Image src={img} alt={`${project.title} - Image ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 33vw, 250px" />
                      <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-5">
                <h3 className="font-bold text-navy text-lg border-b border-gray-200 pb-3">Project Details</h3>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">Category</p>
                  <p className="text-navy font-semibold text-sm">{project.category}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5"><MapPin className="h-4 w-4" />Location</p>
                  <p className="text-navy font-semibold text-sm">{project.location}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5"><Ruler className="h-4 w-4" />Scale</p>
                  <p className="text-navy font-semibold text-sm">{project.scale}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5"><Target className="h-4 w-4" />Client Sector</p>
                  <p className="text-navy font-semibold text-sm">{project.clientSector}</p>
                </div>
                {project.completionDate && (
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5"><Calendar className="h-4 w-4" />{project.status === "Completed" ? "Year Completed" : "Expected Completion"}</p>
                    <p className="text-navy font-semibold text-sm">{project.completionDate}</p>
                  </div>
                )}
              </div>

              <div className="bg-navy p-6 rounded-xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1.5"><Users className="h-4 w-4" />Project Team</p>
                <p className="text-sm text-gray-300 leading-relaxed">{project.team}</p>
              </div>

              <div className={`p-6 rounded-xl border ${STATUS_STYLES[project.status]} space-y-2`}>
                <p className="text-xs font-semibold uppercase tracking-wider">Project Status</p>
                <p className="text-2xl font-bold">{project.status}</p>
                {project.completionDate && (
                  <p className="text-sm opacity-80">{project.status === "Completed" ? `Completed in ${project.completionDate}` : `Target: ${project.completionDate}`}</p>
                )}
              </div>

              <Link href="/contact" className="block w-full text-center rounded-lg bg-gold px-6 py-3.5 font-semibold text-navy hover:bg-gold-dark transition-colors shadow-lg shadow-gold/20">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RELATED PROJECTS ═══════ */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">More Projects</p>
              <h2 className="text-2xl font-bold text-navy">Related {project.category} Projects</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((rp) => (
                <Link key={rp.id} href={`/projects/${rp.id}`}>
                  <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-navy/20" />
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-bold text-navy group-hover:text-gold transition-colors">{rp.title}</h3>
                      <p className="text-xs text-steel line-clamp-2">{rp.description}</p>
                      <div className="flex items-center gap-1 text-xs font-semibold text-gold pt-1">View Project <ArrowRight className="h-3 w-3" /></div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Ready for Your Next Project?</h2>
          <p className="text-gray-300 max-w-xl mx-auto">Let&rsquo;s discuss how Naija Steel&rsquo;s expertise in {project.category.toLowerCase()} can bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:border-gold hover:text-gold transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
