import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[80vh] flex-col items-center justify-center gap-8 text-center">
      <span className="font-mono text-2xs uppercase tracking-widest text-racing-500">// 404</span>
      <h1 className="font-display text-display-2xl uppercase tracking-wide text-ink-50">
        Page introuvable
      </h1>
      <span className="hairline-racing mx-auto" />
      <p className="max-w-xl text-base leading-relaxed text-ink-300">
        La page que vous cherchez n'existe pas ou a été déplacée. Pas de panique — revenez à
        l'accueil.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary" withArrow>
          Retour à l'accueil
        </Button>
        <Button href="/contact" variant="secondary">
          Nous contacter
        </Button>
      </div>
    </Container>
  );
}
