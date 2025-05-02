import React from 'react'
import Link from 'next/link'
import { CONTACT_EMAIL, PHONE_NUMBER_DISPLAY } from '@/utils/constants'

export const metadata = {
  title: 'Politique de Confidentialité – Dineroo',
  description: 'Comment Dineroo collecte, utilise et protège vos données personnelles en Guinée.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20 text-gray-800">
      {/* Breadcrumb */}
      <nav className="mb-10 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Accueil</Link> <span className="mx-2">/</span>
        <span className="text-gray-700">Politique de Confidentialité</span>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center">Politique de Confidentialité</h1>

      <p className="mb-6">Dernière mise à jour : Mai 2025</p>

      <p className="mb-6">
        Chez <strong>Dineroo</strong>, nous accordons une grande importance à la protection de vos données personnelles.
        Cette politique explique quelles informations nous collectons, pourquoi, et comment nous les utilisons dans le cadre
        de notre application mobile et de nos services de livraison en République de Guinée.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">1. Qui sommes-nous ?</h2>
      <p>
        Dineroo est un service de livraison de repas opéré par <strong>DIGITAL IMPACT GUINEA</strong>. Nous mettons en relation
        des clients, des restaurateurs et des livreurs via une plateforme numérique.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">2. Quelles données personnelles collectons-nous ?</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Données d’identification : nom, prénom, numéro de téléphone</li>
        <li>Données de connexion : identifiant, mot de passe, logs de connexion</li>
        <li>Données de localisation : adresse de livraison, position GPS (si activée)</li>
        <li>Données de commande : historique des achats, contenu des paniers</li>
        <li>Données de paiement : mobile money</li>
        <li>Données de navigation : préférences, pages visitées, interactions dans l&apos;app</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">3. Pourquoi collectons-nous vos données ?</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Gérer votre compte utilisateur</li>
        <li>Assurer la livraison de vos commandes</li>
        <li>Améliorer notre application et nos services</li>
        <li>Communiquer avec vous (notifications, support client)</li>
        <li>Prévenir la fraude et garantir la sécurité</li>
        <li>Respecter nos obligations légales</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">4. Partage de vos données</h2>
      <p>
        Nous ne revendons jamais vos données. Nous les partageons uniquement avec :
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Les restaurants partenaires pour exécuter vos commandes</li>
        <li>Les livreurs pour effectuer la livraison</li>
        <li>Les prestataires techniques (hébergement, SMS, paiements)</li>
        <li>Les autorités compétentes si la loi l’exige</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">5. Combien de temps conservons-nous vos données ?</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Données de compte : jusqu’à la suppression de votre compte</li>
        <li>Données techniques : selon la durée légale ou technique (logs, sécurité)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">6. Sécurité des données</h2>
      <p>
        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :
        chiffrement, restriction d’accès, journalisation, audits internes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">7. Vos droits</h2>
      <p>Conformément à la législation guinéenne, vous disposez des droits suivants :</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Droit d’accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l’effacement (sous conditions)</li>
        <li>Droit d’opposition au traitement</li>
        <li>Droit à la portabilité</li>
      </ul>
      <p className="mt-2">
        📩 Pour exercer vos droits, contactez-nous à : <strong>{CONTACT_EMAIL}</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">8. Cookies et traceurs</h2>
      <p>
        L’application peut utiliser des cookies ou traceurs similaires à des fins statistiques ou pour améliorer l’expérience utilisateur.
        Vous pouvez configurer votre appareil pour les bloquer si vous le souhaitez.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">9. Modifications de la politique</h2>
      <p>
        Nous pouvons mettre à jour cette politique. En cas de changement important, vous en serez informé via l’application.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">10. Contact</h2>
      <p>
        Pour toute question relative à vos données :<br />
        📧 <strong>{CONTACT_EMAIL}</strong><br />
        📞 <strong>{PHONE_NUMBER_DISPLAY}</strong>
      </p>

      {/* Breadcrumb */}
      <nav className="mt-10 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Accueil</Link> <span className="mx-2">/</span>
        <span className="text-gray-700">Politique de Confidentialité</span>
      </nav>

      <p className="mt-10 text-sm text-gray-600 text-center">
        📄 Besoin d’en savoir plus ? Consultez nos <Link href="/cgu" className="text-orange-600 underline hover:text-orange-700">Conditions Générales d’Utilisation</Link>.
      </p>
    </main>
  )
}
