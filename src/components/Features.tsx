import { motion } from "framer-motion"
import { SectionBackground } from "@/components/ui/section-background"

const features = [
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant",
    textColor: "",
    icon: "touch_app",
    iconColor: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
    title: "Adiós a la Fricción del Cliente",
    description:
      "Elimine las barreras entre su servicio y sus usuarios. Interfaces diseñadas para la conversión inmediata sin pasos innecesarios.",
    link: true,
    isHero: false,
  },
  {
    colSpan: "md:col-span-4",
    bg: "bg-gradient-to-br from-primary via-primary-container to-primary text-white",
    textColor: "text-white/75",
    icon: "hub",
    iconColor: "bg-white/20 text-white",
    title: "Control Total Multinegocio",
    description:
      "Gestione múltiples sedes o verticales desde un solo panel de mando centralizado y seguro.",
    link: false,
    isHero: true,
  },
  {
    colSpan: "md:col-span-4",
    bg: "bg-white border border-outline-variant",
    textColor: "",
    icon: "event_available",
    iconColor: "bg-success/10 text-success group-hover:bg-success group-hover:text-white",
    title: "Automatización de Citas",
    description:
      "IA conversacional que agenda, confirma y recuerda citas de manera autónoma 24/7.",
    link: false,
    isHero: false,
  },
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant",
    textColor: "",
    icon: "query_stats",
    iconColor: "bg-info/10 text-info group-hover:bg-info group-hover:text-white",
    title: "Reportería en Tiempo Real",
    description:
      "Datos precisos para decisiones estratégicas. Visualice el rendimiento de su negocio al instante.",
    chart: true,
    link: false,
    isHero: false,
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const isHero = feature.isHero
  const cardClass = isHero
    ? feature.bg
    : "bg-white border border-outline-variant rounded-lg overflow-hidden"

  return (
    <motion.div
      variants={itemAnim}
      className={`col-span-full ${feature.colSpan} ${cardClass} px-lg py-xl flex flex-col justify-center items-center text-center transition-all duration-500 group relative`}
    >
      {/* Card glow on hover (CSS-only) */}
      {!isHero && (
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-accent/[0.02] to-transparent rounded-lg" />
          <div className="absolute -top-px left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      )}

      <div className="relative z-10 w-full">
        <div className="space-y-md flex flex-col items-center">
          <div
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-500 ${feature.iconColor}`}
          >
            <span className="material-symbols-outlined text-2xl">
              {feature.icon}
            </span>
          </div>
          <h3 className="text-headline-sm w-full">{feature.title}</h3>
          <p
            className={`text-body-md text-on-surface-variant w-full max-w-none ${feature.textColor}`}
          >
            {feature.description}
          </p>

          {feature.link && (
            <span className="text-body-sm text-on-surface-variant/60 flex items-center gap-sm group-hover:text-accent transition-colors pt-sm">
              Saber más
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                east
              </span>
            </span>
          )}

          {feature.chart && (
            <div className="w-full md:w-1/2 bg-surface-container-low rounded p-sm border border-outline-variant/50 overflow-hidden pt-sm">
              <div className="space-y-sm">
                <div className="h-2 w-3/4 bg-surface-container-highest rounded" />
                <div className="h-2 w-1/2 bg-surface-container-highest rounded" />
                <div className="h-2 w-full bg-primary-container/30 rounded" />
                <div className="h-2 w-5/6 bg-accent/20 rounded" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="w-full px-gutter mb-xl scroll-mt-24 relative overflow-hidden" id="features">
      {/* Fondo animado sutíl (CSS-only) */}
      <SectionBackground variant="subtle" />

      <div className="wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-lg flex items-start gap-md"
        >
          <div className="w-1 h-12 bg-accent rounded-full shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <h2 className="text-headline-md text-primary">
              Arquitectura de Eficiencia
            </h2>
            <p className="text-body-md text-on-surface-variant mt-sm w-full max-w-[700px]">
              Cada componente diseñado para eliminar fricción, optimizar tiempos y
              darle control total sobre su operación.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="bento-grid"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
