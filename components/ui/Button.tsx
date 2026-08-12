import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'sand';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 ease-out rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean relative overflow-hidden group';

  const variants = {
    primary:
      'bg-ocean text-white hover:bg-ocean-light active:bg-ocean-light/90 shadow-lg shadow-ocean/20 hover:shadow-xl hover:shadow-ocean/30',
    secondary:
      'bg-navy-deep text-white hover:bg-navy active:bg-navy/90 border border-border-dark',
    outline:
      'bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10',
    ghost:
      'bg-transparent text-ocean hover:bg-ocean/10 active:bg-ocean/15',
    sand:
      'bg-sand text-navy-deep hover:bg-sand/90 active:bg-sand/80 shadow-lg shadow-sand/20',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs gap-2',
    md: 'px-7 py-3.5 text-sm gap-2.5',
    lg: 'px-9 py-4.5 text-sm gap-3',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    loading && 'cursor-wait',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
