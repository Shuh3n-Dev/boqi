import Navbar from "./components/Navbar"
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
      <Navbar />
      <main className="pt-20">
        <Hero />
        <StatsBar />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
