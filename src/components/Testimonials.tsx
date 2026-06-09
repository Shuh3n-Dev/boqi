import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Desde que implementamos Boqi, nuestras citas aumentaron un 40%. La IA conversacional liberó a nuestro equipo de recepción para tareas de mayor valor.",
    name: "María Fernanda López",
    role: "Directora de Operaciones · Clínica del Sur",
    accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
    icon: "format_quote",
  },
  {
    quote:
      "La unificación de facturación y agenda nos ahorró horas de administración diarias. Ver el negocio en tiempo real cambió la forma en que tomamos decisiones.",
    name: "Carlos Martínez",
    role: "CEO · Consultoría Estratégica RM",
    accent: "bg-success/10 text-success group-hover:bg-success group-hover:text-white",
    icon: "format_quote",
  },
  {
    quote:
      "Implementación en semanas, no meses. El equipo de Boqi entendió nuestras necesidades desde el día uno y el soporte ha sido excepcional.",
    name: "Ana Gabriela Ruiz",
    role: "CTO · HealthTech Solutions",
    accent: "bg-primary-container/15 text-primary group-hover:bg-primary group-hover:text-white",
    icon: "format_quote",
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
      mass: 0.8,
    },
  },
}

export default function Testimonials() {
  return (
    <section className="w-full px-gutter mb-xl scroll-mt-24 relative">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="mb-lg flex items-start gap-md"
        >
          <div className="w-1 h-10 bg-accent rounded-full shrink-0 mt-1" />
          <div>
            <h2 className="text-headline-md text-primary">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-md"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardAnim}
              className="card-tilt bg-white/65 backdrop-blur-xl border border-white/30 shadow-lg shadow-primary-container/5 rounded-xl overflow-hidden p-lg hover:bg-white/80 hover:shadow-xl hover:shadow-primary-container/10 hover:-translate-y-1 transition-all duration-500 group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-accent/[0.03] to-transparent rounded-xl" />
                <div className="absolute -top-px left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>

              <div className="h-full relative z-10">
                <div className="h-full gap-md flex flex-col">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${t.accent}`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {t.icon}
                    </span>
                  </div>
                  <blockquote className="text-body-md text-on-surface-variant leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="pt-md border-t border-outline-variant/30">
                    <div className="font-medium text-body-sm text-primary">
                      {t.name}
                    </div>
                    <div className="text-body-sm text-on-surface-variant/70">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
