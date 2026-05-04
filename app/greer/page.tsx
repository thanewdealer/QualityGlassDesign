import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { PlaceholderArt } from '@/components/placeholder-art';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'Frameless Shower Doors in Greer, SC',
  description:
    'Custom frameless shower glass installation in Greer, SC. Serving the Greer, Five Forks, Taylors, and Wade Hampton areas.',
};

export default function GreerPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Greer, SC"
          title={
            <>
              Frameless shower glass{' '}
              <span className="italic text-brass-deep">in Greer.</span>
            </>
          }
          description="Greer is one of our most active service areas. We install across the city center, Five Forks, the Wade Hampton corridor, and developments east toward Spartanburg County. Most Greer-area projects scheduled within ten days of measure."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <PlaceholderArt label="Greer install" variant="glass-door" />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h2 className="display-md text-ink">Greer neighborhoods we serve.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Downtown Greer. Five Forks. Riverside. Thornblade. Suber Mill. Pelham Falls. The corridor along Wade Hampton Boulevard. Custom homes in the BMW corridor and developments out toward Lake Robinson. We work consistently with builders and renovators throughout the Greer area.
                  </p>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Local builder partnerships.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    We partner with multiple custom builders and design-build firms in Greer for ongoing project work. If you're a builder considering us for a development or spec home program, see our{' '}
                    <a href="/trade" className="text-brass-deep underline underline-offset-4">builder & designer program</a>.
                  </p>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Why Greer homeowners pick us.</h2>
                  <ul className="mt-6 space-y-3 text-lg text-ink/70 leading-relaxed">
                    <li>· Greer is fifteen minutes from our shop. Fast measure-to-install turnaround.</li>
                    <li>· Owner-present crew. Connor walks every project before and after.</li>
                    <li>· Lifetime workmanship warranty on every install.</li>
                    <li>· Fifty-two five-star Google reviews across the Upstate.</li>
                  </ul>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <Button href="/quote" arrow>Get a Greer Quote</Button>
                  <Button href="/services" variant="secondary">View Services</Button>
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
