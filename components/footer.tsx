import Link from 'next/link';
import { Container } from './container';
import { Logo } from './logo';
import { siteConfig, services, cities } from '@/lib/site-config';
import { Instagram, Facebook, Linkedin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-bone relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-[0.03]" />

      <Container size="wide" className="relative pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-md text-bone/70 leading-relaxed">
              Precision-crafted frameless shower glass and custom installations across the
              Upstate. Built by a two-person crew that measures twice and finishes clean.
            </p>

            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-3 text-bone/80 hover:text-brass transition-colors"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-mono tracking-tight">{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 text-bone/80 hover:text-brass transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-mono tracking-tight">{siteConfig.email}</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="p-2 ring-1 ring-bone/15 hover:ring-brass hover:text-brass transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="p-2 ring-1 ring-bone/15 hover:ring-brass hover:text-brass transition-colors"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="p-2 ring-1 ring-bone/15 hover:ring-brass hover:text-brass transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow text-brass">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-bone/70 hover:text-bone transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow text-brass">Service Area</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {cities.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-bone/70 hover:text-bone transition-colors"
                  >
                    {c.name}, SC
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-brass">Working With Us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/quote" className="text-bone/70 hover:text-bone transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/trade" className="text-bone/70 hover:text-bone transition-colors">
                  Builder & Designer Program
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-bone/70 hover:text-bone transition-colors">
                  About Connor
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-bone/70 hover:text-bone transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-bone/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-bone/50">
          <p className="font-mono tracking-tight">
            © {new Date().getFullYear()} Quality Glass & Design of The Upstate, LLC.
            All rights reserved.
          </p>
          <p className="font-mono tracking-tight">
            Greenville, SC · Founded {siteConfig.founded}
          </p>
        </div>
      </Container>
    </footer>
  );
}
