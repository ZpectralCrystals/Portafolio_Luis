export const profile = {
  name: "Luis Fernando Calcina Ticlla",
  role: "Senior Frontend Developer",
  location: "Arequipa, Perú",
  timezone: "GMT-5",
  phone: "(+51) 924 775 747",
  whatsapp:
    "https://wa.me/51924775747?text=Hola%20Luis%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.",
  email: "Luferct1997@gmail.com",
  linkedin: "https://linkedin.com/in/luis-calcina/",
  cvFile: "/Luis-Fernando-Calcina-CV.docx",
  sectors: ["Banca", "Fintech", "Media", "SaaS", "Minería"],
  summary:
    "Senior Frontend Developer especializado en React, Next.js y TypeScript para productos enterprise: migraciones legacy, arquitectura modular, performance, SEO técnico y liderazgo de squads frontend."
} as const;

export const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contacto", href: "#contacto" }
] as const;

export const heroMetrics = [
  { value: "6+", label: "años creando frontend de producción" },
  { value: "5", label: "sectores enterprise y producto digital" },
  { value: "3-5", label: "devs guiados en squads frontend" },
  { value: "CWV", label: "performance y SEO como criterio técnico" }
] as const;

export const heroFocus = [
  { label: "Core stack", value: "React · Next.js · TypeScript" },
  { label: "Especialidad", value: "Arquitectura frontend y migraciones legacy" },
  { label: "Producto", value: "Performance, SEO, UX y mantenibilidad" },
  { label: "Colaboración", value: "UX/UI · Backend · QA · Producto" }
] as const;

export const aboutPillars = [
  {
    title: "Arquitectura que escala",
    description: "Separo dominio, UI, estado e integración para que el producto pueda crecer sin convertir cada cambio en deuda técnica."
  },
  {
    title: "Modernización responsable",
    description: "Migro stacks legacy hacia React, Next.js y TypeScript con entregas progresivas, control de releases y bajo riesgo operativo."
  },
  {
    title: "Liderazgo técnico práctico",
    description: "Elevo estándar del equipo con code reviews, pair programming, mentoring y criterios compartidos de calidad."
  },
  {
    title: "Criterio cross-functional",
    description: "Trabajo con diseño, producto, backend y QA para balancear experiencia, performance, seguridad y tiempos de negocio."
  }
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    icon: "code",
    description: "Base sólida para interfaces mantenibles, tipadas y listas para producción.",
    skills: ["JavaScript ES6+", "TypeScript", "React", "HTML5", "CSS3+", "Redux"]
  },
  {
    title: "Frameworks",
    icon: "layers",
    description: "Construcción web y mobile con frameworks usados en productos reales.",
    skills: ["Next.js", "React Native", "Vue", "Nuxt", "Webpack"]
  },
  {
    title: "Styling",
    icon: "palette",
    description: "Sistemas visuales consistentes, responsive y documentables.",
    skills: ["Tailwind CSS", "Sass", "Responsive Design", "UI/UX", "Storybook"]
  },
  {
    title: "Testing",
    icon: "shield",
    description: "Validación de flujos críticos con pruebas unitarias, integración y e2e.",
    skills: ["Jest", "React Testing Library", "Cypress", "Unit Testing", "E2E Testing"]
  },
  {
    title: "Performance / SEO",
    icon: "gauge",
    description: "Medición y optimización técnica orientada a experiencia e indexación.",
    skills: [
      "Core Web Vitals",
      "Lighthouse",
      "Google Analytics",
      "Google Tag Manager",
      "SEO técnico"
    ]
  },
  {
    title: "Mobile",
    icon: "mobile",
    description: "Mantenimiento y evolución de experiencias móviles con foco UX.",
    skills: ["React Native", "Componentes funcionales", "Mantenimiento de apps", "UX móvil"]
  },
  {
    title: "Backend / APIs",
    icon: "api",
    description: "Integración segura y clara con APIs, autenticación y persistencia.",
    skills: ["Node.js", "Express", "REST API", "OAuth2", "MySQL", "PostgreSQL", "SQL Server", "MongoDB"]
  },
  {
    title: "Cloud / Tools",
    icon: "cloud",
    description: "Tooling de entrega, observabilidad y operación en equipos enterprise.",
    skills: ["AWS", "Azure DevOps", "Jenkins", "Firebase", "Git", "Sentry", "CloudWatch"]
  },
  {
    title: "Methodologies",
    icon: "method",
    description: "Prácticas para sostener calidad técnica mientras el roadmap avanza.",
    skills: ["SCRUM", "Clean Code", "SOLID", "Clean Architecture", "Vertical Slicing"]
  }
] as const;

