'use client';

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
            Strategic Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We partner with the world's most innovative companies to deliver unmatched precision and quality.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {[
            { name: 'FrameCAD', initials: 'FC' },
            { name: 'STO', initials: 'STO' },
            { name: 'Abba', initials: 'AB' },
            { name: 'AGC', initials: 'AGC' },
            { name: 'AWC', initials: 'AWC' },
            { name: 'Chamber', initials: 'CH' },
            { name: 'EIMA', initials: 'EM' },
            { name: 'SFIA', initials: 'SF' },
          ].map((partner, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <span className="font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                  {partner.initials}
                </span>
              </div>
              <p className="font-semibold text-gray-900">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Unmatched Precision',
              description: 'Advanced technology and expert partners ensure every project meets the highest standards.',
            },
            {
              title: 'Reduced Timeline',
              description: 'Streamlined processes and strategic partnerships accelerate your construction timeline.',
            },
            {
              title: 'Consistent Results',
              description: 'Industry-leading partners guarantee consistent quality across all deliverables.',
            },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
