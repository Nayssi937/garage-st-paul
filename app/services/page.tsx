import Image from 'next/image';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { FadeUp } from '@/components/motion/FadeUp';
import { services } from '@/lib/data/services';
import { buildMetadata } from '@/lib/seo';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
  title: 'Nos services',
  description:
    "Entretien, vente, diagnostic, pneus & géométrie : quatre métiers exercés avec la même rigueur depuis 1962, dans notre atelier de Fribourg.",
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-700 pb-16 pt-32 text-cream-100 md:pb-20 md:pt-40">
        <Container>
          <FadeUp>
            <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
              Nos services
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-serif text-display-xl font-normal text-cream-50">
              Quatre métiers, une exigence.
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-100/75">
              Depuis 1962, nous couvrons l&rsquo;ensemble des besoins de
              l&rsquo;automobiliste exigeant — sans sous-traitance, sans
              approximation, avec la même équipe d&rsquo;un bout à l&rsquo;autre.
            </p>
          </FadeUp>
        </Container>
      </section>

      <section className="bg-cream-200">
        <Container className="flex flex-col gap-24 py-20 md:gap-28 md:py-28 lg:py-32">
          {services.map((service, idx) => {
            const reversed = idx % 2 === 1;
            const Icon = service.icon;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <FadeUp className={cn('lg:col-span-6', reversed && 'lg:order-2')}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.cover}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </FadeUp>

                <FadeUp
                  delay={0.1}
                  className={cn(
                    'flex flex-col gap-5 lg:col-span-6',
                    reversed && 'lg:order-1',
                  )}
                >
                  <Icon className="h-10 w-10 text-gold-600" strokeWidth={1.25} />
                  <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-600">
                    Prestation {service.number}
                  </span>
                  <h2 className="font-serif text-display-md font-normal text-navy-700">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed text-ink-500">
                    {service.description}
                  </p>
                  <ul className="mt-2 flex flex-col gap-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-ink-700">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-gold-500"
                          strokeWidth={2}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <Button href="/contact" variant="primary" withArrow>
                      Demander un devis
                    </Button>
                  </div>
                </FadeUp>
              </article>
            );
          })}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