export const projects = [
  {
    title: "Izipay Sales Platform",
    type: "Plataforma de ventas y pagos para operación comercial",
    summary:
      "Plataforma orientada a ventas y pagos, enfocada en optimizar la operación comercial mediante flujos frontend claros, arquitectura escalable e integración con servicios críticos del negocio.",
    description:
      "Proyecto enfocado en la evolución de una plataforma de ventas y pagos para el sector fintech, orientado a mejorar mantenibilidad, escalabilidad y experiencia operativa. La solución se trabajó bajo una arquitectura moderna en frontend, priorizando separación por dominio, consistencia visual, integración con servicios críticos y soporte a flujos clave del negocio.",
    focus: "Ventas, pagos, operación comercial y arquitectura por dominio.",
    stack: ["Next.js", "React", "TypeScript", "Sentry", "CloudWatch"],
    officialUrl: "https://www.izipay.pe/"
  },
  {
    title: "Fortuna Digital Experience",
    type: "Plataforma digital fintech orientada a experiencia de usuario y operación financiera",
    summary:
      "Experiencia digital fintech orientada a productos financieros, con foco en usabilidad, mantenibilidad y escalabilidad frontend.",
    description:
      "Proyecto vinculado al ecosistema digital de Fortuna, enfocado en construir y mejorar experiencias frontend modernas para productos financieros. La implementación prioriza claridad de interfaz, rendimiento, mantenibilidad del código y una arquitectura preparada para escalar funcionalidades del negocio.",
    focus: "Experiencia de usuario, operación financiera y escalabilidad frontend.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    officialUrl: "https://www.fortuna.com.pe/"
  },
  {
    title: "CommerceDesk",
    type: "Dashboard administrativo para gestión comercial y operativa",
    summary:
      "Dashboard administrativo construido con Next.js para controlar productos, pedidos, clientes e inventario de forma centralizada.",
    description:
      "Sistema administrativo para la gestión de productos, pedidos, clientes e inventario, centralizando procesos clave del negocio en una interfaz moderna y eficiente. El proyecto fue planteado con una estructura escalable, priorizando organización de datos, productividad operativa y claridad visual en la administración del sistema.",
    focus: "Operación comercial, inventario y productividad administrativa.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Supabase"],
    officialUrl: null
  }
] as const;

