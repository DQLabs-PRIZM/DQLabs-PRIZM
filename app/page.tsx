import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import PrizmTechSection from "@/components/prizm-tech-section"
import UseCasesSection from "@/components/use-cases-section"
import CustomerLogosSection from "@/components/customer-logos-section"
import CtaFooter from "@/components/cta-footer"
import Footer from "@/components/footer"

export default function Home() \{
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PrizmTechSection />
        <UseCasesSection />
        <CustomerLogosSection />
        <CtaFooter />
      </main>
      <Footer />
    </div>
  )
\}
