"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import AppShowcase from "./AppShowcase"
import BoqiFeatures from "./BoqiFeatures"

/**
 * StackedSections — Scroll-driven card overlap effect.
 *
 * Al scrollear, Showcase se fija (sticky top-0).
 * Al seguir (después del spacer), Features aparece desde abajo 
 * naturalmente con el scroll y pasa por encima cubriéndola completamente.
 * Como usa el flujo normal de CSS, el componente toma su altura real
 * (evitando cortes) y al terminar, la página continúa correctamente.
 */
export default function StackedSections() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Showcase se desvanece suavemente mientras Features sube
  const showcaseOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    [1, 1, 0]
  )

  return (
    <section className="relative z-10">
      <div ref={containerRef} className="relative">
        {/* ═══ Showcase — pinned atrás ═══ */}
        <motion.div
          style={{ opacity: showcaseOpacity }}
          className="sticky top-0 h-screen z-10 overflow-hidden bg-background"
        >
          <div className="wrapper h-full">
            <AppShowcase />
          </div>
        </motion.div>

        {/* Espacio para que el Showcase se quede fijo un momento antes de ser cubierto */}
        <div className="h-[25vh]"></div>

        {/* ═══ Features — fluye naturalmente y tapa a Showcase ═══ */}
        <div
          className="relative z-20 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.3)] rounded-t-[2rem] min-h-screen py-16"
        >
          <div className="wrapper h-full">
            <BoqiFeatures />
          </div>
        </div>
      </div>
    </section>
  )
}
