import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  "CFS Building Construction",
  "Aluminum & Glass Fabrication",
  "Facility Management",
  "Site Engineering",
  "Interior & Exterior Decor",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Invinvincible Tech Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-white font-bold leading-tight">
                Invinvincible&nbsp;Tech
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Smart, sustainable, and integrated engineering solutions for
              modern construction and facility management.
            </p>
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
            &copy; 2026 Invinvincible Tech And Integrated Services Ltd. All
            Rights Reserved.
          </p>
          <p className="text-gray-500">
            Engineered with precision&nbsp;&bull;&nbsp;Built for the future
          </p>
        </div>
      </div>
    </footer>
  );
}
