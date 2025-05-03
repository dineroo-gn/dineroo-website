'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AppButton from '@/components/common/AppButton'
import OtpInputField from '@/components/common/OtpInputField'
import AppLoader from '@/components/common/AppLoader'

export default function VerifyPhonePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone') || ''
  const role = searchParams.get('role') || '' // driver ou partner

  const [code, setCode] = useState('')
  const [hasError, setHasError] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [resending, setResending] = useState(false)

  useEffect(() => {
    if (!canResend && countdown > 0) {
      const interval = setInterval(() => setCountdown((prev) => prev - 1), 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [countdown, canResend])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!/^\d{4}$/.test(code)) {
      toast.error('Code de vérification invalide.')
      setHasError(true)
      return
    }

    setHasError(false)
    setVerifying(true)

    // TODO: Call an API to check code
    setTimeout(() => {
      toast.success('Numéro vérifié ✅')
      setVerifying(false)
      router.push(`/confirmation?phone=${encodeURIComponent(phone)}&role=${encodeURIComponent(role)}`)
    }, 1000)
  }

  const handleResend = () => {
    if (!canResend || resending) return

    setResending(true)
    // TODO: Call an API to return code
    setTimeout(() => {
      toast.success('Un nouveau code a été renvoyé 🔄')
      setCountdown(30)
      setCanResend(false)
      setResending(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Vérification du numéro</h1>
        <p className="text-gray-600 text-sm">
          Un code a été envoyé à <strong>{phone}</strong>. Entrez-le ci-dessous.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <OtpInputField
            value={code}
            onChange={setCode}
            hasError={hasError}
            length={4}
          />
          <AppButton type="submit" disabled={verifying}>
            {verifying ? <AppLoader /> : 'Vérifier'}
          </AppButton>
        </form>

        <div className="text-sm text-gray-500">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-orange-600 underline disabled:opacity-50"
              disabled={resending}
            >
              {resending ? 'Envoi...' : 'Renvoyer le code'}
            </button>
          ) : (
            <>Renvoyer dans {countdown} s</>
          )}
        </div>
      </div>
    </main>
  )
}
