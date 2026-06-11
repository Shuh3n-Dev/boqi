"use client"
import { cn } from "@/lib/utils"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { IconBrandYoutubeFilled } from "@tabler/icons-react"

/**
 * BoqiFeatures — Grid de funcionalidades de Boqi en español.
 *
 * Adaptado del componente @aceternity/features-section-demo-3.
 * Muestra las features clave de Boqi con skeletons visuales.
 */
export default function BoqiFeatures() {
  const features = [
    {
      title: "Agenda Inteligente",
      description:
        "Gestioná turnos con IA que aprende tus horarios, evita conflictos y optimiza cada cita. Menos ausencias, más clientes atendidos.",
      skeleton: <SkeletonAgenda />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Chat Conversacional",
      description:
        "Agendamiento vía chat con IA. Tus clientes reservan turnos al instante sin intervención humana, 24/7.",
      skeleton: <SkeletonChat />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Video Tutorial",
      description:
        "Mirá cómo Boqi transforma la gestión de tu negocio en minutos. Agenda, facturación e inventario en un solo lugar.",
      skeleton: <SkeletonVideo />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Cobertura Global",
      description:
        "Disponible en cualquier parte del mundo. Multi-idioma, multi-moneda, y compliance con regulaciones locales.",
      skeleton: <SkeletonGlobe />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 mx-auto max-w-7xl py-6 lg:py-10 h-full flex flex-col justify-center">
      <div className="px-6">
        <h4 className="mx-auto max-w-5xl text-center text-2xl font-medium tracking-tight text-black lg:text-4xl lg:leading-tight dark:text-white">
          Todo lo que necesitás para{" "}
          <span className="bg-gradient-to-r from-primary via-primary-container to-accent bg-clip-text text-transparent">
            gestionar tu negocio
          </span>
        </h4>

        <p className="mx-auto my-2 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
          Desde agendamiento con IA hasta facturación electrónica e inventario.
          Boqi centraliza todo en un sistema inteligente.
        </p>
      </div>

      <div className="relative">
        <div className="mt-6 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("relative overflow-hidden p-3 sm:p-4", className)}>
      {children}
    </div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-lg tracking-tight text-black md:text-xl md:leading-snug dark:text-white">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm",
        "font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-1 max-w-sm text-left text-[13px]",
      )}
    >
      {children}
    </p>
  )
}

/* ── Skeletons ── */

const SkeletonAgenda = () => {
  return (
    <div className="relative flex h-full gap-6 px-2 py-4">
      <div className="group mx-auto h-full w-full bg-white p-3 shadow-lg dark:bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"
          alt="Agenda Boqi"
          width={400}
          height={400}
          className="aspect-video h-full w-full rounded-sm object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-20 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  )
}

const SkeletonChat = () => {
  const images = [
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
  ]

  const imageVariants = {
    whileHover: { scale: 1.1, rotate: 0, zIndex: 100 },
    whileTap: { scale: 1.1, rotate: 0, zIndex: 100 },
  }

  return (
    <div className="relative flex h-full flex-col items-start gap-4 overflow-hidden p-4">
      <div className="-ml-10 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"chat-first" + idx}
            style={{ rotate: Math.random() * 20 - 10 }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-2 -mr-3 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <img
              src={image}
              alt="chat demo"
              width="300"
              height="300"
              className="h-16 w-16 shrink-0 rounded-lg object-cover md:h-24 md:w-24"
            />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  )
}

const SkeletonVideo = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="group/image relative flex h-full gap-6"
    >
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-12 w-12 text-red-500" />
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
            alt="Video demostración Boqi"
            width={600}
            height={400}
            className="aspect-video h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-sm"
          />
        </div>
      </div>
    </a>
  )
}

const SkeletonGlobe = () => {
  return (
    <div className="relative mt-4 flex h-40 flex-col items-center bg-transparent md:h-48 dark:bg-transparent">
      <Globe className="absolute -right-8 -bottom-48 md:-right-6 md:-bottom-40" />
    </div>
  )
}

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 4000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [-34.6037, -58.3816], size: 0.08 }, // Buenos Aires
        { location: [40.4168, -3.7038], size: 0.08 }, // Madrid
        { location: [19.4326, -99.1332], size: 0.08 }, // Mexico City
        { location: [4.711, -74.0721], size: 0.06 }, // Bogotá
        { location: [-33.4489, -70.6693], size: 0.06 }, // Santiago
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}
