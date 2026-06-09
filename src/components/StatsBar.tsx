import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 1240, suffix: "+", label: "Clientes activos", icon: "business" },
  { value: 18500, suffix: "+", label: "Citas agendadas", icon: "event" },
  { value: 98, suffix: "%", label: "Satisfacción", icon: "sentiment_satisfied" },
  { value: 15, suffix: " min", label: "Tiempo promedio de respuesta", icon: "timer" },
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
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function StatsBar() {
  return (
    <section className="w-full px-gutter mb-xl">
      <div className="w-[70%] mx-auto max-w-[1280px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/50 rounded-lg overflow-hidden border border-outline-variant/50"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemAnim}
              className="bg-white p-lg md:p-xl flex flex-col items-center text-center gap-md group hover:bg-accent-light/30 transition-colors"
            >
              <span className="material-symbols-outlined text-3xl text-accent">
                {stat.icon}
              </span>
              <div className="text-headline-lg text-headline-lg text-primary font-bold">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-body-sm text-body-sm text-on-surface-variant">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
