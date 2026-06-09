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

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
}

const floatAnimation2 = {
  initial: { y: 0 },
  animate: {
    y: [6, -6, 6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
}

export default function Hero() {
  return (
    <section className="w-full px-lg mb-xl pt-8 md:pt-0 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light via-transparent to-transparent opacity-40 pointer-events-none" />
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Decorative floating elements */}
      <motion.div
        {...floatAnimation}
        className="absolute top-40 right-[12%] w-3 h-3 rounded-full bg-accent/30 pointer-events-none hidden md:block"
      />
      <motion.div
        {...floatAnimation2}
        className="absolute top-60 left-[10%] w-2 h-2 rounded-full bg-secondary/40 pointer-events-none hidden md:block"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-5, 5, -5],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        }}
        className="absolute top-32 left-[18%] w-4 h-4 border border-accent/30 rounded-full pointer-events-none hidden md:block"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-[70%] mx-auto max-w-[1280px] flex flex-col items-center text-center space-y-md relative"
      >
        <motion.span
          variants={item}
          className="font-mono-label text-mono-label uppercase tracking-widest bg-accent/10 text-accent px-sm py-xs rounded-full"
        >
          Sistemas de Gestión de Próxima Generación
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display-lg text-display-lg md:text-display-lg text-on-background leading-tight"
        >
          Boqi:{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            La Inteligencia
          </span>{" "}
          que Ordena tu Negocio.
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
        >
          Agendamiento conversacional, facturación y control unificado.
          Citas fluidas, sin fricción para usted y sus clientes.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-md pt-sm"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex items-center gap-sm bg-primary text-on-primary px-xl py-md rounded-lg font-medium text-body-lg transition-all hover:bg-neutral-800 shadow-sm"
          >
            Ver Demostración
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#features"
            className="inline-flex items-center gap-sm border border-outline-variant text-on-surface-variant px-xl py-md rounded-lg font-medium text-body-lg hover:bg-surface-container transition-colors"
          >
            Explorar Features
            <span className="material-symbols-outlined">expand_more</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Asset */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-xl w-[70%] mx-auto max-w-[1280px] relative rounded-xl overflow-hidden border border-outline-variant bg-surface-container-low aspect-[21/9] shadow-sm"
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
