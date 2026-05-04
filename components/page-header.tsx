import { Container } from './container';

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 hero-bg overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <Container size="wide" className="relative">
        <div className={align === 'center' ? 'text-center max-w-4xl mx-auto' : 'max-w-4xl'}>
          {eyebrow && <div className="eyebrow text-brass-deep mb-6">{eyebrow}</div>}
          <h1 className="display-xl text-ink">{title}</h1>
          {description && (
            <p className="mt-8 text-lg lg:text-xl text-ink/70 leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
