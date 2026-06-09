import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type SectionVariant = "default" | "warm" | "cool" | "subtle"

const variants: Record<SectionVariant, { primary: string; secondary: string }> = {
  default: {
    primary: "from-primary via-primary-container to-transparent",
    secondary: "from-accent via-purple-500/10 to-transparent",
  },
  warm: {
    primary: "from-accent via-amber-500/10 to-transparent",
    secondary: "from-primary-container via-primary/5 to-transparent",
  },
  cool: {
    primary: "from-info via-cyan-500/10 to-transparent",
    secondary: "from-primary via-primary-container/10 to-transparent",
  },
  subtle: {
    primary: "from-primary-container/20 via-primary/5 to-transparent",
    secondary: "from-accent/10 via-purple-500/5 to-transparent",
  },
}

export function SectionBackground({
  variant = "default",
  className,
}: {
  variant?: SectionVariant
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  const v = variants[variant]
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
      aria-hidden="true"
    >
      {/* Beam 1 — parallax up */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-[0.08] will-change-transform"
      >
        <div
          className={`size-full bg-gradient-to-br ${v.primary} blur-3xl rounded-full animate-drift-slow`}
        />
      </motion.div>

      {/* Beam 2 — parallax down */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-[0.06] will-change-transform"
      >
        <div
          className={`size-full bg-gradient-to-tr ${v.secondary} blur-3xl rounded-full animate-drift-slower`}
        />
      </motion.div>
    </div>
  )
}
