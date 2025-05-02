import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata = {
  title: 'Conditions Générales d’Utilisation – Dineroo',
  description: 'Consultez les conditions d’utilisation de l’application Dineroo.',
}

export default function CguContent() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-gray-800">
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Conditions Générales d’Utilisation' }]} />

      <h1 className="text-3xl font-bold mb-6 text-center">Conditions Générales d’Utilisation</h1>

      <section className="space-y-6">
        <p>
          Dineroo est une application mobile développée par DIGITAL IMPACT GUINEA, permettant la commande et la livraison de repas auprès de restaurants partenaires en République de Guinée. Dineroo agit en tant qu’intermédiaire entre les clients, les restaurateurs et les livreurs. En accédant à l&apos;application et en utilisant ses services, l&apos;utilisateur accepte les présentes Conditions Générales d’Utilisation (CGU).
        </p>

        <h2 className="text-2xl font-semibold mt-10">1. Conditions applicables aux Clients</h2>

        <h3 className="text-xl font-semibold">1.1 Création de compte</h3>
        <p>
          Le client peut créer un compte à partir de 12 ans, sous réserve de disposer de la capacité à passer commande. Il s’engage à fournir des informations exactes et à jour. Dineroo se réserve le droit de suspendre tout compte frauduleux ou inactif.
        </p>

        <h3 className="text-xl font-semibold">1.2 Commande et livraison</h3>
        <p>
          La commande d’un repas s’effectue entre le client et le restaurant partenaire. Une fois la commande validée et payée, elle est transmise au restaurant, puis confiée à un livreur. Le client est notifié à chaque étape.
        </p>
        <p>
          L’adresse de livraison doit être claire. En cas d&apos;absence ou d&apos;erreur, la commande peut être annulée sans remboursement.
        </p>

        <h3 className="text-xl font-semibold">1.3 Engagements du client</h3>
        <ul className="list-disc list-inside">
          <li>fournir des coordonnées valides</li>
          <li>ne pas abuser du service (commandes fictives, annulations répétées...)</li>
          <li>respecter les livreurs et partenaires</li>
          <li>utiliser le service de manière loyale</li>
        </ul>

        <h3 className="text-xl font-semibold">1.4 Prix et paiement</h3>
        <p>
          Les prix sont indiqués en GNF (toutes taxes comprises). Les frais de livraison et de service s’ajoutent à la commande. Le paiement se fait via mobile money ou espèces (si disponible). Le client garantit la validité des moyens de paiement utilisés.
        </p>

        <h2 className="text-2xl font-semibold mt-10">2. Conditions applicables aux Restaurateurs partenaires</h2>

        <h3 className="text-xl font-semibold">2.1 Engagements du restaurant</h3>
        <ul className="list-disc list-inside">
          <li>publier une carte à jour</li>
          <li>ne proposer que des plats disponibles</li>
          <li>préparer les repas avec professionnalisme et hygiène</li>
          <li>respecter les délais de préparation annoncés</li>
          <li>informer Dineroo de toute modification de disponibilité</li>
        </ul>

        <h3 className="text-xl font-semibold">2.2 Responsabilités</h3>
        <p>
          Le restaurant est seul responsable de la qualité des repas. En cas de réclamation liée à un produit (fraîcheur, allergène, etc.), Dineroo pourra transmettre la demande au restaurateur sans s’y substituer.
        </p>

        <h3 className="text-xl font-semibold">2.3 Référencement</h3>
        <p>
          Dineroo se réserve le droit de référencer ou déréférencer un restaurant selon ses performances, sa fiabilité, ou en cas de manquement aux obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-10">3. Conditions applicables aux Livreurs</h2>

        <h3 className="text-xl font-semibold">3.1 Statut et obligations</h3>
        <ul className="list-disc list-inside">
          <li>livrer les commandes dans les délais</li>
          <li>respecter les règles de sécurité alimentaire</li>
          <li>traiter les clients avec courtoisie</li>
          <li>signaler tout incident ou retard via l’application Dineroo</li>
        </ul>

        <h3 className="text-xl font-semibold">3.2 Responsabilités</h3>
        <p>
          Le livreur est responsable de la bonne livraison des commandes (adresse exacte, colis non altéré). En cas de non-respect des engagements, Dineroo peut suspendre ou désactiver son accès à la plateforme.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Autres dispositions</h2>

        <h3 className="text-xl font-semibold">Propriété intellectuelle</h3>
        <p>
          Tous les contenus de l’application (logos, textes, images, interface) sont la propriété exclusive de DIGITAL IMPACT GUINEA. Leur réutilisation sans autorisation est interdite.
        </p>

        <h3 className="text-xl font-semibold">Données personnelles</h3>
        <p>
          Les données sont traitées conformément à la législation guinéenne. Voir notre{' '}
          <a href="/confidentialite" className="text-orange-600 underline hover:text-orange-700">
            Politique de Confidentialité
          </a>{' '}
          pour plus d’informations.
        </p>

        <h3 className="text-xl font-semibold">Modifications des CGU</h3>
        <p>
          Dineroo peut modifier les présentes CGU à tout moment. Toute modification est notifiée à l’utilisateur via l’application.
        </p>

        <h3 className="text-xl font-semibold">Droit applicable et litiges</h3>
        <p>
          Les présentes CGU sont régies par le droit guinéen. En cas de litige, une solution amiable est privilégiée. À défaut, seuls les tribunaux de Conakry seront compétents.
        </p>
      </section>

      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Conditions Générales d’Utilisation' }]} isBottom />
    </main>
  )
}
