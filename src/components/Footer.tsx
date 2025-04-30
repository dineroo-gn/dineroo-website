'use client'

import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
          <Image
            src="/images/logo.png"
            alt="Logo Dineroo"
            width={64}
            height={64}
            className="w-16 h-16"
            priority
          />
          </div>
          <h2 className="text-xl font-bold">Dineroo</h2>
          <p className="text-sm mt-2">Vous offrir la meilleure expérience de livraison en Guinée</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Société</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
            <li><Link href="/cgu">Conditions générales</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Rejoindre Dineroo</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/become-a-driver">Devenir livreur</Link></li>
            <li><Link href="/partenaire">Devenir partenaire</Link></li>
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
            <span>(+224) 620 00 00 00</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            <span>contact@dineroo.com</span>
          </div>
          <div className="flex gap-4 text-orange-500 text-xl mt-2">
          <a href="https://facebook.com" target="_blank" className="text-[#1877F2]"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" className="text-[#E1306C]"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" className="text-[#0077B5]"><FaLinkedinIn /></a>
          <a href="https://tiktok.com" target="_blank" className="text-black"><FaTiktok /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Dineroo. Tous droits réservés.
      </div>
    </footer>
  )
}
