import { motion } from "framer-motion"

const plans = [
  {
    name: "ESENCIAL",
    price: "$30k",
    period: "/mes",
    highlight: false,
    popular: false,
    features: ["Hasta 2 cuentas", "Soporte básico", "Agendamiento standard"],
    cta: "Seleccionar Plan",
    primary: false,
    bg: "bg-white",
    badge: "border-l-4 border-l-accent",
  },
  {
    name: "PRO",
    price: "$50k",
    period: "/mes",
    highlight: true,
    popular: true,
    features: [
      "Hasta 5 cuentas",
      "Funciones avanzadas",
      "IA Conversacional",
      "Integración de pagos",
    ],
    cta: "Seleccionar Plan",
    primary: true,
    bg: "bg-white",
    badge: "",
  },
  {
    name: "CORPORATIVO",
    price: "$70k",
    period: "/mes",
    highlight: false,
    popular: false,
    features: [
      "Hasta 10 cuentas",
      "Reportería completa",
      "Personalización branding",
      "Soporte prioritario",
    ],
    cta: "Seleccionar Plan",
    primary: false,
    bg: "bg-white",
    badge: "border-l-4 border-l-info",
  },
  {
    name: "ENTERPRISE",
    price: "Negociar",
    period: "",
    highlight: false,
    popular: false,
    features: [
      "Cuentas ilimitadas",
      "Integración personalizada",
      "Soporte exclusivo",
      "Desarrollo a medida",
    ],
    cta: "Contactar Ventas",
    primary: false,
    bg: "bg-surface-container-low",
    badge: "",
  },
]

const cardAnim = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
}

export default function Pricing() {
  return (
    <section
      className="w-full bg-gradient-to-b from-surface-container-lowest to-surface-container/50 border-y border-outline-variant/60 py-xl scroll-mt-24"
      id="pricing"
    >
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-lg"
        >
          <h2 className="text-headline-md text-headline-md text-primary mb-sm">
            Planes de Inversión
          </h2>
          <p className="text-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Escalabilidad diseñada para el crecimiento de su consultoría o
            clínica. Elija el plan que mejor se adapte a sus necesidades.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`${plan.bg} ${plan.badge} px-lg py-lg flex flex-col justify-between relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] px-sm py-1 font-bold rounded-bl">
                  RECOMENDADO
                </div>
              )}

              <div>
                <h4 className="text-label-sm text-label-sm text-on-surface-variant mb-md uppercase tracking-wider">
                  {plan.name}
                </h4>
                <div className="text-headline-md text-headline-md mb-lg">
                  {plan.price}
                  {plan.period && (
                    <span className="text-body-sm text-body-sm font-normal text-on-surface-variant">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-sm mb-lg">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-sm text-body-sm text-body-sm"
                    >
                      <span className="material-symbols-outlined text-success text-sm">
                        check_circle
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={
                  plan.primary
                    ? "w-full bg-primary-container text-on-primary-container py-sm rounded font-medium transition-all hover:brightness-110 cursor-pointer shadow-sm text-label-md"
                    : "w-full border border-outline py-sm rounded font-medium hover:border-primary hover:text-primary transition-all cursor-pointer text-label-md"
                }
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-body-sm text-body-sm text-on-surface-variant/60 mt-md">
          Todos los planes incluyen 14 días de prueba gratuita. Sin compromiso.
        </p>
      </div>
    </section>
  )
}
