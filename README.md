# Boqi

**Agenda Inteligente con IA** — Eliminamos la fricción entre tu negocio y tus clientes.

Boqi es una plataforma de agendamiento conversacional impulsada por inteligencia artificial que automatiza recordatorios, centraliza facturación, inventario y comunicación en un solo sistema. Menos fricción, más clientes atendidos.

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

## Design System

### Paleta de colores

```css
/* Primario — Azul Eléctrico (confianza, profesionalismo) */
--color-primary:            #003ec7
--color-on-primary:         #ffffff
--color-primary-container:  #0052ff
--color-on-primary-container: #dfe3ff

/* Acento — Naranja Cálido (contraste, acción) */
--color-accent:             #f97316
--color-accent-light:       #fff7ed

/* Superficie — Azul muy claro (limpio, aireado) */
--color-surface:            #f8f9ff
--color-on-surface:         #0b1c30
--color-surface-container:  #e5eeff

/* Estados */
--color-success: #10b981    /* Verde — confirmación */
--color-info:    #06b6d4    /* Cian — información */
--color-error:   #ba1a1a    /* Rojo — errores */
```

La paleta sigue el sistema **Material 3** (tonal palette) con variantes `-fixed`, `-fixed-dim`, `-container`, etc., asegurando consistencia en todos los estados (hover, active, disabled).

### Tipografía

| Propiedad | Valor |
|---|---|
| Fuente | **Inter Variable** (sans-serif) |
| Display | 48px / 700w / -0.02em |
| Headline LG | 32px / 600w |
| Headline MD | 24px / 600w |
| Body LG | 18px / 400w |
| Body MD | 16px / 400w |
| Label MD | 14px / 500w / +0.02em |

### Layout — Wrapper (70% de ancho)

El contenido principal está contenido en un **wrapper** que se comporta así:

```
Móvil (default):    width: 100%,  max-width: 1400px,  padding: 0 20px
Desktop (≥1024px):  width: 70%,   max-width: 1400px,  margin: 0 auto
```

Este enfoque da **contenido fluido en mobile** y una **columna centrada del 70% en desktop**, creando una lectura cómoda sin llegar a los extremos de la pantalla.

```css
.wrapper {
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .wrapper {
    width: 70%;
  }
}
```

### Grid system

| Contexto | Grid | Gap |
|---|---|---|
| Bento (Features) | 12 columnas en desktop | 16px |
| Pricing | 4 columnas en desktop | 16px |
| Stats | 4 columnas en desktop | 16px |
| Testimonios | 3 columnas en desktop | 16px |

### Cards — Glassmorphism + Levitación

Todas las cards del sistema usan el clase `.glass-card`:

- **Fondo**: `rgba(255, 255, 255, 0.55)` con `backdrop-filter: blur(20px)`
- **Borde**: `1px solid rgba(255, 255, 255, 0.35)`
- **Sombras**: 4 capas (1px → 48px) para profundidad real
- **Levitación**: animación `float` 6s con CSS `translate` (sin conflicto con framer-motion)
- **Hover**: sube 4px, fondo más opaco, sombras más intensas

### Decoración

- **Fondo**: Dot grid estilo bullet-journal (`radial-gradient` cada 20px)
- **Background beams**: Blur circles con parallax vía `SectionBackground`
- **Vectores flotantes**: `FloatingIcon` con Material Symbols en contenedores glassmórficos

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Lenguaje | TypeScript 6 |
| CSS | Tailwind CSS v4 |
| Animaciones | framer-motion 12 + CSS |
| UI | shadcn/ui + Base UI |
| Iconos | Material Symbols + Lucide |
| Fuente | Inter Variable |

---

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview del build
npm run lint     # ESLint
```
