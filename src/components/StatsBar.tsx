import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { FloatingIcon } from "@/components/ui/floating-icon"

const stats = [
  { value: 40, suffix: "+ hrs", label: "Ahorradas al mes", icon: "schedule" },
  { value: 0, suffix: "%", label: "Ausencias por olvido", icon: "event_available" },
  { value: 30, suffix: "%", label: "Incremento en ingresos", icon: "trending_up" },
  { value: 10, suffix: " min", label: "Configuración inicial", icon: "bolt" },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 30
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
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

export default function StatsBar() {
  return (
    <section className="w-full px-gutter mb-xl relative overflow-hidden">

      {/* Vector decorativo — Calendario (agendamiento) */}
      <FloatingIcon
        icon="calendar_month"
        size="lg"
        color="primary"
        className="-left-6 top-1/4"
        duration={7}
        delay={0}
      />

      {/* Vector decorativo — Smart AI (chat/conversacional) */}
      <FloatingIcon
        icon="smart_toy"
        size="lg"
        color="accent"
        className="-right-6 top-1/3"
        duration={8}
        delay={1.5}
      />

      {/* Vector decorativo — Insights (analytics) */}
      <FloatingIcon
        icon="insights"
        size="md"
        color="info"
        className="left-[8%] bottom-[10%]"
        duration={6.5}
        delay={0.8}
      />
      <div className="wrapper">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-md"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemAnim}
              className="glass-card glass-card-float p-lg md:p-xl flex flex-col items-center text-center gap-md group"
              style={{ animationDelay: `${-i * 1.5}s` }}
            >
              <div>
                <div className="flex flex-col items-center text-center gap-md">
                  <span className="material-symbols-outlined text-3xl text-accent">
                    {stat.icon}
                  </span>
                  <div className="text-headline-lg text-primary font-bold">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-body-sm text-on-surface-variant">
                    {stat.label}
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
