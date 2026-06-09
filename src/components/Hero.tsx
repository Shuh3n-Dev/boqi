import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function Hero() {
  return (
    <section className="w-full px-lg mb-xl pt-8 md:pt-0">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-[70%] mx-auto max-w-[1280px] flex flex-col items-center text-center max-w-3xl space-y-md"
      >
        <motion.span
          variants={item}
          className="font-mono-label text-mono-label text-secondary uppercase tracking-widest bg-secondary/10 px-sm py-xs rounded-full"
        >
          Sistemas de Gestión de Próxima Generación
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display-lg text-display-lg md:text-display-lg text-on-background leading-tight"
        >
          Boqi: La Inteligencia que Ordena tu Negocio.
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
        >
          Agendamiento conversacional, facturación y control unificado.
          Citas fluidas, sin fricción para usted y sus clientes.
        </motion.p>

        <motion.div variants={item} className="pt-sm">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-medium text-body-lg transition-all hover:bg-neutral-800"
          >
            Ver Demostración
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Asset */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-xl w-[70%] mx-auto max-w-[1280px] relative rounded-xl overflow-hidden border border-outline-variant bg-surface-container-low aspect-[21/9]"
      >
        <img
          alt="Boqi Interface"
          className="w-full h-full object-cover opacity-90"
          src="https://lh3.googleusercontent.com/aida/AP1WRLur1VXRgFV2cLhEl4vkIn4GfsrH0T7TJanONvoBeNJKEp0fCbCR1hWg3D9MEHIeQOC9V5OR5wLdXy-xZPDVOzNNjlViv5r_a49f8QEnyzVNOh_vGDZoBYjgdwlicQqDuvEwGI8DpjcZhQaDDGXBzyreoyKmH4X77X01dysWYn1hEVAEma0NUOsFGJIuqGMn2Cys2RJF2jC1vUiq_uiJYcL5jsqd6dQHzJUZ8r2LIHevMvo0qL5rZZhXBOBo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>
    </section>
  )
}
