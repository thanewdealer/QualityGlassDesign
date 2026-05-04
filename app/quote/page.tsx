import type { Metadata } from 'next';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/container';
import { siteConfig } from '@/lib/site-config';
import { Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Request a frameless shower glass quote in Greenville and the Upstate. Most quotes returned within 24 hours.',
};

export default function QuotePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHeader
          eyebrow="Get a Quote"
          title={
            <>
              Tell us about{' '}
              <span className="italic text-brass-deep">your project.</span>
            </>
          }
          description="Most quotes go out within 24 hours. Photos, rough dimensions, and a couple of details get you a real number fast."
        />

        <section className="py-16 lg:py-24">
          <Container size="wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="ring-1 ring-ink/10 bg-bone-dim/40">
                  {/* Jobber form embed */}
                  <iframe
                    src={siteConfig.jobberForm}
                    className="w-full h-[1200px] border-0"
                    title="Get a Quote"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <div className="sticky top-28 space-y-10">
                  <div>
                    <div className="eyebrow text-brass-deep">Prefer to talk?</div>
                    <h2 className="display-md mt-4">
                      Reach out{' '}
                      <span className="italic text-ink/50">directly.</span>
                    </h2>
                  </div>

                  <div className="space-y-5 text-base">
                    <a
                      href={siteConfig.phoneHref}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 ring-1 ring-ink/15 group-hover:ring-brass group-hover:bg-ink group-hover:text-bone transition-all">
                        <Phone className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-mono tracking-tight">
                          {siteConfig.phone}
                        </div>
                        <div className="text-sm text-ink/50">Call or text</div>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 ring-1 ring-ink/15 group-hover:ring-brass group-hover:bg-ink group-hover:text-bone transition-all">
                        <Mail className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-mono tracking-tight text-sm">
                          {siteConfig.email}
                        </div>
                        <div className="text-sm text-ink/50">Email Connor directly</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="p-3 ring-1 ring-ink/15">
                        <Clock className="h-4 w-4" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-medium tracking-tight">Mon–Fri</div>
                        <div className="text-sm text-ink/50">7 AM to 6 PM</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-ink/10">
                    <div className="eyebrow text-ink/50 mb-3">What helps</div>
                    <ul className="space-y-2 text-sm text-ink/70">
                      <li>· Rough dimensions of the opening</li>
                      <li>· Photo of the existing space if possible</li>
                      <li>· Your timeline and any tile schedule</li>
                      <li>· Hardware finish you're leaning toward</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
