'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">À propos de Dineroo</h1>
        <p className="text-lg text-gray-600">Qui nous sommes, notre mission, et pourquoi nous le faisons.</p>
      </div>
      <Image
        src="/images/about/about-illustration-clean.jpg"
        alt="Illustration livraison Dineroo"
        width={800}
        height={400}
        className="mx-auto rounded-lg shadow-md mb-10"
      />

      <div className="space-y-12">
        <p>
          Bienvenue chez <strong>Dineroo</strong>, votre partenaire de confiance pour la livraison de repas en Guinée. Dineroo est une entreprise guinéenne née de la volonté de faciliter la vie quotidienne des citoyens à travers un service de livraison moderne, efficace et accessible depuis une application mobile.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Notre mission</h2>
          <p className="italic">
            Offrir une solution locale et digitale pour la livraison de repas, avec un service centré sur l&apos;expérience client.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Nos engagements</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Professionnalisme :</strong> Nous mettons l&apos;humain au cœur du service, avec des livreurs formés et impliqués.</li>
            <li><strong>Innovation :</strong> Nous nous appuyons sur la technologie pour connecter les restaurants, les livreurs et les clients de manière fluide.</li>
            <li><strong>Qualité :</strong> Nous nous efforçons de garantir une expérience utilisateur simple, rapide et fiable.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Notre vision</h2>
          <p>
            Devenir une référence de la livraison en Guinée, en construisant une logistique locale robuste et inclusive, portée par une technologie accessible à tous.
          </p>
          <Image
            src="/images/about/vision-values.jpg"
            alt="Vision et valeurs Dineroo"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mt-6"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Une application au service de vos besoins</h2>
          <p>
            Disponible sur Android et iOS, notre application vous permet de commander des plats en quelques clics, en toute simplicité.
          </p>
        </div>

        <div className="text-center font-semibold text-orange-600 text-xl mt-12">
          Avec Dineroo, vos plats préférés arrivent chez vous.
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Notre équipe</h2>
          <p>
            Derrière Dineroo, il y a une équipe engagée et passionnée : développeurs, livreurs, partenaires logistiques et support client œuvrent chaque jour pour vous offrir la meilleure expérience de livraison en Guinée.
          </p>
          <Image
            src="/images/about/team-illustration.jpg"
            alt="Équipe Dineroo"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Rejoignez l’aventure</h2>
          <p>
            Que vous soyez client, restaurateur ou coursier, Dineroo vous propose de participer à un projet ambitieux de livraison en Guinée. Ensemble, construisons une solution locale et durable.
          </p>
        </div>
      </div>
    </section>
  )
}
