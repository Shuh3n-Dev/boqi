import { motion } from "framer-motion"

const features = [
  {
    colSpan: "md:col-span-8",
    bg: "bg-white border border-outline-variant hover:bg-surface-bright",
    textColor: "",
    icon: "touch_app",
    title: "Adiós a la Fricción del Cliente",
    description:
      "Elimine las barreras entre su servicio y sus usuarios. Interfaces diseñadas para la conversión inmediata sin pasos innecesarios.",
    link: true,
  },
  {
    colSpan: "md:col-span-4",
    bg: "bg-primary text-on-primary hover:bg-neutral-900",
    textColor: "opacity-80",
    icon: "hub",
    title: "Control Total Multinegocio",
    description:
      "Gestione múltiples sedes o verticales desde un solo panel de mando centralizado y seguro.",
    link: false,
  },
  {
    colSpan: "md:col-span-4",
    bg: "bg-white border border-outline-variant hover:bg-surface-bright",
    textColor: "",
    icon: "event_available",
    title: "Automatización de Citas",
    description:
      "IA conversacional que agenda, confirma y recuerda citas de manera autónoma 24/7.",
    link: false,
  },
  {
    colSpan: "md:col-span-8",
    bg: "bg-surface-container border border-outline-variant hover:bg-surface-container-high",
    textColor: "",
    icon: "query_stats",
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

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number]
}) {
  return (
    <motion.div
      variants={itemAnim}
      className={`col-span-12 ${feature.colSpan} ${feature.bg} p-lg rounded-xl flex flex-col justify-between transition-colors group`}
    >
      <div>
        <span className="material-symbols-outlined text-4xl mb-md inline-block">
          {feature.icon}
        </span>
        <h3 className="font-headline-sm text-headline-sm mb-sm">
          {feature.title}
        </h3>
        <p className={`text-on-surface-variant max-w-md ${feature.textColor}`}>
          {feature.description}
        </p>
      </div>

      {feature.link && (
        <div className="mt-lg pt-lg border-t border-outline-variant/50 flex justify-end">
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            east
          </span>
        </div>
      )}

      {feature.chart && (
        <div className="mt-lg w-full md:w-1/2 bg-white rounded-lg p-sm border border-outline-variant shadow-sm overflow-hidden">
          <div className="space-y-sm">
            <div className="h-2 w-3/4 bg-surface-container rounded" />
            <div className="h-2 w-1/2 bg-surface-container rounded" />
            <div className="h-2 w-full bg-secondary/20 rounded" />
          </div>
        </div>
      )}
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
          <div className="h-1 w-12 bg-primary mt-sm" />
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
