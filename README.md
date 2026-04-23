# Portafolio Luis Fernando Calcina Ticlla

Portafolio profesional para Senior Frontend Developer, construido con Next.js App Router, TypeScript y Tailwind CSS. El contenido está redactado en español y centralizado en `data/portfolio.ts` para facilitar futuras iteraciones o internacionalización.

## Stack usado

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react
- ESLint
- Metadata SEO, Open Graph, Twitter Card, sitemap y robots

## Estructura principal

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts
components/
  layout/
  sections/
  ui/
data/
  portfolio.ts
lib/
  utils.ts
public/
  avatar-luis.svg
  favicon.svg
  og-image.svg
```

## Instalar dependencias

```bash
npm install
```

Si tu Node global falla, usa el runtime bundled disponible en este entorno:

```bash
export PATH="/Volumes/MAC/MAC Ext/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
npm install
```

## Correr en local

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Deploy en Vercel

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. Importa el proyecto en Vercel.
3. Configura `NEXT_PUBLIC_SITE_URL` con la URL final del dominio.
4. Ejecuta build con `npm run build`.
5. Publica.

## Actualizar contenido

Edita `data/portfolio.ts` para cambiar experiencia, skills, casos de impacto, educación, contacto o links. El CTA de descarga usa `public/Luis-Fernando-Calcina-CV.docx`.
