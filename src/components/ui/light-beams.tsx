import { cn } from "@/lib/utils"

export function LightBeams({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
      aria-hidden="true"
    >
      {/* Beam 1 — diagonal primary-azul desde top-left */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] opacity-30 will-change-transform animate-drift-slow">
        <div className="size-full bg-gradient-to-br from-primary/20 via-primary-container/10 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Beam 2 — diagonal accent-cálido desde top-right */}
      <div className="absolute -top-20 -right-40 w-[600px] h-[600px] opacity-20 will-change-transform animate-drift-slower">
        <div className="size-full bg-gradient-to-bl from-accent/15 via-purple-500/10 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Beam 3 — glow sutil desde abajo */}
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] opacity-15 will-change-transform animate-drift-slowest">
        <div className="size-full bg-gradient-to-t from-primary-container/15 via-primary/5 to-transparent blur-3xl rounded-full" />
      </div>
    </div>
  )
}
