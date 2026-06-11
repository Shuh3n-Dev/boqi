"use client"
import { cn } from "@/lib/utils"

/**
 * BoqiFeatures — Bento Grid de funcionalidades principales
 * 
 * Grid de 2 columnas con tarjetas de diferentes tamaños (bento style),
 * resaltando las features más importantes con imágenes y textos claros en español.
 * El contenido está centrado y limitado al 70% de la página gracias a clases como max-w-[70vw].
 */
export default function BoqiFeatures() {
  return (
    <div className="relative z-20 mx-auto w-full md:w-[70%] py-12 flex flex-col justify-center">
      <div className="px-4 mb-16 text-center">
        <span className="text-label-sm uppercase tracking-widest bg-accent/10 text-accent px-sm py-xs rounded">
          Características Premium
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-on-surface lg:text-5xl">
          El motor que impulsa tu{" "}
          <span className="bg-gradient-to-r from-primary via-primary-container to-accent bg-clip-text text-transparent">
            crecimiento
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-on-surface-variant">
          Boqi es mucho más que un calendario. Es un ecosistema completo diseñado 
          para que dejes de perder tiempo en tareas manuales y te enfoques en tu negocio.
        </p>
      </div>

      {/* Bento Grid de 2 Columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 auto-rows-[280px]">
        
        {/* 1. Agenda Inteligente (Ancho completo) */}
        <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-lowest shadow-sm group">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop" 
              alt="Agenda Inteligente"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary text-white p-2 rounded-full material-symbols-outlined text-sm">calendar_month</span>
              <span className="text-primary-fixed font-medium text-sm tracking-wider uppercase">Calendario Automático</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Agenda Inteligente con IA</h3>
            <p className="text-white/80 max-w-xl text-body-md">
              Boqi aprende tus tiempos, organiza tus citas y detecta conflictos antes de que ocurran. 
              Tus clientes ven tu disponibilidad real y reservan en segundos.
            </p>
          </div>
        </div>

        {/* 2. Chat Conversacional (Alto, ocupa 2 filas) */}
        <div className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-lowest shadow-sm group">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" 
              alt="Chat Conversacional"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-accent text-white p-2 rounded-full material-symbols-outlined text-sm">forum</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Asistente 24/7 por Chat</h3>
            <p className="text-white/80 text-body-md">
              Un bot inteligente que responde mensajes de WhatsApp, resuelve dudas frecuentes y 
              agenda turnos por vos incluso mientras dormís. Nunca más dejes a un cliente en visto.
            </p>
          </div>
        </div>

        {/* 3. Facturación (Cuadrado estándar) */}
        <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-lowest shadow-sm group">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" 
              alt="Facturación Electrónica"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/80 to-transparent dark:from-black dark:via-black/80" />
          </div>
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-info text-white p-2 rounded-full material-symbols-outlined text-sm">receipt_long</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Facturación Simplificada</h3>
            <p className="text-on-surface-variant text-body-sm">
              Emití facturas electrónicas al instante y llevá el control de tus ingresos 
              sin necesidad de usar planillas complicadas.
            </p>
          </div>
        </div>

        {/* 4. Recordatorios (Cuadrado estándar) */}
        <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-lowest shadow-sm group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
          <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-full shadow-lg mb-4 transform transition-transform group-hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-primary">notifications_active</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">Cero Ausencias</h3>
            <p className="text-on-surface-variant text-body-sm">
              Recordatorios automáticos por WhatsApp y Email para que tus clientes nunca 
              se olviden de su cita. Disminuí el ausentismo en un 80%.
            </p>
          </div>
        </div>

        {/* 5. Dashboard (Ancho completo) */}
        <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-container-lowest shadow-sm group h-[320px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
              alt="Métricas y Reportes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 p-8 flex flex-col justify-center w-full md:w-2/3">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-success text-white p-2 rounded-full material-symbols-outlined text-sm">insights</span>
              <span className="text-success-light font-medium text-sm tracking-wider uppercase">Analítica Financiera</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Métricas que importan</h3>
            <p className="text-white/80 text-body-md">
              Un panel de control visual para entender la salud de tu negocio. 
              Mirá cuántos turnos tuviste, cuáles son tus servicios más rentables 
              y compará tus ingresos mes a mes.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
