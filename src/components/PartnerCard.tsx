"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Partner {
  name: string;
  desc: string;
  image: string;
}

export default function PartnerCard({ partner }: { partner: Partner }) {
  const [imageError, setImageError] = useState(false);
  const initials = `${partner.name.split(" ")[0].charAt(0)}${
    partner.name.split(" ")[1]?.charAt(0) || ""
  }`;

  return (
    <Link
      href="/partners"
      className="group flex flex-col items-center text-center p-8 rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-lg transition-all bg-white"
    >
      <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full bg-navy/5 group-hover:bg-gold/10 transition-colors" />

        {/* Image or Initials */}
        {imageError ? (
          <span className="relative z-10 text-lg font-bold text-navy group-hover:text-gold transition-colors">
            {initials}
          </span>
        ) : (
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="object-contain p-2 relative z-10"
            sizes="80px"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">
        {partner.name}
      </h3>
      <p className="text-sm text-steel leading-relaxed mb-4">{partner.desc}</p>
      <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-gold">
        Learn More <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}
