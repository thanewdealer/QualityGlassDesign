import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'Frameless Shower Doors in Greenville, SC',
  description:
    'Custom frameless shower glass installation in Greenville, SC. Serving Augusta Road, Cleveland Park, North Main, Downtown, and surrounding neighborhoods.',
};

export default function GreenvillePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Greenville, SC"
          title={
            <>
              Frameless shower glass{' '}
              <span className="italic text-brass-deep">in Greenville.</span>
            </>
          }
          description="We're based in Greenville and most of our work is within twenty miles of downtown. Augusta Road, Cleveland Park, North Main, Downtown, the West End, and neighborhoods east toward Greer."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <Image
                    src="/portfolio/greenville.jpg"
                    alt="Frameless corner shower with brass hardware and white subway tile in a Greenville home by Quality Glass & Design of The Upstate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-12">
                <div>
                  <h2 className="display-md text-ink">Greenville neighborhoods we serve.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Augusta Road. Cleveland Park. North Main. Downtown. The West End. Stone Lake. Chanticleer. Botany Woods. Stonebrook Farm. Montebello. Paris Mountain. The neighborhoods south toward Mauldin and east toward Greer. If you're inside the I-85 / I-385 / I-185 triangle, we're in your neighborhood weekly.
                  </p>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Local landmarks.</h2>
                  <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                    Our trucks are recognizable around Falls Park on the Reedy, the Swamp Rabbit Trail, the Peace Center, and Fluor Field. We're members of the local builder community, the Home Builders Association of Greenville, and we partner regularly with custom builders, designers, and renovators across the city.
                  </p>
                </div>

                <div className="pt-8 border-t border-ink/10">
                  <h2 className="display-md text-ink">Why Greenville homeowners pick us.</h2>
                  <ul className="mt-6 space-y-3 text-lg text-ink/70 leading-relaxed">
                    <li>· Local. Connor lives and works in the Upstate, not a regional franchise.</li>
                    <li>· Two-person crew, owner present on every install.</li>
                    <li>· Fifty-two five-star Google reviews from Greenville-area customers.</li>
                    <li>· Lifetime workmanship warranty on every project.</li>
                    <li>· Direct trade relationships with D3 Glass, FHC, WGD, and Echols Glass for fastest turnaround.</li>
                  </ul>
                </div>

                <div className="pt-8 flex flex-wrap gap-4">
                  <Button href="/quote" arrow>Get a Greenville Quote</Button>
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
