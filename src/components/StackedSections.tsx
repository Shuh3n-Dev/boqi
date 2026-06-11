"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import AppShowcase from "./AppShowcase"
import BoqiFeatures from "./BoqiFeatures"

/**
 * StackedSections — Scroll-driven card overlap effect.
 *
 * Al scrollear, Showcase se fija (sticky top-0).
 * Al seguir, Features aparece desde abajo y pasa por encima
 * cubriéndola completamente. La transición a la siguiente
 * sección es limpia porque Showcase se desvanece a opacity 0
 * y Features (z-20) queda al frente hasta salir del viewport.
 *
 * Técnica:
 * - Contenedor con altura extra (h-[200vh]) para espacio de scroll
 * - Showcase: sticky top-0 h-screen z-10, opacity fade-out
 * - Features: absolute top-0 h-screen z-20 con translateY animado
 *   via useScroll/useTransform (100% → 0%)
 * - Contenido constreñido con .wrapper (70% ancho en desktop)
 */
export default function StackedSections() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Features sube desde abajo del viewport
  //   0%–30%  → 100% (abajo), solo se ve Showcase
  //  30%–55%  → sube desde abajo hasta tapar
  //  55%–100% → 0% (arriba), Showcase cubierto
  const featuresY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    ["100%", "100%", "0%", "0%"],
  )

  // Showcase se desvanece a 0 para que no se滤e cuando lo tapan
  const showcaseOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 0.55],
    [1, 1, 0.5, 0],
  )

  return (
    <section className="relative z-10">
      <div ref={containerRef} className="relative h-[200vh]">
        {/* ═══ Showcase — pinned atrás ═══ */}
        <motion.div
          style={{ opacity: showcaseOpacity }}
          className="sticky top-0 h-screen z-10 overflow-hidden bg-background"
        >
          <div className="wrapper h-full">
            <AppShowcase />
          </div>
        </motion.div>

        {/* ═══ Features — sube desde abajo y tapa ═══ */}
        <motion.div
          style={{ translateY: featuresY }}
          className="absolute top-0 left-0 right-0 h-screen z-20 overflow-hidden bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="wrapper h-full">
            <BoqiFeatures />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
