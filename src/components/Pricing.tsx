import { motion } from "framer-motion"

const plans = [
  {
    name: "ESENCIAL",
    price: "$30k",
    period: "/mes",
    highlight: false,
    features: ["Hasta 2 cuentas", "Soporte básico", "Agendamiento standard"],
    cta: "Seleccionar Plan",
    primary: false,
    bg: "bg-white",
  },
  {
    name: "PRO",
    price: "$50k",
    period: "/mes",
    highlight: true,
    features: [
      "Hasta 5 cuentas",
      "Funciones avanzadas",
      "IA Conversacional",
      "Integración de pagos",
    ],
    cta: "Seleccionar Plan",
    primary: true,
    bg: "bg-white",
  },
  {
    name: "CORPORATIVO",
    price: "$70k",
    period: "/mes",
    highlight: false,
    features: [
      "Hasta 10 cuentas",
      "Reportería completa",
      "Personalización branding",
      "Soporte prioritario",
    ],
    cta: "Seleccionar Plan",
    primary: false,
    bg: "bg-white",
  },
  {
    name: "ENTERPRISE",
    price: "Negociar",
    period: "",
    highlight: false,
    features: [
      "Cuentas ilimitadas",
      "Integración personalizada",
      "Soporte exclusivo",
      "Desarrollo a medida",
    ],
    cta: "Contactar Ventas",
    primary: false,
    bg: "bg-surface-container-low",
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
      className="w-full bg-surface-container-lowest border-y border-outline-variant py-xl scroll-mt-24"
      id="pricing"
    >
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-xl"
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-sm">
            Planes de Inversión
          </h2>
          <p className="text-on-surface-variant">
            Escalabilidad diseñada para el crecimiento de su consultoría o
            clínica.
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
              className={`${plan.bg} p-lg flex flex-col justify-between relative`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-secondary text-on-primary text-[10px] px-sm py-1 font-bold">
                  RECOMENDADO
                </div>
              )}

              <div>
                <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-md">
                  {plan.name}
                </h4>
                <div className="font-headline-md text-headline-md mb-lg">
                  {plan.price}
                  {plan.period && (
                    <span className="text-body-sm font-normal text-on-surface-variant">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-sm mb-lg">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-sm text-body-sm"
                    >
                      <span className="material-symbols-outlined text-secondary text-sm">
                        check
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
                    ? "w-full bg-primary text-on-primary py-sm rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                    : "w-full border border-primary py-sm rounded hover:bg-neutral-50 transition-colors cursor-pointer"
                }
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
