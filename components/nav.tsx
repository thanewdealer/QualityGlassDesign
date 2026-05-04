'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './logo';
import { Container } from './container';
import { siteConfig, navigation } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-bone/85 backdrop-blur-xl border-b border-ink/8'
          : 'bg-transparent'
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-tight text-ink/80 hover:text-ink transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 text-sm font-mono tracking-tight text-ink/70 hover:text-ink transition-colors"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              {siteConfig.phone}
            </a>
            <Link
              href="/quote"
              className="bg-ink text-bone text-sm font-medium tracking-tight px-5 py-2.5 hover:bg-brass-deep transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-ink/8 bg-bone">
          <Container size="wide" className="py-8">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl tracking-tighter py-3 border-b border-ink/8 hover:text-brass-deep"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 bg-bone-dim text-ink py-4 font-mono text-sm tracking-tight"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                {siteConfig.phone}
              </a>
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="bg-ink text-bone py-4 text-center font-medium tracking-tight"
              >
                Get a Quote
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
