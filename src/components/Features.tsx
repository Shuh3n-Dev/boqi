import { motion } from "framer-motion"

const features = [
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant hover:bg-gradient-to-br hover:from-white hover:to-accent-light/30",
    textColor: "",
    icon: "touch_app",
    iconColor: "bg-accent/10 text-accent",
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
    bg: "bg-white border border-outline-variant hover:bg-gradient-to-br hover:from-white hover:to-success-light/30",
    textColor: "",
    icon: "event_available",
    iconColor: "bg-success/10 text-success",
    title: "Automatización de Citas",
    description:
      "IA conversacional que agenda, confirma y recuerda citas de manera autónoma 24/7.",
    link: false,
    isHero: false,
  },
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant hover:bg-gradient-to-br hover:from-white hover:to-info-light/30",
    textColor: "",
    icon: "query_stats",
    iconColor: "bg-info/10 text-info",
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
  const cardClass = feature.isHero
    ? feature.bg
    : "notebook-card hover:shadow-sm hover:border-primary-container/30"

  return (
    <motion.div
      variants={itemAnim}
      className={`col-span-full ${feature.colSpan} ${cardClass} px-lg py-xl flex flex-col justify-between transition-all duration-300 group`}
    >
      <div className="notebook-card-body">
        <div
          className={`w-11 h-11 rounded-lg flex items-center justify-center mb-md ${feature.iconColor}`}
        >
          <span className="material-symbols-outlined text-2xl">
            {feature.icon}
          </span>
        </div>
        <h3 className="text-headline-sm mb-sm">
          {feature.title}
        </h3>
        <p
          className={`text-body-md text-on-surface-variant max-w-lg leading-relaxed ${feature.textColor}`}
        >
          {feature.description}
        </p>
      </div>

      <div className="flex items-end justify-between mt-lg pt-md border-t border-outline-variant/30 notebook-card-body">
        {feature.link && (
          <span className="text-body-sm text-on-surface-variant/60 flex items-center gap-sm group-hover:text-accent transition-colors">
            Saber más
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              east
            </span>
          </span>
        )}

        {feature.chart && (
          <div className="w-full md:w-1/2 bg-surface-container-low rounded p-sm border border-outline-variant/50 overflow-hidden">
            <div className="space-y-sm">
              <div className="h-2 w-3/4 bg-surface-container-highest rounded" />
              <div className="h-2 w-1/2 bg-surface-container-highest rounded" />
              <div className="h-2 w-full bg-primary-container/30 rounded" />
              <div className="h-2 w-5/6 bg-accent/20 rounded" />
            </div>
          </div>
        )}

        {!feature.link && !feature.chart && <span />}
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="w-full px-gutter mb-xl scroll-mt-24" id="features">
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-lg flex items-start gap-md"
        >
          <div className="w-1 h-12 bg-accent rounded-full shrink-0 mt-1" />
          <div>
            <h2 className="text-headline-md text-primary">
              Arquitectura de Eficiencia
            </h2>
            <p className="text-body-md text-on-surface-variant mt-sm max-w-xl">
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
