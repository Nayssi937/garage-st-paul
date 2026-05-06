import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SITE_CONFIG, buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site LS Automobiles.',
  path: '/politique-confidentialite',
});

export default function PolitiquePage() {
  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Politique de confidentialité' },
        ]}
      />
      <Section bg="default">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-8 text-ink-200">
            <Block title="Données collectées">
              <p>
                Nous collectons uniquement les informations que vous nous transmettez
                volontairement via notre formulaire de contact (nom, email, téléphone optionnel,
                message). Aucune donnée n'est collectée à votre insu.
              </p>
            </Block>
            <Block title="Utilisation">
              <p>
                Ces informations servent exclusivement à répondre à votre demande. Elles ne sont
                jamais partagées avec des tiers, ni utilisées à des fins commerciales sans votre
                accord explicite.
              </p>
            </Block>
            <Block title="Conservation">
              <p>
                Les messages reçus sont conservés tant que la relation client reste active, puis
                archivés ou supprimés selon les obligations légales en vigueur.
              </p>
            </Block>
            <Block title="Vos droits">
              <p>
                Conformément à la Loi suisse sur la protection des données (LPD), vous disposez
                d'un droit d'accès, de rectification et de suppression de vos données. Pour
                exercer ces droits, contactez-nous à{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-racing-500 hover:underline">
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </Block>
            <Block title="Cookies">
              <p>
                Ce site utilise uniquement des cookies techniques nécessaires à son
                fonctionnement. Aucun cookie de tracking publicitaire n'est déployé.
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
