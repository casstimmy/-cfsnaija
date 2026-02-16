import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Invinvincible Tech And Integrated Services Ltd. Request a quote, ask a question, or schedule a consultation.",
};

const PRIMARY_CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "0802 868 7687",
    href: "tel:08028687687",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "invincibletech13@gmail.com",
    href: "mailto:invincibletech13@gmail.com",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/2348028687687?text=Hello%20Invinvincible%20Tech,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    color: "from-green-500 to-green-600",
  },
];

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 8 AM – 6 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark to-navy-light -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Need a quote? We&rsquo;d love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      </section>

      {/* ═══════ CONTACT CONTENT ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left – Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold text-navy">
                  Get in Touch
                </h2>
                <p className="text-steel leading-relaxed">
                  Connect with us via phone, email, WhatsApp, or our contact form.
                  We respond within 24 hours.
                </p>
              </div>

              {/* Primary Contact Methods - Prominent Buttons */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-steel-light mb-4">
                  Direct Contact Options
                </p>
                <div className="space-y-3">
                  {PRIMARY_CONTACT_METHODS.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${method.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      <method.icon className="h-5 w-5 shrink-0" />
                      <div>
                        <p className="text-sm font-bold">{method.label}</p>
                        <p className="text-xs opacity-90">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Secondary Contact Info */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                {CONTACT_DETAILS.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold mt-0.5">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-steel-light">
                        {item.label}
                      </p>
                      <p className="text-navy font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company name */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-bold text-navy">
                  Invinvincible Tech And Integrated Services Ltd
                </p>
                <p className="text-xs text-steel mt-1">
                  Smart. Sustainable. Integrated Engineering Solutions.
                </p>
              </div>
            </div>

            {/* Right – Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 sm:p-10">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-steel">
                    Fill out the form below and we&rsquo;ll get back to you as
                    soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
