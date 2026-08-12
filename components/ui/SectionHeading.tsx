import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.2em] mb-4',
            light ? 'text-ocean' : 'text-ocean'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-heading font-bold',
          light ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
