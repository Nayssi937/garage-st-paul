import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="on-dark relative isolate flex min-h-[80svh] items-center overflow-hidden bg-navy-700 text-cream-100">
      <Container className="flex flex-col items-center gap-6 py-32 text-center">
        <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-gold-400">
          Erreur 404
        </span>
        <h1 className="font-serif text-display-2xl font-normal leading-none text-cream-50">
          <span className="text-gold-400">404</span>
        </h1>
        <h2 className="max-w-2xl font-serif text-display-md font-normal text-cream-50">
          Cette page n&rsquo;existe pas.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-cream-100/75">
          La page que vous cherchez a peut-être été déplacée, ou n&rsquo;a
          jamais existé. Revenez à l&rsquo;accueil ou contactez-nous.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" withArrow>
            Retour à l&rsquo;accueil
          </Button>
          <Button href="/contact" variant="secondary-on-dark">
            Nous contacter
          </Button>
        </div>
      </Container>
    </section>
  );
}
