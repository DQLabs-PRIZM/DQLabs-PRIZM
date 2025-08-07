import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductVideoSection from "@/components/product-video-section"
import WebinarsSection from "@/components/webinars-section"
import ProductOverviewSection from "@/components/product-overview-section"
import HowItWorksSection from "@/components/how-it-works-section"
import MetricsSection from "@/components/metrics-section"
import RagChartSection from "@/components/rag-chart-section"
import EnterpriseSection from "@/components/enterprise-section"
import UseCasesSection from "@/components/use-cases-section"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import FaqSection from "@/components/faq-section"
import FinalCtaSection from "@/components/final-cta-section"
import Footer from "@/components/footer"

export default function Home() \{
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProductVideoSection />
        <WebinarsSection />
        <ProductOverviewSection />
        <HowItWorksSection />
        <MetricsSection />
        <RagChartSection />
        <EnterpriseSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PartnersSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
\}
