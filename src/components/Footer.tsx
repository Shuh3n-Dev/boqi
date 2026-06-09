import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-outline-variant py-lg"
    >
      <div className="w-[70%] mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          Boqi
        </div>
        <div className="text-body-sm text-on-surface-variant">
          © 2024 Boqi Systems. Todos los derechos reservados.
        </div>
        <div className="flex gap-lg">
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Términos
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
