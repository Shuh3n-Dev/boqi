import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Desde que implementamos Boqi, nuestras citas aumentaron un 40%. La IA conversacional liberó a nuestro equipo de recepción para tareas de mayor valor.",
    name: "María Fernanda López",
    role: "Directora de Operaciones · Clínica del Sur",
    accent: "bg-accent/10 text-accent",
    icon: "format_quote",
  },
  {
    quote:
      "La unificación de facturación y agenda nos ahorró horas de administración diarias. Ver el negocio en tiempo real cambió la forma en que tomamos decisiones.",
    name: "Carlos Martínez",
    role: "CEO · Consultoría Estratégica RM",
    accent: "bg-success/10 text-success",
    icon: "format_quote",
  },
  {
    quote:
      "Implementación en semanas, no meses. El equipo de Boqi entendió nuestras necesidades desde el día uno y el soporte ha sido excepcional.",
    name: "Ana Gabriela Ruiz",
    role: "CTO · HealthTech Solutions",
    accent: "bg-primary-container/15 text-primary",
    icon: "format_quote",
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function Testimonials() {
  return (
    <section className="w-full px-gutter mb-xl">
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-lg"
        >
          <h2 className="text-headline-md text-headline-md text-primary">
            Lo que dicen nuestros clientes
          </h2>
          <div className="h-1 w-12 bg-accent mt-sm rounded" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-md"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardAnim}
              className="bg-white border border-outline-variant rounded-lg p-lg flex flex-col gap-md hover:shadow-sm hover:border-primary-container/30 transition-all"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${t.accent}`}
              >
                <span className="material-symbols-outlined text-xl">
                  {t.icon}
                </span>
              </div>
              <blockquote className="text-body-md text-body-md text-on-surface-variant leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-auto pt-md border-t border-outline-variant/30">
                <div className="font-medium text-body-sm text-body-sm text-primary">
                  {t.name}
                </div>
                <div className="text-body-sm text-body-sm text-on-surface-variant/70">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
