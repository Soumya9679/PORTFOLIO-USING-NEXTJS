interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-20">
      {/* Gradient badge */}
      <span className="section-badge mb-6 inline-flex">
        {badge}
      </span>

      {/* Heading with gradient accent line */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#e1e2ed] mb-5 tracking-tight">
        {title}
      </h2>

      {/* Decorative gradient line */}
      <div className="flex items-center justify-center gap-2 mb-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-container" />
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-container to-cyan-container" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-container" />
      </div>

      {subtitle && (
        <p className="text-[#958ea0] max-w-lg mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
