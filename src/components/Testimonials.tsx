import { motion } from "framer-motion"
import { SectionBackground } from "@/components/ui/section-background"

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
    <section className="w-full px-gutter mb-xl scroll-mt-24 relative overflow-hidden">
      <SectionBackground variant="warm" />

      <div className="wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-md"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardAnim}
              className="bg-white border border-outline-variant rounded-lg overflow-hidden p-lg hover:shadow-sm hover:border-primary-container/30 transition-all duration-500 group relative"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-transparent rounded-lg" />
                <div className="absolute -top-px left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
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
