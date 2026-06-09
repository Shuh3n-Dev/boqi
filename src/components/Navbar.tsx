import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-lg"
    >
      <div
        className={
          "mx-auto mt-sm md:mt-md transition-all duration-300 rounded-full border " +
          (scrolled
            ? "w-full md:w-[70%] max-w-[720px] bg-white/80 backdrop-blur-lg border-outline-variant shadow-sm"
            : "w-full md:w-[70%] max-w-[720px] bg-white/70 backdrop-blur-md border-transparent")
        }
      >
        <div className="flex items-center justify-between px-md md:px-lg h-14 md:h-16">
          {/* Logo */}
          <a href="#" className="font-headline-md text-headline-md font-bold text-primary shrink-0">
            Boqi
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="bg-primary text-on-primary px-lg py-sm rounded-lg font-medium text-body-sm transition-all hover:bg-neutral-800 inline-block"
            >
              Ver Demostración
            </motion.a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className="material-symbols-outlined text-on-surface">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mx-auto mt-sm w-full md:w-[70%] max-w-[720px] bg-white/90 backdrop-blur-lg rounded-2xl border border-outline-variant shadow-sm overflow-hidden"
          >
            <div className="flex flex-col p-md gap-md">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-body-md text-on-surface-variant hover:text-primary transition-colors py-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="bg-primary text-on-primary text-center px-lg py-sm rounded-lg font-medium hover:bg-neutral-800 transition-colors"
              >
                Ver Demostración
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
