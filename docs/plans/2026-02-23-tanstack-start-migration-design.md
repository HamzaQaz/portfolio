# TanStack Start Migration Design

## Overview

Migrate the NightlyDev portfolio from Vite + React Router DOM to TanStack Start with SSR, file-based routing, and lazy-hydrated animations.

## Current State

- **Framework:** Vite 7.3.1 + React 19 + TypeScript
- **Routing:** React Router DOM 7 (2 routes: `/`, `/people`)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, GSAP, OGL (WebGL)
- **Data:** All static/hardcoded, one external API (Microlink for link previews)
- **Components:** 29 component files across sections/, ui/, and animation components

## Target State

- **Framework:** TanStack Start (SSR) with TanStack Router (file-based routing)
- **Build:** Vite with `tanstackStart()` plugin
- **Rendering:** SSR with client-only boundaries for heavy animation components
- **Everything else:** Unchanged (Tailwind, animations, components)

## Project Structure

```
src/
├── router.tsx                 # TanStack Router config
├── routes/
│   ├── __root.tsx             # Root layout (HTML shell, fonts, global CSS)
│   ├── index.tsx              # / route (current App.tsx sections)
│   └── people.tsx             # /people route (current People.tsx)
├── components/                # All 29 components unchanged
│   ├── sections/
│   ├── ui/
│   └── (animation components)
├── lib/
│   └── utils.ts
├── index.css
└── routeTree.gen.ts           # Auto-generated
vite.config.ts                 # Updated with tanstackStart plugin
```

### Files Removed

- `main.tsx` — TanStack Start handles entry
- `index.html` — head/body moves into `__root.tsx`
- `pages/People.tsx` — content moves to `routes/people.tsx`
- `App.tsx` — content moves to `routes/index.tsx`

## SSR + Animation Strategy

- Static content (text, headings, links) renders server-side for SEO
- Heavy client-only components wrapped with a `ClientOnly` helper:
  - `Aurora` (WebGL/OGL)
  - `SplashCursor` (WebGL/OGL)
  - `LetterGlitch` (canvas-based)
  - `FaultyTerminal` (interval-based)
  - GSAP-dependent animations
- Framer Motion components work with SSR natively (no wrapping needed)
- Page transitions preserved using TanStack Router's transition capabilities

## Dependencies

### Add

- `@tanstack/react-router`
- `@tanstack/react-start`
- `vite-tsconfig-paths`
- `@tanstack/react-router-devtools` (dev)

### Remove

- `react-router-dom`

### Unchanged

- `framer-motion`, `gsap`, `ogl`
- `tailwindcss`, `@tailwindcss/vite`
- `@radix-ui/*`, `lucide-react`
- All other existing dependencies

## Root Layout (`__root.tsx`)

- Handles `<html>`, `<head>`, `<body>` tags
- Loads fonts via `head()` (Cabinet Grotesk + Satoshi from cdn.fontshare.com)
- Loads global CSS (`index.css`) via stylesheet link
- Renders `<Outlet />` for child routes
- No shared nav (Nav is page-specific)

## Route Components

### `routes/index.tsx`

Renders all current App.tsx sections in order:
1. Nav
2. Hero
3. ScrollVelocity
4. About
5. Skills
6. Projects
7. Contact
8. Aurora background (client-only)

### `routes/people.tsx`

Renders current People.tsx content with animated cards.

## Configuration

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart(),
    viteReact(),
  ],
})
```

### `router.tsx`

```typescript
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
  })
}
```
