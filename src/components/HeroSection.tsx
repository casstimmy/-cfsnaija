'use client';

import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                Cold-Formed Steel Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Build Your Competitive Advantage
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your construction projects with precision engineering and innovative cold-formed steel solutions. Faster timelines. Better quality. Greater profit margins.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: Zap, text: 'Accelerated Construction Timeline' },
                { icon: Shield, text: 'Engineer-Verified Precision' },
                { icon: TrendingUp, text: 'Maximum Profit Potential' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:4706820851"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Call (470) 682-0851
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 lg:h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl transform perspective" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl m-4 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">⚙️</div>
                <p className="text-xl font-semibold">Engineering Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
