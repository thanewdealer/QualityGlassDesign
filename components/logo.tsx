import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const color = variant === 'dark' ? 'text-ink' : 'text-bone';

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-3 group', color, className)}
      aria-label="Quality Glass & Design of The Upstate, home"
    >
      {/* Mark - geometric Q with diagonal cut, custom and distinctive */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:rotate-[-6deg]"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="32"
          height="32"
          rx="0.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M22 22L32 32"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className="font-display text-base tracking-tightest font-medium">
          Quality Glass
        </span>
        <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-smoke-dark mt-0.5">
          & Design of The Upstate
        </span>
      </div>
    </Link>
  );
}
