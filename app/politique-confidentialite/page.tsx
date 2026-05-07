import { Container } from '@/components/ui/Container';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SITE_CONFIG, buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Garage St-Paul.',
  path: '/politique-confidentialite',
});

export default function PolitiquePage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-700 pb-12 pt-32 text-cream-100 md:pb-16 md:pt-40">
        <Container>
          <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
            Informations légales
          </span>
          <h1 className="mt-5 font-serif text-display-xl font-normal text-cream-50">
            Politique de confidentialité.
          </h1>
        </Container>
      </section>

      <section className="bg-cream-200 py-16 md:py-20">
        <Container size="narrow">
          <div className="prose-stpaul">
            <h2>Données collectées</h2>
            <p>
              Nous collectons uniquement les informations que vous nous
              transmettez volontairement via notre formulaire de contact (nom,
              email, téléphone, message). Aucune donnée n&rsquo;est collectée à
              votre insu.
            </p>

            <h2>Utilisation</h2>
            <p>
              Ces informations servent exclusivement à répondre à votre demande
              et à gérer votre dossier client. Elles ne sont jamais partagées
              avec des tiers, ni utilisées à des fins commerciales sans votre
              accord explicite.
            </p>

            <h2>Conservation</h2>
            <p>
              Les messages reçus sont conservés tant que la relation client
              reste active, puis archivés ou supprimés selon les obligations
              légales en vigueur (10 ans pour les pièces comptables).
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à
              son fonctionnement. Aucun cookie de tracking publicitaire
              n&rsquo;est déployé.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément à la Loi suisse sur la protection des données (nLPD)
              et au RGPD applicable aux résidents européens, vous disposez
              d&rsquo;un droit d&rsquo;accès, de rectification, d&rsquo;effacement
              et de portabilité de vos données. Pour exercer ces droits,
              contactez-nous à{' '}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
            </p>

            <p className="text-sm">
              <em>
                Dernière mise à jour : janvier 2024 — contenu de démonstration
                à valider par un conseiller juridique.
              </em>
            </p>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
