import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300">
      {/* Accent bar */}
      <div className="absolute top-0 inset-x-0 h-1 rounded-t-xl bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="text-sm text-steel leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
