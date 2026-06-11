import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"

interface ShowcaseItem {
  title: string
  description: string
  image: string
  className: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Agenda Inteligente",
    description: "Vista diaria con detección automática de conflictos",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-8 left-[18%] -rotate-3 z-10 min-h-[240px] w-52",
  },
  {
    title: "Chat con IA",
    description: "Agendamiento conversacional en tiempo real",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-24 left-[28%] rotate-2 z-20 min-h-[240px] w-52",
  },
  {
    title: "Dashboard",
    description: "Métricas y reportes de tu negocio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-3 left-[42%] -rotate-6 z-30 min-h-[240px] w-52",
  },
  {
    title: "Facturación",
    description: "Facturas electrónicas al instante",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-28 left-[54%] rotate-3 z-20 min-h-[240px] w-52",
  },
  {
    title: "Inventario",
    description: "Control de stock simplificado",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-10 right-[18%] -rotate-2 z-10 min-h-[240px] w-52",
  },
  {
    title: "Recordatorios",
    description: "Notificaciones inteligentes sin ausencias",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-20 left-[38%] rotate-[4deg] z-15 min-h-[240px] w-52",
  },
]

export default function AppShowcase() {
  return (
    <section className="relative w-full py-[40px] overflow-hidden h-full flex flex-col justify-center">
      {/* Section header */}
      <div className="wrapper mb-md relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-label-sm uppercase tracking-widest bg-accent/10 text-accent px-sm py-xs rounded">
            Galería Interactiva
          </span>
          <h2 className="text-headline-md text-on-surface mt-xs">
            Descubrí{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-accent bg-clip-text text-transparent">
              Boqi en acción
            </span>
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-xs">
            Arrastrá las cards para explorar cada funcionalidad.
          </p>
        </div>
      </div>

      {/* Draggable cards */}
      <DraggableCardContainer className="relative flex flex-1 w-full items-center justify-center overflow-clip">
        {/* Center vignette label */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="text-headline-sm font-black text-outline-variant/30 dark:text-outline-variant/15">
            Boqi
          </span>
        </div>

        {showcaseItems.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <div className="relative h-44 w-full overflow-hidden rounded-sm">
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                <h3 className="text-body-sm font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-body-xs text-white/80 text-[12px] leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      {/* Hint text */}
      <div className="wrapper mt-sm text-center relative z-10">
        <p className="text-body-xs text-on-surface-variant/50 flex items-center justify-center gap-xs text-[12px]">
          <span className="material-symbols-outlined text-xs">touch_app</span>
          Agarrá y arrastrá cualquier card
        </p>
      </div>
    </section>
  )
}
