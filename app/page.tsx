import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { TrustStrip } from '@/components/trust-strip';
import { ServicesGrid } from '@/components/services-grid';
import { Process } from '@/components/process';
import { FeaturedTestimonial } from '@/components/featured-testimonial';
import { AboutPreview } from '@/components/about-preview';
import { ServiceArea } from '@/components/service-area';
import { FinalCTA } from '@/components/final-cta';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <Process />
        <FeaturedTestimonial />
        <AboutPreview />
        <ServiceArea />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
