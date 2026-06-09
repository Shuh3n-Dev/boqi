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
  const v = variants[variant]
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
      aria-hidden="true"
    >
      {/* Beam 1 — drift-slow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-[0.08] will-change-transform animate-drift-slow">
        <div
          className={`size-full bg-gradient-to-br ${v.primary} blur-3xl rounded-full`}
        />
      </div>

      {/* Beam 2 — drift-slower */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-[0.06] will-change-transform animate-drift-slower">
        <div
          className={`size-full bg-gradient-to-tr ${v.secondary} blur-3xl rounded-full`}
        />
      </div>
    </div>
  )
}
