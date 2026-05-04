import { Container } from './container';

const steps = [
  {
    number: '01',
    title: 'Measure',
    body: "We come to your home, take exact measurements, and walk through hardware, glass type, and finishes with you. No rush. No upsell.",
  },
  {
    number: '02',
    title: 'Fabricate',
    body: 'Your glass is cut and tempered to your exact opening. Five to seven business days. We use 3/8" thickness as standard, 1/2" available for heavy enclosures.',
  },
  {
    number: '03',
    title: 'Install',
    body: 'Our two-person crew arrives clean, works clean, leaves clean. Most installations finish in a single morning. Lifetime workmanship warranty applies the second we hand over the keys.',
  },
];

export function Process() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-bone relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-[0.04]" />

      <Container size="wide" className="relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="eyebrow text-brass">How It Works</div>
            <h2 className="display-lg mt-6 text-bone">
              From first call to final{' '}
              <span className="italic text-brass">install.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="font-display text-7xl lg:text-8xl text-brass/30 tracking-tightest leading-none">
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-tighter text-bone">
                {step.title}
              </h3>
              <p className="mt-5 text-bone/60 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
