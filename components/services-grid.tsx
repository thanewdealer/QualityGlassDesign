import Link from 'next/link';
import { Container } from './container';
import { services } from '@/lib/site-config';
import { ArrowUpRight } from 'lucide-react';
import { PlaceholderArt } from './placeholder-art';

const variantMap: Record<string, 'glass-panel' | 'glass-door' | 'mirror' | 'sliding'> = {
  'frameless-shower-doors': 'glass-door',
  'sliding-shower-doors': 'sliding',
  hydroslide: 'sliding',
  mirrors: 'mirror',
  'window-replacement': 'glass-panel',
  'glass-railings': 'glass-panel',
};

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <div className="eyebrow text-brass-deep">What We Build</div>
            <h2 className="display-lg mt-6 text-ink">
              Six lines of work.{' '}
              <span className="italic text-ink/50">One standard.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="text-lg text-ink/70 leading-relaxed">
              We design every project around how it'll be used and how it'll
              age. Glass thickness, hardware finish, water control, sightlines.
              The decisions that look small in a quote show up every day for
              the next twenty years.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative bg-bone p-8 lg:p-10 transition-colors duration-500 hover:bg-bone-dim"
            >
              <div className="relative aspect-[4/3] mb-8 overflow-hidden bg-bone-dim">
                <PlaceholderArt
                  label={`${String(i + 1).padStart(2, '0')} / ${service.name}`}
                  variant={variantMap[service.slug] || 'glass-panel'}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-brass-deep mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tighter text-ink leading-tight">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-ink/60 leading-relaxed">
                    {service.short}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/30 group-hover:text-brass-deep group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
