"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import AppShowcase from "./AppShowcase"
import FeaturesSectionDemo from "./features-section-demo-3"

/**
 * StackedSections — Scroll-driven card overlap effect.
 *
 * La sección Showcase se fija (sticky) al llegar a ella.
 * Al seguir scrolleando, la sección Features aparece desde abajo
 * y pasa por encima cubriéndola completamente.
 *
 * Técnica:
 * - Contenedor con altura extra (250vh) para crear espacio de scroll
 * - Showcase: `sticky top-0` con z-10 (abajo)
 * - Features: `absolute` con translateY animado via useScroll/useTransform
 *   que va de 100% (abajo del viewport) → 0% (tapando Showcase)
 */
export default function StackedSections() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Mapeo de progreso de scroll:
  //   0%–35%  → Features abajo (100%), solo se ve Showcase
  //  35%–65%  → Features sube desde abajo hasta tapar
  //  65%–100% → Features arriba (0%), Showcase cubierto
  const featuresY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 1],
    ["100%", "100%", "0%", "0%"],
  )

  // Opcional: tenue fade del showcase mientras lo tapan
  const showcaseOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    [1, 1, 0.6],
  )

  return (
    <section className="relative z-10">
      <div ref={containerRef} className="relative h-[250vh]">
        {/* ═══ Showcase — pinned, queda abajo ═══ */}
        <motion.div
          style={{ opacity: showcaseOpacity }}
          className="sticky top-0 h-screen z-10 overflow-hidden bg-background"
        >
          <AppShowcase />
        </motion.div>

        {/* ═══ Features — sube desde abajo y tapa ═══ */}
        <motion.div
          style={{ translateY: featuresY }}
          className="absolute top-0 left-0 right-0 h-screen z-20 overflow-hidden bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="h-full overflow-y-auto">
            <FeaturesSectionDemo />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
