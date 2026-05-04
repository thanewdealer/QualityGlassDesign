import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide';
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 sm:px-8 lg:px-12',
        {
          'max-w-3xl': size === 'narrow',
          'max-w-7xl': size === 'default',
          'max-w-8xl': size === 'wide',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
