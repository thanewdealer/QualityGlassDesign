import { Container } from './container';
import { Button } from './button';
import { PlaceholderArt } from './placeholder-art';

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-bone">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-ink/10">
              {/* Replace with /public/portfolio/connor-mello.jpg when ready */}
              <PlaceholderArt label="Connor & Mello, Greenville SC" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="eyebrow text-brass-deep">Built By</div>

            <h2 className="display-lg mt-6 text-ink">
              A two-person crew that{' '}
              <span className="italic">refuses</span> to grow until the
              quality survives the growth.
            </h2>

            <div className="mt-10 space-y-5 text-lg text-ink/70 leading-relaxed">
              <p>
                Connor founded Quality Glass & Design of The Upstate in
                2024 after fourteen years as a C-130 electrician in the Air
                Force. Every measurement, every cut, every bracket on every
                project goes through him.
              </p>
              <p>
                Mello is the right hand. Trained in-house. Pours the same
                attention into a $1,200 mirror as a $12,000 Hydroslide bifold.
                Together they handle the whole thing. No subs. No call
                centers. No salesmen.
              </p>
              <p className="text-ink">
                That&rsquo;s why builders, designers, and renovators in the
                Upstate keep coming back.
              </p>
            </div>

            <div className="mt-12">
              <Button href="/about" variant="ghost" arrow>
                Read the full story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
