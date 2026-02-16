interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl space-y-3 ${centered ? "mx-auto text-center" : ""}`}>
      {tag && (
        <p
          className={`text-xs font-semibold uppercase tracking-widest ${
            light ? "text-gold" : "text-gold-dark"
          }`}
        >
          {tag}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-steel"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
