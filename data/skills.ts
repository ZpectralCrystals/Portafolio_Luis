export type SkillProgress = {
  name: string;
  percentage: number;
  category: string;
  description: string;
};

export type SkillHighlight = {
  title: string;
  description: string;
  icon: "architecture" | "performance" | "seo" | "testing" | "api" | "scale" | "leadership" | "collaboration";
};

export const coreSkillProgress: SkillProgress[] = [
  {
    name: "JavaScript",
    percentage: 95,
    category: "Lenguaje base",
    description: "ES6+, patrones modernos, asincronía y diseño de módulos mantenibles."
  },
  {
    name: "TypeScript",
    percentage: 93,
    category: "Type safety",
    description: "Tipado pragmático para escalar productos sin fricción innecesaria."
  },
  {
    name: "React",
    percentage: 95,
    category: "UI engineering",
    description: "Componentes, estado, hooks avanzados, performance y composición."
  },
  {
    name: "Next.js",
    percentage: 92,
    category: "Framework",
    description: "App Router, rendering strategy, SEO técnico y performance percibida."
  },
  {
    name: "HTML / CSS / Tailwind",
    percentage: 90,
    category: "Interface craft",
    description: "Semántica, responsive, sistemas visuales y CSS avanzado."
  },
  {
    name: "Testing",
    percentage: 85,
    category: "Quality",
    description: "Jest, React Testing Library y Cypress para validar flujos críticos."
  },
  {
    name: "React Native",
    percentage: 82,
    category: "Mobile",
    description: "Evolución y mantenimiento de experiencias móviles con foco UX."
  },
  {
    name: "Performance & SEO",
    percentage: 90,
    category: "Web quality",
    description: "Core Web Vitals, Lighthouse, metadata, indexación y carga eficiente."
  },
  {
    name: "Frontend Architecture",
    percentage: 90,
    category: "Scalability",
    description: "Clean Architecture, vertical slicing, separación UI-dominio e integración."
  },
  {
    name: "Vue / Nuxt",
    percentage: 78,
    category: "Legacy migration",
    description: "Experiencia útil para migraciones progresivas hacia React/Next."
  }
];

export const skillHighlights: SkillHighlight[] = [
  {
    title: "Arquitectura Frontend",
    description: "Decisiones de estructura, dominio, composición y límites claros entre UI, estado e integración.",
    icon: "architecture"
  },
  {
    title: "Performance Web",
    description: "Optimización de carga, render e interacción con foco en Core Web Vitals y percepción de velocidad.",
    icon: "performance"
  },
  {
    title: "SEO Técnico",
    description: "Semántica, metadata, rendering strategy y buenas prácticas para indexación sostenible.",
    icon: "seo"
  },
  {
    title: "Testing y calidad",
    description: "Cobertura pragmática para flujos críticos con Jest, RTL y Cypress.",
    icon: "testing"
  },
  {
    title: "Integración con APIs",
    description: "Consumo de servicios enterprise, autenticación, manejo de estado y contratos claros.",
    icon: "api"
  },
  {
    title: "Escalabilidad de interfaces",
    description: "Componentes reutilizables, design systems y patrones preparados para equipos en crecimiento.",
    icon: "scale"
  },
  {
    title: "Liderazgo técnico",
    description: "Code reviews, mentoring, pair programming y criterios compartidos de delivery.",
    icon: "leadership"
  },
  {
    title: "Trabajo cross-functional",
    description: "Colaboración con UX/UI, producto, backend y QA para entregar soluciones viables.",
    icon: "collaboration"
  }
];
