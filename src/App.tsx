import { ScrollProgress } from "./components/ScrollProgress"
import Hero from "./components/Hero"
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
        <section>
          <StatsBar />
          <Features />
        </section>
        <section>
          <Testimonials />
        </section>
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
