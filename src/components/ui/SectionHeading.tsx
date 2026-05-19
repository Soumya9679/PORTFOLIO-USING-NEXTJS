import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center'
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
