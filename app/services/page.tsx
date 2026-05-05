import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { FinalCTA } from '@/components/final-cta';
import { PlaceholderArt } from '@/components/placeholder-art';
import { services } from '@/lib/site-config';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Frameless shower doors, sliding systems, custom mirrors, glass railings, and window glass replacement across the Upstate.',
};

const variantMap: Record<string, 'glass-panel' | 'glass-door' | 'mirror' | 'sliding'> = {
  'frameless-shower-doors': 'glass-door',
  'sliding-shower-doors': 'sliding',
  hydroslide: 'sliding',
  mirrors: 'mirror',
  'window-replacement': 'glass-panel',
  'glass-railings': 'glass-panel',
};

const photoMap: Record<string, { src: string; alt: string }> = {
  'frameless-shower-doors': {
    src: '/portfolio/service-frameless.jpg',
    alt: 'Frameless inline shower with marble walls and herringbone accent by Quality Glass & Design of The Upstate',
  },
  'sliding-shower-doors': {
    src: '/portfolio/service-sliding.jpg',
    alt: 'Sliding shower door with matte black hardware and marble tile by Quality Glass & Design of The Upstate',
  },
  hydroslide: {
    src: '/portfolio/service-hydroslide.jpg',
    alt: 'CRL Hydroslide bifold shower door with frosted privacy band by Quality Glass & Design of The Upstate',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Services"
          title={
            <>
              Six lines of work.{' '}
              <span className="italic text-brass-deep">One standard.</span>
            </>
          }
          description="Frameless shower glass is what we're known for, but the toolset extends across the rest of the home. Every project gets the same crew and the same lifetime workmanship warranty."
        />

        <section className="pb-24 lg:pb-32">
          <Container size="wide">
            <div className="space-y-px bg-ink/10 ring-1 ring-ink/10">
              {services.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative grid lg:grid-cols-12 gap-8 bg-bone p-8 lg:p-12 hover:bg-bone-dim transition-colors duration-500"
                >
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[4/3] overflow-hidden bg-bone-dim">
                      {photoMap[service.slug] ? (
                        <Image
                          src={photoMap[service.slug].src}
                          alt={photoMap[service.slug].alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <PlaceholderArt
                          label={service.name}
                          variant={variantMap[service.slug] || 'glass-panel'}
                        />
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-center">
                    <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-brass-deep">
                      {String(i + 1).padStart(2, '0')} · Service
                    </div>
                    <h2 className="mt-4 display-md text-ink">{service.name}</h2>
                    <p className="mt-4 text-lg text-ink/70 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight">
                      Read more
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
