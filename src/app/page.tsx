import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyDinerooSection from '@/components/WhyDinerooSection'
import BecomeDriverTeaserSection from '@/components/BecomeDriverTeaserSection'
import MobileScreenshotsSection from '@/components/home/MobileScreenshotsSection'
import PartnerLogosCarousel from '@/components/home/OurPartnersSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <MobileScreenshotsSection />
        <HowItWorksSection />
        <PartnerLogosCarousel  />
        <WhyDinerooSection />
        <BecomeDriverTeaserSection />
      </main>
    </div>
  )
}
