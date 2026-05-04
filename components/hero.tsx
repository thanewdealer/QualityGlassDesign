import { Container } from './container';
import { Button } from './button';
import { Star } from 'lucide-react';
import { PlaceholderArt } from './placeholder-art';

export function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />

      <Container size="wide" className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-brass text-brass"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="eyebrow text-ink/60">
                52 Google reviews · Five-star average
              </span>
            </div>

            <h1 className="display-xl text-ink">
              Greenville&rsquo;s most trusted{' '}
              <span className="italic text-brass-deep">frameless</span> shower
              glass installer.
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-ink/70 max-w-2xl leading-relaxed">
              Precision-crafted glass for builders, designers, and homeowners
              who won&rsquo;t settle. A two-person crew working out of the
              Upstate. Lifetime warranty on every project.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button href="/quote" size="lg" arrow>
                Get a Quote
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10">
              {/* TO REPLACE: drop /public/portfolio/hero.jpg, then swap PlaceholderArt for:
                  <Image src="/portfolio/hero.jpg" alt="Frameless shower door, Augusta Road" fill className="object-cover" priority />
              */}
              <PlaceholderArt label="Featured install" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3">
                <div className="bg-bone/95 backdrop-blur-sm px-4 py-3">
                  <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink/50">
                    Recent project
                  </div>
                  <div className="font-display text-base mt-0.5 leading-tight">
                    Augusta Road, Greenville
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
