"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Naija Steel Manufacturing Logo"
              width={80}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-gold bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-md bg-gold text-navy hover:bg-gold-light transition-colors"
            >
              Request Quote
            </Link>

            <button
              type="button"
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          className="md:hidden bg-navy-light border-t border-white/10 animate-fade-in"
          aria-label="Mobile"
        >
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-gold bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center px-4 py-2.5 text-sm font-semibold rounded-md bg-gold text-navy hover:bg-gold-light transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
