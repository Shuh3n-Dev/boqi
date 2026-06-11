import { ScrollProgress } from "./components/ScrollProgress"
import { SectionBackground } from "@/components/ui/section-background"
import Hero from "./components/Hero"
import AppShowcase from "./components/AppShowcase"
import StatsBar from "./components/StatsBar"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <ScrollProgress />
      <main className="relative z-1">
        <Hero />

        <section className="relative overflow-hidden">
          <AppShowcase />
        </section>

        <section className="relative overflow-hidden">
          <SectionBackground variant="subtle" />
          <StatsBar />
          <Features />
        </section>

        <section className="relative overflow-hidden">
          <SectionBackground variant="subtle" />
          <Testimonials />
        </section>

        <section className="relative overflow-hidden">
          <SectionBackground variant="subtle" />
          <Pricing />
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
