import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="w-full px-lg py-xl">
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-primary text-on-primary rounded-xl p-xl flex flex-col items-center space-y-md text-center"
        >
          <h2 className="font-headline-md text-headline-md">
            ¿Listo para transformar su operativa?
          </h2>
          <p className="max-w-xl opacity-80">
            Únase a las empresas que ya están optimizando su gestión con Boqi.
            Comience su demostración hoy.
          </p>
          <div className="flex gap-md pt-md flex-wrap justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="bg-white text-primary px-xl py-md rounded font-medium hover:bg-neutral-100 transition-colors inline-block"
            >
              Agendar Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="border border-white/30 text-white px-xl py-md rounded font-medium hover:bg-white/10 transition-colors inline-block"
            >
              Saber Más
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
