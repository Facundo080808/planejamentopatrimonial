import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import BenefitsSection from "@/components/benefits-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import DifferentialsSection from "@/components/differentials-section"
import CasesSection from "@/components/cases-section"
import TeamSection from "@/components/team-section"
import HighlightForm from "@/components/highlight-form"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
      <DifferentialsSection />
      <CasesSection />
      <TeamSection />
      <HighlightForm />
      <FaqSection />
      <Footer />
    </main>
  )
}
