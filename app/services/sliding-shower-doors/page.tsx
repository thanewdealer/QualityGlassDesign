import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'Sliding & Bypass Shower Doors',
  description:
    'Sliding glass shower systems for tight bathrooms and tubs. Custom-built and installed across Greenville and the Upstate.',
};

export default function SlidingPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Sliding & Bypass Systems"
          title={
            <>
              When swing clearance{' '}
              <span className="italic text-brass-deep">isn&rsquo;t there.</span>
            </>
          }
          description="Sliding systems open the room when a swinging door would hit a vanity, toilet, or wall. Available for showers and tubs. Smooth glide hardware in chrome, brushed nickel, matte black, or brass."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <Image
                    src="/portfolio/service-sliding.jpg"
                    alt="Sliding shower door with matte black hardware over marble subway tile by Quality Glass & Design of The Upstate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-10">
                <div>
                  <h2 className="display-md text-ink">When sliding wins.</h2>
                  <ul className="mt-6 space-y-3 text-lg text-ink/70 leading-relaxed">
                    <li>· Tight bathrooms where a swinging door would hit a vanity or toilet</li>
                    <li>· Tub-to-shower conversions on standard 60&quot; tubs</li>
                    <li>· Walk-in showers with double-door access</li>
                    <li>· Spaces where you want a header line and continuous glass</li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">What we install.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Frameless and semi-frameless. Single bypass, double bypass, telescoping, and cable-suspended systems. Top-mount and bottom-roller hardware depending on the look you want and the way the wall framing was built.
                  </p>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <Button href="/quote" arrow>Get a Quote</Button>
                  <Button href="/services" variant="secondary">All Services</Button>
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
