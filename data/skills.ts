export type SkillProgress = {
  name: string;
  percentage: number;
  category: string;
  description: string;
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
