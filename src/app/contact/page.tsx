import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Building2, Shield } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Naija Steel Manufacturing Ltd. Request a quote, ask a question, or schedule a consultation.",
};

const PRIMARY_CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call Us Directly",
    value: "0802 868 7687",
    subtext: "Speak with our team — available during business hours",
    href: "tel:08028687687",
    gradient: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Mail,
    label: "Send an Email",
    value: "invincibletech13@gmail.com",
    subtext: "We respond to all inquiries within 24 hours",
    href: "mailto:invincibletech13@gmail.com",
    gradient: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Us",
    value: "Chat on WhatsApp",
    subtext: "Get instant support and quick project estimates",
    href: "https://wa.me/2348028687687?text=Hello%20Naija%20Steel%20Manufacturing,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    gradient: "from-green-500 to-green-600",
    shadow: "shadow-green-500/20",
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
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-navy">
                  Get in Touch
                </h2>
                <p className="text-steel leading-relaxed">
                  Whether you&rsquo;re planning a new construction project, need precision steel
                  fabrication, or want to explore a long-term partnership — our team
                  is ready to help. Reach out using any of the channels below and
                  we&rsquo;ll connect you with the right specialist.
                </p>
                <p className="text-steel leading-relaxed text-sm">
                  We pride ourselves on responsiveness. Every inquiry receives a
                  personal response within 24 hours — because your project deserves
                  the same attention to detail that goes into our steel.
                </p>
              </div>

              {/* Primary Contact Methods - Prominent Buttons */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-steel-light mb-4">
                  Direct Contact Options
                </p>
                <div className="space-y-3">
                  {PRIMARY_CONTACT_METHODS.map((method) => (
                    // Give WhatsApp CTA a stronger visual emphasis.
                    (() => {
                      const isWhatsApp = method.label === "WhatsApp Us";
                      return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.label === "WhatsApp Us" ? "_blank" : undefined}
                      rel={method.label === "WhatsApp Us" ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${method.gradient} text-white font-semibold hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 active:shadow-md ${method.shadow} transition-all duration-150 ${
                        isWhatsApp
                          ? "ring-1 ring-green-200/70 hover:ring-green-100"
                          : ""
                      }`}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 group-hover:bg-white/25 transition-colors shrink-0">
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold">{method.label}</p>
                        <p className="text-xs opacity-90 font-medium">{method.value}</p>
                        <p className="text-xs opacity-70 mt-0.5">{method.subtext}</p>
                      </div>
                    </a>
                      );
                    })()
                  ))}
                </div>
              </div>

              {/* Secondary Contact Info */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-default">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-steel-light">
                      Location
                    </p>
                    <p className="text-navy font-medium text-sm">Nigeria</p>
                    <p className="text-xs text-steel mt-0.5">Serving clients nationwide</p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-default">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-steel-light">
                      Business Hours
                    </p>
                    <p className="text-navy font-medium text-sm">Mon – Fri, 8 AM – 6 PM</p>
                    <p className="text-xs text-steel mt-0.5">Emergency support available 24/7</p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-default">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-steel-light">
                      Response Guarantee
                    </p>
                    <p className="text-navy font-medium text-sm">Within 24 Hours</p>
                    <p className="text-xs text-steel mt-0.5">We value your time and inquiry</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-navy">
                      Naija Steel Manufacturing Ltd
                    </p>
                    <p className="text-xs text-steel mt-0.5">
                      Precision Steel. Built to Last.
                    </p>
                  </div>
                </div>
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
                    Fill out the form below with your project details and we&rsquo;ll
                    get back to you with a tailored response. Whether it&rsquo;s a
                    quick question or a full project brief — we&rsquo;re here to help.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CONTACT US ═══════ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our Promise"
            title="Why Work With Us"
            subtitle="When you reach out to Naija Steel, you're connecting with a team that puts your project first."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Fast Response", text: "Every inquiry answered within 24 hours by a qualified team member." },
              { title: "Free Consultations", text: "Initial project discussions and feasibility assessments at no cost." },
              { title: "Expert Guidance", text: "Direct access to engineers and project managers for technical advice." },
              { title: "Flexible Solutions", text: "Custom-tailored proposals designed around your budget and timeline." },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-gold/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h4 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="text-sm text-steel leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Let&rsquo;s Build Something Great Together
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            From initial concept to final delivery, our team is committed to
            engineering excellence and client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold text-navy hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg shadow-gold/20 transition-all duration-200"
            >
              View Our Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
