import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card"

/**
 * App Showcase Section
 *
 * Galería interactiva de screenshots de la app.
 * Las cards se pueden arrastrar, tienen efecto tilt 3D y rebote físico.
 *
 * ▶ CÓMO REEMPLAZAR LAS IMÁGENES:
 *   1. Agregá tus screenshots reales a /public/screenshots/
 *   2. Cambiá el `image` de cada item por la ruta local
 *   3. Ajustá className positions si querés reordenarlas
 *
 * @see /src/components/ui/draggable-card.tsx — componente base
 */

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
    className: "absolute top-10 left-[18%] -rotate-3 z-10",
  },
  {
    title: "Chat con IA",
    description: "Agendamiento conversacional en tiempo real",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-32 left-[28%] rotate-2 z-20",
  },
  {
    title: "Dashboard",
    description: "Métricas y reportes de tu negocio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-5 left-[42%] -rotate-6 z-30",
  },
  {
    title: "Facturación",
    description: "Facturas electrónicas al instante",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-40 left-[52%] rotate-3 z-20",
  },
  {
    title: "Inventario",
    description: "Control de stock simplificado",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-16 right-[20%] -rotate-2 z-10",
  },
  {
    title: "Recordatorios",
    description: "Notificaciones inteligentes sin ausencias",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop",
    className: "absolute top-28 left-[38%] rotate-[4deg] z-15",
  },
]

export default function AppShowcase() {
  return (
    <section className="relative w-full py-[100px] overflow-hidden">
      {/* Section header */}
      <div className="wrapper mb-xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-label-sm uppercase tracking-widest bg-accent/10 text-accent px-sm py-xs rounded">
            Galería Interactiva
          </span>
          <h2 className="text-headline-lg text-on-surface mt-sm">
            Descubrí{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-accent bg-clip-text text-transparent">
              Boqi en acción
            </span>
          </h2>
          <p className="text-body-md text-on-surface-variant mt-sm">
            Arrastrá las cards para explorar cada funcionalidad.
            Próximamente: screenshots reales de la app.
          </p>
        </div>
      </div>

      {/* Draggable cards container */}
      <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-clip">
        {/* Center vignette label */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="text-headline-sm font-black text-outline-variant/40 dark:text-outline-variant/20">
            Boqi
          </span>
        </div>

        {showcaseItems.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <div className="relative h-72 w-64 overflow-hidden rounded-sm">
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none h-full w-full object-cover"
              />
              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <h3 className="text-body-md font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-body-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      {/* Hint text at bottom */}
      <div className="wrapper mt-lg text-center relative z-10">
        <p className="text-body-sm text-on-surface-variant/60 flex items-center justify-center gap-xs">
          <span className="material-symbols-outlined text-sm">touch_app</span>
          Agarrá y arrastrá cualquier card para explorar
        </p>
      </div>
    </section>
  )
}
