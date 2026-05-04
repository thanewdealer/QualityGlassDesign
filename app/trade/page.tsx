import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { PlaceholderArt } from '@/components/placeholder-art';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'For Builders, Designers & Renovators',
  description:
    'Quality Glass & Design of The Upstate works alongside custom builders, designers, and renovation contractors across the Greenville area on multi-home projects.',
};

export default function TradePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Builder & Designer Program"
          title={
            <>
              We work the way{' '}
              <span className="italic text-brass-deep">your jobsite</span> works.
            </>
          }
          description="If you're building, renovating, or designing in the Upstate, we treat your job like a partnership, not a one-off transaction. Predictable scheduling, clean handoffs, photos of every install, and a single point of contact through Connor."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <PlaceholderArt label="Trade install in progress" />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h2 className="display-md text-ink">What this looks like.</h2>
                  <ul className="mt-8 space-y-5 text-lg text-ink/70 leading-relaxed">
                    <li className="flex gap-4">
                      <span className="font-mono text-brass-deep text-sm pt-1.5">01</span>
                      <span><strong className="font-medium text-ink">Direct line to Connor.</strong> No call center. No estimator handoff. The person measuring is the person quoting is the person installing.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-brass-deep text-sm pt-1.5">02</span>
                      <span><strong className="font-medium text-ink">Predictable cadence.</strong> Tuesday measure days. Thursday and Friday shower installs. We slot into your schedule, not the other way around.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-brass-deep text-sm pt-1.5">03</span>
                      <span><strong className="font-medium text-ink">Volume pricing on multi-home projects.</strong> Three or more units in a development gets you trade pricing. Spec home programs welcome.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-brass-deep text-sm pt-1.5">04</span>
                      <span><strong className="font-medium text-ink">Photos on every install.</strong> We document the work. You get the photos for your portfolio and your social.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-mono text-brass-deep text-sm pt-1.5">05</span>
                      <span><strong className="font-medium text-ink">Hardware coordination.</strong> We carry the FHC catalog and source from D3 Glass, WGD, and Echols. If your designer needs a finish we don't stock, we order it without an upcharge.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Who we work with.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Custom builders, design-build firms, kitchen and bath renovators, and interior designers across Greenville, Greer, Simpsonville, Spartanburg, and the surrounding Upstate counties. Multi-home developers welcome. We've handled projects from single-bath remodels to spec home portfolios with consistent finishes across every unit.
                  </p>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Start a project.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Send your plans, finishes, and timeline to Connor directly. We'll come walk the project on your next measure day and have a quote back to you that week.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href="/quote" arrow>Send Project Details</Button>
                    <Button href="tel:18647906358" variant="secondary">Call Connor</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
