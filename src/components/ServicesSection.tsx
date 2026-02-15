'use client';

import { Cog, Layers, Hammer, Building2 } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: 'Design & Engineering',
    description: 'Advanced CAD and structural engineering services using cutting-edge technology and industry expertise.',
    features: ['3D Modeling', 'Stress Analysis', 'Custom Solutions'],
  },
  {
    icon: Layers,
    title: 'CFS Manufacturing',
    description: 'Precision cold-formed steel manufacturing with superior quality control and rapid turnaround.',
    features: ['Automated Cutting', 'Quality Assurance', 'Fast Delivery'],
  },
  {
    icon: Hammer,
    title: 'Panels & Components',
    description: 'Pre-fabricated panels ready for installation, reducing on-site labor and construction time.',
    features: ['Pre-assembled', 'Easy Installation', 'Cost-Effective'],
  },
  {
    icon: Building2,
    title: 'Structural Solutions',
    description: 'Complete structural systems engineered for maximum performance and durability.',
    features: ['Load Bearing', 'Sustainable', 'Flexible Design'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Complete Service Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From design to delivery, we provide comprehensive cold-formed steel construction solutions for every project phase.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to find the perfect solution for your project?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold transition-all transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
