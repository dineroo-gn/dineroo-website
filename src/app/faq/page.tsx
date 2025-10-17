'use client'

import Breadcrumb from '@/components/common/Breadcrumb'
import { COMPANY_NAME, CONTACT_EMAIL, PHONE_NUMBER_DISPLAY } from '@/utils/constants'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/utils/urls'
import Link from 'next/link'
import { JSX, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const clientFaqs = [
  {
    question: 'Qu’est-ce que Dineroo ?',
    answer: `Dineroo est une application mobile de livraison de repas, opérée par ${COMPANY_NAME}, qui connecte les clients à des restaurants partenaires en Guinée.`
  },
  {
    question: 'Comment passer ma première commande ?',
    answer: (
      <>
        Téléchargez l’application Dineroo depuis le{' '}
        <Link href={GOOGLE_PLAY_URL} className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">
          Google Play Store
        </Link>{' '}
        ou l’{' '}
        <Link href={APP_STORE_URL} className="text-orange-600 underline" target="_blank" rel="noopener noreferrer">
          App Store
        </Link>
        .<br></br>Ensuite, créez un compte, choisissez un restaurant, ajoutez vos plats, entrez votre adresse et validez votre commande en choisissant un mode de paiement.
      </>
    ),
  },
  {
    question: 'Quels moyens de paiement sont acceptés ?',
    answer: 'Mobile money (Orange Money) et parfois espèces selon les zones.'
  },
  {
    question: 'Puis-je commander pour quelqu’un d’autre ?',
    answer: 'Oui, vous pouvez entrer une autre adresse et des coordonnées différentes.'
  },
  {
    question: 'Peut-on suivre le livreur en temps réel ?',
    answer: 'Oui, vous pouvez suivre votre livreur en temps réel directement depuis l’application, sur la carte interactive une fois la commande en cours de livraison.',
  },
  {
    question: 'Puis-je annuler ma commande ?',
    answer: 'Oui, si elle n’a pas encore été acceptée par le restaurant.',
  },
  {
    question: 'Quels sont vos horaires de livraison ?',
    answer: 'Les livraisons sont disponibles à tout moment, en fonction des horaires d’ouverture des restaurants partenaires.',
  },
  {
    question: 'Y a-t-il des promotions ou réductions ?',
    answer: 'Oui, activez les notifications pour ne rien rater.',
  },
]

const driverFaqs = [
  {
    question: 'Comment devenir livreur Dineroo ?',
    answer: (
      <>
        Remplissez le formulaire ici :{' '}
        <Link href="/become-a-driver" className="text-black underline">
          Devenir livreur
        </Link>
      </>
    ),
  },
  {
    question: 'Quels sont les prérequis pour devenir livreur ?',
    answer: 'Smartphone, vélo/moto, pièce d’identité valide.'
  },
  {
    question: 'Comment suis-je payé ?',
    answer: 'Vous êtes payé à chaque livraison. Vous pouvez retirer votre argent à tout moment depuis l’onglet "Gains" de l’application.',
  },  
  {
    question: 'Puis-je choisir mes horaires ?',
    answer: 'Oui, vous êtes libre de vous connecter quand vous voulez.',
  },
  {
    question: 'Dois-je avoir une assurance ?',
    answer: 'Oui, fortement recommandée.'
  },
  {
    question: 'Que faire si un client ne répond pas ?',
    answer: (
      <>
        Essayez de l’appeler plusieurs fois. Si aucune réponse, contactez immédiatement le support via l’application ou par téléphone au{' '}
        <strong>{PHONE_NUMBER_DISPLAY}</strong>.
      </>
    ),
  }  
]

const partnerFaqs = [
  {
    question: 'Comment devenir un restaurant partenaire ?',
    answer: (
      <>
        Remplissez le formulaire ici :{' '}
        <Link href="/become-a-partner" className="text-orange-600 underline">
          Devenir partenaire
        </Link>{' '}
        <br></br>Notre équipe vous contactera rapidement pour finaliser l’intégration.
      </>
    ),
  },
  {
    question: 'Quels sont les avantages pour mon restaurant ?',
    answer: 'Dineroo vous permet de toucher une nouvelle clientèle, d’augmenter vos ventes et de bénéficier d’un système de livraison optimisé sans avoir à gérer la logistique en interne.',
  },
  {
    question: 'Quels types de restaurants peuvent s’inscrire ?',
    answer: 'Tous les types de restauration sont acceptés : fast-food, cuisine traditionnelle, pâtisseries, snacks, etc. Nous valorisons la diversité de l’offre culinaire locale.',
  },
  {
    question: 'Comment sont gérées les commandes ?',
    answer: 'Vous recevez les commandes en temps réel via l’interface partenaire Dineroo. Vous pouvez les accepter, refuser ou les mettre en attente selon la disponibilité.',
  },
  {
    question: 'Qui s’occupe de la livraison ?',
    answer: 'Dineroo met à disposition ses livreurs. Vous n’avez pas besoin d’avoir votre propre équipe de livraison.',
  },
  {
    question: 'Puis-je mettre à jour mon menu ou mes horaires ?',
    answer: 'Oui, vous avez un accès dédié pour modifier vos plats, prix, horaires d’ouverture ou toute autre information en temps réel.',
  },
  {
    question: 'Comment suis-je payé ?',
    answer: 'Les paiements sont effectués de manière hebdomadaire ou selon l’accord convenu. Vous recevez un relevé détaillé de vos ventes et des commissions.',
  },
  {
    question: 'Comment contacter le service client ?',
    answer: (
      <>
        Vous pouvez contacter notre service client par téléphone au <strong>{PHONE_NUMBER_DISPLAY}</strong>, par e-mail à <strong>{CONTACT_EMAIL}</strong>, ou via notre{' '}
        <Link href="/contact" className="text-orange-600 underline">
          formulaire de contact
        </Link>
        .
      </>
    ),
  }  
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const renderFaqSection = (
    title: string,
    faqs: { question: string; answer: string | JSX.Element }[],
    offset: number,
    id: string
  ) => (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const i = offset + index
          return (
            <div key={i} className="border rounded-lg shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium cursor-pointer"
              >
                {faq.question}
                <FaChevronDown className={`transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          )
        })}
      </div>
    </section>
  )

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'FAQ' }]} />

        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Foire aux questions</h1>

        <div className="mb-12 text-center space-x-4">
          <a href="#clients" className="text-orange-600 underline hover:text-orange-700">Clients</a>
          <a href="#livreurs" className="text-orange-600 underline hover:text-orange-700">Livreurs</a>
          <a href="#restaurants" className="text-orange-600 underline hover:text-orange-700">Restaurants partenaires</a>
        </div>

        {renderFaqSection('📱 Pour les clients', clientFaqs, 0, 'clients')}
        {renderFaqSection('🚴 Pour les livreurs', driverFaqs, clientFaqs.length, 'livreurs')}
        {renderFaqSection('🍽️ Pour les restaurants partenaires', partnerFaqs, clientFaqs.length + driverFaqs.length, 'restaurants')}

        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'FAQ' }]} isBottom />
      </div>
    </section>
  )
}
