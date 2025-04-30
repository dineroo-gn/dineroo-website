import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyDinerooSection from '@/components/WhyDinerooSection'
import BecomeDriverTeaserSection from '@/components/BecomeDriverTeaserSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <WhyDinerooSection />
        <BecomeDriverTeaserSection />
      </main>
    </div>
  )
}
