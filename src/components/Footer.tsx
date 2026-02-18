import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Handshake } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  "Steel Manufacturing & Fabrication",
  "CFS Building Construction",
  "Aluminum & Glass Fabrication",
  "Structural Steel Solutions",
  "Site Engineering & Supervision",
];

const PARTNERS = [
  "Dee Divine Solutions",
  "Invincible Tech & Integrated Services Ltd",
  "CIG International Holdings",
  "PRIMA",
  "CARPE DIEM",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Naija Steel Manufacturing Logo"
                width={72}
                height={72}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Nigeria&rsquo;s trusted steel manufacturing company — precision
              fabrication, CFS construction, and integrated engineering
              solutions.
            </p>
            {/* Partners */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 flex items-center gap-1.5">
                <Handshake className="h-3.5 w-3.5" /> Our Partners
              </p>
              <ul className="space-y-1">
                {PARTNERS.map((p) => (
                  <li key={p} className="text-xs text-gray-500">{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a href="tel:08028687687" className="hover:text-white transition-colors">
                  0802 868 7687
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <a
                  href="mailto:invincibletech13@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  invincibletech13@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; 2026 CFS Naija steel Manufacturing Ltd. All Rights Reserved.
          </p>
          <p className="text-gray-500">
            Precision steel&nbsp;&bull;&nbsp;Built to last
          </p>
        </div>
      </div>
    </footer>
  );
}
