import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { PlaceholderArt } from '@/components/placeholder-art';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'Frameless Shower Doors',
  description:
    'Custom frameless shower doors in Greenville, SC. 3/8" tempered low-iron glass, premium hardware, lifetime workmanship warranty.',
};

export default function FramelessShowerDoorsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Frameless Shower Doors"
          title={
            <>
              The cleanest line in the{' '}
              <span className="italic text-brass-deep">bathroom.</span>
            </>
          }
          description="Fully frameless construction. 3/8 inch tempered glass. Premium hardware in chrome, brushed nickel, matte black, or brass. Built to your opening, installed in a single morning."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <PlaceholderArt label="Frameless install" variant="glass-door" />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-12">
                  <div>
                    <h2 className="display-md text-ink">What you get.</h2>
                    <ul className="mt-8 space-y-4 text-lg text-ink/70 leading-relaxed">
                      <li className="flex gap-4">
                        <span className="font-mono text-brass-deep text-sm pt-1.5">01</span>
                        <span><strong className="font-medium text-ink">3/8&quot; tempered low-iron glass.</strong> Standard. The thinner glass off-the-shelf doors use looks cheap and feels cheap. We don't quote it.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="font-mono text-brass-deep text-sm pt-1.5">02</span>
                        <span><strong className="font-medium text-ink">Custom-cut to your opening.</strong> No filler strips. No square gaps where walls aren't plumb. The glass meets the wall the way it should.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="font-mono text-brass-deep text-sm pt-1.5">03</span>
                        <span><strong className="font-medium text-ink">Premium hardware from FHC.</strong> Chrome, brushed nickel, matte black, satin brass, oil-rubbed bronze. We carry the full FHC catalog.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="font-mono text-brass-deep text-sm pt-1.5">04</span>
                        <span><strong className="font-medium text-ink">Five to seven business days.</strong> From measure to install. Tempering takes time and we don't cut that corner.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="font-mono text-brass-deep text-sm pt-1.5">05</span>
                        <span><strong className="font-medium text-ink">Lifetime workmanship warranty.</strong> If anything we did fails, we fix it.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-ink/10">
                    <h2 className="display-md text-ink">Configurations.</h2>
                    <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                      Inline, corner, neo-angle, walk-in screens, half panels, fixed panels, swinging doors, full enclosures with returns, custom notches around shower seats and benches. If your tile setter can build it, we can glass it.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-ink/10">
                    <h2 className="display-md text-ink">Glass options.</h2>
                    <div className="mt-6 grid sm:grid-cols-2 gap-6 text-ink/70">
                      <div>
                        <div className="font-medium text-ink">Clear low-iron</div>
                        <p className="text-sm mt-1">Maximum clarity. No green hue.</p>
                      </div>
                      <div>
                        <div className="font-medium text-ink">Rain</div>
                        <p className="text-sm mt-1">Privacy with texture. Spa feel.</p>
                      </div>
                      <div>
                        <div className="font-medium text-ink">Frosted / acid-etched</div>
                        <p className="text-sm mt-1">Soft privacy. Clean look.</p>
                      </div>
                      <div>
                        <div className="font-medium text-ink">EnduroShield coating</div>
                        <p className="text-sm mt-1">Repels water spots and soap scum.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-wrap gap-4">
                    <Button href="/quote" arrow>Get a Quote</Button>
                    <Button href="/services" variant="secondary">All Services</Button>
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
