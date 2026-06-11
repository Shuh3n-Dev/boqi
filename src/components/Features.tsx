import { motion } from "framer-motion"
import { FloatingIcon } from "@/components/ui/floating-icon"

const features = [
  {
    colSpan: "md:col-span-8",
    glass: true,
    textColor: "",
    icon: "payments",
    iconColor: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
    title: "Multiplicá tu Facturación",
    description:
      "Tus clientes reservan 24/7 sin que tengas que responder un solo mensaje. Pagos por adelantado y menos fricción para aumentar tus ingresos.",
    link: true,
    isHero: false,
  },
  {
    colSpan: "md:col-span-4",
    glass: false, // hero card — solid gradient
    textColor: "text-white/80",
    icon: "rocket_launch",
    iconColor: "bg-white/20 text-white",
    title: "Tu Negocio en Piloto Automático",
    description:
      "Delegá el trabajo manual a nuestra IA. Desde el agendamiento inteligente hasta la emisión automática de facturas electrónicas.",
    link: false,
    isHero: true,
  },
  {
    colSpan: "md:col-span-4",
    glass: true,
    textColor: "",
    icon: "how_to_reg",
    iconColor: "bg-success/10 text-success group-hover:bg-success group-hover:text-white",
    title: "Cero Clientes Perdidos",
    description:
      "Si alguien cancela su turno, Boqi avisa automáticamente a tu lista de espera para cubrir ese espacio y no perder dinero.",
    link: false,
    isHero: false,
  },
  {
    colSpan: "md:col-span-8",
    glass: true,
    textColor: "",
    icon: "insert_chart_outlined",
    iconColor: "bg-info/10 text-info group-hover:bg-info group-hover:text-white",
    title: "Control Total en tu Bolsillo",
    description:
      "Métricas exactas de ingresos y servicios más rentables, disponibles en tu celular en todo momento. Tomá decisiones basadas en datos.",
    chart: true,
    link: false,
    isHero: false,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
}

const itemAnim = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      mass: 1,
    },
  },
}

function FeatureCard({ feature, index }: { feature: (typeof features)[number]; index: number }) {
  const isHero = feature.isHero
  const cardClass = isHero
    ? "glass-card-hero bg-gradient-to-br from-primary via-primary-container to-primary text-white"
    : "glass-card glass-card-float"

  return (
    <motion.div
      variants={itemAnim}
      className={`col-span-full ${feature.colSpan} ${cardClass} px-lg py-xl flex flex-col justify-center items-center text-center group relative`}
      style={!isHero ? { animationDelay: `${-index * 1.5}s` } : undefined}
    >
      {/* Card glow on hover (CSS-only) */}
      {!isHero && (
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-accent/[0.03] to-transparent rounded-xl" />
          <div className="absolute -top-px left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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
          <h3 className="text-headline-sm w-full flex items-center justify-center gap-2">
            {feature.title}
            <span className="material-symbols-outlined text-success text-xl">check_circle</span>
          </h3>
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
            <div className="w-full md:w-1/2 bg-white/40 backdrop-blur-sm rounded p-sm border border-white/20 overflow-hidden pt-sm">
              <div className="space-y-sm">
                <div className="h-2 w-3/4 bg-surface-container-highest/60 rounded" />
                <div className="h-2 w-1/2 bg-surface-container-highest/60 rounded" />
                <div className="h-2 w-full bg-primary-container/40 rounded" />
                <div className="h-2 w-5/6 bg-accent/30 rounded" />
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
      {/* Vector decorativo — AI/Inteligencia */}
      <FloatingIcon
        icon="psychiatry"
        size="lg"
        color="primary"
        className="-left-6 top-[15%]"
        duration={7.5}
        delay={0.5}
      />

      {/* Vector decorativo — Automatización */}
      <FloatingIcon
        icon="autorenew"
        size="md"
        color="accent"
        className="-right-4 top-[30%]"
        duration={6.5}
        delay={1.2}
      />

      {/* Vector decorativo — Reportería */}
      <FloatingIcon
        icon="monitoring"
        size="lg"
        color="info"
        className="-right-4 bottom-[10%]"
        duration={8}
        delay={0}
      />

      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
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
          viewport={{ once: true }}
          className="bento-grid"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
