import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { PlaceholderArt } from '@/components/placeholder-art';
import { FinalCTA } from '@/components/final-cta';

export const metadata: Metadata = {
  title: 'About Connor & Mello',
  description:
    'A two-person glass crew based in Greenville, SC. Founded in 2024 by Connor Sell after fourteen years as a C-130 electrician.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="About"
          title={
            <>
              Built by{' '}
              <span className="italic text-brass-deep">two people</span> who measure twice.
            </>
          }
          description="No subs. No call center. No salesman in the truck. Every measurement, every install, every conversation goes through Connor and Mello."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10 sticky top-28">
                  <PlaceholderArt label="Connor & Mello, Greenville" />
                </div>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <div className="prose-lg space-y-6 text-lg text-ink/80 leading-relaxed">
                  <p className="font-display text-3xl text-ink leading-tight tracking-tighter">
                    Connor founded Quality Glass & Design of The Upstate in
                    May 2024 after fourteen years as a C-130 electrician in
                    the Air Force.
                  </p>

                  <p>
                    The company started with one truck, one phone, and one
                    rule: the install gets the same level of focus an
                    aircraft does. Measure twice. Cut once. Walk through it
                    before signing off. The military handed over a way of
                    operating that the glass trade rarely sees.
                  </p>

                  <p>
                    A planned business acquisition fell through the week
                    Connor was supposed to take over. He started from
                    scratch instead. The first quotes went out from the
                    parking lot of his old base.
                  </p>

                  <p>
                    Mello came on as the second set of hands and quickly
                    became the right hand. Trained from zero into a
                    finish-quality installer. He carries the same standard
                    Connor does, on jobs Connor isn't physically present
                    for.
                  </p>

                  <p>
                    Today they handle the entire pipeline together:
                    measurement, fabrication coordination with D3 Glass and
                    FHC, install, and follow-up. Every job comes with a
                    lifetime workmanship warranty because the work backs
                    itself.
                  </p>

                  <h3 className="display-md text-ink pt-8">Why the trade trusts us.</h3>

                  <p>
                    Builders, designers, and renovators across the Upstate
                    keep coming back because we don't make their job harder.
                    We show up when we say. We protect tile, paint, and
                    fixtures. We communicate before, during, and after.
                  </p>

                  <p>
                    If you're a builder, see our{' '}
                    <a
                      href="/trade"
                      className="text-brass-deep underline underline-offset-4 hover:no-underline"
                    >
                      builder & designer program
                    </a>{' '}
                    for how we work alongside you on multi-home projects.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  <Button href="/quote" arrow>Get a Quote</Button>
                  <Button href="/reviews" variant="secondary">Read Reviews</Button>
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
