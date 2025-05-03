import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import WhyDinerooSection from '@/components/home/WhyDinerooSection'
import BecomeDriverTeaserSection from '@/components/home/BecomeDriverTeaserSection'
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
