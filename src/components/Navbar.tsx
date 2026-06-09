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
      className="fixed top-0 left-0 w-full z-50 px-gutter"
    >
      <div
        className={
          "mx-auto mt-sm md:mt-md transition-all duration-300 rounded-full border " +
          (scrolled
            ? "w-full md:w-[70%] max-w-[720px] bg-white/85 backdrop-blur-lg border-outline-variant/70 shadow-sm"
            : "w-full md:w-[70%] max-w-[720px] bg-white/70 backdrop-blur-md border-transparent")
        }
      >
        <div className="flex items-center justify-between px-md md:px-lg h-14 md:h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-headline-md text-headline-md font-bold text-primary shrink-0"
          >
            Boqi
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-lg">
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
              whileTap={{ scale: 0.97 }}
              href="#"
              className="bg-primary-container text-on-primary-container px-md py-sm rounded font-medium text-label-md transition-all hover:brightness-110 shadow-sm inline-block"
            >
              Ver Demostración
            </motion.a>
          </nav>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-sm">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-primary-container text-on-primary-container text-label-sm px-sm py-[6px] rounded font-medium hover:brightness-110 transition-all whitespace-nowrap"
            >
              Ver Demo
            </motion.a>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-surface-container transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span className="material-symbols-outlined text-on-surface text-xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
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
            <div className="flex flex-col p-md gap-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-body-md text-on-surface-variant hover:text-primary transition-colors py-sm px-sm rounded hover:bg-surface-container-low"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="bg-primary-container text-on-primary-container text-center px-md py-sm rounded font-medium hover:brightness-110 transition-all mt-sm"
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
