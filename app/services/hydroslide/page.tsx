import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'Hydroslide Bifold Shower Doors',
  description:
    'CRL Hydroslide bifold shower door installation in Greenville and the Upstate. Folds flat, opens wide, leaves zero swing footprint.',
};

export default function HydroslidePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="CRL Hydroslide Bifold"
          title={
            <>
              Folds flat.{' '}
              <span className="italic text-brass-deep">Opens wide.</span>{' '}
              Zero swing.
            </>
          }
          description="The Hydroslide is a frameless bifold system that folds against the wall when open. Wide unobstructed entry without any swing radius. We install these throughout the Upstate."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <Image
                    src="/portfolio/service-hydroslide.jpg"
                    alt="CRL Hydroslide bifold shower door with frosted privacy band and matte black hardware by Quality Glass & Design of The Upstate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="display-md text-ink">Why Hydroslide.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Conventional swinging doors need clearance. Sliding doors block half the opening. The Hydroslide folds two glass panels against the wall on a hidden top track, leaving the entire opening clear. It's the cleanest solution for narrow bathrooms and walk-in entries where a full-swing door would hit a wall or vanity.
                  </p>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">When it makes sense.</h2>
                  <ul className="mt-6 space-y-3 text-lg text-ink/70 leading-relaxed">
                    <li>· Narrow shower openings with limited swing room</li>
                    <li>· Walk-in showers where you want full opening access</li>
                    <li>· Aging-in-place projects where wide entry matters</li>
                    <li>· Modern bathrooms where the design wants minimal hardware</li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Who installs them.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Hydroslide is a CRL system that requires specific installation knowledge to fabricate, hang, and align. We install Hydroslides routinely for Upstate builders and homeowners. If you're a designer or builder considering one for an upcoming project, reach out and we'll walk through the spec with you.
                  </p>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <Button href="/quote" arrow>Get a Quote</Button>
                  <Button href="/trade" variant="secondary">Builder Program</Button>
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
