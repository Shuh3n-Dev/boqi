import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingIconProps {
  icon: string
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "accent" | "info" | "success" | "tertiary"
  duration?: number
  delay?: number
  amplitude?: number
}

const sizeMap = {
  sm: { container: "w-10 h-10 rounded-xl", icon: "text-xl" },
  md: { container: "w-14 h-14 rounded-2xl", icon: "text-2xl" },
  lg: { container: "w-20 h-20 rounded-[20px]", icon: "text-3xl" },
}

const colorMap = {
  primary:
    "from-primary/10 via-primary-container/10 to-transparent border-primary/20 text-primary/40",
  accent:
    "from-accent/10 via-amber-500/10 to-transparent border-accent/20 text-accent/40",
  info:
    "from-info/10 via-cyan-500/10 to-transparent border-info/20 text-info/40",
  success:
    "from-success/10 via-emerald-500/10 to-transparent border-success/20 text-success/40",
  tertiary:
    "from-tertiary/10 via-tertiary-container/10 to-transparent border-tertiary/20 text-tertiary/40",
}

export function FloatingIcon({
  icon,
  className,
  size = "md",
  color = "primary",
  duration = 6,
  delay = 0,
  amplitude = 6,
}: FloatingIconProps) {
  const s = sizeMap[size]
  return (
    <motion.div
      className={cn(
        "absolute pointer-events-none hidden md:block z-0",
        className,
      )}
      aria-hidden="true"
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div
        className={cn(
          s.container,
          "bg-gradient-to-br backdrop-blur-sm border flex items-center justify-center shadow-sm",
          colorMap[color],
        )}
      >
        <span className={cn("material-symbols-outlined", s.icon)}>
          {icon}
        </span>
      </div>
    </motion.div>
  )
}
