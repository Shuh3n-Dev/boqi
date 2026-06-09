import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="w-full px-gutter py-xl">
      <div className="w-full mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white border border-outline-variant rounded-lg overflow-hidden relative"
        >
          {/* Gradient background (inside the card) */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary" />
          <div className="absolute top-[-100px] right-[-50px] w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-50px] w-[250px] h-[250px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center space-y-md text-center px-lg py-xl">
            {/* Washi tape accent */}
            <div className="washi-tape">
              <span className="text-label-sm uppercase tracking-widest bg-white/10 text-white/80 px-sm py-xs rounded">
                Comience hoy
              </span>
            </div>
            <h2 className="text-headline-md text-white">
              ¿Listo para transformar su operativa?
            </h2>
            <p className="max-w-xl text-white/70 text-body-lg">
              Únase a las empresas que ya están optimizando su gestión con Boqi.
              Comience su demostración hoy.
            </p>
            <div className="flex gap-md pt-md flex-wrap justify-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="bg-white text-primary px-lg py-sm rounded font-medium hover:bg-neutral-100 transition-all inline-block shadow-sm text-label-md"
              >
                Agendar Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="border border-white/20 text-white px-lg py-sm rounded font-medium hover:bg-white/10 transition-all inline-block text-label-md"
              >
                Saber Más
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
