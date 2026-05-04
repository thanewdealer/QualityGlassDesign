import Link from 'next/link';
import { Container } from './container';
import { cities } from '@/lib/site-config';

export function ServiceArea() {
  return (
    <section className="py-20 lg:py-24 border-t border-ink/10 bg-bone">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-5">
            <div className="eyebrow text-brass-deep">Service Area</div>
            <h2 className="display-md mt-5 text-ink">
              Serving the{' '}
              <span className="italic text-ink/60">Upstate.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-ink/60 leading-relaxed">
              We measure, fabricate, and install across Greenville and the
              surrounding counties. Click your city below for projects in your
              area.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 ring-1 ring-ink/15 hover:ring-ink hover:bg-ink hover:text-bone transition-all duration-300 group"
            >
              <span className="font-display tracking-tight">{c.name}</span>
              <span className="font-mono text-[0.65rem] text-ink/40 group-hover:text-bone/50 tracking-tight">
                SC
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
