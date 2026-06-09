import { motion } from "framer-motion"

const features = [
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant hover:bg-gradient-to-br hover:from-white hover:to-accent-light/30",
    textColor: "",
    icon: "touch_app",
    iconColor: "text-accent bg-accent/10",
    title: "Adiós a la Fricción del Cliente",
    description:
      "Elimine las barreras entre su servicio y sus usuarios. Interfaces diseñadas para la conversión inmediata sin pasos innecesarios.",
    link: true,
  },
  {
    colSpan: "md:col-span-4",
    bg: "bg-gradient-to-br from-primary via-neutral-900 to-neutral-800 text-on-primary hover:from-neutral-900 hover:to-black",
    textColor: "opacity-80",
    icon: "hub",
    iconColor: "bg-white/15 text-white",
    title: "Control Total Multinegocio",
    description:
      "Gestione múltiples sedes o verticales desde un solo panel de mando centralizado y seguro.",
    link: false,
  },
  {
    colSpan: "md:col-span-4",
    bg: "bg-white border border-outline-variant hover:bg-gradient-to-br hover:from-white hover:to-success-light/30",
    textColor: "",
    icon: "event_available",
    iconColor: "text-success bg-success/10",
    title: "Automatización de Citas",
    description:
      "IA conversacional que agenda, confirma y recuerda citas de manera autónoma 24/7.",
    link: false,
  },
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant hover:bg-gradient-to-br hover:from-white hover:to-info-light/30",
    textColor: "",
    icon: "query_stats",
    iconColor: "text-info bg-info/10",
    title: "Reportería en Tiempo Real",
    description:
      "Datos precisos para decisiones estratégicas. Visualice el rendimiento de su negocio al instante.",
    chart: true,
    link: false,
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
  return (
    <motion.div
      variants={itemAnim}
      className={`col-span-12 ${feature.colSpan} ${feature.bg} px-xl py-lg rounded-xl flex flex-col justify-between transition-all duration-300 group`}
    >
      <div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-md ${feature.iconColor}`}
        >
          <span className="material-symbols-outlined text-2xl">
            {feature.icon}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm mb-sm">
          {feature.title}
        </h3>
        <p
          className={`text-body-md text-on-surface-variant max-w-lg leading-relaxed ${feature.textColor}`}
        >
          {feature.description}
        </p>
      </div>

      <div className="flex items-end justify-between mt-lg pt-lg border-t border-outline-variant/30">
        {feature.link && (
          <span className="text-body-sm text-on-surface-variant/60 flex items-center gap-sm group-hover:text-accent transition-colors">
            Saber más
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              east
            </span>
          </span>
        )}

        {feature.chart && (
          <div className="w-full md:w-1/2 bg-surface-container-low rounded-lg p-sm border border-outline-variant/50 overflow-hidden">
            <div className="space-y-sm">
              <div className="h-2 w-3/4 bg-surface-container-highest rounded" />
              <div className="h-2 w-1/2 bg-surface-container-highest rounded" />
              <div className="h-2 w-full bg-secondary/20 rounded" />
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
    <section className="w-full px-lg mb-xl scroll-mt-24" id="features">
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-lg"
        >
          <h2 className="font-headline-md text-headline-md text-primary">
            Arquitectura de Eficiencia
          </h2>
          <p className="text-body-md text-on-surface-variant mt-sm max-w-xl">
            Cada componente diseñado para eliminar fricción, optimizar tiempos y
            darle control total sobre su operación.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-primary via-secondary to-accent mt-sm rounded-full" />
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
