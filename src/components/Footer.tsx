'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import StoreBadge from '@/components/common/StoreBadge'
import { GOOGLE_PLAY_URL, APP_STORE_URL } from '@/utils/urls'
import {
  COMPANY_NAME,
  PHONE_NUMBER_DISPLAY,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
} from '@/utils/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Logo Dineroo"
              width={64}
              height={64}
              className="w-16 h-16"
              priority
            />
          </div>
          <h2 className="text-xl font-bold">Dineroo</h2>
          <p className="text-sm mt-2">
            Vous offrir la meilleure expérience de livraison en Guinée
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Entreprise</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/cgu">Conditions générales</Link></li>
            <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Rejoindre Dineroo</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/become-a-driver">Devenir livreur</Link></li>
            <li><Link href="/become-a-partner">Devenir partenaire</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg text-center"
          >
            Contactez-Nous
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt />
            <span>{PHONE_NUMBER_DISPLAY}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            <span>{CONTACT_EMAIL}</span>
          </div>
          <div className="flex gap-4 text-orange-500 text-xl mt-2">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" className="text-[#25D366]"><FaWhatsapp /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" className="text-[#1877F2]"><FaFacebookF /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" className="text-[#E1306C]"><FaInstagram /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" className="text-[#0077B5]"><FaLinkedinIn /></a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" className="text-black"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-2 text-center">
        <p className="text-base font-medium text-gray-700 mb-4">
          Téléchargez l’application Dineroo
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <StoreBadge
            href={APP_STORE_URL}
            src="/assets/stores/app-store-badge.png"
            alt="Télécharger sur l’App Store"
          />
          <StoreBadge
            href={GOOGLE_PLAY_URL}
            src="/assets/stores/google-play-badge.png"
            alt="Disponible sur Google Play"
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} {COMPANY_NAME} - Tous droits réservés.
      </div>
    </footer>
  )
}
