import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Precision cold form steel frames manufacturing with an integrated approach to modern construction.",
};

const CORE_VALUES: { icon: typeof Target; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Transparency and honesty in every engagement, building trust that lasts beyond the project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Embracing modern steel technology and creative problem-solving to push the boundaries of manufacturing.",
  },
  {
    icon: Heart,
    title: "Excellence",
    text: "An unwavering commitment to the highest standards of workmanship and product quality.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We work as an extension of your team, aligning our expertise with your goals for shared success.",
  },
  {
    icon: Target,
    title: "Sustainability",
    text: "Prioritizing eco-friendly materials and recyclable steel processes that minimize environmental impact.",
  },
  {
    icon: Eye,
    title: "Accountability",
    text: "Taking ownership of outcomes and delivering on our promises - every project, every time.",
  },
];

const TEAM = [
  {
    name: "Oyeleke Daniel",
    role: "CHIEF EXECUTIVE OFFICER (CEO)",
    image: "/team/Person1.jpg",
    bio: "With over 10 years of experience in steel manufacturing, Daniel has successfully led projects that increased operational efficiency and market share.",
  },
  {
    name: "Emmanuel C. Bernard",
    role: "CHIEF OPERATING OFFICER (COO)",
    image: "/team/person2.jpg",
    bio: "An operations expert with 10 years of experience in manufacturing operations, Bernard specializes in optimizing production workflows and implementing cost-saving strategies.",
  },
];

