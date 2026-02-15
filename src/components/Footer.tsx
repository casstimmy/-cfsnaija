'use client';

import Link from 'next/link';
import { Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-white">FORGE</span>
            </div>
            <p className="text-gray-400">
              Building tomorrow's structures with today's most innovative cold-formed steel solutions.
            </p>
            <a
              href="https://linkedin.com/company/forgecousa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Design & Engineering',
                'Cold-Formed Steel',
                'Panels & Components',
                'Structural Solutions',
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['The FORGE Difference', 'News', 'Contact', 'Submit RFP'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:4706820851" className="hover:text-white transition-colors">
                  (470) 682-0851
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@forgecousa.com" className="hover:text-white transition-colors">
                  info@forgecousa.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Atlanta, Georgia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 FORGE. All rights reserved. | {' '}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            Designed & built with modern web technology
          </p>
        </div>
      </div>
    </footer>
  );
}
