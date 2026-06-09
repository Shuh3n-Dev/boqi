import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
}

const floatAnimation2 = {
  initial: { y: 0 },
  animate: {
    y: [6, -6, 6],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
}

const weekDays = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"]
const appointments = [
  { time: "09:00", name: "María López", type: "Consulta", color: "bg-accent/15 text-accent" },
  { time: "10:30", name: "Carlos Ruiz", type: "Seguimiento", color: "bg-primary-container/20 text-primary" },
  { time: "11:00", name: "Ana García", type: "Primera vez", color: "bg-info/15 text-info" },
  { time: "14:00", name: "Pedro Martínez", type: "Consulta", color: "bg-success/15 text-success" },
  { time: "15:30", name: "Laura S.", type: "Revisión", color: "bg-accent/15 text-accent" },
]

export default function Hero() {
  return (
    <section className="w-full px-gutter mb-xl pt-8 md:pt-0 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-primary-container/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Decorative floating elements */}
      <motion.div
        {...floatAnimation}
        className="absolute top-40 right-[12%] w-3 h-3 rounded-full bg-accent/30 pointer-events-none hidden md:block"
      />
      <motion.div
        {...floatAnimation2}
        className="absolute top-60 left-[10%] w-2 h-2 rounded-full bg-primary/30 pointer-events-none hidden md:block"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [-5, 5, -5],
          transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
        }}
        className="absolute top-32 left-[18%] w-4 h-4 border border-accent/30 rounded-full pointer-events-none hidden md:block"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-[70%] mx-auto max-w-[1280px] flex flex-col items-center text-center space-y-md relative"
      >
        <motion.span
          variants={item}
          className="text-label-sm uppercase tracking-widest bg-accent/10 text-accent px-sm py-xs rounded"
        >
          Agenda Inteligente con IA
        </motion.span>

        <motion.h1
          variants={item}
          className="text-display text-on-background leading-tight"
        >
          Boqi:{" "}
          <span className="bg-gradient-to-r from-primary via-primary-container to-accent bg-clip-text text-transparent">
            La Agenda Inteligente
          </span>{" "}
          que Ordena tu Negocio.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-body-lg text-on-surface-variant max-w-2xl"
        >
          Agendamiento conversacional con IA, facturación y control unificado.
          Citas fluidas, sin fricción para usted y sus clientes — todo en un
          solo lugar.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-md pt-sm"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container px-lg py-sm rounded font-medium text-body-md transition-all hover:brightness-110 shadow-sm"
          >
            Ver Demostración
            <span className="material-symbols-outlined text-body-md">arrow_forward</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#features"
            className="inline-flex items-center gap-sm border border-outline text-on-surface-variant px-lg py-sm rounded font-medium text-body-md hover:bg-surface-container transition-colors"
          >
            Explorar Features
            <span className="material-symbols-outlined text-body-md">expand_more</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Asset — Notebook-style Calendar mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-xl w-[70%] mx-auto max-w-[1280px] relative"
      >
        {/* Paper clip — top right */}
        <div className="absolute -top-2 -right-3 z-20 hidden md:block rotate-12">
          <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 38C4 38 2 36 2 34V8C2 4 4 2 8 2H20C24 2 26 4 26 8V30C26 32 24 34 22 34H10"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M6 30C4 30 2 28 2 26V14"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Sticky note tab — top left */}
        <div className="absolute -top-2 -left-2 z-20 hidden md:block -rotate-6">
          <div className="bg-amber-200/90 px-md py-1 rounded shadow-sm">
            <span className="text-[11px] font-medium text-amber-800">Nueva versión ✦</span>
          </div>
        </div>

        {/* Date stamp — bottom right */}
        <div className="absolute -bottom-2 -right-2 z-20 hidden md:block rotate-3">
          <div className="border-2 border-red-400/60 px-sm py-[2px] rounded bg-white/80">
            <span className="text-[10px] font-mono text-red-500 tracking-wider">JUN 2026</span>
          </div>
        </div>

        <div className="notebook-card rounded-lg">
          <div className="notebook-card-body">
            {/* Mockup browser chrome */}
            <div className="flex items-center gap-sm mb-md pb-md border-b border-outline-variant/30">
              <div className="flex gap-[5px]">
                <div className="w-[10px] h-[10px] rounded-full bg-red-400" />
                <div className="w-[10px] h-[10px] rounded-full bg-amber-400" />
                <div className="w-[10px] h-[10px] rounded-full bg-green-400" />
              </div>
              <div className="flex-1 max-w-[200px] mx-auto bg-surface-container-low rounded px-sm py-[3px] text-[11px] text-on-surface-variant/60 text-center truncate">
                app.boqi.com/agenda
              </div>
              {/* Pin dot */}
              <div className="pin-dot shrink-0" />
            </div>

            <div className="flex flex-col md:flex-row gap-md">
              {/* Calendar grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-sm">
                  <h3 className="font-medium text-body-md text-primary">Junio 2026</h3>
                  <div className="flex gap-xs">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer">
                      chevron_left
                    </span>
                    <span className="material-symbols-outlined text-sm text-on-surface-variant cursor-pointer">
                      chevron_right
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-[2px] text-center text-[11px]">
                  {weekDays.map((d) => (
                    <div key={d} className="text-on-surface-variant/60 font-medium py-[4px]">
                      {d}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 3
                    const hasAppointments = [9, 10, 12, 15].includes(day)
                    const isSelected = day === 9
                    return (
                      <div
                        key={i}
                        className={`py-[5px] text-[12px] rounded transition-colors ${
                          day < 1 || day > 30
                            ? "text-on-surface-variant/20"
                            : isSelected
                              ? "bg-primary-container text-on-primary-container font-medium"
                              : hasAppointments
                                ? "bg-accent/10 text-accent font-medium cursor-pointer hover:bg-accent/20"
                                : "text-on-surface cursor-pointer hover:bg-surface-container"
                        }`}
                      >
                        {day >= 1 && day <= 30 ? day : ""}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Appointments for selected day */}
              <div className="md:w-[240px] border-t md:border-t-0 md:border-l border-outline-variant/30 pt-md md:pt-0 md:pl-md">
                <h4 className="text-[13px] font-medium text-on-surface mb-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-sm">event</span>
                  Hoy — 10 de junio
                </h4>
                <div className="space-y-sm">
                  {appointments.map((apt) => (
                    <div
                      key={apt.time}
                      className="flex items-start gap-sm p-[6px] rounded hover:bg-surface-container-low transition-colors cursor-pointer"
                    >
                      <div className="text-[11px] text-on-surface-variant/60 font-mono mt-[2px] min-w-[32px]">
                        {apt.time}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-medium text-primary truncate">
                          {apt.name}
                        </div>
                        <span
                          className={`inline-block text-[10px] px-[5px] py-[1px] rounded ${apt.color}`}
                        >
                          {apt.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
