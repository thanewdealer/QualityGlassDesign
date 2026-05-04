import { Container } from './container';

const trustItems = [
  {
    label: 'Google Rating',
    value: '5.0',
    detail: '52 reviews',
  },
  {
    label: 'Standard Glass',
    value: '3/8"',
    detail: 'Tempered, low-iron',
  },
  {
    label: 'Turnaround',
    value: '5–7',
    detail: 'Days, measure to install',
  },
  {
    label: 'Workmanship',
    value: '∞',
    detail: 'Lifetime warranty',
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-bone-dim/40">
      <Container size="wide">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className={`py-10 lg:py-12 px-2 ${
                i > 0 ? 'lg:border-l border-ink/10' : ''
              } ${i % 2 === 1 ? 'border-l border-ink/10 lg:border-l' : ''} ${
                i >= 2 ? 'border-t border-ink/10 lg:border-t-0' : ''
              }`}
            >
              <div className="eyebrow text-ink/50">{item.label}</div>
              <div className="mt-3 font-display text-5xl lg:text-6xl tracking-tightest text-ink">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-ink/60">{item.detail}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
