# Boqi

**Agenda Inteligente con IA** — Eliminamos la fricción entre tu negocio y tus clientes.

Boqi es una plataforma de agendamiento conversacional impulsada por inteligencia artificial que automatiza recordatorios, centraliza facturación, inventario y comunicación en un solo sistema. Menos fricción, más clientes atendidos.

---

## Quick start

```bash
# Requisitos: Node.js >= 20
npm install
npm run dev        # http://localhost:5173
```

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo con HMR |
| `npm run build` | Build producción (`tsc -b && vite build`) |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint |

---

## ¿Qué problema resuelve?

| Problema | Solución Boqi |
|---|---|
| **Ausencias y no-shows** | IA conversacional que agenda, confirma y recuerda citas 24/7 |
| **Sistemas fragmentados** | Facturación, inventario, agenda y comunicación unificados |
| **Carga operativa manual** | Automatización de citas, reportería en tiempo real |
| **Múltiples sedes/verticales** | Control total multinegocio desde un solo panel |
| **Falta de visibilidad** | Reportería en tiempo real para decisiones estratégicas |

## Features clave

- **Agendamiento conversacional con IA** — elimina barreras entre el servicio y el usuario
- **Control multinegocio** — gestioná múltiples sedes desde un panel centralizado
- **Automatización de citas** — confirmación y recordatorios autónomos
- **Reportería en tiempo real** — datos precisos para decisiones estratégicas
- **Integración de pagos** — facturación unificada

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Lenguaje | TypeScript 6 |
| CSS | Tailwind CSS v4 |
| Animaciones | framer-motion 12 |
| UI | shadcn/ui + Base UI |
| Iconos | Tabler Icons + Lucide |
| Fuente | Inter Variable |

## Estructura del proyecto

```
boqi/
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/             # shadcn/ui + componentes base
│   │   ├── animate-ui/     # Componentes de animate-ui.com
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── BoqiFeatures.tsx
│   │   ├── Features.tsx    # Bento grid de features
│   │   ├── Pricing.tsx     # Planes y precios
│   │   ├── Testimonials.tsx
│   │   ├── StatsBar.tsx
│   │   ├── CTA.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── StackedSections.tsx  # Scroll apilado (AppShowcase + Features)
│   │   ├── AppShowcase.tsx      # Demostración interactiva con drag
│   │   └── ScrollProgress.tsx
│   ├── lib/
│   │   └── utils.ts        # Utilidades (cn, tailwind-merge)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Tailwind + estilos globales
├── public/
├── @/                      # Alias de importación
├── components.json         # Configuración shadcn/ui
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Paleta de colores

```
Primario (confianza):    #003ec7 → #0052ff
Acento (acción):         #f97316
Superficie (limpio):     #f8f9ff
Success / Info / Error:  #10b981 / #06b6d4 / #ba1a1a
```

Sistema **Material 3 tonal palette** con variantes `-fixed`, `-container`, etc., para consistencia en todos los estados.

### Tipografía

| Rol | Tamaño | Weight |
|-----|--------|--------|
| Display | 48px | 700 |
| Headline LG | 32px | 600 |
| Headline MD | 24px | 600 |
| Body LG | 18px | 400 |
| Body MD | 16px | 400 |
| Label MD | 14px | 500 |

Fuente: **Inter Variable**.

### Layout

El contenido usa un wrapper que se adapta:

```css
/* Mobile: 100% width, padding 0 20px */
/* Desktop (≥1024px): 70% width, centered */
.wrapper {
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
}
@media (min-width: 1024px) {
  .wrapper { width: 70%; }
}
```

### Componentes clave

- **Glass Card**: `backdrop-filter: blur(20px)` con levitación CSS (float 6s) y elevación en hover.
- **Bento Grid**: 12 columnas desktop para features, 4 para pricing/stats, 3 para testimonios.
- **Background beams**: Blur circles con parallax vía `SectionBackground`.
- **Vectores flotantes**: `FloatingIcon` con Material Symbols en contenedores glassmórficos.

---

## Arquitectura

Boqi es una **landing page SPA** construida con React 19 + Vite. La UI se organiza en secciones independientes montadas en `App.tsx`, con scroll nativo y animaciones con framer-motion.

### Stacked Sections

La sección `StackedSections` crea un efecto de scroll apilado: `AppShowcase` (demostración interactiva con tarjetas draggables) y `Features` se overlapean verticalmente mientras el usuario scrolle, usando `position: sticky` y detección de viewport con `IntersectionObserver`.

### Glassmorphism

Todas las cards usan el patrón `.glass-card`: fondo translúcido con blur, borde semitransparente, sombras multicapa y animación de levitación continua.

---

## Contribuir

1. Forkeá el repo
2. `npm install`
3. Creá una branch: `git checkout -b mi-feature`
4. Hacé tus cambios, asegurate de que `npm run build` pase limpio
5. Abrí un PR contra `main`

---

## Licencia

Pendiente.
