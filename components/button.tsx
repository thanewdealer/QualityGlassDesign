import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  arrow?: boolean;
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');

  const classes = cn(
    'group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2',
    {
      'bg-ink text-bone hover:bg-brass-deep': variant === 'primary',
      'bg-bone text-ink ring-1 ring-ink/15 hover:ring-ink/40 hover:bg-bone-dim':
        variant === 'secondary',
      'text-ink underline-offset-4 hover:underline': variant === 'ghost',
      'bg-bone text-ink hover:bg-brass hover:text-bone': variant === 'inverse',
    },
    {
      'text-sm px-5 py-2.5': size === 'sm',
      'text-base px-7 py-3.5': size === 'md',
      'text-lg px-9 py-[1.125rem]': size === 'lg',
    },
    variant !== 'ghost' && 'tracking-tight',
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
