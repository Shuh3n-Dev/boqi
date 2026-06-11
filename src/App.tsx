import { ScrollProgress } from "./components/ScrollProgress"
import { SectionBackground } from "@/components/ui/section-background"
import Hero from "./components/Hero"
import StackedSections from "./components/StackedSections"
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

        <StackedSections />

        <section className="relative overflow-hidden pt-24 md:pt-32">
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
