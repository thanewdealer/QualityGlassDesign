import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { FinalCTA } from '@/components/final-cta';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Read 52+ five-star Google reviews from Quality Glass & Design of The Upstate customers.',
};

const reviews = [
  {
    name: 'Tom Uva',
    location: 'Greenville, SC',
    timeAgo: '11 months ago',
    body: "We recently had a new stand-up shower glass door and enclosure installed, and we couldn't be more pleased with the entire experience. From start to finish, the communication was outstanding. Connor, who oversaw the entire process, was incredibly responsive, promptly answering every question and ensuring we were comfortable with each step along the way. The finished product is absolutely stunning. The precision of the installation is evident in every line and seal. Connor stands out as a true gem.",
  },
  {
    name: 'Maximillian',
    location: 'Greenville, SC',
    timeAgo: '11 months ago',
    body: "Great experience working with Quality Glass & Design. Owner & founder Connor Sell and his team were a pleasure to work with. Good communications, transparent pricing & options, only ~1 week between the order and completion of the installation. Quality of the materials and workmanship are excellent with an eye for detail e.g. mitered glass in the corner between two glass panels was standard. Highly recommended, like working with your neighbor.",
  },
  {
    name: 'Alejandro Faraj',
    location: 'Greenville, SC',
    timeAgo: '4 months ago',
    body: "Great work, we are happy with the glass window they did and installed for us. It was an unusual measurement but they delivered a customized window that looks great in our shower. I will be using their services for future projects of Gerizim Realty Solutions, our Real Estate investors company.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Reviews"
          title={
            <>
              <span className="italic text-brass-deep">Fifty-two</span> five-star reviews.
            </>
          }
          description="Every review is a verified Google review. We don't filter, edit, or solicit. The work speaks for itself."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="mb-16 grid grid-cols-3 gap-6 lg:gap-12 max-w-3xl">
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-brass text-brass" strokeWidth={0} />
                  ))}
                </div>
                <div className="mt-3 font-display text-5xl tracking-tightest">5.0</div>
                <div className="mt-1 text-sm text-ink/50">Average rating</div>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-brass-deep">Total</div>
                <div className="mt-3 font-display text-5xl tracking-tightest">52</div>
                <div className="mt-1 text-sm text-ink/50">Google reviews</div>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-brass-deep">% Five Star</div>
                <div className="mt-3 font-display text-5xl tracking-tightest">100%</div>
                <div className="mt-1 text-sm text-ink/50">Across the board</div>
              </div>
            </div>

            <div className="space-y-px bg-ink/10 ring-1 ring-ink/10">
              {reviews.map((r, i) => (
                <article key={i} className="bg-bone p-8 lg:p-12">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-brass text-brass" strokeWidth={0} />
                    ))}
                  </div>

                  <blockquote className="font-display text-xl lg:text-2xl tracking-tighter text-ink leading-snug max-w-4xl">
                    &ldquo;{r.body}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-ink/8 flex items-center justify-center font-display text-base text-ink">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-medium tracking-tight">{r.name}</div>
                      <div className="text-xs text-ink/50 font-mono tracking-tight">
                        {r.location} · {r.timeAgo}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-ink/60 mb-6">See all 52 reviews on Google.</p>
              <Button
                href="https://www.google.com/search?q=Quality+Glass+%26+Design+of+The+Upstate+reviews"
                variant="secondary"
                arrow
              >
                Read on Google
              </Button>
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
