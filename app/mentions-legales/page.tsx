import { Container } from '@/components/ui/Container';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { SITE_CONFIG, buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site Garage St-Paul à Fribourg.',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-navy-700 pb-12 pt-32 text-cream-100 md:pb-16 md:pt-40">
        <Container>
          <span className="font-sans text-eyebrow uppercase tracking-eyebrow text-cream-100/60">
            Informations légales
          </span>
          <h1 className="mt-5 font-serif text-display-xl font-normal text-cream-50">
            Mentions légales.
          </h1>
        </Container>
      </section>

      <section className="bg-cream-200 py-16 md:py-20">
        <Container size="narrow">
          <div className="prose-stpaul">
            <h2>Éditeur du site</h2>
            <p>
              <strong>{SITE_CONFIG.fullName}</strong>
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

            <h2>Hébergement</h2>
            <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&rsquo;ensemble des contenus présents sur ce site (textes,
              images, logos) sont la propriété exclusive du Garage St-Paul ou
              utilisés avec l&rsquo;autorisation de leurs ayants droit. Toute
              reproduction sans autorisation préalable est interdite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations relatives aux véhicules présentés sont données à
              titre indicatif et ne constituent pas un engagement contractuel.
              Seul un devis ou un contrat signé fait foi.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit suisse.
              Tout litige sera de la compétence exclusive des tribunaux du
              canton de Fribourg.
            </p>

            <p className="text-sm">
              <em>
                Dernière mise à jour : janvier 2024 — contenu de démonstration
                à valider et compléter.
              </em>
            </p>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
