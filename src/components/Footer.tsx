import { motion } from "framer-motion"

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Términos", href: "#" },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white"
    >
      {/* Ruled-line separator */}
      <div className="relative">
        <div className="h-px bg-outline-variant/40" />
        <div className="absolute top-0 left-[var(--spacing-lg)] w-px h-2 bg-red-400/20 pointer-events-none" />
      </div>

      <div className="w-[70%] mx-auto max-w-[1280px] py-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="flex items-center gap-sm">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <div className="text-headline-md font-bold text-primary">
              Boqi
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-lg gap-y-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-md pt-md border-t border-outline-variant/30 text-center text-body-sm text-on-surface-variant/60">
          © 2024 Boqi Systems. Todos los derechos reservados.
        </div>
      </div>
    </motion.footer>
  )
}
