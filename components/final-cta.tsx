import { Container } from './container';
import { Button } from './button';
import { siteConfig } from '@/lib/site-config';

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 bg-ink text-bone relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-[0.04]" />

      {/* Subtle brass gradient accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(176, 141, 87, 0.15) 0%, transparent 70%)',
        }}
      />

      <Container size="default" className="relative text-center">
        <div className="eyebrow text-brass">Get a Quote</div>

        <h2 className="display-xl mt-6 text-bone">
          Tell us about{' '}
          <span className="italic text-brass">your shower.</span>
        </h2>

        <p className="mt-8 text-lg lg:text-xl text-bone/60 max-w-2xl mx-auto leading-relaxed">
          Most quotes go out within 24 hours. Most installs scheduled within
          two weeks. No pressure, no upsell, no surprises on the invoice.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button href="/quote" variant="inverse" size="lg" arrow>
            Get a Quote
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center text-lg px-9 py-[1.125rem] text-bone/80 hover:text-brass transition-colors font-medium tracking-tight underline-offset-4 hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
