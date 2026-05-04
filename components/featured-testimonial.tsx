import { Container } from './container';
import { Star } from 'lucide-react';
import Link from 'next/link';

export function FeaturedTestimonial() {
  return (
    <section className="py-24 lg:py-32 bg-bone-dim">
      <Container size="wide">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brass text-brass" strokeWidth={0} />
            ))}
            <span className="ml-2 eyebrow text-ink/50">Verified Google review</span>
          </div>

          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter text-ink leading-tight">
            &ldquo;The finished product is absolutely stunning. The precision
            of the installation is evident in every line and seal. In a world
            where finding reliable and skilled professionals can be a
            challenge, Connor stands out as a{' '}
            <span className="italic text-brass-deep">true gem.</span>&rdquo;
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-ink/10 flex items-center justify-center font-display text-lg text-ink">
              T
            </div>
            <div>
              <div className="font-medium tracking-tight">Tom Uva</div>
              <div className="text-sm text-ink/50 font-mono tracking-tight">
                Greenville, SC
              </div>
            </div>
          </div>

          <Link
            href="/reviews"
            className="mt-12 inline-flex items-center gap-2 link-line text-sm font-medium tracking-tight text-ink"
          >
            Read all 52 reviews →
          </Link>
        </div>
      </Container>
    </section>
  );
}
