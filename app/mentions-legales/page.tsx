import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site LS Automobiles.',
  path: '/mentions-legales',
});

export default function MentionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Mentions légales"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]}
      />
      <Section bg="default">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8 text-ink-200">
            <Block title="Éditeur du site">
              <p>
                {SITE_CONFIG.fullName}
                <br />
                {SITE_CONFIG.address.street}
                <br />
                {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}, Suisse
              </p>
              <p>
                Téléphone : {SITE_CONFIG.phoneDisplay}
                <br />
                Email : {SITE_CONFIG.email}
              </p>
            </Block>
            <Block title="Hébergement">
              <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com</p>
            </Block>
            <Block title="Propriété intellectuelle">
              <p>
                L'ensemble du contenu de ce site (textes, images, photographies, graphismes,
                logos) est la propriété exclusive de {SITE_CONFIG.fullName} ou utilisé avec
                l'autorisation des ayants droit. Toute reproduction sans autorisation préalable
                est strictement interdite.
              </p>
            </Block>
            <Block title="Responsabilité">
              <p>
                Les informations diffusées sur ce site sont fournies à titre indicatif.
                {SITE_CONFIG.fullName} s'efforce de garantir leur exactitude mais ne saurait
                être tenu responsable d'erreurs ou omissions, ni de l'usage qui pourrait en
                être fait par des tiers.
              </p>
            </Block>
            <Block title="Droit applicable">
              <p>
                Le présent site est soumis au droit suisse. Tout litige sera de la compétence
                exclusive des tribunaux du canton de Vaud.
              </p>
            </Block>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 border-t border-ink-700 pt-8 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl uppercase tracking-wide text-ink-50">{title}</h2>
      <div className="space-y-2 text-base leading-relaxed">{children}</div>
    </div>
  );
}