export const experiences = [
  {
    company: "Sermaluc",
    client: "Banco de Crédito e Inversiones (Chile)",
    role: "Senior Frontend Developer",
    period: "Feb 2024 - Actual",
    focus: "Modernización bancaria, liderazgo frontend y performance medible.",
    stack: ["React 18", "TypeScript", "React Query", "Jest", "React Testing Library"],
    impact:
      "Liderazgo frontend en entorno bancario, modernizando componentes legacy y elevando estándares de arquitectura, calidad y performance.",
    bullets: [
      "Lidero un equipo frontend de 3 a 5 desarrolladores con foco en arquitectura modular, revisiones obligatorias y criterios de entrega sostenibles.",
      "Migro componentes legacy hacia una base más desacoplada, preparada para escalar funcionalidades sin aumentar deuda técnica.",
      "Capacito al equipo en Clean Architecture, SOLID, React 18, hooks avanzados y React Query para homogeneizar prácticas técnicas.",
      "Trabajo sobre métricas LCP, CLS, FID y TTFB aplicando preloading, prefetch, memoización y virtualización cuando el flujo lo justifica.",
      "Coordino decisiones con UX/UI, backend y producto para balancear experiencia de usuario, seguridad, mantenibilidad y tiempos de negocio."
    ]
  },
  {
    company: "Tismart",
    client: "Izipay",
    role: "Senior Frontend Developer",
    period: "Ene 2023 - Ene 2024",
    focus: "Migración de ventas y pagos hacia React/Next con arquitectura por dominio.",
    stack: ["React", "Next.js", "TypeScript", "Sentry", "CloudWatch"],
    impact:
      "Migración estratégica de módulos críticos de ventas y pagos, con arquitectura por vertical slices y observabilidad para producción.",
    bullets: [
      "Lideré un squad de 4 desarrolladores durante la migración del módulo de ventas desde Vue + Nuxt hacia React + Next.js.",
      "Propuse una arquitectura basada en vertical slicing para separar responsabilidades, reducir acoplamiento y facilitar evolución por dominio.",
      "Reescribí módulos clave del sistema de pagos cuidando integración, consistencia visual, manejo de estado y experiencia operacional.",
      "Definí políticas de versionado, releases y criterios de viabilidad técnica para mejorar planificación y control de cambios.",
      "Impulsé integración de Sentry y CloudWatch junto con una propuesta de design system frontend para elevar soporte y mantenibilidad."
    ]
  },
  {
    company: "RPA Latam",
    client: "El Comercio",
    role: "Semi Senior Frontend Developer",
    period: "Dic 2021 - Dic 2022",
    focus: "Frontend de alto tráfico, SEO técnico y componentes reutilizables.",
    stack: ["React", "Next.js", "TypeScript", "REST API", "Lighthouse"],
    impact:
      "Frontend para medio digital de alto tráfico, optimizando rendimiento, SEO técnico y componentes reutilizables para páginas críticas.",
    bullets: [
      "Desarrollé y mantuve módulos clave en un entorno de alta exposición, cuidando estabilidad, tiempos de carga y compatibilidad responsive.",
      "Apliqué mejoras continuas de performance y SEO con Lighthouse, Core Web Vitals y análisis técnico de flujos críticos.",
      "Integré APIs REST y construí componentes reutilizables con React, Next.js y TypeScript para acelerar nuevas entregas.",
      "Refactoricé módulos con deuda técnica para mejorar legibilidad, separación de responsabilidades y capacidad de mantenimiento.",
      "Colaboré con UX/UI, backend, QA y marketing en landing pages de alto rendimiento orientadas a campañas y contenido."
    ]
  },
  {
    company: "Entelgy",
    client: "BBVA",
    role: "Semi Senior Frontend Developer",
    period: "Dic 2020 - Dic 2021",
    focus: "Integración bancaria con design system, APIs internas y autenticación corporativa.",
    stack: ["JavaScript", "Design System", "OAuth2", "Jest", "Cypress"],
    impact:
      "Integración frontend en ecosistema bancario corporativo, conectando cells, APIs internas, autenticación y orquestador de experiencias.",
    bullets: [
      "Implementé componentes con design system corporativo, cuidando consistencia visual y compatibilidad con lineamientos enterprise.",
      "Integré cells con APIs internas usando OAuth2, tokens y headers corporativos dentro de flujos con alta exigencia de seguridad.",
      "Cubri pruebas unitarias, integración y e2e con Jest, Testing Library y Cypress para validar navegación, estado y autenticación.",
      "Optimicé rendimiento de experiencias integradas dentro del orquestador, reduciendo fricción técnica en módulos compartidos.",
      "Trabajé la conexión entre UI, APIs REST, navegación y estado para mantener flujos bancarios consistentes y auditables."
    ]
  },
  {
    company: "AFP Integra",
    client: "AFP Integra",
    role: "Frontend Developer",
    period: "Mar 2022 - Ago 2022",
    focus: "Evolución mobile, factibilidad UX y migración de componentes modernos.",
    stack: ["React", "React Native", "Figma", "Testing", "UX"],
    impact:
      "Mejoras de experiencia y mantenimiento de producto móvil, conectando criterios de diseño, factibilidad técnica y calidad funcional.",
    bullets: [
      "Implementé nuevas funcionalidades y mejoras de experiencia junto a PM, copywriters y QA.",
      "Analicé diseños en Figma para anticipar restricciones técnicas y proponer ajustes viables sin perder intención de producto.",
      "Mantuve una app móvil con foco en estabilidad, claridad de flujos y consistencia visual.",
      "Migré componentes de clase hacia componentes funcionales para mejorar mantenibilidad y alineación con prácticas modernas."
    ]
  },
  {
    company: "Valtec Consultores",
    client: "Software factory / minería / ecommerce",
    role: "Frontend Developer",
    period: "May 2019 - Ene 2020",
    focus: "SaaS, ecommerce, design systems y separación UI-negocio.",
    stack: ["React", "Storybook", "Jest", "Stripe", "Izipay", "MySQL"],
    impact:
      "Base técnica temprana en productos SaaS, ecommerce y software factory, con foco en design systems, testing y separación UI-negocio.",
    bullets: [
      "Construí interfaces para productos SaaS del sector minería y ecommerce con integraciones de pago mediante Stripe e Izipay.",
      "Participé en la implementación de un design system documentado con Storybook para estandarizar componentes reutilizables.",
      "Apliqué pruebas unitarias con Jest y React Testing Library en módulos clave para elevar confianza de entrega.",
      "Separé lógica de negocio y UI para reducir acoplamiento y facilitar mantenimiento en múltiples proyectos.",
      "Lideré iniciativas dentro de la software factory relacionadas con SEO, rendimiento de carga y consistencia frontend."
    ]
  }
] as const;