const PARTNERS = [
  {
    name: "Dee Divine Solutions",
    desc: "Project management, logistics support, and strategic coordination across Nigeria.",
    logo: "/partners/dee-divine.PNG",
    slug: "dee-divine-solutions",
  },
  {
    name: "Invincible Tech & Integrated Services Ltd",
    desc: "Construction technology, facility management, and integrated building services partner.",
    logo: "/partners/invincible-tech.jpeg",
    slug: "invincible-tech",
  },
  {
    name: "CIG International Holdings",
    desc: "Industrial investment support, strategic procurement advisory, and project expansion partnership.",
    logo: "/partners/cig.png",
    slug: "cig-international-holdings",
  },
  {
    name: "Prima",
    desc: "Interior systems support, fit-out coordination, and finishing integration for modern developments.",
    logo: "/partners/PRIMA logo.png",
    slug: "prima",
  },
  {
    name: "CARPE DIEM",
    desc: "Piping and building materials partner supporting quality, durable project delivery.",
    logo: "/partners/CARPE DIEM.jpeg",
    slug: "carpe-diem",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Precision cold form steel frames manufacturing with an integrated
            approach to modern construction.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <SectionHeader tag="OUR STORY" title="Company Overview" />
            <div className="text-steel leading-relaxed space-y-4 text-left">
              <p>
                CFS CFS Naija steel Manufacturing Ltd is a leading steel
                manufacturing and construction company dedicated to delivering
                precision-engineered Cold Form Steel solutions for Nigeria and
                beyond. Founded with a vision to modernize the construction
                landscape, we specialize in cold-formed steel (CFS) Frames
                manufacturing, structural steel manufacturing, and a
                comprehensive range of construction and engineering services.
              </p>
              <p>
                Our team combines deep industry expertise with cutting-edge
                manufacturing technology to serve clients across residential,
                commercial, and industrial sectors. We take pride in our ability
                to handle projects from concept to completion - ensuring quality,
                efficiency, and value at every stage.
              </p>
              <p>
                Headquartered in Nigeria, we work alongside our trusted partners
                - Dee Divine Solutions and Invincible Tech &amp; Integrated
                Services Ltd - to raise the standard of steel construction
                through innovation, professionalism, and a relentless focus on
                client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="LEADERSHIP"
            title="Executive Team"
            subtitle="The experienced leaders driving Naija Steel's vision of excellence in steel manufacturing."
          />

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-28 h-36 mx-auto mb-4 rounded-lg overflow-hidden border-3 border-gold/20 hover:border-gold/40 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_30%] group-hover:scale-125 transition-transform duration-500"
                    sizes="112px"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-steel leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="TRACK RECORD"
            title="Our Achievements"
            subtitle="Proven excellence across decades of steel manufacturing and construction."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
            {[
              {
                stat: "120+",
                label: "Projects Completed",
                desc: "Across residential, commercial, industrial & specialty sectors",
              },
              {
                stat: "250K+",
                label: "Square Meters Delivered",
                desc: "Professional steel structures built to specification",
              },
              {
                stat: "99%",
                label: "Client Satisfaction Rate",
                desc: "Consistent on-time and on-budget delivery",
              },
              {
                stat: "15+",
                label: "Years of Excellence",
                desc: "Industry-leading experience & expertise",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <p className="text-4xl font-bold text-gold mb-2">{item.stat}</p>
                <p className="font-bold text-navy mb-1">{item.label}</p>
                <p className="text-xs text-steel leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Vision</h3>
              </div>
              <p className="text-steel leading-relaxed">
                To be the leading cold form steel manufacturing and construction
                company in Africa, recognized for innovation, precision
                engineering, and excellence in delivering world-class steel
                infrastructure and building solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-navy">Our Mission</h3>
              </div>
              <p className="text-steel leading-relaxed">
                To deliver precision-engineered, sustainable, and cost-effective
                steel manufacturing solutions through advanced cold-formed steel
                technology, skilled craftsmanship, and a commitment to client
                satisfaction - transforming the way structures are built across
                Nigeria and West Africa at large.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="WHAT DRIVES US"
            title="Core Values"
            subtitle="The principles that guide every decision, every project, and every relationship."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((v) => (
              <div
                key={v.title}
                className="group p-6 rounded-xl border border-gray-100 bg-white hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors mb-4">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <SectionHeader
            tag="COLLABORATION"
            title="Our Partners"
            subtitle="We work alongside trusted partners to deliver comprehensive steel and engineering solutions."
          />

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PARTNERS.map((p) => (
              <Link
                key={p.name}
                href={`/partners/${p.slug}`}
                className="group flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 hover:border-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-20 w-20 rounded-xl overflow-hidden mb-4 border-2 border-gray-200 group-hover:border-gold/40 transition-colors bg-white">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-steel leading-relaxed">{p.desc}</p>
                <span className="mt-3 text-xs font-semibold text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="QUALITY ASSURANCE"
            title="Certifications &amp; Standards"
            subtitle="Maintaining the highest international standards in steel manufacturing and construction."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
            {[
              {
                cert: "ISO 9001:2015",
                desc: "Quality Management Systems Certification",
              },
              {
                cert: "ISO 14001:2015",
                desc: "Environmental Management Systems",
              },
              {
                cert: "OHSAS 18001",
                desc: "Occupational Health & Safety Management",
              },
              { cert: "AWS D1.1", desc: "Structural Welding Code - Steel" },
              { cert: "BS EN 1090-1", desc: "Execution of Steel Structures" },
              {
                cert: "Nigerian Building Code",
                desc: "Full Compliance & Certification",
              },
            ].map((item) => (
              <div
                key={item.cert}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-gold/30 hover:shadow-lg transition-all"
              >
                <p className="text-lg font-bold text-gold mb-2">{item.cert}</p>
                <p className="text-sm text-steel">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <SectionHeader
              tag="HOW WE WORK"
              title="Our Approach"
              subtitle="A systematic, client-centered methodology that ensures every project exceeds expectations."
            />

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                {
                  step: "01",
                  title: "Consult & Plan",
                  text: "We start by understanding your vision, requirements, and constraints - then develop a tailored project plan.",
                },
                {
                  step: "02",
                  title: "Design & Engineer",
                  text: "Our engineering team creates precise designs using modern tools, ensuring structural integrity and manufacturing efficiency.",
                },
                {
                  step: "03",
                  title: "Fabricate & Build",
                  text: "State-of-the-art steel fabrication and skilled installation teams bring your project to life with meticulous quality control.",
                },
                {
                  step: "04",
                  title: "Deliver & Support",
                  text: "We hand over on schedule and offer ongoing support and maintenance to protect your investment long-term.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="bg-white p-6 rounded-xl border border-gray-200 space-y-3"
                >
                  <span className="text-3xl font-extrabold text-gold/30">
                    {s.step}
                  </span>
                  <h4 className="font-bold text-navy">{s.title}</h4>
                  <p className="text-sm text-steel leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let&apos;s discuss your next project and how our precision steel
            manufacturing can deliver exceptional results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