export const caseStudies = [
  {
    area: "Modernización",
    title: "Migración Vue/Nuxt a React/Next",
    context: "Izipay necesitaba evolucionar módulos de ventas y pagos sin detener operación ni perder trazabilidad de releases.",
    problem:
      "El stack anterior limitaba velocidad de cambio, mantenibilidad y estandarización entre módulos críticos.",
    intervention:
      "Lideré migración progresiva a React + Next.js, propuse vertical slicing, definí criterios de release y reescribí módulos clave.",
    result:
      "Base frontend más modular, mejor preparada para escalar funcionalidades, controlar cambios y reducir fricción entre equipos."
  },
  {
    area: "Performance",
    title: "Performance y Core Web Vitals",
    context: "BCI y El Comercio requerían experiencias rápidas, medibles y estables en contextos de banca y alto tráfico.",
    problem:
      "Flujos críticos podían degradarse por carga inicial, layout shifts, consultas costosas o componentes poco eficientes.",
    intervention:
      "Apliqué medición con Lighthouse y Core Web Vitals, optimización de LCP, CLS, FID y TTFB, preloading, prefetch, memoización y virtualización según necesidad.",
    result:
      "Mejor performance percibida, experiencias más estables y una cultura de decisiones frontend basada en medición técnica."
  },
  {
    area: "Leadership",
    title: "Liderazgo de squad frontend",
    context: "Equipos de BCI e Izipay necesitaban entregar producto mientras elevaban calidad técnica y consistencia de desarrollo.",
    problem:
      "Sin estándares compartidos, el crecimiento de módulos podía aumentar deuda técnica, diferencias de criterio y errores repetidos.",
    intervention:
      "Guié squads de 3 a 5 desarrolladores con code reviews obligatorios, pair programming, capacitación y criterios de arquitectura.",
    result:
      "Equipos con mejor alineación técnica, entregas más predecibles y mayor autonomía para sostener producto en producción."
  },
  {
    area: "Architecture",
    title: "Arquitectura y componentes escalables",
    context: "Productos enterprise requerían UI reutilizable, integración consistente con APIs y separación clara de responsabilidades.",
    problem:
      "Componentes acoplados a lógica de negocio complicaban testing, evolución y reutilización en flujos similares.",
    intervention:
      "Estandaricé capas, patrones de composición, componentes reutilizables, design systems y separación entre UI, dominio e integración.",
    result:
      "Código más mantenible, menor costo de cambio y una base más clara para squads, QA y producto."
  }
] as const;

export const strengths = [
  {
    title: "Migraciones complejas",
    description: "Evolución progresiva de sistemas legacy hacia stacks modernos sin frenar roadmap."
  },
  {
    title: "Liderazgo técnico",
    description: "Mentoring, code reviews, pair programming y estándares compartidos para squads frontend."
  },
  {
    title: "Performance web",
    description: "Optimización de carga, render, interacción y experiencia percibida basada en medición."
  },
  {
    title: "SEO técnico",
    description: "Buenas prácticas para indexación, semántica, metadata, performance y contenido estructurado."
  },
  {
    title: "Clean Architecture",
    description: "Separación de responsabilidades, vertical slicing y componentes preparados para escalar."
  },
  {
    title: "Testing",
    description: "Cobertura con Jest, React Testing Library y Cypress en flujos críticos."
  },
  {
    title: "Escalabilidad",
    description: "Diseño de bases frontend mantenibles para productos enterprise y equipos en crecimiento."
  },
  {
    title: "Trabajo cross-functional",
    description: "Colaboración efectiva con UX/UI, backend, producto, QA, marketing y stakeholders."
  }
] as const;

export const education = {
  institution: "Universidad Católica de Santa María",
  degree: "Bachiller en Ingeniería de Sistemas",
  period: "2015 - 2020",
  location: "Arequipa, Perú"
} as const;
